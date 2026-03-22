'use client';

import { motion } from 'framer-motion';
import styles from './AboutStory.module.css';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const CHAPTERS = [
  {
    label: 'El origen',
    title: 'Aprendí a construir narrativas para marcas que el mundo conocía.',
    body: 'Empecé en publicidad. Pasé por agencias trabajando con marcas como Reebok, Schweppes o Movistar. Aprendí que una buena comunicación no grita — encuentra el ángulo exacto para que conecte de verdad. Con el tiempo empecé a sentir que quería ir más allá.',
  },
  {
    label: 'La pregunta',
    title: '¿Y si el problema no era cómo se contaba, sino qué se estaba haciendo?',
    body: 'Trabajando en e-learning vi algo que me inquietó: las plataformas de elearning eran toscas, frías, sin alma. En 2011 diseñé mentalmente lo que sería una red social para el aprendizaje — un espacio donde profesores y alumnos crearan y compartieran contenido juntos y aprender. Lo vi claro. Pero no podía construirlo. Dependía de programadores que no se implicaban, y la idea se quedó en diseño.',
  },
  {
    label: 'El giro',
    title: 'Nueve años después, el mundo necesitó exactamente eso.',
    body: 'En el covid explotó la venta de cursos online, los webinars, el aprendizaje digital. Lo que vi en 2011 se hizo evidente para todos en 2020. Esa experiencia me marcó de una forma muy concreta: decidí aprender a desarrollar para no volver a depender de nadie. Para poder hacer real lo que imagino.',
  },
  {
    label: 'La integración',
    title: 'Hoy trabajo desde la raíz — negocio, experiencia y construcción al mismo tiempo.',
    body: 'Ahora cuando entro en un proyecto no separo las capas. Entiendo el modelo de negocio, diseño la experiencia y construyo para conectar la solución pensando en quién la busca. Como en Las Islas Cíes: vi un gran dominio mal aprovechado, propuse convertir la web en una guía de viaje real. El cliente no lo había pedido — pero lo vio. Ese cambio de estructura se replicó a cinco islas en dos años.',
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
