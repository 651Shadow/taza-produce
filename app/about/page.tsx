'use client';

import { AboutHero } from '@/components/about/AboutHero';
import { AboutStory } from '@/components/about/AboutStory';
import { AboutPromise } from '@/components/about/AboutPromise';
import { AboutVisit } from '@/components/about/AboutVisit';

export default function AboutPage() {
  return (
    <main id="main">
      <AboutHero />
      <AboutStory />
      <AboutPromise />
      <AboutVisit />
    </main>
  );
}
