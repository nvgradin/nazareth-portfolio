'use client';

import { motion } from 'framer-motion';
import styles from './HomeLogos.module.css';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const ALL_LOGOS = [
  { src: '/logos/Movistar.png', alt: 'Movistar' },
  { src: '/logos/Schweppes.png', alt: 'Schweppes' },
  { src: '/logos/Reebok.png', alt: 'Reebok' },
  { src: '/logos/Zippy.png', alt: 'Zippy' },
  { src: '/logos/Trainfy.png', alt: 'Trainfy' },
  { src: '/logos/Las_Islas_Cies.png', alt: 'Las Islas Cíes' },
  { src: '/logos/Silvia_Fernandez_De_Luna.png', alt: 'Silvia Fernández de Luna' },
  { src: '/logos/Raw_Yoga_Studio.png', alt: 'Raw Yoga Studio' },
  { src: '/logos/Viaje_Morocco.png', alt: 'Viaje Morocco' },
  { src: '/logos/AGADIC.png', alt: 'AGADIC' },
  { src: '/logos/Marca-Galicia.png', alt: 'Marca Galicia' },
  { src: '/logos/Xunta_de_Galicia.png', alt: 'Xunta de Galicia' },
  { src: '/logos/Ibiza_Observatorio_de_Edificacion.png', alt: 'Ibiza Observatorio' },
  { src: '/logos/Pan_Do_Porrino.png', alt: 'Pan do Porriño' },
  { src: '/logos/Afundacion.png', alt: 'Afundación' },
  { src: '/logos/Concello_de_porrino.png', alt: 'Concello de Porriño' },
  { src: '/logos/Deputacion_de_Pontevedra.png', alt: 'Deputación de Pontevedra' },
  { src: '/logos/EU_ONS.png', alt: 'EU ONS' },
];

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
          {DOUBLED.map((logo, i) => (
            <div key={i} className={styles.logoWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
