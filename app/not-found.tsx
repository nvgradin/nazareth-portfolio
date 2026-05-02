'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════════
   IMAGE POOL — sin repeticiones, sin before.jpg
   5 reales + 28 de proyectos = 33 únicas, grid 6×5 = 30
   ═══════════════════════════════════════════════════════════════ */

const ALL_IMAGES = [
  // Reales 404
  { src: '/img/404/01.jpg', alt: 'Portfolio image 1' },
  { src: '/img/404/04.jpg', alt: 'Portfolio image 4' },
  { src: '/img/404/05.jpg', alt: 'Portfolio image 5' },
  { src: '/img/404/07.jpg', alt: 'Portfolio image 7' },
  { src: '/img/404/09.jpg', alt: 'Portfolio image 9' },
  // Trainfy
  { src: '/projects/trainfy/bento-1.jpg', alt: 'Trainfy' },
  { src: '/projects/trainfy/bento-3.jpg', alt: 'Trainfy' },
  { src: '/projects/trainfy/bento-5.jpg', alt: 'Trainfy' },
  { src: '/projects/trainfy/bento-7.jpg', alt: 'Trainfy' },
  { src: '/projects/trainfy/bento-8.jpg', alt: 'Trainfy' },
  { src: '/projects/trainfy/feature-branding.jpg', alt: 'Trainfy' },
  { src: '/projects/trainfy/feature-dev.jpg', alt: 'Trainfy' },
  { src: '/projects/trainfy/showcase-center-bottom.jpg', alt: 'Trainfy' },
  { src: '/projects/trainfy/showcase-left.jpg', alt: 'Trainfy' },
  { src: '/projects/trainfy/web-mockup-1.jpg', alt: 'Trainfy' },
  { src: '/projects/trainfy/quote-bg.jpg', alt: 'Trainfy' },
  // Las Islas Cíes
  { src: '/projects/las-islas-cies/bento-1.jpg', alt: 'Las Islas Cíes' },
  { src: '/projects/las-islas-cies/bento-2.jpg', alt: 'Las Islas Cíes' },
  { src: '/projects/las-islas-cies/bento-3.jpg', alt: 'Las Islas Cíes' },
  { src: '/projects/las-islas-cies/bento-4.jpg', alt: 'Las Islas Cíes' },
  { src: '/projects/las-islas-cies/bento-5.jpg', alt: 'Las Islas Cíes' },
  { src: '/projects/las-islas-cies/bento-7.jpg', alt: 'Las Islas Cíes' },
  { src: '/projects/las-islas-cies/after.jpg', alt: 'Las Islas Cíes' },
  { src: '/projects/las-islas-cies/feature-ui-ux.jpg', alt: 'Las Islas Cíes' },
  // Silvia
  { src: '/projects/silvia-fernandez-de-luna/bento-1.jpg', alt: 'Silvia Fernández De Luna' },
  { src: '/projects/silvia-fernandez-de-luna/bento-2.jpg', alt: 'Silvia Fernández De Luna' },
  { src: '/projects/silvia-fernandez-de-luna/bento-3.jpg', alt: 'Silvia Fernández De Luna' },
  { src: '/projects/silvia-fernandez-de-luna/bento-5.jpg', alt: 'Silvia Fernández De Luna' },
  { src: '/projects/silvia-fernandez-de-luna/portada-sfdl.jpg', alt: 'Silvia Fernández De Luna' },
  { src: '/projects/silvia-fernandez-de-luna/feature-marketing.jpg', alt: 'Silvia Fernández De Luna' },
  // Pan do Porriño
  { src: '/projects/pan-do-porrino/bento-2.png', alt: 'Pan do Porriño' },
  { src: '/projects/pan-do-porrino/bento-3.png', alt: 'Pan do Porriño' },
  { src: '/projects/pan-do-porrino/bento-5.png', alt: 'Pan do Porriño' },
  { src: '/projects/pan-do-porrino/Mockup_diptico_pandoporrino.jpg', alt: 'Pan do Porriño' },
  { src: '/projects/pan-do-porrino/PandoPorrino_branding_versionsecundaria.jpg', alt: 'Pan do Porriño' },
  { src: '/projects/pan-do-porrino/packaging_new.png', alt: 'Pan do Porriño' },
];

