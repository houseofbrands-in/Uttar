import type { MetadataRoute } from 'next';
import { verses } from '../lib/gita';

const baseUrl = 'https://getuttar.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/gita', '/gita/library', '/gita/hindi', '/ram-shalaka', '/guidance', '/guidance/bhagavad-gita-for-anxiety', '/guidance/bhagavad-gita-for-stress', '/guidance/bhagavad-gita-for-money-problems', '/guidance/bhagavad-gita-for-career-confusion', '/guidance/bhagavad-gita-for-anger'];
  return [
    ...pages.map((path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1 : 0.8,
    })),
    ...verses.map((verse) => ({
      url: `${baseUrl}/gita/verse/${verse.chapter}/${verse.verse}`,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
