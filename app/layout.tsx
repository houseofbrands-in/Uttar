import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const site = 'https://getuttar.com';

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: 'UTTAR | Bhagavad Gita & Ram Shalaka Reflections', template: '%s | UTTAR' },
  description: 'Explore Bhagavad Gita verses in Sanskrit, Hindi and English, and the traditional Shri Ram Shalaka. Ancient wisdom for thoughtful reflection, not predictions.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', siteName: 'UTTAR', locale: 'en_IN',
    title: 'UTTAR | Ancient Wisdom. Clearer Answers.',
    description: 'Explore Bhagavad Gita teachings and Shri Ram Shalaka for thoughtful reflection.',
    url: '/', images: [{ url: '/hero-valley.webp', alt: 'Sunrise over a peaceful mountain valley — UTTAR' }],
  },
  twitter: { card: 'summary_large_image', title: 'UTTAR | Ancient Wisdom. Clearer Answers.',
    description: 'Bhagavad Gita and Shri Ram Shalaka reflections.', images: ['/hero-valley.webp'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'Organization', '@id': `${site}/#organization`, name: 'UTTAR', url: site, logo: `${site}/lotus.svg` },
      { '@type': 'WebSite', '@id': `${site}/#website`, name: 'UTTAR', url: site,
        description: 'Bhagavad Gita and Shri Ram Shalaka reflection experience', publisher: { '@id': `${site}/#organization` },
        inLanguage: ['en', 'hi'] },
    ],
  };
  return <html lang="en"><body className={`${inter.variable} ${playfair.variable}`}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    {children}
  </body></html>;
}
