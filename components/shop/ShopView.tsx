'use client';

import { Reveal } from '@/components/Reveal';
import { useT } from '@/components/LocaleProvider';
import { useCart } from './CartContext';
import { products } from './products';
import { ProductCard } from './ProductCard';

export function ShopView() {
  const t = useT();
  const { count } = useCart();

  return (
    <main id="main" className="mx-auto max-w-6xl px-5 py-10">
      <Reveal className="mb-10">
        <p className="text-sm font-medium text-green700">{t('shop.eyebrow')}</p>
        <h1 className="mt-2 text-4xl font-bold text-text">{t('shop.hero')}</h1>
        <p className="mt-3 max-w-2xl text-textSoft">{t('shop.sub')}</p>

        <p className="mt-5 text-sm text-textSoft">
          {t('cart.checkout')}: {count} {t('cart.short')}
        </p>
      </Reveal>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </main>
  );
}
