'use client';

import { motion } from 'framer-motion';
import styles from './AboutManifesto.module.css';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 1.2, delay, ease: EASE_OUT },
});

const WORDS = 'Creo sobre el significado.'.split(' ');

const SENTENCES = [
  'Sobre el para qué y el por qué de lo que hacemos.',
  'No me interesa solo cómo se ve un proyecto, sino qué propone, a quién se dirige y qué lugar quiere ocupar en la vida de las personas.',
  'El diseño es el lenguaje; la esencia está en la idea.',
];

export default function AboutManifesto() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <motion.p className={styles.eyebrow} {...fadeUp(0)}>
          Manifiesto
        </motion.p>

        {/* Título palabra a palabra */}
        <h2 className={styles.statement} aria-label="Creo sobre el significado.">
          {WORDS.map((word, i) => (
            <motion.span
              key={i}
              className={styles.word}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.1, delay: 0.1 + i * 0.13, ease: EASE_OUT }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Párrafo frase a frase */}
        <p className={styles.body}>
          {SENTENCES.map((sentence, i) => (
            <motion.span
              key={i}
              className={styles.sentence}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, delay: 0.6 + i * 0.18, ease: EASE_OUT }}
            >
              {sentence}{' '}
            </motion.span>
          ))}
        </p>

      </div>
    </section>
  );
}
