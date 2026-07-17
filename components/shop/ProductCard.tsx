'use client';

import { Reveal } from '@/components/Reveal';
import { useT } from '@/components/LocaleProvider';
import { useCart } from './CartContext';
import type { Product } from './products';

export function ProductCard({ product }: { product: Product }) {
  const t = useT();
  const { addItem } = useCart();
  const price = product.price.toFixed(2);

  return (
    <Reveal as="article" className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/${product.image}`}
        alt={t(`prod.${product.id}.name`)}
        loading="lazy"
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-lg font-semibold text-text">{t(`prod.${product.id}.name`)}</h3>
        <p className="flex-1 text-sm text-textSoft">{t(`prod.${product.id}.desc`)}</p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="text-base font-bold text-green900 dark:text-green300">${price}</span>
          <button
            type="button"
            onClick={() => addItem(product.id)}
            className="rounded-md bg-green700 dark:bg-deep px-4 py-2 text-sm font-semibold text-onBrand transition-colors hover:bg-green500"
          >
            {t('cta.add')}
          </button>
        </div>
      </div>
    </Reveal>
  );
}
