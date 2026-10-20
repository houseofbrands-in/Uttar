import Image from 'next/image';
import { ArrowRight, BookOpen, Compass, Heart, Leaf, ShieldCheck, Sparkles, Sun, Flower2 } from 'lucide-react';

function Logo() {
  return <a href="/" className="logo" aria-label="UTTAR homepage"><Image src="/lotus.svg" alt="" width={46} height={46} /><span>UTTAR</span></a>;
}

export default function Home() {
  return <>
    <header className="site-header wrap">
      <Logo />
      <nav aria-label="Main navigation"><a href="#paths">Explore</a><a href="#how">How it works</a><a href="#about">Our approach</a><a href="/guidance">Life questions</a></nav>
      <a className="header-cta" href="#paths">Get started <ArrowRight size={17} /></a>
    </header>
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <Image src="/hero-valley.webp" alt="Golden sunrise over an Indian mountain valley, with a person reflecting beside a lake" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-wash" aria-hidden="true" />
        <div className="wrap hero-inner">
          <div className="eyebrow"><Sparkles size={16} /> AN INVITATION TO FIND CLARITY</div>
          <h1 id="hero-title">Your questions<br />deserve a moment<br /><em>of clarity.</em></h1>
          <p>Ancient wisdom from the Bhagavad Gita and Ramcharitmanas, for a more meaningful tomorrow.</p>
          <div className="journey-steps" aria-label="The UTTAR journey"><span><Flower2 size={17} /> Ask</span><span><Sun size={17} /> Discover</span><span><BookOpen size={17} /> Reflect</span><span><Leaf size={17} /> Move forward</span></div>
          <a className="primary-button" href="#paths">Find your path <ArrowRight size={18} /></a>
        </div>
      </section>
      <section className="promises wrap" id="about" aria-label="Our approach">
        <div><Flower2 size={26} /><strong>Timeless wisdom</strong><span>For modern life</span></div>
        <div><BookOpen size={26} /><strong>Two sacred scriptures</strong><span>Gita · Ramcharitmanas</span></div>
        <div><Compass size={26} /><strong>Clear explanations</strong><span>In simple language</span></div>
        <div><Heart size={26} /><strong>Reflect at your pace</strong><span>Free to explore</span></div>
      </section>
      <section className="path-section wrap" id="paths">
        <div className="section-heading"><span className="section-kicker">TWO SACRED PATHS · ONE PURPOSE</span><h2>Choose your path</h2><p>Explore the wisdom of the Bhagavad Gita and the traditional Shri Ram Shalaka. Both experiences are ready for you to discover.</p></div>
        <div className="path-grid">
          <article className="path-card gita">
            <Image src="/krishna.webp" alt="Illustration of Shri Krishna with his flute beside a temple at sunset" fill sizes="(max-width: 760px) 100vw, 50vw" className="card-image" />
            <div className="card-shade" aria-hidden="true" />
            <div className="path-content"><span className="card-label">THE PATH OF INSIGHT</span><h3>Bhagavad Gita</h3><p>Wisdom for life's choices, inner courage and a calmer mind.</p><div className="tag-row"><span>18 chapters</span><span>Verse reflections</span></div><a href="/gita" className="card-button">Explore Gita <ArrowRight size={18} /></a><small>Read verified Sanskrit and explore a reflection</small></div>
          </article>
          <article className="path-card ram">
            <Image src="/rama.webp" alt="Illustration of Shri Rama carrying a bow beside a temple at golden sunset" fill sizes="(max-width: 760px) 100vw, 50vw" className="card-image" />
            <div className="card-shade" aria-hidden="true" />
            <div className="path-content"><span className="card-label">THE PATH OF DEVOTION</span><h3>Ramcharitmanas</h3><p>Guidance through devotion, values and righteous living.</p><div className="tag-row"><span>Traditional Ram Shalaka</span><span>Meaning &amp; context</span></div><a className="card-button" href="/ram-shalaka">Explore Ram Shalaka <ArrowRight size={18} /></a></div>
          </article>
        </div>
      </section>
      <section className="how-section" id="how"><div className="wrap"><div className="section-heading"><span className="section-kicker">A SIMPLE, MEANINGFUL EXPERIENCE</span><h2>How it will work</h2><p>Four steps from a question to a thoughtful perspective.</p></div><div className="steps"><div><span><Flower2 size={23} /></span><h3>1. Bring a question</h3><p>Think about what is on your mind.</p></div><div><span><BookOpen size={23} /></span><h3>2. Choose a path</h3><p>Gita or Ramcharitmanas.</p></div><div><span><Sparkles size={23} /></span><h3>3. Discover a passage</h3><p>Read an authentic text with its source.</p></div><div><span><Leaf size={23} /></span><h3>4. Read &amp; reflect</h3><p>Consider its meaning and your next step.</p></div></div></div></section>
      <section className="quote-wrap wrap">
        <div className="bottom-quote"><Image src="/lotus-lake.webp" alt="Glowing lotus flowers floating on a tranquil lake at sunset" fill sizes="(max-width: 760px) 100vw, 1140px" className="quote-image" /><div className="quote-overlay" /><div className="quote-content"><span className="section-kicker">AN INVITATION TO REFLECT</span><h2>Ancient wisdom still has answers<br />for today's questions.</h2><a href="#paths">Begin your journey <ArrowRight size={18} /></a></div></div>
      </section>
    </main>
    <footer className="wrap"><Logo /><span>© {new Date().getFullYear()} UTTAR · getuttar.com</span><small>For reflection, not predictions or a substitute for professional advice.</small></footer>
  </>;
}
