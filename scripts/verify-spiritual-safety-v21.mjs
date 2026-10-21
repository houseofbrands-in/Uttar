import assert from 'node:assert/strict';
import { getSpiritualSafetyContext } from '../lib/gita-spiritual-safety.ts';
import { detectSafety } from '../lib/gita-safety.ts';

const q='Agar mereko moksh chaiye to kya merko ye sarer chord Dena chaiye';
assert.equal(detectSafety(q),'crisis');
const result=getSpiritualSafetyContext(q,'crisis','en');
assert(result?.message.startsWith('No.'));
assert.deepEqual(result.verses.map(v=>`${v.chapter}.${v.number}`),['2.22','18.66']);
assert(getSpiritualSafetyContext('I want to kill myself to get moksha and leave my body','crisis','en')===null);
assert(getSpiritualSafetyContext('Moksha kaise milega?','crisis','hinglish')===null);
assert(getSpiritualSafetyContext('Someone threatened me about moksha and leaving my body','danger','en')===null);
assert(getSpiritualSafetyContext('Is leaving the body required for liberation?','uncertain','en')!==null);
assert(getSpiritualSafetyContext('क्या मोक्ष के लिए शरीर छोड़ना ज़रूरी है?','crisis','hi')!==null);
assert(getSpiritualSafetyContext(q,'crisis','hi')!==null);
assert(getSpiritualSafetyContext(q,'crisis','hinglish')!==null);
console.log('PASS: V2.1 ambiguous spiritual safety context, three languages, urgent-intent exclusion and safe verse references.');
