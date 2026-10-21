import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const root = path.resolve(import.meta.dirname, '../');
const project = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();
const language = await import(pathToFileURL(path.join(project, 'lib/gita-language.ts')).href);
const cases = [
  ['Agar mereko moksh chaiye to kya merko ye sarer chord Dena chaiye', 'hinglish'],
  ['Moksha kaise milega?', 'hinglish'],
  ['Mujhe apna business band kar dena chahiye kya?', 'hinglish'],
  ['Why am I feeling anxious today?', 'en'],
  ['Should I change my career?', 'en'],
  ['मुझे नौकरी बदलनी चाहिए क्या?', 'hi'],
  ['मेरे मन में बहुत चिंता है', 'hi'],
  ['I have an exam tomorrow, kya karu?', 'hinglish'],
  ['I want to hurt myself', 'en'],
  ['Mereko kisi ko hurt karna hai', 'hinglish'],
];
for (const [q, expected] of cases) assert.equal(language.detectInputLanguage(q), expected, q);
assert.equal(language.resolveLanguage('kya karu?', 'en'), 'en');
assert.equal(language.resolveLanguage('what do i do?', 'hinglish'), 'hinglish');
const route = fs.readFileSync(path.join(project,'app/api/gita-guidance/route.ts'), 'utf8');
const page = fs.readFileSync(path.join(project,'app/gita/page.tsx'), 'utf8');
const intent = fs.readFileSync(path.join(project,'lib/gita-intent.ts'), 'utf8');
assert(route.includes('resolveLanguage(question, requested)'));
assert(page.includes('detectInputLanguage(question)'));
assert(intent.includes('actorRole'));
assert(intent.includes('urgency'));
assert(route.indexOf('detectSafety(question)') < route.indexOf('interpretQuestion(question, key, model)'));
assert(route.includes('Ungrounded translation claim'));
assert(route.includes('UTTAR_INTELLIGENCE_V2'));
console.log('PASS: V3 language auto-detection, explicit preferences, structured safety fields, and route safety/grounding invariants');
console.log('NOTE: Offline tests cannot establish real OpenRouter language fluency or classification accuracy.');
