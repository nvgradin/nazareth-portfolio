'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ProjectWithLayout } from '@/lib/project-layout.types';
import { ProjectOrigin } from '@/lib/getNextProject';
import styles from './NextProjectStack.module.css';

interface StackItem {
  project: ProjectWithLayout;
  href: string;
}

interface Props {
  stackProjects: StackItem[]; // [0]=next (real), [1]=next+1, [2]=next+2
  from: ProjectOrigin;
}

const LAYERS = [
  { zIndex: 1, initY: 660,  restScale: 0.3, spring: { type: 'spring' as const, bounce: 0, duration: 1.4, delay: 0   } },
  { zIndex: 2, initY: 660,  restScale: 0.4, spring: { type: 'spring' as const, bounce: 0, duration: 2.6, delay: 0.4 } },
  { zIndex: 3, initY: 1020, restScale: 0.6, spring: { type: 'spring' as const, bounce: 0, duration: 2.2, delay: 1.0 } },
] as const;

const CONTENT_EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function NextProjectStack({ stackProjects, from }: Props) {
  const [visible, setVisible]   = useState(false);
  const [expanding, setExpanding] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timersRef    = useRef<ReturnType<typeof setTimeout>[]>([]);

  const rawLayers = [stackProjects[2], stackProjects[1], stackProjects[0]];
  const seen = new Set<string>();
  const layers = rawLayers.filter(item => {
    if (!item) return false;
    if (seen.has(item.project.slug)) return false;
    seen.add(item.project.slug);
    return true;
  });
  const real   = stackProjects[0];
  const bgColor = real.project.ambientColor ?? '#111';
  const cover   = real.project.cover ?? real.project.thumbnail.src;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setVisible(true);

        const t1 = setTimeout(() => setExpanding(true),    3000);
        const t2 = setTimeout(() => setShowContent(true),  4100);
        timersRef.current = [t1, t2];
      },
      { threshold: 0.75 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container} style={{ backgroundColor: bgColor }}>

      {/* Preloader layers — back and mid fade behind when expanding */}
      {layers.map((item, i) => {
        const layer  = LAYERS[i];
        const isFront = i === 2;
        const src    = item.project.cover ?? item.project.thumbnail.src;

        return (
          <motion.div
            key={item.project.slug}
            className={styles.layer}
            style={{ zIndex: layer.zIndex }}
            initial={{ scale: layer.restScale, y: layer.initY }}
            animate={
              !visible
                ? { scale: layer.restScale, y: layer.initY }
                : isFront && expanding
                  ? { scale: 1, y: 0 }
                  : { scale: layer.restScale, y: 0 }
            }
            transition={
              isFront && expanding
                ? { duration: 0.85, ease: [0.4, 0, 0.2, 1] }
                : layer.spring
            }
          >
            <Image
              src={src}
              alt={item.project.title}
              fill
              sizes="100vw"
              className={styles.image}
              priority={isFront}
            />
          </motion.div>
        );
      })}

      {/* Overlay + content — renders on top once image is fullscreen */}
      {showContent && (
        <Link href={real.href} className={styles.contentLink} aria-label={`Siguiente proyecto: ${real.project.title}`}>
          <div className={styles.overlay} />
          <div className={styles.content}>
            <motion.p
              className={styles.eyebrow}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: CONTENT_EASE, delay: 0 }}
            >
              Siguiente proyecto
            </motion.p>
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: CONTENT_EASE, delay: 0.1 }}
            >
              {real.project.title}
            </motion.h2>
            {real.project.tagline && (
              <motion.p
                className={styles.tagline}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: CONTENT_EASE, delay: 0.18 }}
              >
                {real.project.tagline}
              </motion.p>
            )}
            <motion.p
              className={styles.categories}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: CONTENT_EASE, delay: 0.26 }}
            >
              {real.project.tags.join(' · ')}
            </motion.p>
            <motion.span
              className={styles.cta}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: CONTENT_EASE, delay: 0.36 }}
              aria-hidden="true"
            >
              Ver proyecto
            </motion.span>
          </div>
        </Link>
      )}
    </div>
  );
}
