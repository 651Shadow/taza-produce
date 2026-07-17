'use client';

import { useState } from 'react';
import { useT } from '@/components/LocaleProvider';
import { useCart } from './CartContext';
import { CartDrawer } from './CartDrawer';

export default function CartButton() {
  const t = useT();
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t('cart.title')}
        className="relative rounded-md border border-line px-3 py-2 text-sm font-medium text-text hover:bg-surface2"
      >
        <span aria-hidden="true">{t('cart.short')}</span>
        {count > 0 && (
          <span
            aria-live="polite"
            className="absolute -right-2 -top-2 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-gold px-1 text-xs font-bold text-deep"
          >
            {count}
          </span>
        )}
      </button>
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
