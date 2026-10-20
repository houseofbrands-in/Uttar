import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Flower2 } from 'lucide-react';
import { chapters, getVerse } from '../../../lib/gita';
import './hindi.css';

const canonical = 'https://getuttar.com/gita/hindi';
export const metadata: Metadata = {
  title: 'भगवद्गीता हिंदी में — 18 अध्याय, 700 श्लोक और हिन्दी अर्थ',
  description: 'श्रीमद्भगवद्गीता हिंदी में पढ़ें। 18 अध्याय, 700 संस्कृत श्लोक और उनके हिन्दी अर्थ देखें। कर्मयोग, मन की स्थिरता और भक्ति से जुड़ी शिक्षाएँ समझें।',
  alternates: { canonical },
  openGraph: {
    type: 'article', url: canonical, locale: 'hi_IN',
    title: 'भगवद्गीता हिंदी में | 18 अध्याय और 700 श्लोक | UTTAR',
    description: 'श्रीमद्भगवद्गीता के सभी 18 अध्याय और 700 श्लोक मूल संस्कृत और हिन्दी अर्थ के साथ पढ़ें।',
    images: [{ url: '/krishna.webp', alt: 'श्रीकृष्ण की कलात्मक छवि — UTTAR' }],
  },
  twitter: { card: 'summary_large_image', title: 'भगवद्गीता हिंदी में | UTTAR', images: ['/krishna.webp'] },
};

const topics = [
  { title: 'कर्म करते समय परिणाम की चिंता', ref: [2, 47], summary: 'गीता 2.47 कर्म और उसके फल के संबंध पर विचार करने का अवसर देती है। इसे निष्क्रियता या जिम्मेदारियों से बचने की सलाह न समझें।' },
  { title: 'जब मन बार-बार भटकता है', ref: [6, 26], summary: 'अध्याय 6 मन को बार-बार वापस लाने के अभ्यास की बात करता है। यह आध्यात्मिक शिक्षा है, चिकित्सकीय इलाज का विकल्प नहीं।' },
  { title: 'दूसरों के प्रति करुणा और संतुलन', ref: [12, 13], summary: 'अध्याय 12 में द्वेष से दूर रहने, मैत्री और करुणा जैसे गुणों का उल्लेख है।' },
] as const;

const faqs = [
  { q: 'भगवद्गीता में कितने अध्याय और श्लोक हैं?', a: 'इस पुस्तकालय में प्रचलित 700-श्लोक परंपरा के अनुसार 18 अध्याय और 700 श्लोक हैं। हर श्लोक के साथ मूल संस्कृत, हिन्दी और अंग्रेज़ी अर्थ उपलब्ध हैं।' },
  { q: 'क्या मैं भगवद्गीता के श्लोक हिन्दी में पढ़ सकता हूँ?', a: 'हाँ। नीचे दिए अध्यायों और श्लोकों के लिंक खोलें। श्लोक पृष्ठ पर हिन्दी चुनकर स्रोत का हिन्दी अनुवाद पढ़ सकते हैं।' },
  { q: 'क्या UTTAR का अर्थ मूल शास्त्र का हिस्सा है?', a: 'नहीं। स्रोत से उपलब्ध अनुवाद को मूल संस्कृत पाठ से अलग दिखाया जाता है। जहाँ आधुनिक चिंतन दिया जाता है, वह संपादकीय व्याख्या है, मूल शास्त्र का उद्धरण नहीं।' },
  { q: 'क्या गीता मेरे जीवन के किसी फैसले का निश्चित उत्तर देती है?', a: 'गीता पर मनन से एक दृष्टिकोण मिल सकता है, पर किसी विशेष नौकरी, रिश्ते, बीमारी या धन संबंधी निर्णय का निश्चित परिणाम नहीं बताया जा सकता। आवश्यक होने पर योग्य विशेषज्ञ की सहायता लें।' },
];

