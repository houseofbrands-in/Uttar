export type SafetyKind = 'crisis' | 'danger' | 'harm_others';
export type Language = 'en' | 'hi' | 'hinglish';
// Safety paths intentionally precede retrieval/AI, and never return scripture.
// Explicit crisis and threat patterns: conservative high-recall examples, not a clinical classifier.
export function detectSafety(question: string): SafetyKind | null {
  const q = question.toLocaleLowerCase().normalize('NFKC');
  // Spiritual self-harm framing: contextual combination; NOT a ban on ordinary moksha questions.
  const lifeEnding = /\b(shar[ie]r|shareer|sharir|sarer|sareer|body|deh|deha|zindagi|life)\b.{0,70}\b(chh?o[dr]d|chhod|chod|leave|give up|end|tyag|tyaag|khatam)\b|\b(chh?o[dr]d|chhod|chod|leave|give up|end|tyag|tyaag)\b.{0,70}\b(shar[ie]r|shareer|sharir|sarer|sareer|body|deh|deha|zindagi|life)\b|शरीर.{0,35}(छोड़|त्याग)|देह.{0,35}(छोड़|त्याग)/i;
  const spiritual = /\b(moksh|moksha|mukti|liberation|salvation|nirvana)\b|मोक्ष|मुक्ति/i;
  if (spiritual.test(q) && lifeEnding.test(q)) return 'crisis';
  // Explicit first-person intention to sexually assault or seriously hurt others.
  // Keep perpetrator intent separate from reports of victimization.
  if (/\b(suicid(?:e|al)?|self[- ]?harm|kill myself|end my life|take my (?:own )?life|want to die|wish i were dead|hurt myself|ending my life|thinking of dying)\b|आत्महत्या|खुदकुशी|खुद को मार|जान देना|मरना चाहता|मरना चाहती|जीना नहीं चाहता|जीना नहीं चाहती|apni jaan (?:lena|dena)|khudkushi|suicide kar|marna chahta|marna chahti|jeena nahi chahta|jeena nahi chahti|zinda nahi rehna|khud ko marna|apni jaan deni|khud ko nuksan pahunchana/i.test(q)) return 'crisis';
  const intentToAssault = /\b(?:i\s+(?:want|wanna|intend|plan|am going|might|feel like|wish)\s+to\s+(?:rape|sexually assault|sexually abuse|molest|force sex on|kill|murder|attack|stab|shoot|hurt)\b|i\s+(?:am\s+)?(?:planning|thinking|considering)\s+to\s+(?:rape|sexually assault|sexually abuse|molest|kill|murder|attack|stab|shoot|hurt)\b|how\s+(?:do|can|should|would)\s+i\s+(?:rape|sexually assault|molest|kill|murder|attack|stab|shoot|hurt)\b|mujhe\s+(?:kisi\s+ko\s+)?(?:rape|maar|mar|harm|hurt)\s+karna\s+(?:hai|h)\b|main\s+(?:kisi\s+ko\s+)?(?:rape|maar|mar)\s+karna\s+chahta\s+hu\b)|मैं\s+(?:किसी\s+को\s+)?(?:मारना|बलात्कार\s+करना|नुकसान\s+पहुंचाना)\s+चाहता/u;
  if (intentToAssault.test(q)) return 'harm_others';
  if (/\b(someone (?:at home |in my (?:house|family) )?(?:is )?(?:threaten(?:ing|s)?|hurt(?:ing|s)?|abus(?:ing|es)|hit(?:ting|s)?|beat(?:ing|s)?|attack(?:ing|s)?|violent)|(?:my )?(?:partner|spouse|husband|wife|family member|parent) (?:is )?(?:threaten(?:ing|s)?|abus(?:ing|es)|hit(?:ting|s)?|beat(?:ing|s)?|violent)|domestic (?:violence|abuse)|unsafe at home|afraid (?:to go |of being )?home|being threatened|is threatening me|threats at home)\b|घरेलू हिंसा|घर में धमक|मुझे धमकी|मारपीट|घर में असुरक्षित|घर पर डर|jaan se marne ki dhamki|ghar mein hinsa|ghar me hinsa|ghar mein maarpeet|ghar me maarpeet|pati marta hai|husband marta hai|mujhe maarta hai|mujhe marta hai|dhamki deta hai|dhamki deti hai|ghar mein unsafe|ghar me unsafe/i.test(q)) return 'danger';
  return null;
}
export function safetyResponse(kind: SafetyKind, lang: Language) {
  if (kind === 'harm_others') {
    if (lang === 'hi') return {
      mode: 'safety' as const, safetyKind: kind, sensitive: true,
      title: 'किसी को नुकसान न पहुँचाएँ',
      message: 'किसी के साथ यौन हिंसा या किसी भी तरह की हिंसा करना गलत और हानिकारक है। इस विचार पर अमल न करें।',
      steps: [
        'जिस व्यक्ति को नुकसान पहुँचाने का विचार है, उससे अभी दूरी बनाएँ और उसके साथ अकेले न रहें।',
        'नशे या ऐसी परिस्थितियों से बचें जिनमें आपका नियंत्रण कम हो सकता है। किसी भरोसेमंद व्यक्ति या मानसिक स्वास्थ्य विशेषज्ञ से तुरंत बात करें।',
        'यदि आपको लगता है कि आप जल्द ही हिंसा कर सकते हैं, तो स्थानीय आपातकालीन सेवाओं से तुरंत संपर्क करें।'
      ],
      footer: 'सहायता लेना किसी को नुकसान पहुँचाने से रोकने की दिशा में एक जरूरी कदम है।'
    };
    if (lang === 'hinglish') return {
      mode: 'safety' as const, safetyKind: kind, sensitive: true,
      title: 'Kisi ko nuksan mat pahunchaiye',
      message: 'Sexual assault ya kisi bhi tarah ki violence galat aur harmful hai. Is khayal par action mat lijiye.',
      steps: [
        'Jise nuksan pahunchane ka khayal hai usse door rahiye; uske saath akele mat rahiye.',
        'Alcohol ya drugs se door rahiye. Abhi kisi trusted person ya mental-health professional se support lijiye.',
        'Agar lagta hai ki aap jaldi kisi ko harm kar sakte hain, turant local emergency services ko contact kijiye.'
      ],
      footer: 'Madad lena kisi ko nuksan pahunchne se rokne ka important step hai.'
    };
    return {
      mode: 'safety' as const, safetyKind: kind, sensitive: true,
      title: 'Do not act on thoughts of harming someone',
      message: 'Sexual assault and other violence cause serious harm. Do not act on these thoughts. The other person’s safety and consent are essential.',
      steps: [
        'Stay away from anyone you might harm; do not be alone with that person.',
        'Avoid alcohol or drugs. Contact a trusted person or mental-health professional now for immediate support.',
        'If you think you may act soon, contact local emergency services immediately and tell them someone could be at risk.'
      ],
      footer: 'Getting support now can help prevent harm. A spiritual reflection is not a substitute for immediate safety steps.'
    };
  }

  if (lang === 'hinglish') return kind === 'crisis'
    ? { mode:'safety' as const, safetyKind:kind, sensitive:true,
        title:'Aapki safety sabse zaroori hai',
        message:'Agar aap khud ko nuksan pahunchane ya apni jaan lene ke baare mein soch rahe hain, toh abhi akele mat rahiye. Gita ki reflection emergency help ka replacement nahi hai.',
        steps:['Abhi kisi bharosemand insaan ko batayein aur unse saath rehne ko kahein.','Khud ko chot pahunchane wali cheezon se door ho jaayein.','Agar turant khatra hai, local emergency number par call karein ya nearest emergency department jaayein.'],
        footer:'Local crisis helpline ya mental-health professional ki madad bhi lein.' }
    : { mode:'safety' as const, safetyKind:kind, sensitive:true,
        title:'Dhamki ya hinsa sehna aapka farz nahi hai',
        message:'Aapki safety sabse pehle hai. Kisi dharmik teaching ka matlab yeh nahi ki aapko hinsa ya dhamki sehni hogi.',
        steps:['Agar mumkin ho toh safe jagah jaayein aur kisi trusted person ko batayein.','Turant khatre mein local emergency services ko contact karein.','Akele confront na karein agar isse khatra badh sakta hai.'],
        footer:'Local domestic-violence support service ya qualified professional safer next steps plan karne mein madad kar sakte hain.' };
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
