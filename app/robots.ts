import type { MetadataRoute } from 'next';

const BASE = 'https://taza-produce-pqd23vxb2-651shadows-projects.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
