/**
 * Source: Gita Press, Shri Ramcharitmanas, user-provided 1054-page PDF,
 * PDF page 1052 (printed page 1053, see note in README).
 * Cells transcribed in visual row-major order, retaining standalone vowel marks
 * and conjuncts. The printed example and eight numbered answers are on the
 * following two PDF pages. Avoid "normalizing" source cells without a review.
 */
export const gridRows = [
  'सु प्र उ बि हो मु ग ब सु नु बि घ धि इ द',
  'र रु फ सि सि रहिं बस हि मं ल न ल य न अं',
  'सुज सो ग सु कु म सु ग त न इ ल धा बे नो',
  'त्य र न कु जो म रि र र अ की हो सं रा य',
  'पु सु थ सी जे इ ग म सं क रे हो स स नि',
  'त र त र स हुँ ह ब ब प चि स हिं स तु',
  'म का ा र र म मि मी म्हा ा जा हू हीं ा ा',
  'ता रा रे री हृ का फ खा जू ई र रा पू द ल',
  'नि को जो गो न मु जि यँ ने मनि क ज प स ल',
  'हिं रा मि स रि ग द न्मु ख म खि जि म त जं',
  'सिं ख नु न को मि निज र्के ग धु थ सु का स र',
  'गु ब म अ रि नि म ल ा न ढ़ ती न क भ',
  'ना पु व अ ा र ल ा ए तु र न नु वै थ',
  'सि हुँ सु म्ह रा र स स र त न ख ा ज ा',
  'र ा ा ला धी ा री ा हू हीं खा जू ई रा रे',
] as const;

export const cells = gridRows.flatMap((row) => row.split(' '));
if (gridRows.length !== 15 || cells.length !== 225 || gridRows.some((r) => r.split(' ').length !== 15)) {
  throw new Error('Ram Shalaka grid must have exactly 15 rows of 15 aksharas.');
}

export type Language = 'en' | 'hi';
export type Guidance = { en: string; hi: string };
export type ShalakaAnswer = {
  id: number;
  kanda: string;
  line: string;
  full: string;
  context: Guidance;
  meaning: Guidance;
  reflection: Guidance;
  nextStep: Guidance;
  traditionalFruit: Guidance;
  sourcePage: number;
};

