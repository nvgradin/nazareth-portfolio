'use client';

/**
 * PortalTransition
 *
 * Fixed overlay that:
 *  1. Starts at the clicked card's bounding box (position + size)
 *  2. Animates to center + full viewport coverage
 *  3. After animation completes → router.push to project page
 *
 * Rendered once, inside PortalProvider, alongside HomeStack.
 * Uses Framer Motion for GPU-friendly transform animations.
 */

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { usePortal } from './PortalContext';
import styles from './PortalTransition.module.css';

export function PortalTransition() {
  const { state, reset } = usePortal();
  const router = useRouter();
  const { active, rect, image, slug } = state;

  // Prefetch the target route when a card is hovered (called from StackCard)
  useEffect(() => {
    if (slug) router.prefetch(`/projects/${slug}`);
  }, [slug, router]);

  if (!rect) return null;

  // Initial position: match the card's bounding box exactly
  const initial = {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
    borderRadius: 22,
    opacity: 1,
  };

  // Final position: cover full viewport
  const animate = {
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    borderRadius: 0,
    opacity: 1,
  };

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className={styles.portal}
          initial={initial}
          animate={animate}
          transition={{
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1], // custom cubic — feels like a portal opening
          }}
          style={{ backgroundImage: `url(${image})` }}
          onAnimationComplete={() => {
            router.push(`/projects/${slug}`);
            // reset() is called on the project page's mount via unmount of this page
            // For safety, reset after a delay so the new page has time to load
            setTimeout(reset, 1000);
          }}
        />
      )}
    </AnimatePresence>
  );
}
