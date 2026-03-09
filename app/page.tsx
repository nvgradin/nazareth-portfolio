'use client';

import { useState } from 'react';
import { HomeHero, IntroOverlay } from '@/components/home';

export default function Home() {
  // false → hero montado pero invisible (overlay encima)
  // true  → overlay hace fade, hero ya visible debajo
  const [heroReady, setHeroReady] = useState(false);

  return (
    <>
      {/* Hero siempre en DOM — imagen precargada, invisible hasta que el overlay hace fade */}
      <HomeHero animate={heroReady} hidden={!heroReady} />

      {/* Overlay — llama onDone 400ms antes de su fade, así el hero ya está pintado */}
      <IntroOverlay onDone={() => setHeroReady(true)} />
    </>
  );
}
