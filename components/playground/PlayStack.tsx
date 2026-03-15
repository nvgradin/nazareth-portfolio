'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* Portadas de proyectos — repetidas para llenar el espacio */
const PORTADAS = [
  '/projects/trainfy/portada_trainfy.webp',
  '/projects/silvia-fernandez-de-luna/portada-sfdl.jpg',
  '/projects/amigo-secreto/amigosecreto.jpg',
  '/projects/las-islas-cies/bento-1.jpg',
  '/projects/trainfy/portada_trainfy.webp',
  '/projects/silvia-fernandez-de-luna/portada-sfdl.jpg',
  '/projects/amigo-secreto/amigosecreto.jpg',
  '/projects/las-islas-cies/bento-1.jpg',
  '/projects/trainfy/portada_trainfy.webp',
  '/projects/silvia-fernandez-de-luna/portada-sfdl.jpg',
  '/projects/amigo-secreto/amigosecreto.jpg',
  '/projects/las-islas-cies/bento-1.jpg',
];

/* Posiciones y tamaños fijos para cada imagen — distribuidas por el viewport */
const ITEMS = [
  { src: PORTADAS[0],  x: '4vw',   y: '8vh',   w: 220, delay: 0,    dur: 7  },
  { src: PORTADAS[1],  x: '22vw',  y: '58vh',  w: 180, delay: 1.2,  dur: 9  },
  { src: PORTADAS[2],  x: '68vw',  y: '6vh',   w: 200, delay: 0.5,  dur: 8  },
  { src: PORTADAS[3],  x: '80vw',  y: '55vh',  w: 160, delay: 2,    dur: 10 },
  { src: PORTADAS[4],  x: '42vw',  y: '72vh',  w: 190, delay: 0.8,  dur: 7.5},
  { src: PORTADAS[5],  x: '6vw',   y: '64vh',  w: 150, delay: 1.5,  dur: 9  },
  { src: PORTADAS[6],  x: '55vw',  y: '14vh',  w: 170, delay: 0.3,  dur: 8.5},
  { src: PORTADAS[7],  x: '76vw',  y: '30vh',  w: 210, delay: 1.8,  dur: 7  },
  { src: PORTADAS[8],  x: '30vw',  y: '10vh',  w: 140, delay: 2.2,  dur: 11 },
  { src: PORTADAS[9],  x: '14vw',  y: '36vh',  w: 165, delay: 0.6,  dur: 8  },
  { src: PORTADAS[10], x: '88vw',  y: '72vh',  w: 145, delay: 1.1,  dur: 9.5},
  { src: PORTADAS[11], x: '48vw',  y: '46vh',  w: 155, delay: 2.5,  dur: 7  },
];

export function PlayStack() {
  return (
    <>
      {/* Fondo fijo con imágenes flotantes */}
      <div style={{ position: 'fixed', inset: 0, backgroundColor: 'var(--brand-primary-900)', overflow: 'hidden' }}>
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
            }}
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: item.dur,
              delay: item.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
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
      </div>

      {/* Centro — enlace a proyectos */}
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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ pointerEvents: 'auto', textAlign: 'center' }}
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
          <motion.p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 14,
              color: 'var(--neutral-50)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginTop: 16,
              cursor: 'pointer',
            }}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 0.45, y: 0 }}
            whileHover={{ opacity: 0.9, y: -3 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Entrar →
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}