/** Answer positions correspond to the FIRST NINE cells, then repeat every 9 cells. */
export const answers: ShalakaAnswer[] = [
  {
    id: 1, kanda: 'बालकाण्ड',
    line: 'सुनु सिय सत्य असीस हमारी। पूजिहि मन कामना तुम्हारी॥',
    full: 'सुनु सिय सत्य असीस हमारी। पूजिहि मन कामना तुम्हारी॥ नारद बचन सदा सुचि साचा। सो बरु मिलिहि जाहिं मनु राचा॥',
    context: { en: 'Gauri offers Sita a blessing after her prayer. The moment emphasizes sincerity, hope, and trust.', hi: 'गौरी माता सीता जी को उनके पूजन के बाद आशीर्वाद देती हैं। इस प्रसंग में सच्चाई, आशा और विश्वास का भाव है।' },
    meaning: { en: 'May your heartfelt intention be blessed. Traditionally read as a favorable sign, this line can inspire hopeful and sincere action.', hi: 'आपकी सच्ची मनोकामना को आशीष मिले। परंपरा में इसे शुभ संकेत माना जाता है; इसे आशा और सच्चे प्रयास की प्रेरणा के रूप में पढ़ें।' },
    reflection: { en: 'Is your intention clear, kind, and aligned with what truly matters?', hi: 'क्या आपकी इच्छा स्पष्ट, सद्भावपूर्ण और आपके मूल्यों के अनुरूप है?' },
    traditionalFruit: { en: 'The question is favorable; the book indicates success.', hi: 'प्रश्न उत्तम है; कार्य सिद्ध होगा।' },
    sourcePage: 1053,
    nextStep: { en: 'Write your intention in one sentence and take a constructive first step.', hi: 'अपनी इच्छा एक वाक्य में लिखें और उसके लिए एक सकारात्मक कदम उठाएँ।' },
  },
  {
    id: 2, kanda: 'सुन्दरकाण्ड',
    line: 'प्रबिसि नगर कीजे सब काजा। हृदयँ राखि कोसलपुर राजा॥',
    full: 'प्रबिसि नगर कीजे सब काजा। हृदयँ राखि कोसलपुर राजा॥ गरल सुधा रिपु करहिं मिताई। गोपद सिंधु अनल सितलाई॥',
    context: { en: 'Hanuman is encouraged as he enters Lanka in service of Rama. The teaching centers on courage and remembrance.', hi: 'हनुमान जी लंका में प्रवेश करते हैं। प्रसंग में श्रीराम के स्मरण के साथ साहसपूर्वक कार्य करने की प्रेरणा है।' },
    meaning: { en: 'Carry your values in your heart as you begin. Traditionally an encouraging sign for undertaking a task.', hi: 'कार्य आरम्भ करते समय अपने आदर्शों को हृदय में रखें। परंपरा में इसे कार्य शुरू करने का उत्साहवर्धक संकेत माना जाता है।' },
    reflection: { en: 'What action have you been delaying because of fear?', hi: 'भय के कारण आप कौन सा आवश्यक काम टाल रहे हैं?' },
    traditionalFruit: { en: 'Begin with remembrance of God; the book indicates success.', hi: 'भगवान् का स्मरण करके कार्य आरम्भ करो; सफलता मिलेगी।' },
    sourcePage: 1054,
    nextStep: { en: 'Break the task into one small, achievable action today.', hi: 'आज उस कार्य को एक छोटे और संभव कदम में बाँटकर शुरू करें।' },
  },
  {
    id: 3, kanda: 'बालकाण्ड',
    line: 'उघरहिं अंत न होइ निबाहू। कालनेमि जिमि रावन राहू॥',
    full: 'लखि सुबेष जग बंचक जेऊ। बेष प्रताप पूजिअहिं तेऊ॥ उघरहिं अंत न होइ निबाहू। कालनेमि जिमि रावन राहू॥',
    context: { en: 'The Manas warns that false appearances cannot remain hidden forever, using figures known for deception.', hi: 'यह प्रसंग चेतावनी देता है कि छल और दिखावा अंततः छिपे नहीं रह सकते।' },
    meaning: { en: 'Pause and examine appearances carefully. Traditional readings urge caution rather than a rushed decision.', hi: 'रुककर परिस्थिति की सच्चाई जाँचें। परंपरागत अर्थ जल्दबाज़ी से बचकर सावधानी अपनाने को कहता है।' },
    reflection: { en: 'Is there an assumption, promise, or hidden risk you have not verified?', hi: 'क्या कोई दावा, वादा या जोखिम है जिसकी आपने पुष्टि नहीं की?' },
    traditionalFruit: { en: 'The book warns that this undertaking may not be beneficial and success is doubtful.', hi: 'इस कार्य में भलाई नहीं है; सफलता में सन्देह है।' },
    sourcePage: 1054,
    nextStep: { en: 'Verify one important fact before making the next commitment.', hi: 'अगला निर्णय लेने से पहले एक महत्वपूर्ण तथ्य की जाँच करें।' },
  },
  {
    id: 4, kanda: 'बालकाण्ड',
    line: 'बिधि बस सुजन कुसंगत परहीं। फनि मनि सम निज गुन अनुसरहीं॥',
    full: 'सठ सुधरहिं सतसंगति पाई। पारस परस कुधात सुहाई॥ बिधि बस सुजन कुसंगत परहीं। फनि मनि सम निज गुन अनुसरहीं॥',
    context: { en: 'The passage contrasts good company with harmful company and reflects on the strength of one’s character.', hi: 'इस चौपाई में सत्संग और कुसंग के प्रभाव तथा व्यक्ति के स्वभाव की दृढ़ता की चर्चा है।' },
    meaning: { en: 'Your environment influences your choices. Be mindful of company that draws you away from your values.', hi: 'संगति हमारे निर्णयों को प्रभावित करती है। ऐसी संगति से सावधान रहें जो आपको अपने मूल्यों से दूर करे।' },
    reflection: { en: 'Who or what is influencing this decision?', hi: 'इस निर्णय पर किस व्यक्ति या वातावरण का प्रभाव पड़ रहा है?' },
    traditionalFruit: { en: 'Avoid harmful company; the book expresses doubt about completion.', hi: 'खोटे मनुष्यों का संग छोड़ दो; कार्य पूर्ण होने में सन्देह है।' },
    sourcePage: 1054,
    nextStep: { en: 'Seek perspective from someone trustworthy and grounded.', hi: 'किसी विश्वसनीय और विवेकशील व्यक्ति की राय लें।' },
  },
  {
    id: 5, kanda: 'बालकाण्ड',
    line: 'होइहि सोइ जो राम रचि राखा। को करि तर्क बढ़ावै साखा॥',
    full: 'होइहि सोइ जो राम रचि राखा। को करि तर्क बढ़ावै साखा॥ अस कहि लगे जपन हरिनामा। गईं सती जहँ प्रभु सुखधामा॥',
    context: { en: 'In the Shiva–Sati episode, the line reflects acceptance of what cannot be controlled.', hi: 'शिव–सती प्रसंग में यह पंक्ति उन बातों को स्वीकारने की ओर संकेत करती है जो हमारे नियंत्रण में नहीं हैं।' },
    meaning: { en: 'Do what is yours to do; release the need to control every outcome. This is about humility, not giving up responsibility.', hi: 'जो आपके हाथ में है, उसे करें; हर परिणाम पर नियंत्रण की ज़िद छोड़ें। यह जिम्मेदारी छोड़ने की नहीं, विनम्रता की सीख है।' },
    reflection: { en: 'Which part of this situation can you actually influence?', hi: 'इस परिस्थिति का कौन सा हिस्सा वास्तव में आपके नियंत्रण में है?' },
    traditionalFruit: { en: 'The book describes the outcome as uncertain and advises leaving it to God.', hi: 'कार्य होने में सन्देह है; उसे भगवान् पर छोड़ देना श्रेयस्कर है।' },
    sourcePage: 1053,
    nextStep: { en: 'List what you can control and what you need to accept.', hi: 'लिखें कि आप क्या बदल सकते हैं और क्या स्वीकारना होगा।' },
  },
  {
    id: 6, kanda: 'बालकाण्ड',
    line: 'मुद मंगलमय संत समाजू। जो जग जंगम तीरथराजू॥',
    full: 'मुद मंगलमय संत समाजू। जो जग जंगम तीरथराजू॥ राम भक्ति जहँ सुरसरि धारा। सरसइ ब्रह्म बिचार प्रचारा॥',
    context: { en: 'The Manas celebrates the company of wise and compassionate people as a living place of learning.', hi: 'मानस में संतों की संगति को ज्ञान, करुणा और मंगल का जीवंत तीर्थ कहा गया है।' },
    meaning: { en: 'Good company and wise counsel can help the right intentions grow.', hi: 'अच्छी संगति और समझदार सलाह से अच्छे संकल्प मजबूत होते हैं।' },
    reflection: { en: 'Where can you find thoughtful support rather than noise?', hi: 'आपको शोर के बजाय सार्थक मार्गदर्शन कहाँ मिल सकता है?' },
    traditionalFruit: { en: 'The question is favorable; the book indicates success.', hi: 'प्रश्न उत्तम है; कार्य सिद्ध होगा।' },
    sourcePage: 1054,
    nextStep: { en: 'Speak with one person who brings clarity and perspective.', hi: 'किसी ऐसे व्यक्ति से बात करें जो आपको स्पष्ट दृष्टि देता हो।' },
  },
  {
    id: 7, kanda: 'सुन्दरकाण्ड',
    line: 'गरल सुधा रिपु करहिं मिताई। गोपद सिंधु अनल सितलाई॥',
    full: 'प्रबिसि नगर कीजे सब काजा। हृदयँ राखि कोसलपुर राजा॥ गरल सुधा रिपु करहिं मिताई। गोपद सिंधु अनल सितलाई॥',
    context: { en: 'Part of the same passage that encourages Hanuman entering Lanka; it evokes adversity transformed by devotion.', hi: 'यह हनुमान जी के लंका प्रवेश वाले प्रसंग का भाग है, जहाँ विश्वास से कठिनाइयाँ हल्की प्रतीत होती हैं।' },
    meaning: { en: 'Difficulty may be met with steadiness, faith, and courage. Read this as encouragement, not a guarantee that danger disappears.', hi: 'कठिनाई का सामना धैर्य, विश्वास और साहस से किया जा सकता है। यह प्रेरणा है, खतरे के मिट जाने की गारंटी नहीं।' },
    reflection: { en: 'What strength or resource can help you face this challenge?', hi: 'इस चुनौती का सामना करने में आपकी कौन सी शक्ति या सहायता काम आ सकती है?' },
    traditionalFruit: { en: 'The question is highly favorable; the book indicates success.', hi: 'प्रश्न बहुत श्रेष्ठ है; कार्य सफल होगा।' },
    sourcePage: 1054,
    nextStep: { en: 'Identify one support and one practical safeguard.', hi: 'एक सहारा और एक व्यावहारिक सुरक्षा उपाय तय करें।' },
  },
  {
    id: 8, kanda: 'लंकाकाण्ड',
    line: 'बरुन कुबेर सुरेस समीरा। रन सन्मुख धरि काहुँ न धीरा॥',
    full: 'बरुन कुबेर सुरेस समीरा। रन सन्मुख धरि काहुँ न धीरा॥ भुजबल जितेहु काल जम साईं। आजु परेहु अनाथ की नाईं॥',
    context: { en: 'A battlefield passage addressing power and courage; it points to the limits of pride and worldly strength.', hi: 'युद्ध के प्रसंग में सामर्थ्य और साहस की चर्चा है; यह अहंकार और बाहरी शक्ति की सीमाओं की याद दिलाता है।' },
    meaning: { en: 'Confidence alone is not enough. Assess obstacles realistically and avoid making decisions from pride.', hi: 'केवल आत्मविश्वास पर्याप्त नहीं। बाधाओं का यथार्थ मूल्यांकन करें और अहंकार से निर्णय न लें।' },
    reflection: { en: 'Are you underestimating the difficulty or overlooking advice?', hi: 'क्या आप कठिनाई को कम आँक रहे हैं या किसी सलाह को अनदेखा कर रहे हैं?' },
    traditionalFruit: { en: 'The book expresses doubt about successful completion.', hi: 'कार्य पूर्ण होने में सन्देह है।' },
    sourcePage: 1054,
    nextStep: { en: 'Review your plan with a realistic fallback option.', hi: 'अपनी योजना की समीक्षा करें और एक वैकल्पिक रास्ता भी रखें।' },
  },
  {
    id: 9, kanda: 'बालकाण्ड',
    line: 'सुफल मनोरथ होहुँ तुम्हारे। रामु लखनु सुनि भए सुखारे॥',
    full: 'सुमन पाइ मुनि पूजा कीन्ही। पुनि असीस दुहु भाइन्ह दीन्ही॥ सुफल मनोरथ होहुँ तुम्हारे। रामु लखनु सुनि भए सुखारे॥',
    context: { en: 'Vishvamitra blesses Rama and Lakshmana with kind wishes after their actions.', hi: 'विश्वामित्र जी राम और लक्ष्मण को मंगलमय आशीर्वाद देते हैं।' },
    meaning: { en: 'This is a blessing of goodwill and fulfilled intention, traditionally considered an auspicious line.', hi: 'यह शुभकामना और सफल मनोरथ का आशीर्वाद है, जिसे परंपरा में मंगलसूचक माना जाता है।' },
    reflection: { en: 'What meaningful outcome are you hoping to create?', hi: 'आप किस सार्थक परिणाम की दिशा में बढ़ना चाहते हैं?' },
    traditionalFruit: { en: 'The question is highly favorable; the book indicates success.', hi: 'प्रश्न बहुत उत्तम है; कार्य सिद्ध होगा।' },
    sourcePage: 1054,
    nextStep: { en: 'Take a measured step toward the goal and express gratitude for your support.', hi: 'अपने लक्ष्य की ओर एक सोच-समझकर कदम उठाएँ और मिले सहयोग के लिए आभार व्यक्त करें।' },
  },
];

/** No random result mapping: tap index i and count every 9th cell modulo 225. */
export function traceSelection(index: number): number[] {
  if (!Number.isInteger(index) || index < 0 || index >= 225) throw new Error('Invalid Shalaka position');
  return Array.from({ length: 25 }, (_, step) => (index + step * 9) % 225);
}

/** i % 9 is invariant under every ninth-cell step. */
export function resultForSelection(index: number): ShalakaAnswer {
  return answers[index % 9];
}
