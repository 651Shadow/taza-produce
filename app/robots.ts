import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

function base(): string {
  const h = headers();
  const host = h.get('x-forwarded-host') || h.get('host') || '';
  const proto = h.get('x-forwarded-proto') || 'https';
  return host ? `${proto}://${host}` : '';
}

export default function robots(): MetadataRoute.Robots {
  const BASE = base();
  return {
    rules: { userAgent: '*', allow: '/' },
    ...(BASE ? { sitemap: `${BASE}/sitemap.xml` } : {}),
  };
}
