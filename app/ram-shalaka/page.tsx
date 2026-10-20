
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Copy,
  Flower2,
  Heart,
  RotateCcw,
  Shuffle,
  Sparkles,
} from 'lucide-react';
import {
  cells,
  resultForSelection,
  traceSelection,
  type Language,
} from './data';
import ShalakaSeoContent from './seo-content';
import './shalaka.css';
import './seo.css';

const ui = {
  en: {
    back: 'Back to UTTAR',
    kicker: 'THE RAMCHARITMANAS PATH',
    title: 'Shri Ram Shalaka',
    subtitle:
      'An ancient devotional practice, thoughtfully experienced today.',
    introduction:
      'Hold a question in your heart. Remember Shri Ram. Choose a letter yourself, or let UTTAR select one randomly.',
    label:
      '15 × 15 akshara grid · from the supplied printed edition',
    instructions: 'Begin your reflection',
    chooseTitle: 'Choose how to select a letter',
    manual: 'Select Yourself',
    random: 'Let UTTAR Select',
    manualHint: 'Tap any letter in the grid below.',
    randomHint:
      'UTTAR will randomly choose one of the 225 positions.',
    gridHint:
      'Choose a letter yourself or use the random selection button. The traditional method reads every ninth position from the selected letter.',
    selectedManual: 'You selected position',
    selectedRandom: 'UTTAR randomly selected position',
    randomNote:
      'Random selection is a digital convenience for reflection, not a prediction or a reading of your thoughts.',
    traditional:
      'Traditional result (फल) · as printed in the book',
    sourceNote: 'Gita Press edition · PDF page',
    editorial:
      'UTTAR’s modern reflection (not a scriptural quotation)',
    gridVariants:
      'In this edition, a few grid sequences differ in lettering from their printed answer lines; UTTAR displays the chaupai as printed in the answer section.',
    passage: 'Your Shalaka passage',
    source: 'Shri Ramcharitmanas',
    context: 'Scripture context',
    meaning: 'Meaning & gentle guidance',
    reflection: 'A question to reflect on',
    step: 'A small next step',
    full: 'Read full source chaupai',
    hide: 'Hide full chaupai',
    again: 'Ask another question',
    copy: 'Copy passage',
    copied: 'Copied',
    count: '25 connected positions',
    note:
      'A devotional reflection, not a prediction or guarantee. For health, legal, financial, and other serious decisions, use sound judgment and qualified advice.',
    about: 'About the traditional method',
    method:
      'The 225 letters are read left to right in 15 rows. From the selected cell, count every ninth cell, wrapping around the grid. After 25 positions, the traditional method points to one of nine Shalaka answer lines. UTTAR offers both manual and random selection; the traditional calculation is identical for either method.',
    browse: 'Explore Bhagavad Gita',
    language: 'Language',
    restart: 'Select another letter',
  },

  hi: {
    back: 'उत्तर होमपेज',
    kicker: 'रामचरितमानस का पथ',
    title: 'श्री राम शलाका',
    subtitle:
      'प्राचीन भक्तिपरक परंपरा का आधुनिक, सरल अनुभव।',
    introduction:
      'अपने मन में प्रश्न रखें और श्रीराम का स्मरण करें। फिर स्वयं एक अक्षर चुनें या उत्तर को कोई अक्षर चुनने दें।',
    label: 'दिए गए मुद्रित संस्करण का १५ × १५ अक्षर-चक्र',
    instructions: 'चिंतन शुरू करें',
    chooseTitle: 'अक्षर चुनने का तरीका चुनें',
    manual: 'स्वयं अक्षर चुनें',
    random: 'उत्तर को अक्षर चुनने दें',
    manualHint: 'नीचे दी गई शलाका में किसी अक्षर को स्पर्श करें।',
    randomHint:
      'उत्तर २२५ स्थानों में से एक स्थान यादृच्छिक रूप से चुनेगा।',
    gridHint:
      'आप स्वयं अक्षर चुन सकते हैं या उत्तर से चुनवा सकते हैं। पारंपरिक विधि में चुने हुए स्थान से हर नौवें खाने की गणना होती है।',
    selectedManual: 'आपने स्थान चुना',
    selectedRandom: 'उत्तर ने यादृच्छिक रूप से स्थान चुना',
    randomNote:
      'यादृच्छिक चयन मनन की एक डिजिटल सुविधा है, भविष्यवाणी या मन की बात जानने का दावा नहीं।',
    traditional: 'पुस्तक में दिया पारंपरिक फल',
    sourceNote: 'गीताप्रेस संस्करण · PDF पृष्ठ',
    editorial:
      'UTTAR का आधुनिक चिंतन (मूल शास्त्र नहीं)',
    gridVariants:
      'इस संस्करण में कुछ अक्षर-क्रमों की वर्तनी छपे हुए उत्तर से थोड़ी अलग है। UTTAR उत्तर-पृष्ठ में छपी चौपाई को दिखाता है।',
    passage: 'आपको मिली चौपाई',
    source: 'श्रीरामचरितमानस',
    context: 'मूल प्रसंग',
    meaning: 'सरल अर्थ और मार्गदर्शन',
    reflection: 'मनन के लिए एक प्रश्न',
    step: 'अगला छोटा कदम',
    full: 'पूरी मूल चौपाई पढ़ें',
    hide: 'पूरी चौपाई छिपाएँ',
    again: 'फिर प्रश्न करें',
    copy: 'चौपाई कॉपी करें',
    copied: 'कॉपी हो गया',
    count: '२५ जुड़े हुए स्थान',
    note:
      'यह भक्ति और आत्मचिंतन का माध्यम है, भविष्यवाणी या गारंटी नहीं। स्वास्थ्य, कानून, धन और अन्य महत्वपूर्ण फैसलों के लिए विवेक और विशेषज्ञ सलाह लें।',
    about: 'पारंपरिक विधि',
    method:
      '२२५ अक्षर १५ पंक्तियों में बाएँ से दाएँ पढ़े जाते हैं। चुने हुए खाने से हर नौवाँ खाना लें और अंत आने पर फिर शुरुआत से गिनें। २५ खानों के बाद नौ पारंपरिक उत्तर-पंक्तियों में से एक मिलती है। स्वयं चुने हुए और यादृच्छिक रूप से चुने हुए अक्षर, दोनों पर एक ही पारंपरिक गणना लागू होती है।',
    browse: 'भगवद्गीता देखें',
    language: 'भाषा',
    restart: 'दूसरा अक्षर चुनें',
  },
} as const;

