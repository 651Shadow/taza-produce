'use client';

// Checkout (Model A: order online, pay on pickup).
// Posts the order to /api/checkout (validated + rate-limited server route).
// No online charge; payment happens on pickup.

import { useState, type FormEvent } from 'react';
import { useT } from '@/components/LocaleProvider';
import { useCart } from './CartContext';

type FieldErrors = Partial<Record<'name' | 'phone' | 'pickupTime' | 'items', string>>;

export function Checkout({ onDone }: { onDone: () => void }) {
  const t = useT();
  const { items, total, count, clear } = useCart();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [placed, setPlaced] = useState(false);
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState('');

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (count === 0) return;
    setBusy(true);
    setErrors({});
    setFormError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, name, phone, pickupTime }),
      });
      if (res.status === 429) {
        setFormError(t('checkout.ratelimit'));
        return;
      }
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.fields) setErrors(data.fields as FieldErrors);
        setFormError(data.error || t('checkout.error'));
        return;
      }
      setPlaced(true);
      clear();
    } catch {
      setFormError(t('checkout.error'));
    } finally {
      setBusy(false);
    }
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

  const inputClass =
    'rounded-md border border-line bg-bg px-3 py-2 text-text focus:border-green700 focus:outline-none focus:ring-1 focus:ring-green700';

  const fieldError = (key: keyof FieldErrors) =>
    errors[key] ? (
      <p id={`co-${key}-err`} className="mt-1 text-xs text-gold">
        {errors[key]}
      </p>
    ) : null;

  return (
    <form onSubmit={submit} className="flex flex-col gap-4 rounded-xl border border-line bg-surface p-6">
      <h3 className="text-xl font-semibold text-text">{t('checkout.title')}</h3>

      {formError && (
        <p role="alert" className="rounded-md border border-gold/40 bg-gold/10 px-3 py-2 text-sm text-gold">
          {formError}
        </p>
      )}

      <div className="flex items-center justify-between border-b border-line pb-3 text-sm text-textSoft">
        <span>{t('checkout.summary').replace('{{count}}', String(count))}</span>
        <span className="font-semibold text-green900 dark:text-green300">${total.toFixed(2)}</span>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="co-name" className="text-sm font-medium text-text">
          {t('checkout.name')}
        </label>
        <input
          id="co-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'co-name-err' : undefined}
          className={inputClass}
        />
        {fieldError('name')}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="co-phone" className="text-sm font-medium text-text">
          {t('checkout.phone')}
        </label>
        <input
          id="co-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'co-phone-err' : undefined}
          className={inputClass}
        />
        {fieldError('phone')}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="co-pickup" className="text-sm font-medium text-text">
          {t('checkout.pickup')}
        </label>
        <input
          id="co-pickup"
          type="datetime-local"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          aria-invalid={!!errors.pickupTime}
          aria-describedby={errors.pickupTime ? 'co-pickup-err' : undefined}
          className={inputClass}
        />
        {fieldError('pickupTime')}
      </div>

      <button
        type="submit"
        disabled={count === 0 || busy}
        className="mt-2 w-full rounded-md bg-green700 px-4 py-3 text-sm font-semibold text-onBrand transition-colors hover:bg-green500 disabled:opacity-50"
      >
        {busy ? t('cta.sending') : t('checkout.confirm')}
      </button>
    </form>
  );
}
