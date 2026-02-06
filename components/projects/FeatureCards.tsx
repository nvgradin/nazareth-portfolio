import Image from 'next/image';
import { FeatureCard } from '@/lib/project-layout.types';
import styles from './FeatureCards.module.css';

interface Props {
  data: FeatureCard[];
}

export function FeatureCards({ data }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {data.map((card, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src={card.image.src}
                  alt={card.image.alt || card.title}
                  fill
                  className={styles.cardImg}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
