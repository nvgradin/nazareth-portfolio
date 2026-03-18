'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './AboutPillars.module.css';

const ease = [0.4, 0, 0.2, 1] as const;

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.75, delay, ease },
});

const PILLARS = [
  {
    label: 'Negocio',
    title: 'Entiendo el contexto antes de mover nada.',
    body: 'Antes de diseñar, pregunto. Qué hace esta empresa, para quién, por qué ahora. Si el problema está mal definido, cualquier solución es ruido.',
    icon: '/icon/NG_Icono_montana.png',
  },
  {
    label: 'Experiencia',
    title: 'Diseño cómo se vive el producto, no solo cómo se ve.',
    body: 'La experiencia es lo que queda cuando el diseño desaparece. Trabajo para que cada interacción tenga sentido — y para que la persona al otro lado sienta que alguien pensó en ella.',
    icon: '/icon/NG_Icono_camino.png',
  },
  {
    label: 'Producto',
    title: 'Construyo lo que imagino. Sin depender de nadie.',
    body: 'Aprendí a desarrollar porque quería hacer real lo que diseñaba. Hoy puedo llevar una idea desde la estrategia hasta el código — y eso cambia la conversación con el cliente.',
    icon: '/icon/NG_Icono_solmontana.png',
  },
];

export default function AboutPillars() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.p className={styles.eyebrow} {...fade(0)}>
          Cómo trabajo
        </motion.p>
        <div className={styles.grid}>
          {PILLARS.map((pillar, i) => (
            <motion.div key={i} className={styles.pillar} {...fade(0.1 + i * 0.12)}>
              <div className={styles.iconWrap}>
                <Image
                  src={pillar.icon}
                  alt={pillar.label}
                  width={56}
                  height={56}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p className={styles.label}>{pillar.label}</p>
              <h3 className={styles.title}>{pillar.title}</h3>
              <p className={styles.body}>{pillar.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
