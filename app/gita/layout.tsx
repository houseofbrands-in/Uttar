
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bhagavad Gita Guidance | UTTAR',
  description:
    'Explore Bhagavad Gita teachings for life, decisions, courage and inner clarity. Read authentic Sanskrit verses with English and Hindi meanings.',
  alternates: {
    canonical: 'https://getuttar.com/gita',
  },
  openGraph: {
    title: 'Bhagavad Gita Guidance | UTTAR',
    description:
      'Reflect on life’s questions through Bhagavad Gita teachings, original verses and thoughtful guidance.',
    url: 'https://getuttar.com/gita',
    type: 'website',
    images: ['/krishna.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhagavad Gita Guidance | UTTAR',
    images: ['/krishna.webp'],
  },
};

export default function GitaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
