'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// ─── Imágenes flotantes ───────────────────────────────────────────────────────
// Puedes poner aquí cualquier imagen de /public, sin restricción.
// No tienen que ser las portadas y no tienes que repetirlas.
const ITEMS = [
  { src: '/projects/trainfy/portada_trainfy.webp',                                   x: '4vw',   y: '8vh',   w: 220, delay: 0,    dur: 7   },
  { src: '/projects/las-islas-cies/bento-2.jpg',                                     x: '22vw',  y: '58vh',  w: 180, delay: 1.2,  dur: 9   },
  { src: '/projects/silvia-fernandez-de-luna/portada-sfdl.jpg',                      x: '68vw',  y: '6vh',   w: 200, delay: 0.5,  dur: 8   },
  { src: '/projects/amigo-secreto/amigosecreto.jpg',                                 x: '80vw',  y: '55vh',  w: 160, delay: 2,    dur: 10  },
  { src: '/projects/silvia-fernandez-de-luna/bento-3.jpg',                                            x: '42vw',  y: '66vh',  w: 190, delay: 0.8,  dur: 7.5 },
  { src: '/projects/las-islas-cies/bento-3.jpg',                                     x: '6vw',   y: '64vh',  w: 150, delay: 1.5,  dur: 9   },
  { src: '/projects/silvia-fernandez-de-luna/Silvia-Fernandez-De-Luna-Academia.webp', x: '55vw', y: '14vh',  w: 170, delay: 0.3,  dur: 8.5 },
  { src: '/projects/silvia-fernandez-de-luna/bento-6.png',                                       x: '76vw',  y: '30vh',  w: 210, delay: 1.8,  dur: 7   },
  { src: '/projects/amigo-secreto/amigosecreto.jpg',                                 x: '30vw',  y: '10vh',  w: 140, delay: 2.2,  dur: 11  },
  { src: '/projects/trainfy/feature-branding.jpg',                                   x: '14vw',  y: '36vh',  w: 165, delay: 0.6,  dur: 8   },
  { src: '/projects/trainfy/bento-2.png',                                     x: '70vw',  y: '76vh',  w: 145, delay: 1.1,  dur: 9.5 },
  { src: '/projects/trainfy/editorial-full.jpg',                                     x: '48vw',  y: '46vh',  w: 155, delay: 2.5,  dur: 7   },
];

export function HomeProjects() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'visible',
      marginTop: -120,
      zIndex: 3,
    }}>
      {/* Fondo morado — empieza 120px más abajo para no tapar el fade del hero */}
      <div style={{
        position: 'absolute',
        top: 120,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'var(--brand-primary-900)',
        zIndex: 0,
      }} />

      {/* Imágenes flotantes */}
      {ITEMS.map((item, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: item.x,
            top: item.y,
            width: item.w,
            borderRadius: 12,
            overflow: 'hidden',
            opacity: 0.55,
            zIndex: 1,
            willChange: 'transform',
            backfaceVisibility: 'hidden',
          }}
          animate={{ y: [0, -22, 0] }}
          transition={{ duration: item.dur, delay: item.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src={item.src}
            alt=""
            width={item.w}
            height={Math.round(item.w * 0.7)}
            style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
            sizes={`${item.w}px`}
          />
        </motion.div>
      ))}

      {/* Centro — enlace a proyectos */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: 'center' }}
        >
          <motion.a
            href="/projects"
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(72px, 11vw, 128px)',
              fontWeight: 400,
              letterSpacing: '0.06em',
              color: 'var(--neutral-50)',
              textDecoration: 'none',
              lineHeight: 1,
              display: 'block',
              cursor: 'pointer',
            }}
            whileHover={{ scale: 1.04, textShadow: '0 0 60px rgba(252,247,243,0.18)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            Proyectos
          </motion.a>
          <motion.a
            href="/projects"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 14,
              color: 'var(--neutral-50)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginTop: 16,
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'block',
            }}
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 0.45, y: 0 }}
            whileHover={{ opacity: 0.9, y: -3 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Entrar →
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
