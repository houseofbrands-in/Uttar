'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Check, ChevronLeft, ChevronRight, ExternalLink, Flower2, RefreshCw, Sparkles } from 'lucide-react';
import './gita.css';

type Language = 'en' | 'hi';
type Verse = {
  id: string;
  chapter: number;
  number: number;
  sanskrit: string[];
  heading: { en: string; hi: string };
  meaning: { en: string; hi: string };
  context: { en: string; hi: string };
  reflection: { en: string; hi: string };
  action: { en: string; hi: string };
  source: string;
};

// Original Sanskrit has been checked against IIT Kanpur's Gita Supersite.
// All translations, reflections and next steps below are new editorial wording,
// NOT quotations of another published translation or promises of divination.
const verses: Verse[] = [
  {
    id: '2.47', chapter: 2, number: 47,
    sanskrit: ['कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।', 'मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥'],
    heading: { en: 'Focus on what you can do', hi: 'अपने कर्म पर ध्यान दें' },
    meaning: {
      en: 'You have a choice in how you act, but you cannot fully control the outcome. Do not act only for a reward, and do not use uncertainty as a reason to stop acting.',
      hi: 'आपका अधिकार अपने कर्म पर है, उसके परिणाम पर पूरा नियंत्रण नहीं। केवल फल पाने के लिए कर्म न करें और अनिश्चित परिणाम के डर से कर्म करना भी न छोड़ें।',
    },
    context: {
      en: 'Krishna is guiding Arjuna toward responsible action without being consumed by the results.',
      hi: 'श्रीकृष्ण अर्जुन को परिणाम की चिंता में उलझे बिना अपने कर्तव्य के अनुसार कर्म करने की सीख दे रहे हैं।',
    },
    reflection: {
      en: 'Is worry about the outcome preventing you from doing the right thing today?',
      hi: 'क्या परिणाम की चिंता आपको आज सही कदम उठाने से रोक रही है?',
    },
    action: {
      en: 'Write down one meaningful action you can take today. Take that step, even if the result is uncertain.',
      hi: 'आज का एक सार्थक कदम लिखें। परिणाम निश्चित न होने पर भी उस दिशा में आगे बढ़ें।',
    },
    source: 'https://www.gitasupersite.iitk.ac.in/dv/bhagavadgita/2.47',
  },
  {
    id: '2.48', chapter: 2, number: 48,
    sanskrit: ['योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।', 'सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥'],
    heading: { en: 'Find steadiness in the middle of change', hi: 'सफलता और असफलता में संतुलन' },
    meaning: {
      en: 'Act with a steady mind, without clinging to success or fearing failure. Keeping your inner balance through both is a form of yoga.',
      hi: 'स्थिर मन से कर्म करें। सफलता से अत्यधिक आसक्ति और असफलता के डर से बचें। दोनों स्थितियों में मन का संतुलन बनाए रखना ही योग का एक रूप है।',
    },
    context: {
      en: 'Krishna explains that steadiness of mind matters while acting, whatever the outcome.',
      hi: 'श्रीकृष्ण समझाते हैं कि कर्म करते समय मन का संतुलन महत्वपूर्ण है, चाहे परिणाम कुछ भी हो।',
    },
    reflection: {
      en: 'How would you approach this situation if you were less afraid of failure?',
      hi: 'यदि असफलता का डर कम होता, तो आप इस परिस्थिति में क्या अलग करते?',
    },
    action: {
      en: 'Before your next important decision, pause for three calm breaths. Choose your response based on your values, not panic.',
      hi: 'अगले महत्वपूर्ण निर्णय से पहले तीन गहरी साँसें लें। घबराहट के बजाय अपने मूल्यों के आधार पर कदम चुनें।',
    },
    source: 'https://www.gitasupersite.iitk.ac.in/dv/bhagavadgita/2.48',
  },
];

