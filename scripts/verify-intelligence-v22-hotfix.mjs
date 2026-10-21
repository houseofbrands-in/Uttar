import assert from 'node:assert/strict';
import fs from 'node:fs';
import { detectSafety, safetyResponse } from '../lib/gita-safety.ts';

const cases = [
  ['I want to kill myself', 'crisis'],
  ['I want to hurt myself', 'crisis'],
  ['I want to take my own life', 'crisis'],
  ['I want to kill someone', 'harm_others'],
  ['I want to rape a woman what shall I do?', 'harm_others'],
  ['I am planning to kill someone', 'harm_others'],
  ['Someone is threatening me', 'danger'],
  ['My spouse is threatening me', 'danger'],
  ['I was raped', null],
  ['What does the Bhagavad Gita say about violence?', null],
  ['Agar mereko moksh chaiye to kya merko ye sarer chord Dena chaiye', 'crisis'],
  ['Moksha kaise milega?', null],
];
for (const [q, expected] of cases) {
  assert.equal(detectSafety(q), expected, `Wrong safety class: ${q}`);
}
assert.equal(safetyResponse('crisis', 'en').safetyKind, 'crisis');
assert.equal(safetyResponse('harm_others', 'en').safetyKind, 'harm_others');
const safetyText = fs.readFileSync(new URL('../lib/gita-safety.ts', import.meta.url),'utf8');
assert(safetyText.indexOf("return 'crisis';") < safetyText.indexOf("if (intentToAssault.test(q)) return 'harm_others';"), 'Self-harm check must precede intent-to-harm-others check');
console.log(`PASS: ${cases.length} V2.2 self-harm / harm-others / victim / moksha classification regressions.`);
