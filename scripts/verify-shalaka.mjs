import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const content = readFileSync(new URL('../app/ram-shalaka/data.ts', import.meta.url), 'utf8');
const grid = content.match(/export const gridRows = \[([\s\S]*?)\] as const;/)?.[1];
assert.ok(grid, 'Missing grid');
const rows = [...grid.matchAll(/'([^']+)'/g)].map((match) => match[1].split(' '));
assert.equal(rows.length, 15);
rows.forEach((row) => assert.equal(row.length, 15));
const cells = rows.flat();
assert.equal(cells.length, 225);
// These are the 25-cell sequences obtained from the printed grid, exactly as digitized.
// The printed RESULT text differs slightly at phases 0, 4 and 7 in this edition;
// see SOURCE-AUDIT.md. Do not silently change these letters to make tests pass.
const expected = [
 'सुनुसियसुत्यअसीसहमारीपूजिहिंमनकामनातुम्हारी',
 'प्रबिसिनगरकीजेसबकाजाहृदयँराखिकोसलपुरराजा',
 'उघरहिंअंतनहोइनिबाहूकालनेमिजिमिरावनराहू',
 'बिधिबससुजनकुसंगतपरहींफनिमनिसमनिजगुनअनुसरहीं',
 'होइहिसोइजोरामरचिराखाकोकरितर्केबढ़ावैसाखा',
 'मुदमंगलमयसंतसमाजूजोजगजंगमतीरथराजू',
 'गरलसुधारिपुकरहिंमिताईगोपदसिंधुअनलसितलाई',
 'बरुनकुबेरसुरेससमीरारनसन्मुखथरिकाहुँनधीरा',
 'सुफलमनोरथहोहुँतुम्हारेरामुलखनुसुनिभएसुखारे',
];
const baseSequences = Array.from({length:9},(_,phase)=>Array.from({length:25},(_,step)=>cells[(phase+9*step)%225]));
for(let phase=0; phase<9; phase++) {
 assert.equal(baseSequences[phase].join(''),expected[phase],`Unexpected source transcription at phase ${phase}`);
}
for(let start=0; start<225; start++){
 const path = Array.from({length:25},(_,step)=>(start+9*step)%225);
 assert.equal(new Set(path).size,25);
 assert.equal(path.at(-1),(start+216)%225);
 const phase = start%9;
 const offset = Math.floor(start/9);
 const rotated = [...baseSequences[phase].slice(offset),...baseSequences[phase].slice(0,offset)];
 assert.deepEqual(path.map((index)=>cells[index]),rotated,`Unexpected grid rotation for cell ${start+1}`);
}
const resultBlock = content.split('export const answers: ShalakaAnswer[] = [')[1].split('];')[0];
assert.equal((resultBlock.match(/sourcePage:/g)||[]).length,9,'Nine annotated outcomes required');
assert.equal((resultBlock.match(/traditionalFruit:/g)||[]).length,9,'Nine printed fruits required');
console.log('PASS: 15×15 grid, all 225 selections, nine outcomes, recorded printed-grid variants.');
