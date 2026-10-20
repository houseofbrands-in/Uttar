import Link from 'next/link';

type Language = 'en' | 'hi';

const text = {
  en: {
    kicker: 'A GUIDE TO THE TRADITION',
    title: 'What is Ram Shalaka Prashnavali?',
    paragraphs: [
      'Shri Ram Shalaka Prashnavali is a traditional devotional practice associated with Goswami Tulsidas’s Ramcharitmanas. A seeker holds a question in mind and chooses one akshara (letter or syllable) from a 15-by-15 grid. The pattern is then read by counting every ninth position.',
      'The selected sequence is associated with one of nine traditional answer passages. On UTTAR, each result displays the chaupai from the referenced edition and clearly separates its traditional phal (result) from our modern reflection.',
      'The practice is rooted in devotion and introspection. It cannot establish facts about the future, replace informed judgment, or tell us what a person privately thinks.',
    ],
    stepsTitle: 'How to use the 15 × 15 Ram Shalaka',
    steps: [
      'Pause, remember Shri Ram, and hold your question quietly in mind. There is no need to type it.',
      'Tap a letter yourself, or choose “Let UTTAR Select” for a random starting position.',
      'UTTAR follows the traditional every-ninth-position calculation across the 225 cells.',
      'Read the chaupai, its source context and the clearly labeled modern reflection.',
    ],
    faqTitle: 'Frequently asked questions',
    faqs: [
      { q: 'Is Ram Shalaka Prashnavali free to use?', a: 'Yes. You can use the Ram Shalaka experience on UTTAR without paying or creating an account.' },
      { q: 'What is the difference between choosing a letter and random selection?', a: 'Manual selection lets you tap any akshara yourself. Random selection chooses one of the same 225 positions digitally. The sequence calculation and traditional answer mapping are identical afterward.' },
      { q: 'How many letters and possible results are there?', a: 'The grid contains 15 rows and 15 columns, giving 225 selectable positions. The traditional reading corresponds to nine answer lines.' },
      { q: 'Does Ram Shalaka predict the future?', a: 'UTTAR presents Ram Shalaka as a devotional and reflective tradition, not a guaranteed prediction. It should not decide medical, legal, financial or safety-critical matters for you.' },
      { q: 'Are the explanations part of the original Ramcharitmanas?', a: 'No. The displayed chaupai and traditional phal are identified as source material; the context, gentle guidance and next-step prompts are UTTAR editorial reflections.' },
      { q: 'Can I read Bhagavad Gita verses on UTTAR too?', a: 'Yes. UTTAR also has a searchable library of 700 Bhagavad Gita verses with original Sanskrit and English/Hindi translations.' },
    ],
    more: 'Explore the Bhagavad Gita library',
  },
  hi: {
    kicker: 'परंपरा का परिचय',
    title: 'राम शलाका प्रश्नावली क्या है?',
    paragraphs: [
      'श्री राम शलाका प्रश्नावली गोस्वामी तुलसीदास रचित रामचरितमानस से जुड़ी एक पारंपरिक भक्तिपरक विधि है। इसमें साधक मन में प्रश्न रखकर १५ × १५ अक्षर-चक्र के किसी एक स्थान को चुनता है। इसके बाद हर नौवें स्थान की गणना की जाती है।',
      'इस क्रम से नौ पारंपरिक उत्तर-पंक्तियों में से एक परिणाम प्राप्त होता है। UTTAR पर संबंधित चौपाई और पारंपरिक फल दिखाए जाते हैं। इनके साथ दिया गया आधुनिक चिंतन मूल ग्रंथ से अलग स्पष्ट रूप में प्रस्तुत है।',
      'यह भक्ति और आत्मचिंतन की परंपरा है। इसे भविष्य की निश्चित भविष्यवाणी या महत्वपूर्ण निर्णयों में विवेक और विशेषज्ञ सहायता का विकल्प नहीं समझना चाहिए।',
    ],
    stepsTitle: '१५ × १५ राम शलाका कैसे प्रयोग करें?',
    steps: [
      'शांत मन से श्रीराम का स्मरण करें और प्रश्न मन में रखें। प्रश्न लिखना आवश्यक नहीं है।',
      'स्वयं कोई अक्षर चुनें या UTTAR को २२५ स्थानों में से एक यादृच्छिक स्थान चुनने दें।',
      'UTTAR पारंपरिक विधि के अनुसार हर नौवें स्थान की गणना करता है।',
      'प्राप्त चौपाई, उसका स्रोत-प्रसंग और अलग से दिया आधुनिक चिंतन पढ़ें।',
    ],
    faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
    faqs: [
      { q: 'क्या राम शलाका प्रश्नावली निःशुल्क है?', a: 'हाँ। UTTAR की राम शलाका का उपयोग बिना शुल्क या खाता बनाए किया जा सकता है।' },
      { q: 'स्वयं अक्षर चुनने और UTTAR से चुनवाने में क्या अंतर है?', a: 'पहली विधि में आप अक्षर चुनते हैं; दूसरी में UTTAR उसी २२५-स्थान के चक्र से एक स्थान यादृच्छिक रूप से चुनता है। आगे की पारंपरिक गणना और परिणाम समान विधि से निकलते हैं।' },
      { q: 'राम शलाका में कितने अक्षर और कितने परिणाम होते हैं?', a: 'चक्र में १५ पंक्तियाँ और १५ स्तंभ हैं, अर्थात् २२५ चयन-स्थान। इनसे नौ पारंपरिक उत्तर-पंक्तियाँ जुड़ी हैं।' },
      { q: 'क्या राम शलाका भविष्य बताती है?', a: 'UTTAR इसे भक्ति और आत्मचिंतन की परंपरा के रूप में प्रस्तुत करता है, निश्चित भविष्यवाणी के रूप में नहीं। स्वास्थ्य, कानून, आर्थिक या सुरक्षा संबंधी निर्णयों में योग्य सहायता और अपने विवेक का प्रयोग करें।' },
      { q: 'क्या सभी अर्थ मूल रामचरितमानस के हैं?', a: 'नहीं। चौपाई और पारंपरिक फल को स्रोत सामग्री के रूप में दिखाया गया है। संदर्भ, सरल मार्गदर्शन और अगले कदम UTTAR का आधुनिक चिंतन हैं।' },
      { q: 'क्या UTTAR पर भगवद्गीता के श्लोक भी उपलब्ध हैं?', a: 'हाँ। UTTAR पर भगवद्गीता के सभी ७०० श्लोक मूल संस्कृत के साथ हिन्दी और अंग्रेज़ी अनुवाद में उपलब्ध हैं।' },
    ],
    more: 'भगवद्गीता के श्लोक पढ़ें',
  },
} as const;

export default function ShalakaSeoContent({ lang }: { lang: Language }) {
  const t = text[lang];
  return (
    <section className="shalaka-seo" aria-label={t.title} lang={lang}>
      <div className="shalaka-seo-intro">
        <span className="shalaka-overline">{t.kicker}</span>
        <h2>{t.title}</h2>
        {t.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
      <div className="shalaka-seo-steps">
        <h2>{t.stepsTitle}</h2>
        <ol>{t.steps.map((step, index) => <li key={index}>{step}</li>)}</ol>
      </div>
      <div className="shalaka-seo-faq">
        <h2>{t.faqTitle}</h2>
        {t.faqs.map(({ q, a }, index) => (
          <details key={index}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
      <p className="shalaka-seo-related"><Link href="/gita/library">{t.more} →</Link></p>
    </section>
  );
}
