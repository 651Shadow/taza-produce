import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

async function base(): Promise<string> {
  const h = await headers();
  const host = h.get('x-forwarded-host') || h.get('host') || '';
  const proto = h.get('x-forwarded-proto') || 'https';
  return host ? `${proto}://${host}` : '';
}

const ROUTES = ['', '/about', '/shop', '/hours', '/gallery', '/contact', '/legal'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE = await base();
  if (!BASE) return [];
  return ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));
}
