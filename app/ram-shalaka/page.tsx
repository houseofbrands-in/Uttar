'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Check, ChevronDown, Copy, Flower2, Heart, RotateCcw, Sparkles } from 'lucide-react';
import { cells, resultForSelection, traceSelection, type Language } from './data';
import './shalaka.css';

const ui = {
  en: {
    back: 'Back to UTTAR', kicker: 'THE RAMCHARITMANAS PATH', title: 'Shri Ram Shalaka',
    subtitle: 'An ancient devotional practice, thoughtfully experienced today.',
    introduction: 'Hold a question in your heart. Remember Shri Ram. Then select one akshara from the sacred grid.',
    label: '15 × 15 akshara grid · from the supplied printed edition', instructions: 'Tap any letter to reveal a chaupai',
    gridHint: 'Choose by intuition. The traditional method reads every ninth position from your selection.',
    traditional: 'Traditional result (फल) · as printed in the book', sourceNote: 'Gita Press edition · PDF page', editorial: 'UTTAR’s modern reflection (not a scriptural quotation)', gridVariants: 'In this edition, a few grid sequences differ in lettering from their printed answer lines; UTTAR displays the chaupai as printed in the answer section.',
    passage: 'Your Shalaka passage', source: 'Shri Ramcharitmanas', context: 'Scripture context',
    meaning: 'Meaning & gentle guidance', reflection: 'A question to reflect on', step: 'A small next step',
    full: 'Read full source chaupai', hide: 'Hide full chaupai', again: 'Ask another question',
    copy: 'Copy passage', copied: 'Copied', selection: 'You selected position', count: '25 connected positions',
    note: 'A devotional reflection, not a prediction or guarantee. For health, legal, financial, and other serious decisions, use sound judgment and qualified advice.',
    about: 'About the traditional method', method: 'The 225 letters are read left to right in 15 rows. From your selected cell, count every ninth cell, wrapping around the grid. After 25 positions, the traditional method points to one of nine Shalaka answer lines.',
    browse: 'Explore Bhagavad Gita', language: 'Language', restart: 'Select another letter',
  },
  hi: {
    back: 'उत्तर होमपेज', kicker: 'रामचरितमानस का पथ', title: 'श्री राम शलाका',
    subtitle: 'प्राचीन भक्तिपरक परंपरा का आधुनिक, सरल अनुभव।',
    introduction: 'अपने मन में प्रश्न रखें, श्रीराम का स्मरण करें और नीचे दी गई शलाका में एक अक्षर चुनें।',
    label: 'दिए गए मुद्रित संस्करण का १५ × १५ अक्षर-चक्र', instructions: 'किसी अक्षर को स्पर्श करें',
    gridHint: 'अपनी सहज भावना से चुनें। परंपरा में चुने हुए स्थान से हर नौवें खाने की गणना होती है।',
    traditional: 'पुस्तक में दिया पारंपरिक फल', sourceNote: 'गीताप्रेस संस्करण · PDF पृष्ठ', editorial: 'UTTAR का आधुनिक चिंतन (मूल शास्त्र नहीं)', gridVariants: 'इस संस्करण में कुछ अक्षर-क्रमों की वर्तनी छपे हुए उत्तर से थोड़ी अलग है। UTTAR उत्तर-पृष्ठ में छपी चौपाई को दिखाता है।',
    passage: 'आपको मिली चौपाई', source: 'श्रीरामचरितमानस', context: 'मूल प्रसंग',
    meaning: 'सरल अर्थ और मार्गदर्शन', reflection: 'मनन के लिए एक प्रश्न', step: 'अगला छोटा कदम',
    full: 'पूरी मूल चौपाई पढ़ें', hide: 'पूरी चौपाई छिपाएँ', again: 'फिर प्रश्न करें',
    copy: 'चौपाई कॉपी करें', copied: 'कॉपी हो गया', selection: 'आपने स्थान चुना', count: '२५ जुड़े हुए स्थान',
    note: 'यह भक्ति और आत्मचिंतन का माध्यम है, भविष्यवाणी या गारंटी नहीं। स्वास्थ्य, कानून, धन और अन्य महत्वपूर्ण फैसलों के लिए विवेक और विशेषज्ञ सलाह लें।',
    about: 'पारंपरिक विधि', method: '२२५ अक्षर १५ पंक्तियों में बाएँ से दाएँ पढ़े जाते हैं। चुने हुए खाने से हर नौवाँ खाना लें और अंत आने पर फिर शुरुआत से गिनें। २५ खानों के बाद नौ पारंपरिक उत्तर-पंक्तियों में से एक मिलती है।',
    browse: 'भगवद्गीता देखें', language: 'भाषा', restart: 'दूसरा अक्षर चुनें',
  },
} as const;

