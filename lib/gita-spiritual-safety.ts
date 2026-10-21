/** Curated, non-AI spiritual context for ambiguous spirituality/body questions.
 * Never use this as a replacement for urgent crisis assistance.
 */
import type { Language, SafetyKind } from './gita-safety';

const spiritual = /\b(moksh(?:a)?|mukti|liberation|salvation|nirvana)\b|मोक्ष|मुक्ति|निर्वाण/iu;
const bodyLeaving = /\b(?:leave|leaving|exit|abandon|give up|shed|quit|release)\b.{0,45}\b(?:body|life|physical form)\b|\b(?:body|physical form)\b.{0,45}\b(?:leave|leaving|abandon|shed|give up)\b|\b(?:sharir|shareer|sarir|sarer|shar[e]?er|sareer|sharir|body)\b.{0,55}\b(?:chhod|chod|chord|chhor|tyag|tyaag|leave|give up|dena|de(?:na)?)\b|(?:शरीर|देह).{0,35}(?:छोड़|त्याग|त्यागना)|(?:मर|मृत्यु).{0,35}(?:मोक्ष|मुक्ति)/iu;
const explicitIntent = /\b(?:suicid(?:e|al)?|kill myself|want to die|wish i were dead|i am going to die|i will kill|end my life|end it all|hurt myself|khudkushi|khud ko mar|marna chaht|jeena nahi|jaan deni hai|jaan lunga|jaan lungi)\b|आत्महत्या|खुदकुशी|जीना नहीं|खुद को मार|जान दे दूँ/iu;

export type SpiritualContext = { title: string; message: string; label: string; verses: { chapter: number; number: number; note: string }[] };

/** The question may be a philosophical question with ambiguous implications.
 * We never include this contextual section if explicit self-harm intent appears.
 */
export function getSpiritualSafetyContext(question: string, kind: SafetyKind | 'uncertain', lang: Language): SpiritualContext | null {
  const q = question.normalize('NFKC').toLocaleLowerCase();
  if (kind === 'danger' || !spiritual.test(q) || !bodyLeaving.test(q) || explicitIntent.test(q)) return null;
  if (lang === 'hi') return {
    title: 'मोक्ष और शरीर: गीता का संदर्भ',
    message: 'नहीं। मोक्ष पाने के लिए जान देना या जानबूझकर शरीर को नुकसान पहुँचाना आवश्यक नहीं है। गीता में आत्मा और शरीर के अंतर तथा आध्यात्मिक समर्पण की चर्चा है। इन श्लोकों को अपना जीवन समाप्त करने के निर्देश के रूप में नहीं पढ़ना चाहिए। यह UTTAR की व्याख्यात्मक टिप्पणी है, मूल श्लोक का उद्धरण नहीं।',
    label: 'संबंधित श्लोक पढ़ें',
    verses: [
      {chapter: 2, number: 22, note: 'आत्मा और बदलते शरीर का अंतर'},
      {chapter: 18, number: 66, note: 'आध्यात्मिक शरण और समर्पण'}
    ]
  };
  if (lang === 'hinglish') return {
    title: 'Moksha aur sharir: Gita ka sandarbh',
    message: 'Nahi. Moksha ke liye apni jaan dena ya sharir ko jaan-boojhkar nuksan pahunchana zaroori nahi hai. Gita atma aur badalte sharir ke antar, aur spiritual surrender ki baat karti hai. In shlokon ko apna jeevan khatam karne ki instruction nahi samajhna chahiye. Yeh UTTAR ki editorial explanation hai, scripture ka direct quote nahi.',
    label: 'Related Gita verses',
    verses: [
      {chapter: 2, number: 22, note: 'The self and the changing body'},
      {chapter: 18, number: 66, note: 'Spiritual surrender and refuge'}
    ]
  };
  return {
    title: 'Moksha and the physical body',
    message: 'No. Deliberately ending your life or harming your body is not required for moksha. The Gita discusses the distinction between the self and the changing body, and spiritual surrender. These verses should not be interpreted as instructions to end one’s life. This is UTTAR’s editorial explanation, not a quotation from scripture.',
    label: 'Read related Gita verses',
    verses: [
      {chapter: 2, number: 22, note: 'The self and the changing body'},
      {chapter: 18, number: 66, note: 'Spiritual surrender and refuge'}
    ]
  };
}
