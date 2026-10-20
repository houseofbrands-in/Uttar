import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shri Ram Shalaka Prashnavali — Traditional Ramcharitmanas',
  description: 'Explore the traditional 15×15 Shri Ram Shalaka Prashnavali from Ramcharitmanas. Select an akshara to read its chaupai, source context and reflection.',
  alternates: { canonical: '/ram-shalaka' },
  openGraph: { title: 'Shri Ram Shalaka Prashnavali | UTTAR',
    description: 'Experience the traditional Shri Ram Shalaka and explore its Ramcharitmanas chaupai.', url: '/ram-shalaka',
    images: [{ url: '/rama.webp', alt: 'Shri Rama artwork — Ram Shalaka Prashnavali' }] },
  twitter: { card: 'summary_large_image', title: 'Shri Ram Shalaka | UTTAR',
    description: 'Traditional Ram Shalaka devotional reflection.', images: ['/rama.webp'] },
};
export default function RamShalakaLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
