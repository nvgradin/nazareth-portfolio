import { homeProjects } from '@/data/home';
import { PortalProvider, HomeStack, PortalTransition } from '@/components/home';

/**
 * Homepage — Project stack
 *
 * Structure:
 *   PortalProvider  → shared portal state (context)
 *     HomeStack     → sticky stacking scroll
 *     PortalTransition → fixed overlay animation on card click
 *
 * PortalTransition sits outside HomeStack so it can render
 * as a fixed fullscreen overlay without being clipped by any parent.
 */
export default function Home() {
  return (
    <PortalProvider>
      {/* HomeStack va fuera del <main> para evitar el padding-top del layout
          y que el useScroll tenga el offset correcto desde el top del viewport */}
      <HomeStack projects={homeProjects} />
      <PortalTransition />
    </PortalProvider>
  );
}
