'use client';

import { useEffect, useRef, useState } from 'react';
import { useT } from '@/components/LocaleProvider';
import { useCart } from './CartContext';
import { priceOf } from './products';
import { Checkout } from './Checkout';

export function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const t = useT();
  const { items, removeItem, total, count } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  // Keyboard + focus management (WAI-ARIA dialog pattern).
  useEffect(() => {
    if (!open) return;

    lastFocused.current = document.activeElement as HTMLElement | null;
    // Move focus into the dialog (close button is always present).
    closeRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      // Restore focus to the trigger on close.
      lastFocused.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex justify-end bg-deep/60"
      role="dialog"
      aria-modal="true"
      aria-label={t('cart.title')}
      onClick={onClose}
    >
      <aside
        ref={panelRef}
        className="flex h-full w-full max-w-md flex-col bg-surface shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line p-4">
          <h2 className="text-lg font-semibold text-text">{t('cart.title')}</h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t('cart.close')}
            className="min-h-[44px] rounded-md border border-line px-3 py-1 text-sm text-text hover:bg-surface2"
          >
            {t('cart.close')}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {checkoutOpen ? (
            <Checkout onDone={() => { setCheckoutOpen(false); onClose(); }} />
          ) : count === 0 ? (
            <p className="text-sm text-textSoft">{t('cart.empty')}</p>
          ) : (
            <ul className="flex flex-col gap-3">
              {items.map((item) => {
                const line = (priceOf(item.id) * item.qty).toFixed(2);
                return (
                  <li key={item.id} className="flex items-start justify-between gap-3 border-b border-line pb-3">
                    <div className="min-w-0">
                      <p className="truncate font-medium text-text">
                        {t(`prod.${item.id}.name`)}
                      </p>
                      <p className="text-xs text-textSoft">
                        {item.qty} x ${priceOf(item.id).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-green900 dark:text-green300">${line}</span>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="min-h-[44px] rounded-md border border-line px-2 py-1 text-xs text-text hover:bg-surface2"
                      >
                        {t('cart.remove')}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-line p-4">
          <div className="mb-3 flex items-center justify-between text-base font-semibold text-text">
            <span>{t('cart.total')}</span>
            <span className="text-green900 dark:text-green300">${total.toFixed(2)}</span>
          </div>
          <button
            type="button"
            disabled={count === 0}
            onClick={() => setCheckoutOpen(true)}
            className="min-h-[44px] w-full rounded-md bg-green700 dark:bg-deep px-4 py-3 text-sm font-semibold text-onBrand transition-colors hover:bg-green500 disabled:opacity-50"
          >
            {t('cart.checkout')}
          </button>
        </div>
      </aside>
    </div>
  );
}
