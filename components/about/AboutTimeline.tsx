'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useHeaderTheme } from '@/components/layout/HeaderThemeContext';
import styles from './AboutTimeline.module.css';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const FORMACION = [
  {
    period: '2003 – 2008',
    title: 'Licenciatura en Publicidad y RR.PP.',
    place: 'Universidad de Valladolid',
  },
  {
    period: '2008 – 2009',
    title: 'Máster en Creatividad y Publicidad',
    place: 'Trazos — Escuela Superior de Artes Digitales',
  },
  {
    period: '2019',
    title: 'Business Expert MBA',
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
    role: 'Creativa Junior — Atrevia',
    note: 'Aprendí que una idea bien contada puede cambiar cómo la gente percibe el mundo.',
  },
  {
    period: '2011 – 2015',
    role: 'E-learning Designer — Grupo Femxa, Ingafor',
    note: 'Vi el problema antes que el mercado: el aprendizaje digital necesitaba experiencia, no solo contenido.',
  },
  {
    period: '2011 – 2013',
    role: 'Emprendimiento — Facebook del e-learning',
    note: 'Diseñé un modelo de negocio que el mundo necesitaría nueve años después.',
  },
  {
    period: '2015 – 2020',
    role: 'Estrategia digital y dirección creativa',
    note: 'Gestión de proyectos, marcas y equipos multidisciplinares. Aprendí a hablar el idioma del negocio.',
  },
  {
    period: '2020 – 2022',
    role: 'Frontend & Diseño UI/UX',
    note: 'Decidí aprender a construir lo que diseñaba. No volvería a depender de nadie para hacer real una idea.',
  },
  {
    period: '2022 – hoy',
    role: 'Digital Product & Experience Designer',
    note: 'Estrategia, diseño y desarrollo desde una sola mirada.',
  },
];

function FormacionTimeline() {
  return (
    <div className={styles.fScroll}>
      <div className={styles.fTrack}>
        <div className={styles.fLine} />
        {FORMACION.map((f, i) => (
          <motion.div
            key={i}
            className={styles.fItem}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: i * 0.1, ease: EASE_OUT }}
          >
            <div className={`${styles.fDot} ${i === FORMACION.length - 1 ? styles.fDotActive : ''}`} />
            <div className={styles.fContent}>
              <p className={styles.fPeriod}>{f.period}</p>
              <p className={styles.fTitle}>{f.title}</p>
              <p className={styles.fPlace}>{f.place}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ExperienciaTimeline() {
  return (
    <div className={styles.eOuter}>
      <div className={styles.eScroll}>
        <div className={styles.eTrack}>
          <div className={styles.eLine} />
          {HITOS.map((hito, i) => {
            const isAbove = i % 2 === 0;
            const isLast = i === HITOS.length - 1;
            return (
              <motion.div
                key={i}
                className={`${styles.eItem} ${isAbove ? styles.eItemAbove : styles.eItemBelow}`}
                initial={{ opacity: 0, y: isAbove ? -16 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: EASE_OUT }}
              >
                <div className={styles.eContent}>
                  <p className={styles.ePeriod}>{hito.period}</p>
                  <p className={styles.eRole}>{hito.role}</p>
                  <p className={styles.eNote}>{hito.note}</p>
                </div>
                <div className={`${styles.eDot} ${isLast ? styles.eDotActive : ''}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function AboutTimeline() {
  const { setDark } = useHeaderTheme();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const headerH = 52;
    const bottomMargin = -(window.innerHeight - headerH);
    const observer = new IntersectionObserver(
      ([entry]) => { setDark(entry.isIntersecting); },
      { rootMargin: `-${headerH}px 0px ${bottomMargin}px 0px`, threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [setDark]);

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.inner}>

        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          Recorrido
        </motion.p>

        <ExperienciaTimeline />

        <motion.p
          className={styles.eyebrow}
          style={{ marginTop: 40 }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          Formación
        </motion.p>

        <FormacionTimeline />

        <motion.div
          className={styles.links}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <a
            href="/CV_Nazareth_A_VAQUEIRO_GRADIN.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="Descargar CV de Nazareth en PDF"
          >
            CV →
          </a>
          <span className={styles.linkSep}>·</span>
          <a
            href="https://www.linkedin.com/in/nazareth-avg/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="Perfil de LinkedIn de Nazareth"
          >
            LinkedIn →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
