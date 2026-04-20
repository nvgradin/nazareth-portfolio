'use client';

// NOTE: This component manages its own transform: translate internally.
// Do not pass Tailwind translate-* or CSS transform classes via className —
// they will conflict with the spring-driven x/y motion values.

import Link from 'next/link';
import { useRef, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useMagneticEnabled } from '@/hooks/useMagneticEnabled';

type BaseProps = {
  children: React.ReactNode;
  strength?: number;
  innerStrength?: number;
  radiusPadding?: number;
  className?: string;
  ariaLabel?: string;
};

type ButtonProps = BaseProps & {
  as?: 'button';
  href?: never;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

type AnchorProps = BaseProps & {
  as: 'a';
  href: string;
  onClick?: () => void;
  type?: never;
};

type LinkProps = BaseProps & {
  as: 'link';
  href: string;
  onClick?: () => void;
  type?: never;
};

type MagneticButtonProps = ButtonProps | AnchorProps | LinkProps;

const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };

// ─── Static fallback (mobile / reduced motion / coarse pointer) ──────────────
// Renders the exact native element with no motion wrappers, no listeners.
// Visually identical to what was there before — just HTML.
function StaticFallback(props: MagneticButtonProps) {
  const { children, as = 'button', href, onClick, type, className, ariaLabel } = props;
  if (as === 'link' && href) {
    return (
      <Link href={href} onClick={onClick} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  if (as === 'a' && href) {
    return (
      <a href={href} onClick={onClick} className={className} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  const disabled = (props as ButtonProps).disabled;
  return (
    <button
      type={type ?? 'button'}
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// ─── Magnetic core ────────────────────────────────────────────────────────────
export function MagneticButton(props: MagneticButtonProps) {
  const {
    children,
    strength = 0.3,
    innerStrength = 0.4,
    radiusPadding = 50,
    as = 'button',
    className,
    ariaLabel,
    onClick,
  } = props;

  const href     = 'href' in props ? props.href : undefined;
  const type     = 'type' in props ? props.type : undefined;
  const disabled = (props as ButtonProps).disabled ?? false;

  const enabled = useMagneticEnabled();

  // Springs for outer container and inner content
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const innerRawX = useMotionValue(0);
  const innerRawY = useMotionValue(0);

  const springX      = useSpring(rawX,      springConfig);
  const springY      = useSpring(rawY,      springConfig);
  const innerSpringX = useSpring(innerRawX, springConfig);
  const innerSpringY = useSpring(innerRawY, springConfig);

  const ref = useRef<HTMLElement>(null);
  const isActive = useRef(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    // Subtract current spring offset to get the rest-position center,
    // avoiding feedback loop where the moved bbox shifts the reference point.
    const restCenterX = rect.left + rect.width  / 2 - springX.get();
    const restCenterY = rect.top  + rect.height / 2 - springY.get();
    const dx = e.clientX - restCenterX;
    const dy = e.clientY - restCenterY;

    const radius   = Math.max(rect.width, rect.height) / 2 + radiusPadding;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < radius) {
      if (!isActive.current) {
        isActive.current = true;
        el.style.willChange = 'transform';
      }
      rawX.set(dx * strength);
      rawY.set(dy * strength);
      innerRawX.set(dx * innerStrength);
      innerRawY.set(dy * innerStrength);
    } else if (isActive.current) {
      isActive.current = false;
      el.style.willChange = 'auto';
      rawX.set(0);
      rawY.set(0);
      innerRawX.set(0);
      innerRawY.set(0);
    }
  }, [strength, innerStrength, radiusPadding, rawX, rawY, innerRawX, innerRawY, springX, springY]);

  useEffect(() => {
    if (!enabled) return;
    if (disabled) return;
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [enabled, disabled, handleMouseMove]);

  if (!enabled) {
    return <StaticFallback {...props} />;
  }

  const inner = (
    <motion.span style={{ x: innerSpringX, y: innerSpringY, display: 'inline-flex', alignItems: 'center', gap: 'inherit' }}>
      {children}
    </motion.span>
  );

  const sharedMotionProps = {
    style: { x: springX, y: springY },
    className,
    'aria-label': ariaLabel,
  };

  if (as === 'link' && href) {
    // motion.span (inline-block) holds the ref for bbox calculation and the spring transform.
    // Link sits inside and fills it naturally.
    return (
      <motion.span
        ref={ref as React.RefObject<HTMLSpanElement>}
        style={{ x: springX, y: springY, display: 'inline-block' }}
      >
        <Link
          href={href}
          onClick={onClick}
          className={className}
          aria-label={ariaLabel}
        >
          {inner}
        </Link>
      </motion.span>
    );
  }

  if (as === 'a' && href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        {...sharedMotionProps}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type ?? 'button'}
      onClick={onClick}
      disabled={disabled}
      {...sharedMotionProps}
    >
      {inner}
    </motion.button>
  );
}
