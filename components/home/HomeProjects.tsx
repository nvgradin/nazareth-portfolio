'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HomeProjects.module.css';

// ─── Imágenes flotantes desktop ──────────────────────────────────────────────
const ITEMS = [
  { src: '/projects/trainfy/portada_trainfy.webp',                                    x: '4vw',   y: '8vh',   w: 220, delay: 0,    dur: 7,   hideTablet: false },
  { src: '/projects/las-islas-cies/bento-2.jpg',                                      x: '22vw',  y: '58vh',  w: 180, delay: 1.2,  dur: 9,   hideTablet: true  },
  { src: '/projects/silvia-fernandez-de-luna/portada-sfdl.jpg',                       x: '68vw',  y: '6vh',   w: 200, delay: 0.5,  dur: 8,   hideTablet: false },
  { src: '/projects/amigo-secreto/amigosecreto.jpg',                                  x: '80vw',  y: '55vh',  w: 160, delay: 2,    dur: 10,  hideTablet: false },
  { src: '/projects/silvia-fernandez-de-luna/bento-3.jpg',                            x: '42vw',  y: '66vh',  w: 190, delay: 0.8,  dur: 7.5, hideTablet: true  },
  { src: '/projects/las-islas-cies/bento-3.jpg',                                      x: '6vw',   y: '64vh',  w: 150, delay: 1.5,  dur: 9,   hideTablet: false },
  { src: '/projects/silvia-fernandez-de-luna/Silvia-Fernandez-De-Luna-Academia.webp', x: '55vw',  y: '14vh',  w: 170, delay: 0.3,  dur: 8.5, hideTablet: false },
  { src: '/projects/silvia-fernandez-de-luna/bento-6.png',                            x: '76vw',  y: '30vh',  w: 210, delay: 1.8,  dur: 7,   hideTablet: false },
  { src: '/projects/amigo-secreto/amigosecreto.jpg',                                  x: '30vw',  y: '10vh',  w: 140, delay: 2.2,  dur: 11,  hideTablet: false },
  { src: '/projects/trainfy/feature-branding.jpg',                                    x: '14vw',  y: '36vh',  w: 165, delay: 0.6,  dur: 8,   hideTablet: true  },
  { src: '/projects/trainfy/bento-2.png',                                             x: '70vw',  y: '76vh',  w: 145, delay: 1.1,  dur: 9.5, hideTablet: false },
  { src: '/projects/trainfy/editorial-full.jpg',                                      x: '48vw',  y: '46vh',  w: 155, delay: 2.5,  dur: 7,   hideTablet: true  },
];

// ─── Imágenes collage móvil ───────────────────────────────────────────────────
const MOBILE_CORNERS = [
  { src: '/projects/silvia-fernandez-de-luna/Silvia-Fernandez-De-Luna-Academia.webp', cls: styles.mobileCornerTL, delay: 0,   dur: 8   }, // izq arriba
  { src: '/projects/silvia-fernandez-de-luna/bento-3.jpg',                            cls: styles.mobileCornerTR, delay: 1.2, dur: 7   }, // der arriba
  { src: '/projects/amigo-secreto/amigosecreto.jpg',                                  cls: styles.mobileCornerML, delay: 1.8, dur: 7.5 }, // izq centro
  { src: '/projects/las-islas-cies/bento-2.jpg',                                      cls: styles.mobileCornerMC, delay: 0.9, dur: 9   }, // centro bajo título
  { src: '/projects/las-islas-cies/bento-3.jpg',                                      cls: styles.mobileCornerMR, delay: 0.6, dur: 9   }, // der centro
  { src: '/projects/trainfy/editorial-full.jpg',                                      cls: styles.mobileCornerBL, delay: 0.3, dur: 10  }, // izq abajo
  { src: '/projects/trainfy/portada_trainfy.webp',                                    cls: styles.mobileCornerBR, delay: 2.1, dur: 8.5 }, // der abajo
];


export function HomeProjects() {
  return (
    <div
      className={styles.wrapper}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'visible',
        marginTop: -120,
        zIndex: 3,
      }}
    >
      {/* Fondo morado */}
      <div
        className={styles.bg}
        style={{
          position: 'absolute',
          top: 120,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'var(--brand-primary-900)',
          zIndex: 0,
        }}
      />

      {/* Imágenes flotantes — solo desktop */}
      {ITEMS.map((item, i) => (
        <motion.div
          key={i}
          className={`${styles.floatingImage}${item.hideTablet ? ` ${styles.hideTablet}` : ''}`}
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

      {/* Imágenes collage — solo móvil */}
      {MOBILE_CORNERS.map((item, i) => (
        <motion.div
          key={`mc-${i}`}
          className={`${styles.mobileCorner} ${item.cls}`}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: item.dur, delay: item.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src={item.src}
            alt=""
            width={140}
            height={98}
            style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
            sizes="140px"
          />
        </motion.div>
      ))}


      {/* Centro — enlace a proyectos */}
      <div className={styles.center} style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: 'center' }}
        >
          <motion.a
            href="/projects"
            className={styles.projectsTitle}
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
