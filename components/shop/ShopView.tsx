'use client';

import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { useT } from '@/components/LocaleProvider';
import { CartProvider, useCart } from './CartContext';
import { products } from './products';
import { ProductCard } from './ProductCard';
import { CartDrawer } from './CartDrawer';
import { Checkout } from './Checkout';

function ShopInner() {
  const t = useT();
  const { count } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const openCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  return (
    <main id="main" className="mx-auto max-w-6xl px-5 py-10">
      {/* Skip link target anchor offset under 74px header */}
      <a href="#main" className="skip-link">{t('nav.langSwitch')}</a>

      <Reveal className="mb-10">
        <p className="text-sm font-medium text-green700">{t('shop.eyebrow')}</p>
        <h1 className="mt-2 text-4xl font-bold text-text">{t('shop.hero')}</h1>
        <p className="mt-3 max-w-2xl text-textSoft">{t('shop.sub')}</p>

        <button
          type="button"
          onClick={() => setCartOpen(true)}
          className="mt-5 rounded-md bg-green700 px-5 py-2.5 text-sm font-semibold text-onBrand transition-colors hover:bg-green500"
        >
          {t('cart.open')}{count > 0 ? ` (${count})` : ''}
        </button>
      </Reveal>

      {checkoutOpen ? (
        <Reveal>
          <Checkout onDone={() => setCheckoutOpen(false)} />
        </Reveal>
      ) : (
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      )}

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} onCheckout={openCheckout} />
    </main>
  );
}

export function ShopView() {
  return (
    <CartProvider>
      <ShopInner />
    </CartProvider>
  );
}
