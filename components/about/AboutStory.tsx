'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './AboutStory.module.css';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const CHAPTERS = [
  {
    roman: 'I',
    label: 'El origen',
    title: 'Aprendí a construir narrativas \npara marcas que el mundo ya conocía.',
    body: 'Empecé en publicidad. Pasé por agencias trabajando con marcas como Reebok, Schweppes o Movistar. Allí entendí el valor de una idea bien enfocada: no la que más ruido hace, sino la que encuentra la forma exacta de conectar.',
    image: null,
    imageAlt: '',
    imageSide: 'right' as const,
  },
  {
    roman: 'II',
    label: 'La pregunta',
    title: 'Con el tiempo,\nempecé a mirar más allá del mensaje.',
    body: 'En e-learning vi una carencia clara: plataformas funcionales, sí, pero frías, rígidas y poco pensadas para la experiencia real de quienes las usaban. En 2011 imaginé una red social para el aprendizaje, un espacio más natural para crear, compartir y aprender. Lo vi claro antes de poder construirlo.',
    image: '/about/story/puerta_ventana.jpg',
    imageAlt: 'La pregunta',
    imageSide: 'fullbg' as const,
  },
  {
    roman: 'III',
    label: 'El giro',
    title: 'Nueve años después, el mercado confirmó lo que aquella intuición ya señalaba.',
    body: 'En 2020 el aprendizaje digital explotó y muchas de esas necesidades se hicieron evidentes para todos. Para mí fue una confirmación, pero también una decisión: aprender a desarrollar para no volver a depender de otros al hacer real una idea.',
    image: '/about/story/Mar.jpg',
    imageAlt: 'Mar — el giro',
    imageSide: 'right' as const,
  },
  {
    roman: 'IV',
    label: 'La integración',
    title: 'Hoy trabajo uniendo\nnegocio, experiencia y desarrollo.',
    body: 'Ahora, cuando entro en un proyecto, no separo las capas.\nEntiendo el modelo de negocio, diseño la experiencia\ny construyo la solución pensando en quien la necesita.',
    image: '/about/story/aurea.jpg',
    imageAlt: 'Proporción áurea — la integración',
    imageSide: 'center' as const,
  },
];

// Split text into lines: manual \n is always a line break, auto-split only when no \n present
function splitIntoLines(text: string, wordsPerLine = 7): string[] {
  if (text.includes('\n')) {
    // User defined the breaks — respect them exactly
    return text.split('\n');
  }
  // No manual breaks — auto-split every wordsPerLine words
  const words = text.split(' ');
  const lines: string[] = [];
  for (let i = 0; i < words.length; i += wordsPerLine) {
    lines.push(words.slice(i, i + wordsPerLine).join(' '));
  }
  return lines;
}

// Line-by-line reveal
function WordReveal({ text, className, delay = 0, wordsPerLine = 7 }: { text: string; className: string; delay?: number; wordsPerLine?: number }) {
  const lines = splitIntoLines(text, wordsPerLine);
  return (
    <span className={className} aria-label={text}>
      {lines.map((line, i) => (
        <motion.span
          key={i}
          style={{ display: 'block' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: delay + i * 0.3, ease: EASE_OUT }}
        >
          {line}
        </motion.span>
      ))}
    </span>
  );
}

// Parallax image
function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);

  return (
    <div ref={ref} className={styles.imageClip}>
      <motion.div className={styles.imageInner} style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={90}
        />
      </motion.div>
    </div>
  );
}

// Acto I — full-width grid, centered text, sequential word reveal
function ActoI({ ch }: { ch: typeof CHAPTERS[0] }) {
  // Each block waits for the previous to finish before starting
  const delayRoman = 0;
  const delayLabel = delayRoman + 0.9;
  const delayTitle = delayLabel + 1.0;
  const titleWords = ch.title.split(' ').length;
  const delayBody = delayTitle + titleWords * 0.18 + 0.5;

  return (
    <div className={styles.actoI}>
      <div className={styles.actoIGrid} />
      <div className={styles.actoIFadeTop} />

      <div className={styles.actoIContent}>
        <motion.span
          className={styles.roman}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: delayRoman, ease: EASE_OUT }}
        >
          {ch.roman}
        </motion.span>

        <motion.p
          className={styles.chapterLabel}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: delayLabel, ease: EASE_OUT }}
        >
          {ch.label}
        </motion.p>

        <h3 className={styles.chapterTitle}>
          <WordReveal text={ch.title} className={styles.wordRevealBlock} delay={delayTitle} wordsPerLine={5} />
        </h3>

        <p className={styles.chapterBody}>
          <WordReveal text={ch.body} className={styles.wordRevealInline} delay={delayBody} />
        </p>
      </div>
    </div>
  );
}

