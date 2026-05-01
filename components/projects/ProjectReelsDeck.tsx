'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReelsDeck } from '@/lib/project-layout.types';
import { InfiniteVideoDeck, DeckItem } from '@/components/ui/InfiniteVideoDeck';
import { NebulaShaderBg } from './NebulaShaderBg';
import styles from './ProjectReelsDeck.module.css';

interface Props {
  data: ReelsDeck;
}

export function ProjectReelsDeck({ data }: Props) {
  const items: DeckItem[] = data.items.map(item => ({
    id: item.id,
    type: item.type,
    src: item.src,
    poster: item.poster,
    title: item.title,
  }));

  const [showHint, setShowHint] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hintShown = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hintShown.current) {
        hintShown.current = true;
        const t1 = setTimeout(() => setShowHint(true), 800);
        const t2 = setTimeout(() => setShowHint(false), 4800);
        return () => { clearTimeout(t1); clearTimeout(t2); };
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Fallback background color while shader loads (or if WebGL unavailable)
  // Previous gradient: data.background ?? 'transparent'
  // e.g. 'linear-gradient(135deg, #1a0e00, #895900, #4f3a17, #87776a, #2d1f0a, #895900)'

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      style={{ background: '#1a0e00' }}
    >
      <NebulaShaderBg />
      {data.title && <p className={styles.eyebrow}>{data.title}</p>}
      <div className={styles.deckWrapper}>
        <InfiniteVideoDeck
          items={items}
          autoPlay
          autoPlayInterval={5000}
          showTitle
          cardWidth={300}
          cardHeight={490}
          cardRadius={0}
          yOffset={68}
          scaleStep={0.08}
          stackDepth={5}
          centerScale={1.12}
          dimOpacity={1}
          dimBlur={0}
          depthShadow
          hideDragHint
        />
      </div>

      <AnimatePresence>
        {showHint && (
          <motion.div
            className={styles.dragHint}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeIn' }}
          >
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className={styles.dragHintIcon}
            >
              ↕
            </motion.span>
            <span>arrastra</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
