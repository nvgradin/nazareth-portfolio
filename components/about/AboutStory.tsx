'use client';

import { motion } from 'framer-motion';
import styles from './AboutStory.module.css';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const CHAPTERS = [
  {
    label: 'El origen',
    title: 'Aprendí a construir narrativas para marcas que el mundo ya conocía.',
    body: 'Empecé en publicidad. Pasé por agencias trabajando con marcas como Reebok, Schweppes o Movistar. Allí entendí el valor de una idea bien enfocada: no la que más ruido hace, sino la que encuentra la forma exacta de conectar.',
  },
  {
    label: 'La pregunta',
    title: 'Con el tiempo, empecé a mirar más allá del mensaje.',
    body: 'En e-learning vi una carencia clara: plataformas funcionales, sí, pero frías, rígidas y poco pensadas para la experiencia real de quienes las usaban. En 2011 imaginé una red social para el aprendizaje, un espacio más natural para crear, compartir y aprender. Lo vi claro antes de poder construirlo.',
  },
  {
    label: 'El giro',
    title: 'Nueve años después, el mercado confirmó lo que aquella intuición ya señalaba.',
    body: 'En 2020 el aprendizaje digital explotó y muchas de esas necesidades se hicieron evidentes para todos. Para mí fue una confirmación, pero también una decisión: aprender a desarrollar para no volver a depender de otros al hacer real una idea.',
  },
  {
    label: 'La integración',
    title: 'Hoy trabajo uniendo negocio, experiencia y desarrollo.',
    body: 'Ahora, cuando entro en un proyecto, no separo las capas. Entiendo el modelo de negocio, diseño la experiencia y construyo la solución pensando en quien la necesita.',
  },
];

export default function AboutStory() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          Mi historia
        </motion.p>

        <div className={styles.chapters}>
          {CHAPTERS.map((ch, i) => {
            const isRight = i % 2 === 1;
            return (
              <motion.div
                key={i}
                className={styles.chapter}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.15, delay: i * 0.12, ease: EASE_OUT }}
              >
                <p className={styles.chapterLabel}>{ch.label}</p>
                <h3 className={styles.chapterTitle}>{ch.title}</h3>
                <p className={styles.chapterBody}>{ch.body}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
