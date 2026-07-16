'use client';

// Checkout (Model A: order online, pay on pickup).
//
// Stripe integration point: this is the shape a real Stripe test-mode flow
// would slot into. To go live, POST the order to a server route that creates
// a Stripe PaymentIntent and returns a client secret:
//
//   // TODO: POST /api/checkout -> Stripe PaymentIntent (test mode, keys from process.env.STRIPE_SECRET_KEY)
//   // const res = await fetch('/api/checkout', {
//   //   method: 'POST',
//   //   headers: { 'Content-Type': 'application/json' },
//   //   body: JSON.stringify({ items, name, phone, pickupTime }),
//   // });
//   // const { clientSecret } = await res.json();
//   // await stripe.confirmPayment({ clientSecret, ... });
//
// For Model A we collect the order details and confirm on pickup instead of
// charging online, so there is no network call in this component.

import { useState, type FormEvent } from 'react';
import { useT } from '@/components/LocaleProvider';
import { useCart } from './CartContext';

export function Checkout({ onDone }: { onDone: () => void }) {
  const t = useT();
  const { items, total, count, clear } = useCart();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [placed, setPlaced] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (count === 0) return;
    // Simulate a successful order confirmation (no real Stripe call).
    setPlaced(true);
    clear();
  };

  if (placed) {
    return (
      <div className="rounded-xl border border-line bg-surface p-6 text-center" role="status">
        <h3 className="text-xl font-semibold text-text">{t('checkout.placed')}</h3>
        <p className="mt-2 text-sm text-textSoft">{t('checkout.placed.body')}</p>
        <button
          type="button"
          onClick={onDone}
          className="mt-4 rounded-md bg-green700 px-4 py-2 text-sm font-semibold text-onBrand transition-colors hover:bg-green500"
        >
          {t('checkout.close')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4 rounded-xl border border-line bg-surface p-6">
      <h3 className="text-xl font-semibold text-text">{t('checkout.title')}</h3>

      <div className="flex items-center justify-between border-b border-line pb-3 text-sm text-textSoft">
        <span>{t('checkout.summary').replace('{{count}}', String(count))}</span>
        <span className="font-semibold text-green900 dark:text-green300">${total.toFixed(2)}</span>
      </div>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium text-text">{t('checkout.name')}</span>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-md border border-line bg-bg px-3 py-2 text-text"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium text-text">{t('checkout.phone')}</span>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="rounded-md border border-line bg-bg px-3 py-2 text-text"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium text-text">{t('checkout.pickup')}</span>
        <input
          type="datetime-local"
          required
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          className="rounded-md border border-line bg-bg px-3 py-2 text-text"
        />
      </label>

      <button
        type="submit"
        disabled={count === 0}
        className="mt-2 w-full rounded-md bg-green700 px-4 py-3 text-sm font-semibold text-onBrand transition-colors hover:bg-green500 disabled:opacity-50"
      >
        {t('checkout.confirm')}
      </button>
    </form>
  );
}
