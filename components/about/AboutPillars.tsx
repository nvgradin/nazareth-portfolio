'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './AboutPillars.module.css';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const PILLARS = [
  {
    label: 'Negocio',
    title: 'Empiezo por el propósito.',
    body: 'Entiendo qué propone un negocio, para quién existe y por qué debería elegirse.',
    icon: '/icon/NG_Icono_montana.png',
  },
  {
    label: 'Marca',
    title: 'Busco la diferencia real.',
    body: 'Trabajo desde la esencia, el posicionamiento y la narrativa que hace reconocible una propuesta.',
    icon: '/icon/NG_Icono_curvas.png',
  },
  {
    label: 'Experiencia',
    title: 'Diseño cómo se vive.',
    body: 'Transformo esa idea en recorridos claros, útiles y coherentes para las personas.',
    icon: '/icon/NG_Icono_camino.png',
  },
  {
    label: 'Desarrollo',
    title: 'Construyo lo que imagino.',
    body: 'Construyo end-to-end con una mirada de producto, autonomía técnica e IA como palanca.',
    icon: '/icon/NG_Icono_solmontana.png',
  },
];

function PillarCard({ pillar, i }: { pillar: typeof PILLARS[0]; i: number }) {
  const cardDelay = i * 0.38; // deliberate gap — communicates sequence/process

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
  const [active, setActive] = useState(0); // start on first card (Negocio)

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(PILLARS.length - 1, a + 1));

  // Swipe handling
  const dragStartX = useRef<number | null>(null);
  const SWIPE_THRESHOLD = 40;

  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = dragStartX.current - e.clientX;
    if (delta > SWIPE_THRESHOLD) next();
    else if (delta < -SWIPE_THRESHOLD) prev();
    dragStartX.current = null;
  };

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

        <motion.p
          className={styles.microcopy}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
        >
          Creo desde la intersección entre Negocio, Marca, Experiencia y Desarrollo.
        </motion.p>

        {/* Desktop: 3 cards side by side */}
        <div className={styles.grid}>
          {PILLARS.map((pillar, i) => (
            <PillarCard key={i} pillar={pillar} i={i} />
          ))}
        </div>
      </div>

      {/* Mobile: 3-up carousel — outside .inner so it spans full width */}
      <div className={styles.carousel}>
        <div
          className={styles.carouselClip}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => { dragStartX.current = null; }}
        >
          <div
            className={styles.track}
            style={{ transform: `translateX(calc((${active} * -68%) + 16%))` }}
          >
            {PILLARS.map((pillar, i) => {
              const showPrev = i === active - 1 && active > 0;
              const showNext = i === active + 1 && active < PILLARS.length - 1;

              return (
                <div
                  key={i}
                  className={`${styles.slide} ${i === active ? styles.slideActive : styles.slideSide}`}
                >
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

                  {showPrev && (
                    <button
                      className={`${styles.arrowBtn} ${styles.arrowRight}`}
                      onClick={prev}
                      aria-label="Anterior"
                    >
                      ‹
                    </button>
                  )}
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

        {/* Step indicator */}
        <div className={styles.steps}>
          {PILLARS.map((pillar, i) => (
            <button
              key={i}
              className={`${styles.step} ${i === active ? styles.stepActive : ''}`}
              onClick={() => setActive(i)}
              aria-label={pillar.label}
            >
              <span className={styles.stepLabel}>{pillar.label}</span>
              <span className={styles.stepBar} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
