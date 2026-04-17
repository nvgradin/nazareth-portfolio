'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HomeLogos.module.css';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const ALL_LOGOS = [
  { src: '/logos/Logo_Movistar.png', alt: 'Movistar', width: 71, height: 40 },
  { src: '/logos/Logo_Schweppes.svg', alt: 'Schweppes', width: 42, height: 40 },
  { src: '/logos/Logo_Reebok.png', alt: 'Reebok', width: 66, height: 31 },
  { src: '/logos/Logo_Zippy.svg', alt: 'Zippy', width: 71, height: 40 },
  { src: '/logos/Logo_Trainfy.png', alt: 'Trainfy', width: 113, height: 60 },
  { src: '/logos/Logo_Las_Islas_Cies_com.png', alt: 'Las Islas Cíes', width: 113, height: 60 },
  { src: '/logos/Logo_Silvia_Fernandez_De_Luna.png', alt: 'Silvia Fernández de Luna', width: 150, height: 80 },
  { src: '/logos/Logo_Raw_Yoga_Studio.png', alt: 'Raw Yoga Studio', width: 150, height: 80 },
  { src: '/logos/Logo_Viaje_Morocco.png', alt: 'Viaje Morocco', width: 150, height: 80 },
  { src: '/logos/Logo_AGADIC.png', alt: 'AGADIC', width: 109, height: 40 },
  { src: '/logos/Logo_Marca_Galicia.png', alt: 'Marca Galicia', width: 87, height: 40 },
  { src: '/logos/Logo_Xunta_de_Galicia.png', alt: 'Xunta de Galicia', width: 110, height: 32 },
  { src: '/logos/Logo_Ibiza_Observatorio_de_Edificacion.png', alt: 'Ibiza Observatorio', width: 160, height: 40 },
  { src: '/logos/Logotipo_Pan_Do_Porrino.png', alt: 'Pan do Porriño', width: 58, height: 40 },
  { src: '/logos/logotipo_afundacion.png', alt: 'Afundación', width: 110, height: 32 },
  { src: '/logos/logotipo_concello_de_porrino.png', alt: 'Concello de Porriño', width: 93, height: 54 },
];

// Duplicamos para loop continuo sin salto
const DOUBLED = [...ALL_LOGOS, ...ALL_LOGOS];

export function HomeLogos() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          Han confiado en mí
        </motion.p>
      </div>

      <div className={styles.track}>
        <div className={styles.strip}>
          {DOUBLED.map((logo, i) => {
            const ratio = logo.width / logo.height;
            const padding = Math.max(16, Math.round(40 - ratio * 8));
            return (
              <div key={i} className={styles.logoWrap} style={{ paddingInline: padding }}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={styles.logo}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
