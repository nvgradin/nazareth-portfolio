'use client';

import Image from 'next/image';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/about/hero_about_2560.webp"
        alt="Nazareth — Digital Product & Experience Designer"
        fill
        priority
        className={styles.image}
        sizes="100vw"
      />
      <div className={styles.content}>
        <p className={styles.role}>Digital Product &amp; Experience Designer</p>
        <p className={styles.claim}>Estrategia. Creatividad. Consciencia.</p>
        <h1 className={styles.name}>Nazareth</h1>
      </div>
    </section>
  );
}
