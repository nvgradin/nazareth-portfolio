'use client';

import { useEffect } from 'react';
import { useHeaderTheme } from '@/components/layout/HeaderThemeContext';

const HEADER_H = 52;

export function AboutThemeWatcher() {
  const { setDark } = useHeaderTheme();

  useEffect(() => {
    let raf: number | null = null;

    const update = () => {
      const scanY = HEADER_H + 1;
      const els = document.querySelectorAll<HTMLElement>('[data-header-theme]');
      let active: HTMLElement | null = null;
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= scanY && rect.bottom > scanY) active = el;
      });
      if (active) setDark((active as HTMLElement).dataset.headerTheme === 'light');
      raf = null;
    };

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [setDark]);

  return null;
}
