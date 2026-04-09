'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './AboutPillars.module.css';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const PILLARS = [
  {
    label: 'Negocio',
    title: 'Entiendo el contexto antes de mover nada.',
    body: 'Antes de diseñar, pregunto: qué hace esta empresa, para quién y por qué. Si el problema Si el problema no está claro, cualquier solución nace débil.',
    icon: '/icon/NG_Icono_montana.png',
  },
  {
    label: 'Experiencia',
    title: 'Diseño cómo se vive el producto, no solo cómo se ve.',
    body: 'La experiencia es lo que queda cuando el diseño desaparece. Trabajo para que cada interacción tenga sentido y para que quien la vive sienta cuidado, claridad y coherencia.',
    icon: '/icon/NG_Icono_camino.png',
  },
  {
    label: 'Producto',
    title: 'Construyo lo que imagino.',
    body: 'Aprendí a desarrollar porque quería hacer real lo que diseñaba. Hoy puedo llevar una idea desde la estrategia hasta el código, y eso hace que las decisiones sean más rápidas, más honestas y más viables.',
    icon: '/icon/NG_Icono_solmontana.png',
  },
];

function PillarCard({ pillar, i }: { pillar: typeof PILLARS[0]; i: number }) {
  const cardDelay = i * 0.18;

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay: cardDelay, ease: EASE_OUT }}
    >
      <motion.p
        className={styles.label}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay: cardDelay + 0.1, ease: EASE_OUT }}
      >
        {pillar.label}
      </motion.p>
      <motion.h3
        className={styles.title}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay: cardDelay + 0.2, ease: EASE_OUT }}
      >
        {pillar.title}
      </motion.h3>
      <motion.div
        className={styles.iconWrap}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.7, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: cardDelay + 0.3, ease: EASE_OUT }}
      >
        <Image
          src={pillar.icon}
          alt={pillar.label}
          width={56}
          height={56}
          style={{ objectFit: 'contain' }}
        />
      </motion.div>
      <motion.p
        className={styles.body}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay: cardDelay + 0.38, ease: EASE_OUT }}
      >
        {pillar.body}
      </motion.p>
    </motion.div>
  );
}

export default function AboutPillars() {
  const [active, setActive] = useState(1); // start on center card

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(PILLARS.length - 1, a + 1));

  return (
    <section className={styles.section}>
      {/* Background image with overlay */}
      <div className={styles.bg}>
        <Image
          src="/about/about_como_trabajo.jpg"
          alt="Fondo como trabajo"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority={false}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.inner}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          Cómo trabajo
        </motion.p>

        {/* Desktop: 3 cards side by side */}
        <div className={styles.grid}>
          {PILLARS.map((pillar, i) => (
            <PillarCard key={i} pillar={pillar} i={i} />
          ))}
        </div>

      </div>{/* end .inner */}

      {/* Mobile: 3-up carousel — outside .inner so it spans full width */}
      <div className={styles.carousel}>
        <div className={styles.carouselClip}>
            <div
              className={styles.track}
              style={{ transform: `translateX(calc((${active} * -68%) + 16%))` }}
            >
              {PILLARS.map((pillar, i) => {
                // ← arrow lives on the card BEFORE the active one (right edge)
                const showPrev = i === active - 1 && active > 0;
                // → arrow lives on the card AFTER the active one (left edge)
                const showNext = i === active + 1 && active < PILLARS.length - 1;

                return (
                  <div
                    key={i}
                    className={`${styles.slide} ${i === active ? styles.slideActive : styles.slideSide}`}
                  >
                    {/* Card */}
                    <div className={styles.card}>
                      <p className={styles.label}>{pillar.label}</p>
                      <h3 className={styles.title}>{pillar.title}</h3>
                      <div className={styles.iconWrap}>
                        <Image
                          src={pillar.icon}
                          alt={pillar.label}
                          width={52}
                          height={52}
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      <p className={styles.body}>{pillar.body}</p>
                    </div>

                    {/* ← prev arrow: right edge of the card before active */}
                    {showPrev && (
                      <button
                        className={`${styles.arrowBtn} ${styles.arrowRight}`}
                        onClick={prev}
                        aria-label="Anterior"
                      >
                        ‹
                      </button>
                    )}

                    {/* → next arrow: left edge of the card after active */}
                    {showNext && (
                      <button
                        className={`${styles.arrowBtn} ${styles.arrowLeft}`}
                        onClick={next}
                        aria-label="Siguiente"
                      >
                        ›
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    </section>
  );
}
