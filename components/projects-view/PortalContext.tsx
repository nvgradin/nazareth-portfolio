'use client';

/**
 * PortalContext
 *
 * Lightweight shared state for the portal transition.
 * Kept here (not in root layout) so only the homepage subtree uses it.
 *
 * Shape:
 *   trigger(rect, image, slug) → kicks off the animation
 *   state                      → read by PortalTransition to render
 */

import { createContext, useContext, useState, useCallback } from 'react';

export interface PortalState {
  active: boolean;
  rect: DOMRect | null;   // Bounding box of the clicked card
  image: string;          // Background image of the card
  slug: string;           // Target route slug
}

interface PortalContextValue {
  state: PortalState;
  trigger: (rect: DOMRect, image: string, slug: string) => void;
  reset: () => void;
}

const initial: PortalState = { active: false, rect: null, image: '', slug: '' };

export const PortalContext = createContext<PortalContextValue>({
  state: initial,
  trigger: () => {},
  reset: () => {},
});

export function PortalProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<PortalState>(initial);

  const trigger = useCallback((rect: DOMRect, image: string, slug: string) => {
    setState({ active: true, rect, image, slug });
  }, []);

  const reset = useCallback(() => {
    setState(initial);
  }, []);

  return (
    <PortalContext.Provider value={{ state, trigger, reset }}>
      {children}
    </PortalContext.Provider>
  );
}

export function usePortal() {
  return useContext(PortalContext);
}
