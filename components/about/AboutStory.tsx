'use client';

import { motion } from 'framer-motion';
import styles from './AboutStory.module.css';

const ease = [0.4, 0, 0.2, 1] as const;

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.75, delay, ease },
});

const CHAPTERS = [
  {
    label: 'El origen',
    title: 'Aprendí a construir narrativas para marcas que el mundo conocía.',
    body: 'Empecé en publicidad. Pasé por agencias trabajando con marcas como Reebok, Schweppes, Movistar o Zara. Aprendí que una buena comunicación no grita — encuentra el ángulo exacto para que algo llegue de verdad. Pero con el tiempo empecé a sentir que comunicar no era suficiente.',
  },
  {
    label: 'La pregunta',
    title: '¿Y si el problema no era cómo se contaba, sino qué se estaba haciendo?',
    body: 'Trabajando en e-learning vi algo que me inquietó: las plataformas eran tosca, frías, sin alma. En 2011 diseñé mentalmente lo que sería una red social para el aprendizaje — un espacio donde profesores y alumnos crearan y consumieran contenido juntos. Lo vi claro. Pero no podía construirlo. Dependía de programadores que no se implicaban, y la idea se quedó en un papel.',
  },
  {
    label: 'El giro',
    title: 'Nueve años después, el mundo necesitó exactamente eso.',
    body: 'En el covid explotó la venta de cursos online, los webinars, el aprendizaje digital. Lo que vi en 2011 se hizo evidente para todos en 2020. Esa experiencia me marcó de una forma muy concreta: decidí aprender a desarrollar para no volver a depender de nadie para hacer real lo que imagino.',
  },
  {
    label: 'La integración',
    title: 'Hoy trabajo desde la raíz — negocio, experiencia y construcción al mismo tiempo.',
    body: 'Ahora cuando entro en un proyecto no separo las capas. Entiendo el modelo de negocio, diseño la experiencia y construyo lo que hace falta. Como en Las Islas Cíes: vi un gran dominio mal aprovechado, propuse convertir la web en una guía de viaje real. El cliente no lo había pedido — pero lo vio. Ese cambio de estructura se replicó a cinco islas en dos años.',
  },
];

export default function AboutStory() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <motion.p className={styles.eyebrow} {...fade(0)}>
          Mi historia
        </motion.p>

        <div className={styles.chapters}>
          {CHAPTERS.map((ch, i) => (
            <motion.div key={i} className={styles.chapter} {...fade(0.1 + i * 0.08)}>
              <p className={styles.chapterLabel}>{ch.label}</p>
              <h3 className={styles.chapterTitle}>{ch.title}</h3>
              <p className={styles.chapterBody}>{ch.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
