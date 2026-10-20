import type { Metadata } from 'next';

const site = 'https://getuttar.com';
const title = 'Ram Shalaka Prashnavali Online | श्री राम शलाका';
const description = 'Use Shri Ram Shalaka Prashnavali online: choose one of 225 aksharas yourself or let UTTAR select randomly. Read the traditional Ramcharitmanas chaupai, source and meaning in Hindi or English.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/ram-shalaka' },
  openGraph: {
    type: 'website',
    title: `${title} | UTTAR`,
    description,
    url: '/ram-shalaka',
    images: [{ url: '/rama.webp', alt: 'Shri Rama artwork — UTTAR Ram Shalaka' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | UTTAR`,
    description,
    images: ['/rama.webp'],
  },
};

export default function RamShalakaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${site}/ram-shalaka#webpage`,
        url: `${site}/ram-shalaka`,
        name: 'Shri Ram Shalaka Prashnavali',
        description,
        inLanguage: ['en', 'hi'],
        isPartOf: { '@id': `${site}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${site}/ram-shalaka#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'UTTAR', item: site },
          { '@type': 'ListItem', position: 2, name: 'Ram Shalaka Prashnavali', item: `${site}/ram-shalaka` },
        ],
      },
    ],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    {children}
  </>;
}
