'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './HomeBio.module.css';

const ease = [0.4, 0, 0.2, 1] as const;

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.75, delay, ease },
});

export function HomeBio() {
  return (
    <section className={styles.section} data-header-theme="dark">
      <div className={styles.inner}>
        <div className={styles.top}>

          {/* Columna izquierda — texto + CTA */}
          <div className={styles.topLeft}>
            <motion.p className={styles.eyebrow} {...fade(0)}>
              Sobre mí
            </motion.p>
            <motion.h2 className={styles.title} {...fade(0.1)}>
                De la narrativa de marca a la experiencia digital            </motion.h2>
            <motion.div className={styles.bodyWrap} {...fade(0.22)}>
              <p className={styles.intro}>
                Empecé en comunicación y branding, desarrollando una mirada estratégica para grandes marcas como Movistar, Reebok o Schweppes, y entendiendo cómo conectar ideas con personas.
              </p>
              <p className={styles.intro}>
                Con el tiempo, esa mirada evolucionó hacia el producto digital: diseñar experiencias más completas, más útiles y más conectadas con negocio.
                Hoy trabajo uniendo estrategia, UX/UI y desarrollo para crear productos digitales con sentido.
              </p>
            </motion.div>
            <motion.div {...fade(0.35)}>
              <Link href="/about" className={styles.cta}>
                Conoce mi recorrido →
              </Link>
            </motion.div>

            <motion.p className={styles.micro} {...fade(0.45)}>
              O Porriño · Vigo, Galicia · Remote-friendly · Colaborando con agencias, marcas y proyectos digitales
            </motion.p>
          </div>

          {/* Columna derecha — imagen con hover crossfade → about */}
          <motion.div className={styles.topRight} {...fade(0.18)}>
            <Link href="/about" className={styles.imageWrap} aria-label="Conocer más sobre Nazareth">
              <Image
                src="/home/home-bio-NG.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className={styles.imageBase}
              />
              <Image
                src="/home/home-bio-Nazareth.jpg"
                alt="Nazareth Gradín"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className={styles.imageHover}
              />
              <div className={styles.imageOverlay} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
