'use client';

import { useEffect, useRef } from 'react';

/**
 * Port of the static site's bidirectional IntersectionObserver reveal.
 * Adds the `in` class when the element intersects (fade/slide up) and
 * removes it when scrolled away (up or down). When the user prefers
 * reduced motion, the element is revealed immediately without observing.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || !('IntersectionObserver' in window)) {
      el.classList.add('in');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in');
          else entry.target.classList.remove('in');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}
