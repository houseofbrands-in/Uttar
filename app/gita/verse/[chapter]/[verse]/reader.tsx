'use client';

import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowLeft,ArrowRight,BookOpen,Check,Copy,ExternalLink,Flower2,Shuffle} from 'lucide-react';
import {verses,type Verse,type Language} from '../../../../../lib/gita';
import '../../../library/library.css';

export default function VerseReader({verse,chapterCount}:{verse:Verse;chapterCount:number}){
 const [language,setLanguage]=useState<Language>('en');const [copied,setCopied]=useState(false);const hi=language==='hi';
 const previous=verse.verse>1?{chapter:verse.chapter,verse:verse.verse-1}:verse.chapter>1?{chapter:verse.chapter-1,verse:verses.filter(v=>v.chapter===verse.chapter-1).length}:null;
 const next=verse.verse<chapterCount?{chapter:verse.chapter,verse:verse.verse+1}:verse.chapter<18?{chapter:verse.chapter+1,verse:1}:null;
 const link=(p:{chapter:number;verse:number})=>`/gita/verse/${p.chapter}/${p.verse}`;
 const copy=async()=>{try{await navigator.clipboard.writeText(`Bhagavad Gita ${verse.chapter}.${verse.verse}\n${verse.sanskrit}\n\n${verse.translation[language]}\nhttps://getuttar.com${link(verse)}`);setCopied(true)}catch{setCopied(false)}};
 const random=()=>{const v=verses[Math.floor(Math.random()*verses.length)];window.location.href=link(v)};
 return <div className="library-page reader-page"><header className="library-header"><div className="library-wrap library-top"><Link href="/" className="library-logo"><Image src="/lotus.svg" alt="" width={38} height={38}/>UTTAR</Link><Link href="/gita/library" className="library-back"><ArrowLeft size={16}/>{hi?'सम्पूर्ण गीता':'All chapters'}</Link></div></header>
 <main className="library-wrap reader-main"><div className="reader-breadcrumb"><Link href="/gita/library">{hi?'भगवद्गीता':'Bhagavad Gita'}</Link><ArrowRight size={14}/>{hi?'अध्याय':'Chapter'} {verse.chapter} · {hi?'श्लोक':'Verse'} {verse.verse}</div>
 <div className="reader-heading"><div><span className="library-overline"><Flower2 size={16}/>{hi?'मूल संस्कृत श्लोक':'ORIGINAL SANSKRIT VERSE'}</span><h1>{hi?'भगवद्गीता':'Bhagavad Gita'} <em>{verse.chapter}.{verse.verse}</em></h1></div><div className="library-language" role="group" aria-label="Translation language"><button aria-pressed={!hi} className={!hi?'active':''} onClick={()=>setLanguage('en')}>English</button><button aria-pressed={hi} className={hi?'active':''} onClick={()=>setLanguage('hi')}>हिन्दी</button></div></div>
 <div className="reader-scripture"><div className="reader-symbol">✺</div><p lang="sa-Deva">{verse.sanskrit}</p><span>{hi?'अध्याय':'Chapter'} {verse.chapter} · {hi?'श्लोक':'Verse'} {verse.verse}</span></div>
 <div className="reader-translation"><span className="library-overline"><BookOpen size={17}/>{hi?'हिन्दी अनुवाद':'ENGLISH TRANSLATION'}</span><p lang={hi?'hi':'en'}>{verse.translation[language]}</p></div>
 <div className="reader-text-note">{hi?'अनुवाद स्रोत: Adiyogi Arts. यह व्याख्या मूल श्लोक से अलग है और अध्ययन के लिए है।':'Translation source: Adiyogi Arts. This translation is distinct from the original Sanskrit and is provided for study.'}</div>
 <div className="reader-actions"><button onClick={copy} className="reader-copy">{copied?<Check size={17}/>:<Copy size={17}/>} {copied?(hi?'कॉपी हो गया':'Copied'):(hi?'श्लोक कॉपी करें':'Copy verse')}</button><button onClick={random} className="reader-copy"><Shuffle size={17}/>{hi?'कोई दूसरा श्लोक':'Another verse'}</button></div>
 <nav className="reader-next" aria-label="Verse navigation">{previous?<Link href={link(previous)}><ArrowLeft size={17}/>{hi?'पिछला श्लोक':'Previous verse'}</Link>:<span/>}<Link href="/gita/library">{hi?'सभी अध्याय':'All chapters'}</Link>{next?<Link href={link(next)}>{hi?'अगला श्लोक':'Next verse'}<ArrowRight size={17}/></Link>:<span/>}</nav>
 <p className="library-attribution">{hi?'स्रोत:':'Source:'} <a href="https://github.com/AdiyogiArts/gita-json" target="_blank" rel="noopener noreferrer">Adiyogi Arts Bhagavad Gita Dataset (MIT) <ExternalLink size={13}/></a>. {hi?'यह अध्ययन के लिए है, भविष्यवाणी नहीं।':'This is for study and reflection, not divination or a substitute for professional advice.'}</p>
 </main><footer className="library-footer"><div className="library-wrap">UTTAR · Ancient Wisdom. Clearer Answers. <Link href="/gita/library">{hi?'सम्पूर्ण गीता':'Complete Gita'} <ArrowRight size={15}/></Link></div></footer></div>
}
