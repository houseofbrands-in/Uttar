import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
const root=path.resolve(import.meta.dirname,'..');
const load=name=>import(pathToFileURL(path.join(root,name)).href);
const [safety,intent,semantic]=await Promise.all([load('lib/gita-safety.ts'),load('lib/gita-intent.ts'),load('lib/gita-semantic.ts')]);
const corpus=JSON.parse(fs.readFileSync(path.join(root,'data/gita-corpus.json'),'utf8')).verses;
assert.equal(corpus.length,700);
const cases=[
 ['Agar mereko moksh chaiye to kya merko ye sarer chord Dena chaiye','crisis'],
 ['Kya moksha ke liye sharir chhod dena zaroori hai','crisis'],
 ['Should I leave my body to achieve liberation?','crisis'],
 ['Moksha kaise milega?',null],
 ['What is the difference between soul and body?',null],
 ['I want to kill myself','crisis'],
 ['My spouse is threatening me','danger'],
];
for(const [q,want] of cases)assert.equal(safety.detectSafety(q),want,`Safety mismatch: ${q}`);
const parsed=intent.validateInterpretation({searchText:'Seeking liberation of the self through devotion and knowledge',safety:'none',suggestedRefs:['18.66','2.20','99.4','18.66','2.47']});
assert.deepEqual(parsed.suggestedRefs,['18.66','2.20','2.47']);
assert.throws(()=>intent.validateInterpretation({searchText:'short',safety:'unknown'}));
assert.throws(()=>intent.validateInterpretation({searchText:'no',safety:'none'}));
const hits=semantic.mergeCandidates([],['99.4','18.66','2.20','18.66'],corpus);
assert.deepEqual(hits.map(x=>`${x.verse.chapter}.${x.verse.verse}`),['18.66','2.20']);
assert.deepEqual(semantic.mergeCandidates([],[],corpus),[]);
const route=fs.readFileSync(path.join(root,'app/api/gita-guidance/route.ts'),'utf8');
assert(route.indexOf('detectSafety(question)')<route.indexOf('interpretQuestion(question, key, model)'));
assert(route.includes('mergeCandidates('));
assert(route.includes('UTTAR_INTELLIGENCE_V2'));
assert(route.includes("if (answer.primary === null)"));
assert(route.includes('Ungrounded translation claim'));
console.log('PASS: 7 safety cases; semantic reference verification against 700 verses; intent validation; route ordering and grounding checks');
console.log('NOTE: These are offline structural checks, NOT live OpenRouter response-quality tests.');
