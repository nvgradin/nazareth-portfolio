'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './AboutLogos.module.css';
import AboutLogosMobile from './AboutLogosMobile';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const W = 260;
const H = 160;

const AGENCIA = [
  { src: '/logos/Movistar.png', alt: 'Movistar' },
  { src: '/logos/Schweppes.png', alt: 'Schweppes' },
  { src: '/logos/Reebok.png', alt: 'Reebok' },
  { src: '/logos/Zippy.png', alt: 'Zippy' },
];

const FREELANCE = [
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

const FREELANCE_DOUBLED = [...FREELANCE, ...FREELANCE];

export default function AboutLogos() {
  return (
    <section className={styles.section}>

      {/* ── Desktop: agencia estática + freelance marquee ── */}
      <div className={styles.desktopInner}>

        <div className={styles.group}>
          <motion.p
            className={styles.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            En agencia
          </motion.p>
          <motion.div
            className={styles.agenciaRow}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE_OUT }}
          >
            {AGENCIA.map((logo) => (
              <div key={logo.alt} className={styles.logoWrap}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={W}
                  height={H}
                  className={styles.logo}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className={styles.group}>
          <motion.p
            className={styles.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT }}
          >
            En Nazareth Gradín
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE_OUT }}
          >
            <div className={styles.track}>
              <div className={styles.strip}>
                {FREELANCE_DOUBLED.map((logo, i) => (
                  <div key={i} className={styles.logoWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} alt={logo.alt} className={styles.logo} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* ── Móvil: dos marquees (AboutLogosMobile) ── */}
      <div className={styles.mobileInner}>
        <AboutLogosMobile />
      </div>

    </section>
  );
}
