'use client';

import { useEffect, useRef } from 'react';

/**
 * Scroll-reveal hook (bidirectional). Adds the `in` class when the element
 * enters the viewport and removes it when it leaves, so content fades/slides
 * both on scroll-down and scroll-up. Honors prefers-reduced-motion by making
 * the element visible immediately without an observer.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      el.classList.add('in');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('in');
          } else {
            el.classList.remove('in');
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
