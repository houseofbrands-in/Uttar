/** Lightweight deterministic language routing; no network or user data storage. */
export type GuidanceLanguage = 'en' | 'hi' | 'hinglish';

// Deliberately broad function-word cues, not a fixed topic vocabulary.
// Recognises language style; the AI interprets the underlying meaning.
const hindiFunctionWords = new Set(`agar ager mereko merko mujhko mujhe muje main mai mein me mera meri mere tum tumhe tumko aap apko aapko hum hamare humko kya kyu kyun kyon kaise kab kahan kaha kis kisko kiska kiski kise kiske kiske ki ke ka ko se par pe mein hai hain ho hoon hun hu tha thi the nahi nai nahin na mat bhi hi to toh wo woh ye yeh yaha yahaan waha wahaan karu karun kare karen karna karo karta karti karte chahiye chaiye chahie chahye chahta chahti sakta sakti sakte hoga hogi hote raha rahi rahe do de dena lena milega milegi milta milti milti padega lagega lagta lagti kyunki phir fir batao bataiye mujse kuch kuchh sab ab kabhi koi koyi apni apna apne har mujhme nahi iss isse usse uska unka` .split(/\s+/));
const commonSpokenWords = new Set(`dil dimag dimaag mann man zindagi zindgi sharir shareer sarer moksh moksha mukti darr dar tension pareshan pareshaan samajh samjh sahi galat dukh sukh gussa dost dosti rishta rishtay pyar pyaar shaadi shadi naukri kaam paisa paise bhai behen dost ghar kyu kya` .split(/\s+/));

export function detectInputLanguage(text: string): GuidanceLanguage {
  const devanagari = (text.match(/[\u0900-\u097F]/g) || []).length;
  const latin = (text.match(/[A-Za-z]/g) || []).length;
  if (devanagari >= 5 && devanagari >= latin * 0.35) return 'hi';
  const words = (text.toLowerCase().normalize('NFKC').match(/[a-z]+/g) || []);
  const functionHits = words.filter(w => hindiFunctionWords.has(w)).length;
  const spokenHits = words.filter(w => commonSpokenWords.has(w)).length;
  // 2 grammatical hints, or one grammatical plus one distinctive spoken word.
  if (functionHits >= 2 || (functionHits >= 1 && spokenHits >= 1)) return 'hinglish';
  return 'en';
}
export function resolveLanguage(question: string, requested: unknown): GuidanceLanguage {
  if (requested === 'en' || requested === 'hi' || requested === 'hinglish') return requested;
  return detectInputLanguage(question);
}
