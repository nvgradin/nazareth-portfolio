'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './AboutLogos.module.css';
import AboutLogosMobile from './AboutLogosMobile';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
  extraClass?: string;
}

interface LogoGroup {
  label: string;
  logos: Logo[];
}

const GROUPS: LogoGroup[] = [
  {
    label: 'Marcas con las que trabajé en agencia',
    logos: [
      { src: '/logos/Logo_Movistar.png', alt: 'Movistar', width: 71, height: 40 },       // 2000x1125 → ratio 1.78
      { src: '/logos/Logo_Schweppes.svg', alt: 'Schweppes', width: 42, height: 40 },     // ~1:1 → casi cuadrado
      { src: '/logos/Logo_Reebok.png', alt: 'Reebok', width: 66, height: 31 },
      { src: '/logos/Logo_Zippy.svg', alt: 'Zippy', width: 71, height: 40 },             // 92x52 → ratio 1.77
    ],
  },
  {
    label: 'Proyectos como freelance',
    logos: [
      { src: '/logos/Logo_Trainfy.png', alt: 'Trainfy', width: 113, height: 60 },
      { src: '/logos/Logo_Las_Islas_Cies_com.png', alt: 'Las Islas Cíes', width: 113, height: 60 },
      { src: '/logos/Logo_Silvia_Fernandez_De_Luna.png', alt: 'Silvia Fernández de Luna', width: 150, height: 80 },
      { src: '/logos/Logo_Raw_Yoga_Studio.png', alt: 'Raw Yoga Studio', width: 150, height: 80 },
      { src: '/logos/Logo_Viaje_Morocco.png', alt: 'Viaje Morocco', width: 150, height: 80 },
      { src: '/logos/Logo_AGADIC.png', alt: 'AGADIC', width: 109, height: 40 },                           // 1329x487 → ratio 2.73
      { src: '/logos/Logo_Marca_Galicia.png', alt: 'Marca Galicia', width: 87, height: 40 },
      { src: '/logos/Logo_Xunta_de_Galicia.png', alt: 'Xunta de Galicia', width: 110, height: 32 },
      { src: '/logos/Logo_Ibiza_Observatorio_de_Edificacion.png', alt: 'Ibiza Observatorio', width: 160, height: 40 },
      { src: '/logos/Logotipo_Pan_Do_Porrino.png', alt: 'Pan do Porriño', width: 58, height: 40 },
      { src: '/logos/logotipo_afundacion.png', alt: 'Afundación', width: 110, height: 32 },
      { src: '/logos/logotipo_concello_de_porrino.png', alt: 'Concello de Porriño', width: 93, height: 54 },
    ],
  },
];

function LogoRow({ group, delay }: { group: LogoGroup; delay: number }) {
  if (group.logos.length === 0) return null;

  return (
    <div className={styles.group}>
      <motion.p
        className={styles.label}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay, ease: EASE_OUT }}
      >
        {group.label}
      </motion.p>

      <motion.div
        className={styles.row}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: delay + 0.15, ease: EASE_OUT }}
      >
        {group.logos.map((logo) => (
          <div key={logo.alt} className={styles.logoWrap}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={`${styles.logo}${logo.extraClass ? ` ${styles[logo.extraClass]}` : ''}`}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function AboutLogos() {
  return (
    <section className={styles.section}>
      {/* Desktop: grid estático con gris + hover color */}
      <div className={styles.inner}>
        {GROUPS.map((group, i) => (
          <LogoRow key={group.label} group={group} delay={i * 0.2} />
        ))}
      </div>

      {/* Móvil: marquee en color, dos filas */}
      <div className={styles.mobileOnly}>
        <AboutLogosMobile />
      </div>
    </section>
  );
}