type SelectionMode = 'manual' | 'random';

export default function RamShalakaPage() {
  const [lang, setLang] = useState<Language>('en');
  const [selected, setSelected] = useState<number | null>(null);
  const [selectionMode, setSelectionMode] =
    useState<SelectionMode>('manual');
  const [showFull, setShowFull] = useState(false);
  const [showMethod, setShowMethod] = useState(false);
  const [copied, setCopied] = useState(false);

  const t = ui[lang];

  const answer =
    selected === null ? null : resultForSelection(selected);

  const path = useMemo(
    () => (selected === null ? [] : traceSelection(selected)),
    [selected]
  );

  const marked = useMemo(() => new Set(path), [path]);

  const choose = (index: number, mode: SelectionMode = 'manual') => {
    setSelected(index);
    setSelectionMode(mode);
    setShowFull(false);
    setCopied(false);

    window.setTimeout(() => {
      document
        .getElementById('shalaka-result')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    }, 60);
  };

  const chooseRandom = () => {
    // Generate a cryptographically random grid position.
    // Rejection sampling avoids modulo bias.
    const max = 0x100000000;
    const limit = max - (max % cells.length);
    const value = new Uint32Array(1);

    do {
      window.crypto.getRandomValues(value);
    } while (value[0] >= limit);

    const randomIndex = value[0] % cells.length;
    choose(randomIndex, 'random');
  };

  const reset = () => {
    setSelected(null);
    setSelectionMode('manual');
    setShowFull(false);
    setCopied(false);

    window.setTimeout(() => {
      document
        .getElementById('shalaka-grid')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    }, 60);
  };

  const copy = async () => {
    if (!answer) return;

    const content = `${answer.line}
— श्रीरामचरितमानस · ${answer.kanda}

${answer.meaning[lang]}

UTTAR · getuttar.com/ram-shalaka`;

    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="shalaka-page">
      <header className="shalaka-header">
        <div className="shalaka-shell shalaka-topbar">
          <Link
            className="shalaka-brand"
            href="/"
            aria-label="UTTAR home"
          >
            <Image
              src="/lotus.svg"
              alt=""
              width={38}
              height={38}
            />
            <span>UTTAR</span>
          </Link>

          <div className="shalaka-header-actions">
            <Link className="shalaka-back" href="/">
              <ArrowLeft size={17} />
              <span>{t.back}</span>
            </Link>

            <div
              className="shalaka-toggle"
              role="group"
              aria-label={t.language}
            >
              <button
                type="button"
                lang="en"
                className={lang === 'en' ? 'active' : ''}
                aria-pressed={lang === 'en'}
                onClick={() => setLang('en')}
              >
                EN
              </button>

              <button
                type="button"
                lang="hi"
                className={lang === 'hi' ? 'active' : ''}
                aria-pressed={lang === 'hi'}
                onClick={() => setLang('hi')}
              >
                हिं
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="shalaka-hero">
          <Image
            className="shalaka-hero-photo"
            src="/rama.webp"
            alt="Devotional artwork of Shri Ram at golden hour"
            fill
            priority
            sizes="100vw"
          />

          <div
            className="shalaka-hero-shade"
            aria-hidden="true"
          />

          <div className="shalaka-shell shalaka-hero-inner">
            <div className="shalaka-eyebrow">
              <Sparkles size={16} />
              {t.kicker}
            </div>

            <h1>{t.title}</h1>

            <p className="shalaka-hero-lead">
              {t.subtitle}
            </p>

            <p className="shalaka-hero-intro">
              {t.introduction}
            </p>

            <a
              className="shalaka-gold-button"
              href="#shalaka-grid"
            >
              {t.instructions}
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        <section
          className="shalaka-main shalaka-shell"
          id="shalaka-grid"
        >
          <div className="shalaka-section-head">
            <span className="shalaka-overline">
              <Flower2 size={16} />
              {t.label}
            </span>

            <h2>
              {selected === null
                ? t.chooseTitle
                : t.passage}
            </h2>

            <p>{t.gridHint}</p>
          </div>

          <div className="shalaka-panel">
            {/* Two ways to select an akshara */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                marginBottom: '14px',
              }}
            >
              <button
                type="button"
                className="shalaka-secondary-button"
                onClick={() => {
                  reset();
                }}
              >
                <Flower2 size={18} />
                {t.manual}
              </button>

              <button
                type="button"
                className="shalaka-gold-button"
                onClick={chooseRandom}
              >
                <Shuffle size={18} />
                {t.random}
              </button>
            </div>

            <p
              style={{
                textAlign: 'center',
                fontSize: '12px',
                lineHeight: 1.7,
                color: '#6b6b66',
                margin: '0 0 22px',
              }}
            >
              {selected !== null &&
              selectionMode === 'random'
                ? t.randomNote
                : t.manualHint}
            </p>

            <div className="shalaka-grid-scroll">
              <div
                className="shalaka-grid"
                lang="hi"
                role="group"
                aria-label={t.label}
              >
                {cells.map((akshara, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() =>
                      choose(index, 'manual')
                    }
                    className={`shalaka-cell ${
                      selected === index ? 'chosen' : ''
                    } ${
                      selected !== null &&
                      marked.has(index)
                        ? 'in-sequence'
                        : ''
                    }`}
                    aria-label={`${akshara}, ${
                      lang === 'hi'
                        ? 'स्थान'
                        : 'position'
                    } ${index + 1}`}
                    aria-pressed={selected === index}
                  >
                    {akshara}
                  </button>
                ))}
              </div>
            </div>

            <div className="shalaka-grid-foot">
              <span>
                <BookOpen size={17} />
                {selected === null
                  ? t.gridHint
                  : `${
                      selectionMode === 'random'
                        ? t.selectedRandom
                        : t.selectedManual
                    } ${selected + 1} · ${t.count}`}
              </span>

              {selected !== null && (
                <button
                  type="button"
                  className="shalaka-text-button"
                  onClick={reset}
                >
                  <RotateCcw size={16} />
                  {t.restart}
                </button>
              )}
            </div>
          </div>

          {answer && (
            <section
              className="shalaka-result"
              id="shalaka-result"
              aria-live="polite"
              key={answer.id}
            >
              <div className="shalaka-result-heading">
                <span className="shalaka-overline">
                  <Flower2 size={17} />
                  {t.passage}
                </span>

                <span className="shalaka-kanda">
                  {answer.kanda}
                </span>
              </div>

              <h2
                lang="hi"
                className="shalaka-chaupai"
              >
                {answer.line}
              </h2>

              <p className="shalaka-reference">
                {t.source} · {answer.kanda} ·{' '}
                {t.sourceNote} {answer.sourcePage} ·{' '}
                {lang === 'hi' ? 'उत्तर' : 'Answer'}{' '}
                {answer.id}/9
              </p>

              <article className="shalaka-traditional">
                <strong>{t.traditional}</strong>
                <p>{answer.traditionalFruit[lang]}</p>
              </article>

              <button
                type="button"
                className="shalaka-full-toggle"
                onClick={() => setShowFull(!showFull)}
                aria-expanded={showFull}
              >
                {showFull ? t.hide : t.full}
                <ChevronDown
                  className={showFull ? 'flip' : ''}
                  size={17}
                />
              </button>

              {showFull && (
                <p
                  className="shalaka-full-text"
                  lang="hi"
                >
                  {answer.full}
                </p>
              )}

              <p className="shalaka-editorial">
                {t.editorial}
              </p>

              <div className="shalaka-result-details">
                <article>
                  <span className="shalaka-detail-label">
                    <BookOpen size={18} />
                    {t.context}
                  </span>
                  <p>{answer.context[lang]}</p>
                </article>

                <article>
                  <span className="shalaka-detail-label">
                    <Sparkles size={18} />
                    {t.meaning}
                  </span>
                  <p>{answer.meaning[lang]}</p>
                </article>

                <article>
                  <span className="shalaka-detail-label">
                    <Heart size={18} />
                    {t.reflection}
                  </span>
                  <p>{answer.reflection[lang]}</p>
                </article>

                <article>
                  <span className="shalaka-detail-label">
                    <ArrowRight size={18} />
                    {t.step}
                  </span>
                  <p>{answer.nextStep[lang]}</p>
                </article>
              </div>

              <div className="shalaka-result-actions">
                <button
                  type="button"
                  className="shalaka-gold-button"
                  onClick={reset}
                >
                  <RotateCcw size={17} />
                  {t.again}
                </button>

                <button
                  type="button"
                  className="shalaka-secondary-button"
                  onClick={copy}
                >
                  {copied ? (
                    <Check size={17} />
                  ) : (
                    <Copy size={17} />
                  )}
                  {copied ? t.copied : t.copy}
                </button>
              </div>
            </section>
          )}

          <div className="shalaka-method">
            <button
              type="button"
              onClick={() =>
                setShowMethod(!showMethod)
              }
              aria-expanded={showMethod}
            >
              <span>
                <BookOpen size={19} />
                {t.about}
              </span>

              <ChevronDown
                className={showMethod ? 'flip' : ''}
                size={20}
              />
            </button>

            {showMethod && (
              <p>{t.method}</p>
            )}
          </div>

          <div className="shalaka-care">
            <Heart size={18} />
            <p>{t.note}</p>
          </div>

          <p className="shalaka-source-variance">
            {t.gridVariants}
          </p>

          <ShalakaSeoContent lang={lang} />

          <div className="shalaka-explore">
            <Link href="/gita">
              {t.browse}
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <footer className="shalaka-footer">
        <div className="shalaka-shell">
          <Link href="/">UTTAR</Link>
          <span>
            Ancient Wisdom. Clearer Answers.
          </span>
          <span>getuttar.com</span>
        </div>
      </footer>
    </div>
  );
}
