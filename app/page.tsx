'use client';

import { Reveal } from '@/components/Reveal';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import Why from '@/components/home/Why';
import VisitBanner from '@/components/home/VisitBanner';

export default function Page() {
  return (
    <main id="main">
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <Categories />
      </Reveal>
      <Reveal>
        <Why />
      </Reveal>
      <Reveal>
        <VisitBanner />
      </Reveal>
    </main>
  );
}
