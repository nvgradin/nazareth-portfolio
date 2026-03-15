'use client';

import { useState } from 'react';
import { HomeHero, IntroOverlay, HomeProjects, HomeBio, HomeCTA } from '@/components/home';
import { Footer } from '@/components/layout';

export default function Home() {
  // false → hero montado pero invisible (overlay encima)
  // true  → overlay hace fade, hero ya visible debajo
  const [heroReady, setHeroReady] = useState(false);

  return (
    <>
      {/* Hero */}
      <div style={{ position: 'relative' }}>
        <HomeHero animate={heroReady} hidden={!heroReady} />
        <IntroOverlay onDone={() => setHeroReady(true)} />
      </div>

      {/* Proyectos — sube sobre el hero */}
      <HomeProjects />

      {/* Bio */}
      <HomeBio />

      {/* CTA + Footer */}
      <HomeCTA />
      <Footer />
    </>
  );
}
