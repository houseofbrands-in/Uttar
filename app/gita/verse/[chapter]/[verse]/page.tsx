import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {chapters,getVerse,verses} from '../../../../../lib/gita';
import VerseReader from './reader';

type Params={params:Promise<{chapter:string;verse:string}>};
export async function generateStaticParams(){return verses.map(v=>({chapter:String(v.chapter),verse:String(v.verse)}))}
export async function generateMetadata({params}:Params):Promise<Metadata>{const {chapter,verse}=await params;const v=getVerse(Number(chapter),Number(verse));return v?{title:`Bhagavad Gita ${v.chapter}.${v.verse} — Sanskrit, Hindi & English | UTTAR`,description:`Read Bhagavad Gita ${v.chapter}.${v.verse} in original Sanskrit, with English and Hindi meanings.`,alternates:{canonical:`https://getuttar.com/gita/verse/${v.chapter}/${v.verse}`}}:{title:'Verse not found | UTTAR'}}
export default async function Page({params}:Params){const {chapter,verse}=await params;const v=getVerse(Number(chapter),Number(verse));if(!v)notFound();return <VerseReader verse={v} chapterCount={chapters[v.chapter-1].count}/>}
