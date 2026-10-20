import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guidanceTopics, getGuidanceTopic } from '../../../lib/guidance-content';
import { getVerse } from '../../../lib/gita';

type Params={params:Promise<{topic:string}>};
export function generateStaticParams(){return guidanceTopics.map(t=>({topic:t.slug}));}
export async function generateMetadata({params}:Params):Promise<Metadata>{
 const {topic:slug}=await params;const t=getGuidanceTopic(slug);
 if(!t)return {title:'Page not found',robots:{index:false,follow:false}};
 const url=`/guidance/${t.slug}`;
 return {title:t.title,description:t.description,alternates:{canonical:url},openGraph:{type:'article',title:`${t.title} | UTTAR`,description:t.description,url,images:['/krishna.webp']},twitter:{card:'summary_large_image',title:`${t.title} | UTTAR`,description:t.description,images:['/krishna.webp']}};
}
export default async function GuidanceArticle({params}:Params){
 const {topic:slug}=await params;const t=getGuidanceTopic(slug);if(!t)notFound();
 return <main style={{background:'#fffaf2',color:'#0b1f3b',minHeight:'100vh',padding:'28px 20px 80px'}}><div style={{maxWidth:800,margin:'0 auto'}}>
 <nav style={{margin:'0 0 35px',fontSize:14}}><Link href="/" style={{color:'#865a2a'}}>UTTAR</Link><span> / </span><Link href="/guidance" style={{color:'#865a2a'}}>Guidance</Link><span> / {t.eyebrow.toLowerCase()}</span></nav>
 <header><p style={{color:'#a46a2e',fontSize:12,letterSpacing:2,fontWeight:800}}>{t.eyebrow}</p><h1 style={{fontFamily:'Georgia,serif',fontSize:'clamp(35px,5.8vw,55px)',lineHeight:1.14,margin:'15px 0 23px'}}>{t.title}</h1>
 {t.intro.map((p,i)=><p key={i} style={{fontSize:18,lineHeight:1.85,color:'#34485b'}}>{p}</p>)}</header>
 <section style={{background:'#f4ead9',border:'1px solid #e7d5ba',padding:25,borderRadius:17,margin:'40px 0'}}><h2 style={{fontFamily:'Georgia,serif',fontSize:26,marginTop:0}}>Questions people bring to this topic</h2><ul style={{lineHeight:1.95,paddingLeft:22}}>{t.questions.map(q=><li key={q}>{q}</li>)}</ul></section>
 {t.sections.map((s,i)=><section key={i} style={{margin:'35px 0'}}><h2 style={{fontFamily:'Georgia,serif',fontSize:29,marginBottom:14}}>{s.heading}</h2>{s.body.map((p,j)=><p key={j} style={{fontSize:16,lineHeight:1.85,color:'#34485b'}}>{p}</p>)}</section>)}
 <section style={{margin:'42px 0'}}><h2 style={{fontFamily:'Georgia,serif',fontSize:30}}>Explore the original Gita verses</h2><p style={{lineHeight:1.75,color:'#586575'}}>The verses below link to UTTAR's verified Sanskrit text and source English/Hindi translations. Interpretive explanations on this page are modern applications, not translations of the scripture.</p>
 {t.verses.map(({chapter,verse,reason})=>{const original=getVerse(chapter,verse);return <article key={`${chapter}-${verse}`} style={{background:'#fff',border:'1px solid #e8dbc9',borderRadius:14,padding:22,margin:'14px 0'}}><h3 style={{margin:'0 0 9px'}}>Bhagavad Gita {chapter}.{verse}</h3><p style={{color:'#465364',lineHeight:1.75,margin:'0 0 8px'}}>{reason}</p>{original&&<p lang="sa-Deva" style={{fontFamily:'serif',fontSize:17,lineHeight:1.9,color:'#263d54'}}>{original.sanskrit.split('\n').filter(Boolean).slice(0,2).join(' ').slice(0,180)}</p>}<Link href={`/gita/verse/${chapter}/${verse}`} style={{color:'#966024',fontWeight:700}}>Read original Sanskrit and translations →</Link></article>})}</section>
 <section style={{background:'#0b1f3b',borderRadius:20,padding:30,color:'#fff',margin:'40px 0'}}><h2 style={{fontFamily:'Georgia,serif',fontSize:29,margin:'0 0 15px'}}>One practical step for today</h2><p style={{lineHeight:1.8,fontSize:17}}>{t.action}</p><Link href="/gita" style={{background:'#f1c381',color:'#1e2632',display:'inline-block',borderRadius:30,padding:'12px 20px',fontWeight:800,marginTop:12}}>Ask your own Gita question →</Link><p style={{fontSize:13,color:'#e7dac7',marginTop:23}}>Hinglish example: “{t.hinglish}”</p></section>
 {t.caution&&<aside style={{background:'#f1efe9',color:'#47515b',padding:21,borderRadius:12,fontSize:14,lineHeight:1.8}}><strong>Important:</strong> {t.caution}</aside>}
 <nav style={{marginTop:45,borderTop:'1px solid #e6d8c3',paddingTop:23}}><h2 style={{fontFamily:'Georgia,serif',fontSize:24}}>Explore another perspective</h2><div style={{display:'flex',flexWrap:'wrap',gap:12}}>{guidanceTopics.filter(x=>x.slug!==t.slug).map(x=><Link key={x.slug} href={`/guidance/${x.slug}`} style={{background:'#fff',border:'1px solid #e4d7c5',padding:'9px 13px',borderRadius:30,fontSize:13,color:'#744c20'}}>{x.eyebrow} →</Link>)}</div></nav>
 <footer style={{marginTop:40,fontSize:12,lineHeight:1.7,color:'#667078'}}>UTTAR · Ancient Wisdom. Clearer Answers. For reflection and learning, not predictions or a substitute for qualified professional advice. Scripture source: Adiyogi Arts Gita dataset (MIT).</footer>
 </div></main>
}
