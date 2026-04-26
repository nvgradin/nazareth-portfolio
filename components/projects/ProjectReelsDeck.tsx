'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReelsDeck } from '@/lib/project-layout.types';
import { InfiniteVideoDeck, DeckItem } from '@/components/ui/InfiniteVideoDeck';
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
  useEffect(() => {
    const t1 = setTimeout(() => setShowHint(true), 1800);
    const t2 = setTimeout(() => setShowHint(false), 5800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section
      className={styles.section}
      style={data.background ? { background: data.background } : undefined}
    >
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