// 6 columnas × 6 filas = 36 slots — llenamos con las 36 primeras (sin repetir)
const NUM_COLS = 6;
const IMAGES_PER_COL = 6;
const IMAGES = ALL_IMAGES.slice(0, NUM_COLS * IMAGES_PER_COL);
const COL_WIDTH = 260;
const CANVAS_PAD = 360;

/* ═══════════════════════════════════════════════════════════════
   LIGHTBOX — usa next/image solo aquí
   ═══════════════════════════════════════════════════════════════ */

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-[90vw] h-[80vh] max-w-5xl"
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image src={src} alt={alt} fill priority className="object-contain" sizes="90vw" />
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NOT FOUND PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function NotFound() {
  const [selected, setSelected] = useState<number | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const handleClose = useCallback(() => setSelected(null), []);

  // Centrar scroll al montar
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollTo({
        left: (el.scrollWidth - el.clientWidth) / 2,
        top: (el.scrollHeight - el.clientHeight) / 2,
      });
    });
  }, []);

  // Distribuir en columnas
  const columns: typeof IMAGES[] = Array.from({ length: NUM_COLS }, () => []);
  IMAGES.forEach((img, i) => columns[i % NUM_COLS].push(img));

  return (
    <>
      {/* ── Canvas scrollable ── */}
      <div
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          overflow: 'auto',
          backgroundColor: '#241E33',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: CANVAS_PAD }}>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${NUM_COLS}, ${COL_WIDTH}px)`, gap: '96px' }}>
            {columns.map((col, ci) => (
              <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: '96px' }}>
                {col.map((img, ri) => {
                  const idx = ci + ri * NUM_COLS;
                  return (
                    <motion.button
                      key={img.src}
                      onClick={() => setSelected(idx)}
                      style={{
                        all: 'unset',
                        cursor: 'pointer',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        display: 'block',
                        opacity: 0,
                      }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: ri * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={COL_WIDTH * 2}
                        height={COL_WIDTH * 2}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                        sizes={`${COL_WIDTH}px`}
                        quality={75}
                      />
                    </motion.button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Vignettes top / bottom ── */}
      {(['top', 'bottom'] as const).map((pos) => (
        <div
          key={pos}
          style={{
            position: 'fixed',
            [pos]: 0,
            left: 0,
            right: 0,
            height: 200,
            background: `linear-gradient(to ${pos === 'top' ? 'bottom' : 'top'}, #241E33 0%, transparent 100%)`,
            pointerEvents: 'none',
            zIndex: 9,
          }}
        />
      ))}

      {/* ── Pill central ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
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
            gap: '8px',
            padding: '40px 56px 44px',
            borderRadius: '28px',
            background: 'rgba(36, 30, 51, 0.82)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(5rem, 11vw, 8.5rem)',
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: '#F8F6F2',
            }}
          >
            404
          </span>
          <p
            style={{
              fontFamily: 'var(--font-base)',
              fontSize: 'clamp(0.875rem, 1.3vw, 1.0625rem)',
              color: 'rgba(248, 246, 242, 0.55)',
              margin: 0,
              textAlign: 'center',
            }}
          >
            El caos también es parte del proceso de creación.
          </p>

          {/* CTAs */}
          <motion.div
            style={{
              display: 'flex',
              gap: '10px',
              marginTop: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              pointerEvents: 'auto',
            }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/projects" style={btnStyle('filled')}>Proyectos</Link>
            <Link href="/about" style={btnStyle('outline')}>Sobre mí</Link>
            <Link href="/contact" style={btnStyle('outline')}>Contacto</Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selected !== null && (
          <Lightbox
            src={IMAGES[selected].src}
            alt={IMAGES[selected].alt}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function btnStyle(variant: 'filled' | 'outline'): React.CSSProperties {
  const base: React.CSSProperties = {
    display: 'inline-block',
    fontFamily: 'var(--font-accent)',
    fontSize: 'clamp(10px, 0.85vw, 11px)',
    fontWeight: 400,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    padding: '13px 28px',
    borderRadius: 'var(--radius-full)',
    textDecoration: 'none',
    lineHeight: 1,
  };
  if (variant === 'filled') return { ...base, backgroundColor: '#F8F6F2', color: '#241E33' };
  return { ...base, backgroundColor: 'transparent', color: 'rgba(248,246,242,0.7)', border: '1px solid rgba(248,246,242,0.2)' };
}
