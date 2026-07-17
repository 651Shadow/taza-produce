import { NextResponse } from 'next/server';
import { rateLimit, clientIp } from '@/lib/rateLimit';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const ip = clientIp(req.headers);
  const { allowed, retryAfterSec } = rateLimit(`contact:${ip}`, 10, 60_000);
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again shortly.' },
      { status: 429, headers: { 'Retry-After': String(retryAfterSec) } },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;

  const errors: Record<string, string> = {};
  if (typeof name !== 'string' || name.trim().length < 2 || name.length > 200)
    errors.name = 'Please enter your name (2-200 characters).';
  if (typeof email !== 'string' || !EMAIL_RE.test(email) || email.length > 200)
    errors.email = 'Please enter a valid email address.';
  if (typeof message !== 'string' || message.trim().length < 1 || message.length > 5000)
    errors.message = 'Please enter a message (up to 5000 characters).';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: 'Validation failed.', fields: errors }, { status: 400 });
  }

  // Production wiring point: forward to email/CRM here (e.g. Resend, a ticket
  // system, or a queue). No credentials are present in this skills-test build,
  // so we acknowledge receipt server-side and stop.
  console.info('[contact] received message from', email);

  return NextResponse.json({ ok: true, message: 'Message received.' }, { status: 200 });
}
