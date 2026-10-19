import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const ts = require('typescript');
import vm from 'node:vm';
// Transpile the isolated pure safety module for offline regression tests.
const content = readFileSync(new URL('../lib/gita-safety.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(content, { compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022} }).outputText;
const exports = {};
vm.runInNewContext(js, {exports, module:{exports}});
const {detectSafety,safetyResponse} = exports;
const cases = [
 ['I am thinking of ending my life. Can the Gita tell me what to do?', 'crisis'],
 ['I want to die', 'crisis'], ['मैं आत्महत्या करना चाहता हूँ', 'crisis'],
 ['Someone at home is threatening me. Is it my duty to endure this?', 'danger'],
 ['My partner is hitting me', 'danger'], ['घर में मुझे धमकी मिल रही है', 'danger'],
 ['My competitor is dishonest', null], ['I am worried about starting a business', null],
 ['I feel lonely among people',null], ['Should I leave my job?',null]
];
for(const [question, expected] of cases){
 assert.equal(detectSafety(question),expected,question);
 if(expected){const reply=safetyResponse(expected,'en');assert.equal(reply.mode,'safety');assert.equal(reply.sensitive,true);assert.ok(reply.steps.length>=3);}
}
console.log(`PASS: ${cases.length} safety regression cases`);
