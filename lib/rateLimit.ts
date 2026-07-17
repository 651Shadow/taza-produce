// Simple in-memory sliding-window rate limiter.
//
// Intentionally dependency-free so it runs on any Node host (Vercel, a VPS,
// or `next start`). For multi-instance / serverless scale-out, swap the store
// for Redis (e.g. @upstash/ratelimit) — the public API below is the only
// thing that changes.
//
// Requests are keyed by a stable client identifier (IP). Each hit records a
// timestamp; we keep only those inside the window and reject when the count
// reaches the limit.

interface Bucket {
  hits: number[];
}

const store = new Map<string, Bucket>();

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterSec: number;
}

export function rateLimit(
  key: string,
  limit = 10,
  windowMs = 60_000,
): RateLimitResult {
  const now = Date.now();
  const bucket = store.get(key) ?? { hits: [] };

  // Drop timestamps outside the window.
  bucket.hits = bucket.hits.filter((t) => now - t < windowMs);

  if (bucket.hits.length >= limit) {
    const oldest = bucket.hits[0] ?? now;
    const retryAfterSec = Math.ceil((oldest + windowMs - now) / 1000);
    return { allowed: false, remaining: 0, retryAfterSec: Math.max(1, retryAfterSec) };
  }

  bucket.hits.push(now);
  store.set(key, bucket);
  return { allowed: true, remaining: limit - bucket.hits.length, retryAfterSec: 0 };
}

// Best-effort client IP from common proxy headers (Vercel / NGINX / CF).
export function clientIp(headers: Headers): string {
  const fwd = headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0]!.trim();
  return headers.get('x-real-ip') || 'unknown';
}
