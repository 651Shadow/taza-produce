import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

function base(): string {
  const h = headers();
  const host = h.get('x-forwarded-host') || h.get('host') || '';
  const proto = h.get('x-forwarded-proto') || 'https';
  return host ? `${proto}://${host}` : '';
}

const ROUTES = ['', '/about', '/shop', '/hours', '/gallery', '/contact', '/legal'];

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE = base();
  if (!BASE) return [];
  return ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));
}
