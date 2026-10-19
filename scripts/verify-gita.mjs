import fs from 'node:fs';
const data=JSON.parse(fs.readFileSync(new URL('../data/gita-corpus.json',import.meta.url),'utf8'));
const counts=[47,72,43,42,29,47,30,28,34,42,55,20,34,27,20,24,28,78];
const assert=(ok,message)=>{if(!ok)throw new Error(message)};
assert(data.verses.length===700,'Verse count must be 700');
assert(data.chapters.length===18,'Must have 18 chapters');
const ids=new Set();
for(const v of data.verses){const id=`${v.chapter}.${v.verse}`;assert(!ids.has(id),`duplicate ${id}`);ids.add(id);assert(v.sanskrit?.trim(),`missing Sanskrit ${id}`);assert(v.translation?.en?.trim()&&v.translation?.hi?.trim(),`missing translations ${id}`)}
for(let i=1;i<=18;i++){assert(data.verses.filter(v=>v.chapter===i).length===counts[i-1],`Chapter ${i} count wrong`);for(let j=1;j<=counts[i-1];j++)assert(ids.has(`${i}.${j}`),`Missing verse ${i}.${j}`)}
assert(data.verses.find(v=>v.chapter===13&&v.verse===1).originalKey==='13-2','Chapter 13 numbering was not normalized');
console.log('PASS: 18 chapters, 700 unique consecutive verses, Sanskrit + English + Hindi, Chapter 13 standard numbering');
