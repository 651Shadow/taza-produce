'use client';

import { useT } from '@/components/LocaleProvider';
import { useCart } from './CartContext';
import { priceOf } from './products';

export function CartDrawer({
  open,
  onClose,
  onCheckout,
}: {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}) {
  const t = useT();
  const { items, removeItem, total, count } = useCart();

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex justify-end bg-deep/40"
      role="dialog"
      aria-modal="true"
      aria-label={t('cart.title')}
      onClick={onClose}
    >
      <aside
        className="flex h-full w-full max-w-md flex-col bg-surface shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line p-4">
          <h2 className="text-lg font-semibold text-text">{t('cart.title')}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('cart.close')}
            className="rounded-md border border-line px-3 py-1 text-sm text-text hover:bg-surface2"
          >
            {t('cart.close')}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {count === 0 ? (
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
                        className="rounded-md border border-line px-2 py-1 text-xs text-text hover:bg-surface2"
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
            onClick={onCheckout}
            className="w-full rounded-md bg-green700 px-4 py-3 text-sm font-semibold text-onBrand transition-colors hover:bg-green500 disabled:opacity-50"
          >
            {t('cart.checkout')}
          </button>
        </div>
      </aside>
    </div>
  );
}
