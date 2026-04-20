'use client';

import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function useMagneticEnabled(): boolean {
  const prefersReduced = useReducedMotion();
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setCanHover(mq.matches);
    const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return canHover && !prefersReduced;
}
