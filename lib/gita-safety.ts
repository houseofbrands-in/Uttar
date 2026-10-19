export type SafetyKind = 'crisis' | 'danger';
export type Language = 'en' | 'hi';
// Safety paths intentionally precede retrieval/AI, and never return scripture.
// Explicit crisis and threat patterns: conservative high-recall examples, not a clinical classifier.
export function detectSafety(question: string): SafetyKind | null {
  const q = question.toLocaleLowerCase().normalize('NFKC');
  if (/\b(suicid(?:e|al)?|self[- ]?harm|kill myself|end my life|take my (?:own )?life|want to die|wish i were dead|hurt myself|ending my life|thinking of dying)\b|आत्महत्या|खुदकुशी|खुद को मार|जान देना|मरना चाहता|मरना चाहती|जीना नहीं चाहता|जीना नहीं चाहती|apni jaan (?:lena|dena)|khudkushi|suicide kar/i.test(q)) return 'crisis';
  if (/\b(someone (?:at home |in my (?:house|family) )?(?:is )?(?:threaten(?:ing|s)?|hurt(?:ing|s)?|abus(?:ing|es)|hit(?:ting|s)?|beat(?:ing|s)?|attack(?:ing|s)?|violent)|(?:my )?(?:partner|spouse|husband|wife|family member|parent) (?:is )?(?:threaten(?:ing|s)?|abus(?:ing|es)|hit(?:ting|s)?|beat(?:ing|s)?|violent)|domestic (?:violence|abuse)|unsafe at home|afraid (?:to go |of being )?home|being threatened|is threatening me|threats at home)\b|घरेलू हिंसा|घर में धमक|मुझे धमकी|मारपीट|घर में असुरक्षित|घर पर डर|jaan se marne ki dhamki|ghar mein hinsa/i.test(q)) return 'danger';
  return null;
}
export function safetyResponse(kind: SafetyKind, lang: Language) {
  if (lang === 'hi') return kind === 'crisis'
    ? { mode:'safety' as const, safetyKind:kind, sensitive:true,
        title:'आपकी सुरक्षा सबसे ज़रूरी है',
        message:'अगर आपको अपना जीवन समाप्त करने या खुद को चोट पहुँचाने के विचार आ रहे हैं, तो अभी अकेले इस स्थिति का सामना न करें। गीता का श्लोक आपातकालीन सहायता की जगह नहीं ले सकता।',
        steps:['किसी भरोसेमंद व्यक्ति को अभी बताएं और उनसे अपने साथ रहने को कहें।','खुद को चोट पहुँचाने वाली चीज़ों से दूरी बनाएं।','अगर अभी खतरा है, तो स्थानीय आपातकालीन सेवाओं या नज़दीकी अस्पताल से तुरंत संपर्क करें।'],
        footer:'अगर हो सके, किसी मानसिक स्वास्थ्य विशेषज्ञ या स्थानीय संकट सहायता सेवा से भी संपर्क करें।' }
    : { mode:'safety' as const, safetyKind:kind, sensitive:true,
        title:'धमकी या हिंसा सहना आपका कर्तव्य नहीं है',
        message:'आपकी सुरक्षा सर्वोपरि है। किसी धार्मिक शिक्षा का अर्थ यह नहीं है कि आपको धमकी या दुर्व्यवहार सहना पड़े।',
        steps:['यदि संभव हो तो किसी सुरक्षित स्थान पर जाएं और किसी भरोसेमंद व्यक्ति को स्थिति बताएं।','तत्काल खतरे में स्थानीय आपातकालीन सेवाओं से संपर्क करें।','अगर बात करने से खतरा बढ़ सकता है, तो धमकी देने वाले व्यक्ति का अकेले सामना न करें।'],
        footer:'स्थानीय घरेलू हिंसा सहायता सेवा या उपयुक्त पेशेवर सहायता भी उपलब्ध हो सकती है।' };
  return kind === 'crisis'
    ? { mode:'safety' as const, safetyKind:kind, sensitive:true,
        title:'Your safety comes first',
        message:'If you are thinking about ending your life or hurting yourself, please do not face this alone. A scripture reflection cannot replace immediate human support.',
        steps:['Tell someone you trust now and ask them to stay with you.','Put distance between yourself and anything you could use to hurt yourself.','If you might act soon or are in immediate danger, call your local emergency number or go to the nearest emergency department.'],
        footer:'A local crisis line or mental-health professional can also support you. You deserve real-time help.' }
    : { mode:'safety' as const, safetyKind:kind, sensitive:true,
        title:'You do not have a duty to endure threats',
        message:'Your immediate safety matters more than a spiritual interpretation of duty. Threats or abuse do not need to be accepted or endured.',
        steps:['If possible, move to a safer place and tell a trusted person what is happening.','If you are in immediate danger, contact your local emergency services.','Do not confront the person threatening you if doing so could increase the risk.'],
        footer:'A local domestic-violence support service or qualified professional may help you plan safer next steps.' };
}