export default function RamShalakaPage() {
  const [lang, setLang] = useState<Language>('en');
  const [selected, setSelected] = useState<number | null>(null);
  const [showFull, setShowFull] = useState(false);
  const [showMethod, setShowMethod] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = ui[lang];
  const answer = selected === null ? null : resultForSelection(selected);
  const path = useMemo(() => selected === null ? [] : traceSelection(selected), [selected]);
  const marked = useMemo(() => new Set(path), [path]);
  const choose = (index: number) => {
    setSelected(index);
    setShowFull(false);
    setCopied(false);
    window.setTimeout(() => document.getElementById('shalaka-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  };
  const reset = () => {
    setSelected(null);
    setShowFull(false);
    setCopied(false);
    window.setTimeout(() => document.getElementById('shalaka-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  };
  const copy = async () => {
    if (!answer) return;
    const content = `${answer.line}\n— श्रीरामचरितमानस · ${answer.kanda}\n\n${answer.meaning[lang]}\n\nUTTAR · getuttar.com/ram-shalaka`;
    try { await navigator.clipboard.writeText(content); setCopied(true); } catch { setCopied(false); }
  };

  return <div className="shalaka-page">
    <header className="shalaka-header">
      <div className="shalaka-shell shalaka-topbar">
        <Link className="shalaka-brand" href="/" aria-label="UTTAR home"><Image src="/lotus.svg" alt="" width={38} height={38}/><span>UTTAR</span></Link>
        <div className="shalaka-header-actions">
          <Link className="shalaka-back" href="/"><ArrowLeft size={17}/><span>{t.back}</span></Link>
          <div className="shalaka-toggle" role="group" aria-label={t.language}>
            <button type="button" lang="en" className={lang === 'en' ? 'active' : ''} aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
            <button type="button" lang="hi" className={lang === 'hi' ? 'active' : ''} aria-pressed={lang === 'hi'} onClick={() => setLang('hi')}>हिं</button>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section className="shalaka-hero">
        <Image className="shalaka-hero-photo" src="/rama.webp" alt="Devotional artwork of Shri Ram at golden hour" fill priority sizes="100vw" />
        <div className="shalaka-hero-shade" aria-hidden="true" />
        <div className="shalaka-shell shalaka-hero-inner">
          <div className="shalaka-eyebrow"><Sparkles size={16}/>{t.kicker}</div>
          <h1>{t.title}</h1>
          <p className="shalaka-hero-lead">{t.subtitle}</p>
          <p className="shalaka-hero-intro">{t.introduction}</p>
          <a className="shalaka-gold-button" href="#shalaka-grid">{t.instructions}<ArrowRight size={17}/></a>
        </div>
      </section>
      <section className="shalaka-main shalaka-shell" id="shalaka-grid">
        <div className="shalaka-section-head"><span className="shalaka-overline"><Flower2 size={16}/>{t.label}</span><h2>{selected === null ? t.instructions : t.passage}</h2><p>{t.gridHint}</p></div>
        <div className="shalaka-panel">
          <div className="shalaka-grid-scroll"><div className="shalaka-grid" lang="hi" role="group" aria-label={t.label}>
            {cells.map((akshara, index) => <button type="button" key={index} onClick={() => choose(index)} className={`shalaka-cell ${selected === index ? 'chosen' : ''} ${selected !== null && marked.has(index) ? 'in-sequence' : ''}`} aria-label={`${akshara}, ${lang === 'hi' ? 'स्थान' : 'position'} ${index + 1}`} aria-pressed={selected === index}>{akshara}</button>)}
          </div></div>
          <div className="shalaka-grid-foot"><span><BookOpen size={17}/> {selected === null ? t.gridHint : `${t.selection} ${selected + 1} · ${t.count}`}</span>{selected !== null && <button type="button" className="shalaka-text-button" onClick={reset}><RotateCcw size={16}/>{t.restart}</button>}</div>
        </div>
        {answer && <section className="shalaka-result" id="shalaka-result" aria-live="polite" key={answer.id}>
          <div className="shalaka-result-heading"><span className="shalaka-overline"><Flower2 size={17}/>{t.passage}</span><span className="shalaka-kanda">{answer.kanda}</span></div>
          <h2 lang="hi" className="shalaka-chaupai">{answer.line}</h2>
          <p className="shalaka-reference">{t.source} · {answer.kanda} · {t.sourceNote} {answer.sourcePage} · {lang === 'hi' ? 'उत्तर' : 'Answer'} {answer.id}/9</p>
          <article className="shalaka-traditional"><strong>{t.traditional}</strong><p>{answer.traditionalFruit[lang]}</p></article>
          <button type="button" className="shalaka-full-toggle" onClick={() => setShowFull(!showFull)} aria-expanded={showFull}>{showFull ? t.hide : t.full}<ChevronDown className={showFull ? 'flip' : ''} size={17}/></button>
          {showFull && <p className="shalaka-full-text" lang="hi">{answer.full}</p>}
          <p className="shalaka-editorial">{t.editorial}</p>
          <div className="shalaka-result-details">
            <article><span className="shalaka-detail-label"><BookOpen size={18}/>{t.context}</span><p>{answer.context[lang]}</p></article>
            <article><span className="shalaka-detail-label"><Sparkles size={18}/>{t.meaning}</span><p>{answer.meaning[lang]}</p></article>
            <article><span className="shalaka-detail-label"><Heart size={18}/>{t.reflection}</span><p>{answer.reflection[lang]}</p></article>
            <article><span className="shalaka-detail-label"><ArrowRight size={18}/>{t.step}</span><p>{answer.nextStep[lang]}</p></article>
          </div>
          <div className="shalaka-result-actions"><button type="button" className="shalaka-gold-button" onClick={reset}><RotateCcw size={17}/>{t.again}</button><button type="button" className="shalaka-secondary-button" onClick={copy}>{copied ? <Check size={17}/> : <Copy size={17}/>} {copied ? t.copied : t.copy}</button></div>
        </section>}
        <div className="shalaka-method"><button type="button" onClick={() => setShowMethod(!showMethod)} aria-expanded={showMethod}><span><BookOpen size={19}/>{t.about}</span><ChevronDown className={showMethod ? 'flip' : ''} size={20}/></button>{showMethod && <p>{t.method}</p>}</div>
        <div className="shalaka-care"><Heart size={18}/><p>{t.note}</p></div>
        <p className="shalaka-source-variance">{t.gridVariants}</p>
        <div className="shalaka-explore"><Link href="/gita">{t.browse}<ArrowRight size={16}/></Link></div>
      </section>
    </main>
    <footer className="shalaka-footer"><div className="shalaka-shell"><Link href="/">UTTAR</Link><span>Ancient Wisdom. Clearer Answers.</span><span>getuttar.com</span></div></footer>
  </div>;
}