export default function GitaPage() {
  const [language, setLanguage] = useState<Language>('en');
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const verse = verses[index];
  const hindi = language === 'hi';

  function chooseRandom() {
    const next = verses.length > 1 ? (index + 1 + Math.floor(Math.random() * (verses.length - 1))) % verses.length : 0;
    setIndex(next);
    setRevealed(true);
    setCopied(false);
  }
  function browse(delta: number) {
    setIndex((index + delta + verses.length) % verses.length);
    setRevealed(true);
    setCopied(false);
  }
  async function copyReflection() {
    const content = `Bhagavad Gita ${verse.id}\n${verse.sanskrit.join('\n')}\n\n${verse.meaning[language]}\n\n${verse.reflection[language]}\n\nSource: ${verse.source}`;
    try { await navigator.clipboard.writeText(content); setCopied(true); } catch { setCopied(false); }
  }

  return (
    <main className="gita-page">
      <header className="gita-header">
        <div className="gita-container gita-header-inner">
          <Link href="/" className="gita-wordmark" aria-label="UTTAR homepage"><Image src="/lotus.svg" alt="" width={37} height={37}/><span>UTTAR</span></Link>
          <Link href="/" className="gita-back"><ArrowLeft size={17}/>{hindi ? 'मुख्य पृष्ठ' : 'Back home'}</Link>
        </div>
      </header>

      <div className="gita-intro">
        <div className="gita-container gita-intro-grid">
          <div>
            <div className="gita-eyebrow"><Sparkles size={15}/>{hindi ? 'चिंतन का एक शांत क्षण' : 'A QUIET MOMENT TO REFLECT'}</div>
            <h1>{hindi ? 'भगवद्गीता से' : 'A little clarity,'}<br/><em>{hindi ? 'जीवन की प्रेरणा' : 'a deeper perspective.'}</em></h1>
            <p>{hindi ? 'मूल संस्कृत श्लोक पढ़ें, सरल अर्थ समझें और अपने अगले कदम पर विचार करें।' : 'Explore a teaching from the Bhagavad Gita, read the original Sanskrit, and find a practical question to carry into your day.'}</p>
          </div>
          <div className="gita-art"><Image src="/krishna.webp" alt="Illustration of Shri Krishna playing his flute beside a temple at sunset" fill priority sizes="(max-width: 760px) 100vw, 400px"/></div>
        </div>
      </div>

      <section className="gita-container gita-experience" aria-label="Bhagavad Gita reflection experience">
        <div className="gita-panel-top">
          <div><span className="gita-section-label">{hindi ? 'आज का चिंतन' : 'YOUR REFLECTION SPACE'}</span><h2>{hindi ? 'एक श्लोक चुनें' : 'Discover a verse'}</h2></div>
          <div className="gita-lang" role="group" aria-label="Meaning language"><button type="button" aria-pressed={!hindi} className={!hindi ? 'selected' : ''} onClick={() => setLanguage('en')}>English</button><button type="button" aria-pressed={hindi} className={hindi ? 'selected' : ''} onClick={() => setLanguage('hi')}>हिन्दी</button></div>
        </div>
        {!revealed ? (
          <div className="gita-welcome" key="welcome">
            <div className="gita-center-symbol"><Flower2 size={37}/></div>
            <h3>{hindi ? 'मन में एक प्रश्न रखें' : 'Hold a question in your heart'}</h3>
            <p>{hindi ? 'एक क्षण रुकें। फिर चिंतन के लिए एक श्लोक प्राप्त करें, या उपलब्ध श्लोक स्वयं चुनें।' : 'Take a moment. Then discover a verse for reflection, or browse the available verses yourself.'}</p>
            <div className="gita-actions"><button className="gita-primary" onClick={chooseRandom}><Sparkles size={17}/>{hindi ? 'एक श्लोक दिखाएँ' : 'Discover a verse'}</button><button className="gita-secondary" onClick={() => {setRevealed(true);setIndex(0)}}><BookOpen size={17}/>{hindi ? 'श्लोक देखें' : 'Browse verses'}</button></div>
            <small>{hindi ? 'यह परंपरागत भविष्यवाणी नहीं, चिंतन के लिए श्लोक का चयन है।' : 'This is a verse-selection tool for reflection, not a traditional divination method or prediction.'}</small>
          </div>
        ) : (
          <div className="gita-result" key={verse.id}>
            <div className="gita-verse-meta"><span><BookOpen size={15}/>{hindi ? 'अध्याय' : 'Chapter'} {verse.chapter} · {hindi ? 'श्लोक' : 'Verse'} {verse.number}</span><span className="gita-editorial">{hindi ? 'मूल संस्कृत' : 'ORIGINAL SANSKRIT'}</span></div>
            <div className="gita-sanskrit" lang="sa-Deva">{verse.sanskrit.map((line) => <p key={line}>{line}</p>)}</div>
            <div className="gita-gold-divider"><Flower2 size={22}/></div>
            <h3>{verse.heading[language]}</h3>
            <div className="gita-meaning"><span className="gita-section-label">{hindi ? 'सरल भावार्थ · UTTAR द्वारा' : 'PLAIN-LANGUAGE MEANING · BY UTTAR'}</span><p>{verse.meaning[language]}</p></div>
            <div className="gita-insight-grid">
              <article><span className="gita-section-label">{hindi ? 'प्रसंग' : 'CONTEXT'}</span><p>{verse.context[language]}</p></article>
              <article><span className="gita-section-label">{hindi ? 'अपने लिए एक प्रश्न' : 'A QUESTION FOR YOU'}</span><p>{verse.reflection[language]}</p></article>
              <article className="gita-next-step"><span className="gita-section-label">{hindi ? 'आज का छोटा कदम' : 'ONE SMALL STEP'}</span><p>{verse.action[language]}</p></article>
            </div>
            <div className="gita-result-actions"><button className="gita-primary" onClick={chooseRandom}><RefreshCw size={16}/>{hindi ? 'दूसरा श्लोक' : 'Another verse'}</button><button className="gita-secondary" onClick={copyReflection}>{copied ? <Check size={16}/> : <BookOpen size={16}/>} {copied ? (hindi ? 'कॉपी किया' : 'Copied') : (hindi ? 'कॉपी करें' : 'Copy reflection')}</button></div>
            <div className="gita-browser"><button type="button" onClick={() => browse(-1)} aria-label="Previous verse"><ChevronLeft size={18}/></button><span>{hindi ? 'उपलब्ध श्लोक' : 'Curated verses'} · {index + 1} / {verses.length}</span><button type="button" onClick={() => browse(1)} aria-label="Next verse"><ChevronRight size={18}/></button></div>
            <p className="gita-source">{hindi ? 'मूल पाठ की जाँच:' : 'Sanskrit text checked against:'} <a target="_blank" rel="noopener noreferrer" href={verse.source}>IIT Kanpur Gita Supersite <ExternalLink size={13}/></a></p>
          </div>
        )}
      </section>
      <div className="gita-container gita-honesty"><Flower2 size={22}/><p>{hindi ? 'यह अनुभव भगवद्गीता के अध्ययन और आत्मचिंतन के लिए है। व्याख्या UTTAR की है, शास्त्र का मूल पाठ नहीं। महत्वपूर्ण चिकित्सा, कानूनी या वित्तीय निर्णय केवल इस चयन के आधार पर न लें।' : 'A space for study and personal reflection. UTTAR’s explanations are modern interpretations, not scripture quotations. A randomly selected verse cannot predict the future or replace professional judgment for important decisions.'}</p></div>
      <footer className="gita-footer"><div className="gita-container"><span>UTTAR · Ancient Wisdom. Clearer Answers.</span><Link href="/">{hindi ? 'मुख्य पृष्ठ पर लौटें' : 'Return to homepage'} <ArrowRight size={14}/></Link></div></footer>
    </main>
  );
}
