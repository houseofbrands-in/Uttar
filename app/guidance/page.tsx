import type { Metadata } from 'next';
import Link from 'next/link';
import { guidanceTopics } from '../../lib/guidance-content';

export const metadata: Metadata = {
  title:'Bhagavad Gita Guidance for Everyday Life',
  description:'Explore Bhagavad Gita reflections for anxiety, stress, money worries, career confusion and anger. Read original verses and practical perspectives.',
  alternates:{canonical:'/guidance'},
  openGraph:{title:'Gita Guidance for Everyday Life | UTTAR',description:'Explore thoughtful Bhagavad Gita reflections for questions that matter.',url:'/guidance',images:['/krishna.webp']},
};

export default function GuidanceHome(){return <main style={{background:'#fffaf2',color:'#0b1f3b',minHeight:'100vh',padding:'32px 20px 80px'}}>
  <div style={{maxWidth:1000,margin:'0 auto'}}>
  <nav style={{marginBottom:38}}><Link href="/" style={{color:'#966323'}}>← UTTAR homepage</Link></nav>
  <p style={{color:'#98662f',fontWeight:700,letterSpacing:2,fontSize:12}}>ANCIENT WISDOM · MODERN QUESTIONS</p>
  <h1 style={{fontFamily:'Georgia,serif',fontSize:'clamp(36px,6vw,60px)',lineHeight:1.13,margin:'16px 0'}}>Bhagavad Gita guidance for everyday life</h1>
  <p style={{fontSize:18,lineHeight:1.75,maxWidth:790,color:'#465364'}}>Explore questions about uncertainty, emotions, money and work through authentic Gita verses. These are thoughtful modern reflections—not predictions, medical advice or financial recommendations.</p>
  <section aria-label="Guidance topics" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,300px),1fr))',gap:18,margin:'42px 0'}}>
    {guidanceTopics.map(t=><article key={t.slug} style={{background:'#fff',border:'1px solid #e7d9c5',borderRadius:18,padding:24}}>
      <span style={{fontSize:11,color:'#996328',letterSpacing:1.2,fontWeight:700}}>{t.eyebrow}</span>
      <h2 style={{fontFamily:'Georgia,serif',fontSize:25,margin:'12px 0'}}>{t.title}</h2>
      <p style={{color:'#53606b',lineHeight:1.75}}>{t.description}</p>
      <Link href={`/guidance/${t.slug}`} style={{display:'inline-block',color:'#87561c',fontWeight:700,marginTop:10}}>Explore reflection →</Link>
    </article>)}
  </section>
  <p style={{fontSize:14,color:'#53606b'}}>Prefer to ask your own question in English, हिन्दी or Hinglish? <Link href="/gita" style={{color:'#89591e',textDecoration:'underline'}}>Explore the Gita experience</Link>.</p>
  </div></main>}
