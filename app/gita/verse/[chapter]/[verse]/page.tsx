import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {chapters,getVerse,verses} from '../../../../../lib/gita';
import VerseReader from './reader';

type Params={params:Promise<{chapter:string;verse:string}>};
export async function generateStaticParams(){return verses.map(v=>({chapter:String(v.chapter),verse:String(v.verse)}))}
export async function generateMetadata({params}:Params):Promise<Metadata>{
 const {chapter,verse}=await params;
 const v=getVerse(Number(chapter),Number(verse));
 if(!v)return {title:'Verse not found',robots:{index:false,follow:false}};
 const url=`/gita/verse/${v.chapter}/${v.verse}`;
 const description=`Bhagavad Gita ${v.chapter}.${v.verse}: Read the original Sanskrit verse with English and Hindi source translations. Explore its context in the UTTAR Gita library.`;
 return {
  title:`Bhagavad Gita ${v.chapter}.${v.verse} — Sanskrit, Hindi & English`,description,
  alternates:{canonical:url},
  openGraph:{type:'article',title:`Bhagavad Gita ${v.chapter}.${v.verse} | UTTAR`,description,url,
   images:[{url:'/krishna.webp',alt:'Shri Krishna artwork — UTTAR Bhagavad Gita'}]},
  twitter:{card:'summary_large_image',title:`Bhagavad Gita ${v.chapter}.${v.verse} | UTTAR`,description,images:['/krishna.webp']},
 };
}
export default async function Page({params}:Params){const {chapter,verse}=await params;const v=getVerse(Number(chapter),Number(verse));if(!v)notFound();return <VerseReader verse={v} chapterCount={chapters[v.chapter-1].count}/>}
