/**
 * Run before building UTTAR. Fetch openly licensed dataset, validate, and produce
 * a self-contained corpus (not fetched in the user's browser).
 * Chapter 13 source includes an extra introductory Arjuna verse and numbers to 35;
 * the standard 700-verse convention omits that preface and renumbers 13.2–13.35
 * to 13.1–13.34. SOURCE-GITA.md documents the editorial convention.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(import.meta.dirname, '..');
const output = path.join(root, 'data', 'gita-corpus.json');
const EXPECTED = [47,72,43,42,29,47,30,28,34,42,55,20,34,27,20,24,28,78];
const sourceBase = 'https://raw.githubusercontent.com/AdiyogiArts/gita-json/main/';
const mirror = 'https://cdn.jsdelivr.net/gh/AdiyogiArts/gita-json@main/';

async function fetchJson(file) {
  let lastError;
  for(const url of [sourceBase+file, mirror+file]) {
    for(let attempt=0; attempt<2; attempt++) {
      try {
        const r = await fetch(url, {signal: AbortSignal.timeout(30000), headers: {'User-Agent':'UTTAR-scripture-import/1.0'}});
        if (!r.ok) throw new Error(`${r.status} ${url}`);
        const text = await r.text();
        const json = JSON.parse(text);
        console.log(`Loaded ${file} (${Object.keys(json).length} records) from ${url}`);
        return {json, hash:crypto.createHash('sha256').update(text).digest('hex')};
      } catch(e) {lastError=e;console.warn(`Could not download ${file}: ${String(e).slice(0,170)}`)}
    }
  }
  throw new Error(`Cannot download ${file}; refusing to build an incomplete scripture library. ${lastError}`);
}

const [{json:base, hash:baseHash}, {json:english,hash:enHash}, {json:hindi,hash:hiHash}] = await Promise.all(['base.json','en.json','hi.json'].map(fetchJson));
const verses=[];
for(let ch=1;ch<=18;ch++) {
  for(let no=1;no<=EXPECTED[ch-1];no++) {
    const originalNumber = ch===13 ? no+1 : no;
    const key=`${ch}-${originalNumber}`;
    const b=base[key],en=english[key],hi=hindi[key];
    if(!b || !b.sanskrit?.trim() || !en?.translation?.trim() || !hi?.translation?.trim()) {
      throw new Error(`Incomplete Gita dataset at original key ${key} (chapter ${ch}, verse ${no}).`);
    }
    verses.push({
      chapter:ch, verse:no, originalKey:key,
      sanskrit:b.sanskrit.trim(), transliteration:b.transliteration?.trim()||'',
      chapterHindi:b.chapterName||'', chapterEnglish:b.chapterNameTranslation||'',
      translation:{en:en.translation.trim(),hi:hi.translation.trim()},
    });
  }
}
if(verses.length!==700) throw new Error(`Expected 700 verses, got ${verses.length}`);
const corpus={source:{title:'Adiyogi Arts Bhagavad Gita Dataset',url:'https://github.com/AdiyogiArts/gita-json',license:'MIT',hashes:{base:baseHash,en:enHash,hi:hiHash},chapter13:'Source 13.1 is introductory Arjuna question. Standard 700 convention maps source 13.2–13.35 to verses 13.1–13.34.'},chapters:EXPECTED.map((count,i)=>({number:i+1,count,nameEnglish:verses.find(v=>v.chapter===i+1)?.chapterEnglish||'',nameHindi:verses.find(v=>v.chapter===i+1)?.chapterHindi||''})),verses};
await fs.mkdir(path.dirname(output),{recursive:true});
await fs.writeFile(output,JSON.stringify(corpus,null,0)+'\n','utf8');
console.log(`Verified ${corpus.chapters.length} chapters and ${verses.length} bilingual Sanskrit verses. Wrote ${output}`);
