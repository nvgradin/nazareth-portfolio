'use client';

import { useState } from 'react';
import { HomeHero, IntroOverlay, HomeProjects, HomeBio, ProjectsToBioTransition, MarqueeDivider, HomeCTA } from '@/components/home';
import { HomeLogos } from '@/components/home/HomeLogos';
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

      {/* Puente narrativo Projects → Bio */}
      <ProjectsToBioTransition />

      {/* Bio */}
      <HomeBio />

      {/* Prueba social — mismo fondo crema, sin corte */}
      <HomeLogos />

      {/* CTA */}
      <HomeCTA />

      {/* Bisagra cromática — firma antes del footer */}
      <MarqueeDivider />
      <Footer />
    </>
  );
}
