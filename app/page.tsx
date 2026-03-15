'use client';

import { useState } from 'react';
import { HomeHero, IntroOverlay, HomeProjects, HomeBio, HomeCTA } from '@/components/home';
import { Footer } from '@/components/layout';

export default function Home() {
  // false → hero montado pero invisible (overlay encima)
  // true  → overlay hace fade, hero ya visible debajo
  const [heroReady, setHeroReady] = useState(false);

  return (
    <div style={{
      height: '100vh',
      overflowY: 'scroll',
      scrollSnapType: 'y mandatory',
      scrollBehavior: 'smooth',
    }}>
      {/* Hero — snap section */}
      <div style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always', position: 'relative' }}>
        <HomeHero animate={heroReady} hidden={!heroReady} />
        <IntroOverlay onDone={() => setHeroReady(true)} />
      </div>

      {/* Proyectos destacados — snap section */}
      <div style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
        <HomeProjects />
      </div>

      {/* Bio — snap section */}
      <div style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
        <HomeBio />
      </div>

      {/* CTA — snap section */}
      <div style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
        <HomeCTA />
        <Footer />
      </div>
    </div>
  );
}
