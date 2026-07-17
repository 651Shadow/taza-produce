import { NextResponse } from 'next/server';
import { rateLimit, clientIp } from '@/lib/rateLimit';

export const runtime = 'nodejs';

// Model A: order online, pay on pickup. We collect the order and confirm;
// no online charge. A live Stripe PaymentIntent would be created here once a
// US Stripe account + keys are configured (see env.example).

const PHONE_RE = /^\+?[0-9\s\-()]{7,20}$/;

export async function POST(req: Request) {
  const ip = clientIp(req.headers);
  const { allowed, retryAfterSec } = rateLimit(`checkout:${ip}`, 8, 60_000);
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

  const { items, name, phone, pickupTime } = (body ?? {}) as Record<string, unknown>;

  const errors: Record<string, string> = {};
  if (!Array.isArray(items) || items.length === 0) errors.items = 'Your cart is empty.';
  if (Array.isArray(items)) {
    for (const it of items) {
      const i = it as Record<string, unknown>;
      if (typeof i?.id !== 'string' || i.id.length === 0 || i.id.length > 50) {
        errors.items = 'One or more items are invalid.';
        break;
      }
      if (!Number.isInteger(i?.qty) || (i.qty as number) < 1 || (i.qty as number) > 99) {
        errors.items = 'Item quantities must be between 1 and 99.';
        break;
      }
    }
  }
  if (typeof name !== 'string' || name.trim().length < 2 || name.length > 120)
    errors.name = 'Please enter your name.';
  if (typeof phone !== 'string' || !PHONE_RE.test(phone))
    errors.phone = 'Please enter a valid phone number.';
  if (typeof pickupTime !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(pickupTime))
    errors.pickupTime = 'Please choose a valid pickup time.';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: 'Validation failed.', fields: errors }, { status: 400 });
  }

  const orderId = `TP-${Date.now().toString(36).toUpperCase()}`;
  console.info('[checkout] order', orderId, 'for', phone);

  return NextResponse.json(
    { ok: true, orderId, message: 'Order received. Pay on pickup.' },
    { status: 200 },
  );
}
