'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════════
   IMAGE DATA
   ═══════════════════════════════════════════════════════════════ */

const REAL_IMAGES = ['01', '04', '05', '07', '09'];

const PLACEHOLDER_POOL = [
  '/projects/trainfy/bento-1.jpg',
  '/projects/trainfy/bento-3.jpg',
  '/projects/trainfy/bento-5.jpg',
  '/projects/trainfy/bento-7.jpg',
  '/projects/trainfy/bento-8.jpg',
  '/projects/trainfy/editorial-full.jpg',
  '/projects/trainfy/feature-branding.jpg',
  '/projects/trainfy/feature-dev.jpg',
  '/projects/trainfy/feature-ui-ux.jpg',
  '/projects/trainfy/showcase-center-bottom.jpg',
  '/projects/trainfy/showcase-center-top.jpg',
  '/projects/trainfy/showcase-right_horizontal.jpg',
  '/projects/trainfy/showcase-left.jpg',
  '/projects/trainfy/web-mockup-1.jpg',
  '/projects/trainfy/web-mockup-2.jpg',
  '/projects/trainfy/web-mockup-4.jpg',
  '/projects/trainfy/quote-bg.jpg',
];

const NUM_COLS = 9;
const IMAGES_PER_COL = 6;
const TOTAL_IMAGES = NUM_COLS * IMAGES_PER_COL;

/* Tamaño de cada columna del grid en px — controla el ancho de las imágenes */
const COL_WIDTH = 280;

const IMAGES: { id: string; src: string; alt: string }[] = Array.from(
  { length: TOTAL_IMAGES },
  (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    const isReal = REAL_IMAGES.includes(num);
    return {
      id: num,
      src: isReal
        ? `/img/404/${num}.jpg`
        : PLACEHOLDER_POOL[i % PLACEHOLDER_POOL.length],
      alt: `Gallery image ${num}`,
    };
  }
);

/* Canvas padding: espacio extra alrededor del grid para permitir scroll */
const CANVAS_PAD = 400;

/* ═══════════════════════════════════════════════════════════════
   LIGHTBOX
   ═══════════════════════════════════════════════════════════════ */

function Lightbox({
  image,
  onClose,
}: {
  image: typeof IMAGES[number];
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <motion.div
        layoutId={`img-${image.id}`}
        className="relative z-10 w-[90vw] h-[80vh] max-w-5xl"
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-contain"
          sizes="90vw"
        />
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NOT FOUND PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function NotFound() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => setSelectedIndex(null), []);

  // Centrar el scroll en el centro del canvas al montar
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      const scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
      const scrollTop = (el.scrollHeight - el.clientHeight) / 2;
      el.scrollTo({ left: scrollLeft, top: scrollTop });
    });
  }, []);

  // Distribute images into columns
  const columns: (typeof IMAGES)[] = Array.from({ length: NUM_COLS }, () => []);
  IMAGES.forEach((img, i) => columns[i % NUM_COLS].push(img));

  return (
    <LayoutGroup>
      {/* Canvas: viewport fijo, scroll en las 4 direcciones */}
      <div
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          overflow: 'auto',
          backgroundColor: '#E2DDD5',
        }}
      >
        {/* Contenido del canvas: grid + padding generoso */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: CANVAS_PAD,
          }}
        >
          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${NUM_COLS}, ${COL_WIDTH}px)`,
              gap: '128px',
            }}
          >
            {columns.map((col, colIdx) => (
              <div
                key={colIdx}
                className="flex flex-col"
                style={{ gap: '128px' }}
              >
                {col.map((img, i) => {
                  const globalIdx = IMAGES.findIndex((im) => im.id === img.id);
                  return (
                    <motion.div
                      key={img.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.04,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <motion.div
                        layoutId={`img-${img.id}`}
                        className="relative overflow-hidden rounded-2xl lg:rounded-3xl cursor-pointer"
                        whileHover={{ y: -6 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        onClick={() => setSelectedIndex(globalIdx)}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={560}
                          height={400 + (globalIdx % 3) * 200}
                          loading="lazy"
                          className="w-full h-auto object-cover"
                          sizes={`${COL_WIDTH}px`}
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Hero 404 — fijo sobre el canvas ─── */}
      <div
        className="fixed z-10 text-center pointer-events-none"
        style={{
          top: 0,
          left: 0,
          right: 0,
          paddingTop: '10vh',
          paddingBottom: '4vh',
        }}
      >
        <motion.h1
          className="text-6xl sm:text-8xl lg:text-9xl font-light tracking-tight leading-none"
          style={{
            fontFamily: 'var(--font-accent)',
            color: 'var(--brand-primary-900, #241E33)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          404
        </motion.h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl max-w-md mx-auto"
          style={{
            fontFamily: 'var(--font-base)',
            color: 'var(--brand-primary-500, #40394E)',
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Esta página no existe, pero el buen diseño sí.
        </motion.p>
      </div>

      {/* ─── CTA — fijo abajo ─── */}
      <div
        className="fixed z-10 text-center pointer-events-none"
        style={{
          bottom: 0,
          left: 0,
          right: 0,
          paddingTop: '4vh',
          paddingBottom: '6vh',
        }}
      >
        <motion.p
          className="text-base sm:text-lg mb-4"
          style={{
            fontFamily: 'var(--font-base)',
            color: 'var(--brand-primary-500, #40394E)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          ¿Buscabas algo en particular?
        </motion.p>
        <Link
          href="/projects"
          className="inline-block px-8 py-3 rounded-full text-sm tracking-wider uppercase transition-colors pointer-events-auto"
          style={{
            fontFamily: 'var(--font-accent)',
            backgroundColor: 'var(--brand-primary-900, #241E33)',
            color: 'var(--neutral-50, #FCF7F3)',
          }}
        >
          Ver proyectos
        </Link>
      </div>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <Lightbox
            image={IMAGES[selectedIndex]}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
