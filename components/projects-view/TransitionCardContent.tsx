'use client';

/**
 * TransitionCardContent
 *
 * Text travels between stack layout and grid layout using only
 * transform (x, y, scale) + opacity — the only values Framer Motion
 * interpolates without jumps when animating between absolute positions.
 *
 * Strategy: text elements are positioned at their STACK coordinates
 * (bottom-left, large). We calculate the pixel delta to their GRID
 * coordinates (center, smaller) and animate using x/y/scale.
 * The card itself is also morphing size/position simultaneously,
 * so we work in the card's own coordinate space (relative to card).
 */

import { motion } from 'framer-motion';

interface Props {
  title: string;
  tagline: string;
  tags: string[];
  direction: 'toGrid' | 'toStack';
  delay: number;
  fromRect: DOMRect;  // card's starting rect in screen space
  toRect: DOMRect;    // card's ending rect in screen space
}

const SPRING_TEXT = { type: 'spring', stiffness: 200, damping: 30, mass: 0.9 } as const;

export function TransitionCardContent({ title, tagline, tags, direction, delay, fromRect, toRect }: Props) {
  const toGrid = direction === 'toGrid';

  // Text transition starts slightly after card begins moving
  const textDelay = delay + 0.08;
  const transition = { ...SPRING_TEXT, delay: textDelay };

  // ── Compute relative positions within the card ──────────────────
  // All values are relative to the card's own coordinate system.
  // The card starts at fromRect size and morphs to toRect size.
  // We work in the STARTING card's coordinate space.

  const fw = fromRect.width;
  const fh = fromRect.height;
  const tw = toRect.width;
  const th = toRect.height;

  // STACK positions (within fromRect card, from bottom-left)
  const stackTitleBottom  = Math.max(fh * 0.12, 28);
  const stackTitleLeft    = Math.max(fw * 0.05, 20);
  const stackTitleSize    = Math.max(fw * 0.055, 22);   // ~5.5% of card width

  const stackMetaBottom   = Math.max(fh * 0.06, 14);
  const stackMetaLeft     = stackTitleLeft;
  const stackMetaSize     = Math.max(fw * 0.018, 10);

  // GRID positions (within toRect card, from center/bottom)
  const gridTitleCenterX  = tw / 2;
  const gridTitleCenterY  = th / 2;
  const gridTitleSize     = Math.max(tw * 0.065, 16);

  const gridTaglineBottom = 30;
  const gridTaglineCenterX = tw / 2;
  const gridTaglineSize   = Math.max(tw * 0.038, 12);

  const gridTagsBottom    = 12;
  const gridTagsCenterX   = tw / 2;
  const gridTagsSize      = 9;

  // ── Title travel ────────────────────────────────────────────────
  // Stack: positioned at (stackTitleLeft, fh - stackTitleBottom) from top-left
  // Grid:  positioned at (tw/2, th/2) but card has morphed — compute delta
  // We pin the element at its STACK position, then translate to grid position.

  const titleStackX = stackTitleLeft;
  const titleStackY = fh - stackTitleBottom - stackTitleSize;

  // Grid position: center of the destination card
  // But the card's coordinate space changes as it morphs.
  // Approximate: grid center relative to starting card coords
  // (toRect center - fromRect topLeft) relative to fromRect
  const titleGridX = (tw / 2) - (tw * 0.25);  // center minus half approx text width
  const titleGridY = (th / 2) - (gridTitleSize / 2);
  // Translate delta: from stack pos to where grid pos would be
  const titleDx = toGrid ? (titleGridX - titleStackX) : 0;
  const titleDy = toGrid ? (titleGridY - titleStackY) : 0;
  const titleScale = toGrid ? (gridTitleSize / stackTitleSize) : 1;

  // ── Tagline travel ──────────────────────────────────────────────
  const taglineStackX = stackMetaLeft;
  const taglineStackY = fh - stackMetaBottom - stackMetaSize;

  const taglineDx = toGrid ? (gridTaglineCenterX - taglineStackX) : 0;
  const taglineDy = toGrid ? (th - gridTaglineBottom - gridTaglineSize - taglineStackY) : 0;
  const taglineScale = toGrid ? (gridTaglineSize / stackMetaSize) : 1;

  // ── Tags travel ─────────────────────────────────────────────────
  const tagsStackX = stackMetaLeft + Math.max(fw * 0.12, 60);
  const tagsStackY = taglineStackY;

  const tagsDx = toGrid ? (gridTagsCenterX - tagsStackX) : 0;
  const tagsDy = toGrid ? (th - gridTagsBottom - gridTagsSize - tagsStackY) : 0;

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {/* ── Title ── */}
      <motion.p
        style={{
          position: 'absolute',
          left: titleStackX,
          top: titleStackY,
          margin: 0,
          fontFamily: 'var(--font-accent)',
          fontSize: stackTitleSize,
          fontWeight: 600,
          color: 'var(--neutral-50)',
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap',
          transformOrigin: 'left center',
          zIndex: 5,
        }}
        initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        animate={{
          x: titleDx,
          y: titleDy,
          scale: titleScale,
          opacity: 1,
        }}
        transition={transition}
      >
        {title}
      </motion.p>

      {/* ── Tagline ── */}
      {tagline && (
        <motion.p
          style={{
            position: 'absolute',
            left: taglineStackX,
            top: taglineStackY,
            margin: 0,
            fontFamily: 'var(--font-heading)',
            fontSize: stackMetaSize,
            fontWeight: 400,
            color: 'var(--neutral-50)',
            lineHeight: 1.3,
            whiteSpace: 'nowrap',
            opacity: 0.8,
            transformOrigin: 'left center',
            zIndex: 5,
          }}
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={{
            x: taglineDx,
            y: taglineDy,
            scale: taglineScale,
            opacity: 0.85,
          }}
          transition={transition}
        >
          {tagline}
        </motion.p>
      )}

      {/* ── Tags ── */}
      <motion.div
        style={{
          position: 'absolute',
          left: tagsStackX,
          top: tagsStackY,
          display: 'flex',
          alignItems: 'center',
          gap: 0,
          transformOrigin: 'left center',
          zIndex: 5,
        }}
        initial={{ x: 0, y: 0, scale: 1, opacity: 0.6 }}
        animate={{
          x: tagsDx,
          y: tagsDy,
          scale: 1,
          opacity: 0.65,
        }}
        transition={transition}
      >
        {tags.map((tag, idx) => (
          <span key={tag} style={{
            fontFamily: 'var(--font-accent)',
            fontSize: stackMetaSize * 0.85,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--neutral-50)',
          }}>
            {idx > 0 && <span style={{ margin: '0 4px', opacity: 0.5 }}>·</span>}
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
