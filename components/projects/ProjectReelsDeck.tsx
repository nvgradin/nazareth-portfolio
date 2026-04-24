'use client';

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
    </section>
  );
}
