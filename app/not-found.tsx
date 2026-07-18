'use client';

import Link from 'next/link';
import { useT } from '@/components/LocaleProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  const t = useT();
  return (
    <>
      <Header />
      <main id="main" className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-green700">404</p>
        <h1 className="mt-2 text-3xl font-bold text-text">{t('notfound.title')}</h1>
        <p className="mt-3 text-textSoft">{t('notfound.body')}</p>
        <Link
          href="/"
          className="mt-6 rounded-md bg-green700 dark:bg-[#2f6b43] px-5 py-3 text-sm font-semibold text-onBrand transition-colors hover:bg-green500 dark:hover:bg-[#274f33]"
        >
          {t('notfound.home')}
        </Link>
      </main>
      <Footer />
    </>
  );
}