export default function GitaHindiPage() {
  const jsonLd = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebPage', '@id': canonical, url: canonical, name: 'भगवद्गीता हिंदी में — 18 अध्याय और 700 श्लोक', inLanguage: 'hi', isPartOf: { '@id': 'https://getuttar.com/#website' }, description: 'मूल संस्कृत श्लोक और हिन्दी अर्थ के साथ भगवद्गीता का अध्ययन।' },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'UTTAR', item: 'https://getuttar.com/' },
        { '@type': 'ListItem', position: 2, name: 'गीता पुस्तकालय', item: 'https://getuttar.com/gita/library' },
        { '@type': 'ListItem', position: 3, name: 'भगवद्गीता हिंदी में', item: canonical },
      ] },
    ],
  };
  return <div className="gh-page" lang="hi">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <header className="gh-header"><div className="gh-wrap gh-nav"><Link href="/" className="gh-brand"><Image src="/lotus.svg" alt="" width={36} height={36} />UTTAR</Link><Link href="/gita/library">सम्पूर्ण गीता पुस्तकालय <ArrowRight size={16} /></Link></div></header>
    <main>
      <section className="gh-hero"><div className="gh-wrap"><span className="gh-kicker"><Flower2 size={17}/> अध्ययन · ज्ञान · आत्मचिंतन</span><h1>भगवद्गीता हिंदी में</h1><p className="gh-subtitle">18 अध्याय · 700 श्लोक · मूल संस्कृत और हिन्दी अर्थ</p><p>श्रीमद्भगवद्गीता का अध्ययन अपनी भाषा में करें। यहाँ सभी 18 अध्यायों के श्लोक उपलब्ध हैं। आप श्लोक पढ़ सकते हैं, उनके स्रोत अनुवाद समझ सकते हैं और अपनी गति से मनन कर सकते हैं।</p><Link className="gh-primary" href="/gita/library">सभी श्लोक देखें <ArrowRight size={17}/></Link></div></section>
      <div className="gh-wrap gh-main">
        <section className="gh-section"><h2>भगवद्गीता क्या सिखाती है?</h2><p>भगवद्गीता महाभारत के प्रसंग में श्रीकृष्ण और अर्जुन का संवाद है। इसके अध्याय कर्म, ज्ञान, ध्यान, भक्ति, जीवन में जिम्मेदारी और मन की स्थिति जैसे विषयों पर विचार करने का अवसर देते हैं। किसी एक श्लोक को उसकी पूरी परिस्थिति से काटकर अंतिम आदेश समझने के बजाय, उसके आसपास के अध्याय और संदर्भ को भी पढ़ें।</p><p>UTTAR में मूल संस्कृत पाठ और स्रोत के हिन्दी-अंग्रेज़ी अनुवाद अलग रखे गए हैं। आधुनिक जीवन पर दी जाने वाली चिंतन-सामग्री को मूल शास्त्र का शब्दशः अर्थ नहीं कहा जाता।</p></section>
        <section className="gh-section"><h2>भगवद्गीता के 18 अध्याय</h2><p>किसी भी अध्याय से पढ़ना शुरू करें। नीचे प्रत्येक अध्याय के पहले श्लोक का लिंक दिया गया है। श्लोक पृष्ठ पर <strong>हिन्दी</strong> विकल्प चुनें।</p><div className="gh-chapters">{chapters.map(ch => <Link key={ch.number} href={`/gita/verse/${ch.number}/1?lang=hi`}><span>अध्याय {ch.number}</span><strong>{ch.nameHindi}</strong><small>{ch.count} श्लोक</small><ArrowRight size={17}/></Link>)}</div></section>
        <section className="gh-section"><h2>आरंभ करने के लिए तीन श्लोक</h2><p>ये श्लोक अलग-अलग विषयों की ओर संकेत करते हैं। प्रत्येक के मूल संदर्भ को विस्तार से पढ़ना उपयोगी है।</p><div className="gh-verses">{topics.map(item => {const v=getVerse(item.ref[0],item.ref[1]);return <article key={`${item.ref[0]}.${item.ref[1]}`}><span className="gh-ref">भगवद्गीता {item.ref[0]}.{item.ref[1]}</span><h3>{item.title}</h3><p>{item.summary}</p>{v&&<blockquote lang="hi">{v.translation.hi}</blockquote>}<Link href={`/gita/verse/${item.ref[0]}/${item.ref[1]}?lang=hi`}>मूल संस्कृत श्लोक पढ़ें <ArrowRight size={16}/></Link></article>})}</div></section>
        <section className="gh-section"><h2>भगवद्गीता हिंदी में — सामान्य प्रश्न</h2><div className="gh-faq">{faqs.map(faq=><article key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></article>)}</div></section>
        <section className="gh-section gh-next"><BookOpen size={24}/><div><h2>अब आगे क्या पढ़ें?</h2><p>पूरी गीता के 700 श्लोक देखें या जीवन से जुड़े सवालों पर शास्त्र-आधारित चिंतन का अनुभव करें।</p><div><Link href="/gita/library">गीता पुस्तकालय <ArrowRight size={15}/></Link><Link href="/gita">गीता से चिंतन <ArrowRight size={15}/></Link></div></div></section>
        <p className="gh-source">अनुवाद स्रोत: <a href="https://github.com/AdiyogiArts/gita-json" target="_blank" rel="noopener noreferrer">Adiyogi Arts Bhagavad Gita dataset (MIT)</a>। अध्याय 13 की संख्या 700-श्लोक परंपरा के अनुसार है। यह पाठ अध्ययन और आत्मचिंतन के लिए है, भविष्यवाणी या पेशेवर सलाह नहीं।</p>
      </div>
    </main><footer className="gh-footer"><div className="gh-wrap"><Link href="/">UTTAR</Link><span>Ancient Wisdom. Clearer Answers.</span></div></footer>
  </div>;
}
