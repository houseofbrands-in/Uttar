'use client';

import {useDeferredValue,useMemo,useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {ArrowLeft, ArrowRight,BookOpen,Search,Sparkles,Shuffle} from 'lucide-react';
import {chapters,verses, type Language} from '../../../lib/gita';
import './library.css';

const chapterNamesEn=[
 'Arjuna’s Dilemma','The Path of Knowledge','The Yoga of Action','Knowledge and Action','Renunciation and Action',
 'The Yoga of Meditation','Knowledge and Realization','The Imperishable','Royal Knowledge','Divine Manifestations',
 'The Universal Form','The Yoga of Devotion','Field and Knower','The Three Qualities','The Supreme Person',
 'Divine and Undivine Qualities','The Threefold Faith','Liberation through Renunciation'
];

export default function GitaLibrary(){
 const [language,setLanguage]=useState<Language>('en');
 const [chapter,setChapter]=useState(2);
 const [query,setQuery]=useState('');
 const deferred=useDeferredValue(query);
 const [random,setRandom]=useState<{chapter:number;verse:number}|null>(null);
 const hi=language==='hi';
 const matches=useMemo(()=>{
  const term=deferred.trim().toLocaleLowerCase();
  if(!term)return verses.filter(v=>v.chapter===chapter);
  return verses.filter(v=>`${v.chapter}.${v.verse} ${v.chapter}-${v.verse} ${v.sanskrit} ${v.transliteration} ${v.translation.en} ${v.translation.hi}`.toLocaleLowerCase().includes(term)).slice(0,80);
 },[deferred,chapter]);
 const chosen=chapters[chapter-1];
 const randomVerse=()=>{const v=verses[Math.floor(Math.random()*verses.length)];setRandom({chapter:v.chapter,verse:v.verse});};
 return <div className="library-page">
  <header className="library-header"><div className="library-wrap library-top"><Link href="/" className="library-logo"><Image src="/lotus.svg" alt="" width={38} height={38}/>UTTAR</Link><Link href="/gita" className="library-back"><ArrowLeft size={17}/>{hi?'गीता अनुभव':'Gita experience'}</Link></div></header>
  <main>
   <section className="library-hero"><div className="library-wrap library-hero-content"><div className="library-overline"><Sparkles size={16}/>{hi?'ज्ञान · कर्म · भक्ति':'WISDOM · ACTION · DEVOTION'}</div><h1>{hi?'श्रीमद्भगवद्गीता':'The Bhagavad Gita'}<br/><em>{hi?'सम्पूर्ण ग्रंथ':'Complete verse library'}</em></h1><p>{hi?'१८ अध्याय। ७०० श्लोक। मूल संस्कृत के साथ हिन्दी और अंग्रेज़ी अर्थ।':'Explore 18 chapters and 700 original Sanskrit verses, with English and Hindi meanings.'}</p><div className="library-pills"><span>18 {hi?'अध्याय':'chapters'}</span><span>700 {hi?'श्लोक':'verses'}</span><span>{hi?'संस्कृत + हिन्दी + अंग्रेज़ी':'Sanskrit · English · Hindi'}</span></div></div></section>
   <section className="library-wrap library-main">
    <div className="library-tools"><label className="library-search"><Search size={20}/><span className="sr-only">{hi?'श्लोक खोजें':'Search verses'}</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={hi?'श्लोक, अर्थ या 2.47 खोजें…':'Search meaning, Sanskrit or 2.47…'}/>{query&&<button type="button" onClick={()=>setQuery('')} aria-label="Clear search">×</button>}</label><div className="library-language" role="group" aria-label="Translation language"><button aria-pressed={!hi} className={!hi?'active':''} onClick={()=>setLanguage('en')}>English</button><button aria-pressed={hi} className={hi?'active':''} onClick={()=>setLanguage('hi')}>हिन्दी</button></div></div>
    <div className="library-content">
     <aside className="library-chapters"><h2>{hi?'अध्याय चुनें':'Choose a chapter'}</h2><div className="library-chapter-list">{chapters.map(c=><button key={c.number} aria-pressed={chapter===c.number&&!query} className={chapter===c.number&&!query?'active':''} onClick={()=>{setChapter(c.number);setQuery('')}}><span className="library-chapter-index">{String(c.number).padStart(2,'0')}</span><span className="library-chapter-name">{hi?c.nameHindi:chapterNamesEn[c.number-1]}<small>{c.count} {hi?'श्लोक':'verses'}</small></span><ArrowRight size={16}/></button>)}</div></aside>
     <div className="library-verses"><div className="library-section-title"><div><span>{query?(hi?'खोज परिणाम':'SEARCH RESULTS'):(hi?`अध्याय ${chapter}`:`CHAPTER ${chapter}`)}</span><h2>{query?(hi?'श्लोक खोजें':'Matching verses'):(hi?chosen.nameHindi:chapterNamesEn[chapter-1])}</h2><p>{hi?`${matches.length} श्लोक दिखाए जा रहे हैं`:`${matches.length} verses shown`}{query&&matches.length===80?' · first 80 matches':''}</p></div><button type="button" onClick={randomVerse} className="library-random"><Shuffle size={16}/>{hi?'कोई श्लोक':'Surprise me'}</button></div>
       {random&&<div className="library-random-result"><span>{hi?'चिंतन के लिए चुना गया':'A verse for reflection'}</span><Link href={`/gita/verse/${random.chapter}/${random.verse}`}>{hi?'अध्याय':'Chapter'} {random.chapter} · {hi?'श्लोक':'Verse'} {random.verse} <ArrowRight size={15}/></Link></div>}
       {matches.length===0?<div className="library-empty">{hi?'कोई परिणाम नहीं मिला। अन्य शब्द खोजें।':'No verses found. Try a different word or verse reference.'}</div>:<div className="library-verse-list">{matches.map(v=><Link href={`/gita/verse/${v.chapter}/${v.verse}`} key={`${v.chapter}-${v.verse}`} className="library-verse-row"><span className="library-verse-number">{v.chapter}.{v.verse}</span><span className="library-verse-info"><strong lang="sa-Deva">{v.sanskrit.split('\n').find(s=>s.trim()&&!s.includes('उवाच'))?.replace(/\|.*$/,'').slice(0,85)||v.sanskrit.split('\n')[0]}</strong><small>{(hi?v.translation.hi:v.translation.en).slice(0,130)}{(hi?v.translation.hi:v.translation.en).length>130?'…':''}</small></span><ArrowRight size={17}/></Link>)}</div>}
     </div>
    </div>
    <p className="library-attribution">{hi?'स्रोत:':'Corpus source:'} <a href="https://github.com/AdiyogiArts/gita-json" rel="noopener noreferrer" target="_blank">Adiyogi Arts Bhagavad Gita dataset (MIT)</a>. {hi?'अध्याय १३ को ७००-श्लोक परंपरा के अनुसार क्रमांकित किया गया है।':'Chapter 13 numbering follows the standard 700-verse convention.'} {hi?'अर्थ स्रोत के अनुवाद हैं; व्यक्तिगत भविष्यवाणी नहीं।':'Source translations are presented for study, not as personal predictions.'}</p>
   </section>
  </main>
  <footer className="library-footer"><div className="library-wrap">UTTAR · Ancient Wisdom. Clearer Answers. <Link href="/ram-shalaka">Ram Shalaka <ArrowRight size={15}/></Link></div></footer>
 </div>;
}
