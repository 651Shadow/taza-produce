import type { MetadataRoute } from 'next';

const BASE = 'https://taza-produce-g2qijnw1o-651shadows-projects.vercel.app';

const ROUTES = ['', '/about', '/shop', '/hours', '/gallery', '/contact', '/legal'];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
