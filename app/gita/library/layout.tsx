import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bhagavad Gita — All 700 Verses in Sanskrit, Hindi & English',
  description: 'Browse the complete Bhagavad Gita: 18 chapters and 700 verses, with original Sanskrit, Hindi and English source translations. Search and read each verse.',
  alternates: { canonical: '/gita/library' },
  openGraph: { title: 'Bhagavad Gita — 700 Verses | UTTAR',
    description: 'Explore 18 chapters and 700 Bhagavad Gita verses in Sanskrit, Hindi and English.', url: '/gita/library',
    images: [{ url: '/krishna.webp', alt: 'Shri Krishna artwork — complete Gita verse library' }] },
  twitter: { card: 'summary_large_image', title: 'Bhagavad Gita — 700 Verses | UTTAR',
    description: '18 chapters, original Sanskrit and English/Hindi meanings.', images: ['/krishna.webp'] },
};
export default function LibraryLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
