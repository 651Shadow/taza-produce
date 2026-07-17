import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

async function base(): Promise<string> {
  const h = await headers();
  const host = h.get('x-forwarded-host') || h.get('host') || '';
  const proto = h.get('x-forwarded-proto') || 'https';
  return host ? `${proto}://${host}` : '';
}

export default async function robots(): Promise<MetadataRoute.Robots> {
  const BASE = await base();
  return {
    rules: { userAgent: '*', allow: '/' },
    ...(BASE ? { sitemap: `${BASE}/sitemap.xml` } : {}),
  };
}
