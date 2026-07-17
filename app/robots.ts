import type { MetadataRoute } from 'next';

const BASE = 'https://taza-produce-g2qijnw1o-651shadows-projects.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
