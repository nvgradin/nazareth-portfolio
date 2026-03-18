'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useHeaderTheme } from '@/components/layout/HeaderThemeContext';
import styles from './AboutTimeline.module.css';

const ease = [0.4, 0, 0.2, 1] as const;

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.7, delay, ease },
});

const FORMACION = [
  {
    period: '2003 – 2008',
    title: 'Licenciatura en Publicidad y RR.PP.',
    place: 'Universidad de Valladolid',
  },
  {
    period: '2008 – 2009',
    title: 'Máster en Creatividad y Publicidad',
    place: 'Trazos — Escuela de Arte',
  },
  {
    period: '2019',
    title: 'Business Expert MBA — Gestión y Administración de Empresas',
    place: 'ThePower Business School',
  },
  {
    period: '2019 – 2020',
    title: 'Bootcamp Fullstack Developer',
    place: 'Hack a Boss',
  },
];

const HITOS = [
  {
    period: '2009 – 2013',
    role: 'Creativa Junior — Publicidad y comunicación',
    note: 'Aprendí que una idea bien contada puede cambiar cómo la gente percibe el mundo.',
  },
  {
    period: '2013 – 2015',
    role: 'E-learning Designer — Grupo Femxa',
    note: 'Vi el problema antes que el mercado: el aprendizaje digital necesitaba experiencia, no solo contenido.',
  },
  {
    period: '2011 – 2013',
    role: 'Emprendimiento — Facebook del e-learning',
    note: 'Diseñé un modelo de negocio que el mundo necesitaría nueve años después. No pude construirlo. Aprendí por qué tenía que aprender a hacerlo.',
  },
  {
    period: '2015 – 2020',
    role: 'Estrategia digital y dirección creativa',
    note: 'Gestión de proyectos, marcas, equipos multidisciplinares. Aprendí a hablar el idioma del negocio.',
  },
  {
    period: '2020 – 2022',
    role: 'Frontend & Diseño UI/UX — Hack a Boss + Sistemas',
    note: 'Decidí aprender a construir lo que diseñaba. No volvería a depender de nadie para hacer real una idea.',
  },
  {
    period: '2022 – hoy',
    role: 'Digital Product & Experience Designer',
    note: 'Estrategia, diseño y desarrollo desde una sola mirada. El proyecto de Las Islas Cíes, entre otros, demuestra lo que pasa cuando las tres capas trabajan juntas.',
  },
];

export default function AboutTimeline() {
  const { setDark } = useHeaderTheme();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const { top } = el.getBoundingClientRect();
      // crema cuando el borde superior de Timeline cruza el header
      setDark(top <= 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [setDark]);

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.inner}>

        <motion.p className={styles.eyebrow} {...fade(0)}>
          Recorrido
        </motion.p>

        <div className={styles.list}>
          {HITOS.map((hito, i) => (
            <motion.div key={i} className={styles.hito} {...fade(0.05 + i * 0.07)}>
              <p className={styles.period}>{hito.period}</p>
              <div className={styles.content}>
                <p className={styles.role}>{hito.role}</p>
                <p className={styles.note}>{hito.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p className={styles.eyebrow} style={{ marginTop: 80 }} {...fade(0)}>
          Formación
        </motion.p>

        <div className={styles.list}>
          {FORMACION.map((f, i) => (
            <motion.div key={i} className={styles.hito} {...fade(0.05 + i * 0.07)}>
              <p className={styles.period}>{f.period}</p>
              <div className={styles.content}>
                <p className={styles.role}>{f.title}</p>
                <p className={styles.note}>{f.place}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
