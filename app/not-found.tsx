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
  // Trainfy
  '/projects/trainfy/bento-1.jpg',
  '/projects/trainfy/bento-3.jpg',
  '/projects/trainfy/bento-5.jpg',
  '/projects/trainfy/bento-7.jpg',
  '/projects/trainfy/bento-8.jpg',
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
  // Las Islas Cíes
  '/projects/las-islas-cies/bento-1.jpg',
  '/projects/las-islas-cies/bento-2.jpg',
  '/projects/las-islas-cies/bento-3.jpg',
  '/projects/las-islas-cies/bento-4.jpg',
  '/projects/las-islas-cies/bento-5.jpg',
  '/projects/las-islas-cies/bento-6.jpg',
  '/projects/las-islas-cies/bento-7.jpg',
  '/projects/las-islas-cies/feature-marketing.jpg',
  '/projects/las-islas-cies/feature-ui-ux.jpg',
  '/projects/las-islas-cies/feature-web.jpg',
  // Silvia Fernández De Luna
  '/projects/silvia-fernandez-de-luna/bento-1.jpg',
  '/projects/silvia-fernandez-de-luna/bento-2.jpg',
  '/projects/silvia-fernandez-de-luna/bento-3.jpg',
  '/projects/silvia-fernandez-de-luna/bento-5.jpg',
  '/projects/silvia-fernandez-de-luna/bento-8.jpg',
  '/projects/silvia-fernandez-de-luna/feature-estrategia.jpg',
  '/projects/silvia-fernandez-de-luna/feature-marketing.jpg',
  '/projects/silvia-fernandez-de-luna/feature-web.jpg',
  '/projects/silvia-fernandez-de-luna/fondo_SFDL_oroviejo_1920x2000.jpeg',
  // Pan do Porriño
  '/projects/pan-do-porrino/bento-1.png',
  '/projects/pan-do-porrino/bento-2.png',
  '/projects/pan-do-porrino/bento-3.png',
  '/projects/pan-do-porrino/bento-5.png',
  '/projects/pan-do-porrino/bento-8.jpg',
  '/projects/pan-do-porrino/Mockup_anuncio_pandoporrino.jpg',
  '/projects/pan-do-porrino/Mockup_diptico_pandoporrino.jpg',
  '/projects/pan-do-porrino/PandoPorrino_branding_versionsecundaria.jpg',
];

const NUM_COLS = 7;
const IMAGES_PER_COL = 4;
const TOTAL_IMAGES = NUM_COLS * IMAGES_PER_COL;

const COL_WIDTH = 240;

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

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      const scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
      const scrollTop = (el.scrollHeight - el.clientHeight) / 2;
      el.scrollTo({ left: scrollLeft, top: scrollTop });
    });
  }, []);

  const columns: (typeof IMAGES)[] = Array.from({ length: NUM_COLS }, () => []);
  IMAGES.forEach((img, i) => columns[i % NUM_COLS].push(img));

  return (
    <LayoutGroup>
      {/* Canvas */}
      <div
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          overflow: 'auto',
          backgroundColor: '#241E33',
        }}
      >
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
              <div key={colIdx} className="flex flex-col" style={{ gap: '128px' }}>
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
                          width={480}
                          height={320 + (globalIdx % 3) * 160}
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

      {/* Vignette top */}
      <div
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          height: 220,
          background: 'linear-gradient(to bottom, #241E33 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 9,
        }}
      />

      {/* Vignette bottom */}
      <div
        style={{
          position: 'fixed',
          bottom: 0, left: 0, right: 0,
          height: 220,
          background: 'linear-gradient(to top, #241E33 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 9,
        }}
      />

      {/* Hero 404 — centrado verticalmente, cápsula backdrop */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            padding: '40px 56px 48px',
            borderRadius: '32px',
            background: 'rgba(36, 30, 51, 0.78)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h1
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(5rem, 12vw, 9rem)',
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'var(--neutral-50, #F8F6F2)',
              margin: 0,
            }}
          >
            404
          </motion.h1>

          <motion.p
            style={{
              fontFamily: 'var(--font-base)',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.125rem)',
              color: 'rgba(248, 246, 242, 0.65)',
              margin: 0,
              textAlign: 'center',
              maxWidth: '320px',
              lineHeight: 1.5,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            El caos también es parte del proceso.
          </motion.p>

          {/* CTAs */}
          <motion.div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              pointerEvents: 'auto',
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link
              href="/projects"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-accent)',
                fontSize: 'clamp(10px, 0.85vw, 12px)',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                backgroundColor: 'var(--neutral-50, #F8F6F2)',
                color: 'var(--brand-primary-900, #241E33)',
                padding: '14px 32px',
                borderRadius: 'var(--radius-full)',
                textDecoration: 'none',
              }}
            >
              Proyectos
            </Link>
            <Link
              href="/about"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-accent)',
                fontSize: 'clamp(10px, 0.85vw, 12px)',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                backgroundColor: 'transparent',
                color: 'rgba(248, 246, 242, 0.75)',
                padding: '13px 32px',
                borderRadius: 'var(--radius-full)',
                textDecoration: 'none',
                border: '1px solid rgba(248, 246, 242, 0.3)',
              }}
            >
              Sobre mí
            </Link>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-accent)',
                fontSize: 'clamp(10px, 0.85vw, 12px)',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                backgroundColor: 'transparent',
                color: 'rgba(248, 246, 242, 0.75)',
                padding: '13px 32px',
                borderRadius: 'var(--radius-full)',
                textDecoration: 'none',
                border: '1px solid rgba(248, 246, 242, 0.3)',
              }}
            >
              Contacto
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
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