// Acto II — full-width parallax bg
function ActoII({ ch }: { ch: typeof CHAPTERS[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  const delayRoman = 0;
  const delayLabel = delayRoman + 0.9;
  const delayTitle = delayLabel + 1.0;
  const titleWords = ch.title.split(' ').length;
  const delayBody = delayTitle + titleWords * 0.18 + 0.5;

  return (
    <div ref={ref} className={styles.actoII}>
      <div className={styles.actoIIBg}>
        <motion.div style={{ y, position: 'absolute', inset: '-10% 0', width: '100%', height: '120%' }}>
          <Image src={ch.image!} alt={ch.imageAlt} fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="100vw" quality={90} />
        </motion.div>
        <div className={styles.actoIIOverlay} />
      </div>
      <div className={styles.actoIIContent}>
        <motion.span
          className={styles.romanLight}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: delayRoman, ease: EASE_OUT }}
        >
          {ch.roman}
        </motion.span>
        <motion.p
          className={styles.chapterLabelLight}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: delayLabel, ease: EASE_OUT }}
        >
          {ch.label}
        </motion.p>
        <h3 className={styles.chapterTitleLight}>
          <WordReveal text={ch.title} className={styles.wordRevealBlock} delay={delayTitle} wordsPerLine={5} />
        </h3>
        <p className={styles.chapterBodyLight}>
          <WordReveal text={ch.body} className={styles.wordRevealInline} delay={delayBody} />
        </p>
      </div>
    </div>
  );
}

// Acto III — full-width image as background
function ActoIII({ ch }: { ch: typeof CHAPTERS[0] }) {
  const delayRoman = 0;
  const delayLabel = delayRoman + 0.9;
  const delayTitle = delayLabel + 1.0;
  const titleWords = ch.title.split(' ').length;
  const delayBody = delayTitle + titleWords * 0.18 + 0.5;

  return (
    <div className={styles.actoIII}>
      <div className={styles.actoIIIBg}>
        <Image src={ch.image!} alt={ch.imageAlt} fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="100vw" quality={90} />
        <div className={styles.actoIIIOverlay} />
      </div>

      <div className={styles.actoIIIContent}>
        <motion.span
          className={styles.romanLight}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: delayRoman, ease: EASE_OUT }}
        >
          {ch.roman}
        </motion.span>
        <motion.p
          className={styles.chapterLabelLight}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: delayLabel, ease: EASE_OUT }}
        >
          {ch.label}
        </motion.p>
        <h3 className={styles.chapterTitleLight}>
          <WordReveal text={ch.title} className={styles.wordRevealBlock} delay={delayTitle} wordsPerLine={5} />
        </h3>
        <p className={styles.chapterBodyLight}>
          <WordReveal text={ch.body} className={styles.wordRevealInline} delay={delayBody} />
        </p>
      </div>
    </div>
  );
}

type Chapter = typeof CHAPTERS[0] & { imageSide: 'right' | 'left' | 'center' | 'fullbg' };

// Acto IV
function ChapterAct({ ch }: { ch: Chapter }) {
  return (
    <motion.article
      className={`${styles.chapter} ${styles.chapterCenter}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 1.1, ease: EASE_OUT }}
    >
      {(() => {
        const delayRoman = 0;
        const delayLabel = delayRoman + 0.9;
        const delayTitle = delayLabel + 1.0;
        const titleWords = ch.title.split(' ').length;
        const delayBody = delayTitle + titleWords * 0.18 + 0.5;
        return (
          <>
            <div className={styles.textBlock}>
              <motion.span
                className={styles.roman}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: delayRoman, ease: EASE_OUT }}
              >
                {ch.roman}
              </motion.span>
              <motion.p
                className={styles.chapterLabel}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: delayLabel, ease: EASE_OUT }}
              >
                {ch.label}
              </motion.p>
              <h3 className={styles.chapterTitle}>
                <WordReveal text={ch.title} className={styles.wordRevealBlock} delay={delayTitle} wordsPerLine={5} />
              </h3>
            </div>

            {ch.image && (
              <motion.div
                className={styles.imageBlock}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.2, ease: EASE_OUT }}
              >
                <ParallaxImage src={ch.image} alt={ch.imageAlt} />
              </motion.div>
            )}

            <p className={styles.chapterBody}>
              <WordReveal text={ch.body} className={styles.wordRevealInline} delay={delayBody} />
            </p>
          </>
        );
      })()}
    </motion.article>
  );
}

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

        {/* Acto I — special full-width grid treatment */}
        <ActoI ch={CHAPTERS[0]} />

        {/* Actos II–IV */}
        <div className={styles.chapters}>
          {CHAPTERS.slice(1).map((ch, i) => (
            ch.roman === 'II'
              ? <ActoII key={i} ch={ch} />
              : ch.roman === 'III'
                ? <ActoIII key={i} ch={ch} />
                : <ChapterAct key={i} ch={ch} />
          ))}
        </div>
      </div>
    </section>
  );
}
