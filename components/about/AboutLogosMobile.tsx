'use client';

import Image from 'next/image';
import styles from './AboutLogosMobile.module.css';

// Todos los logos son 260×160px
const W = 260;
const H = 160;

interface Logo {
  src: string;
  alt: string;
}

// Logos agencia — fila 1, izquierda
const AGENCIA: Logo[] = [
  { src: '/logos/Movistar.png', alt: 'Movistar' },
  { src: '/logos/Schweppes.png', alt: 'Schweppes' },
  { src: '/logos/Reebok.png', alt: 'Reebok' },
  { src: '/logos/Zippy.png', alt: 'Zippy' },
];

// Logos freelance — fila 2, derecha
const FREELANCE: Logo[] = [
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

function MarqueeRow({
  logos,
  direction,
  label,
}: {
  logos: Logo[];
  direction: 'left' | 'right';
  label: string;
}) {
  const doubled = [...logos, ...logos];

  return (
    <div className={styles.marqueeGroup}>
      <p className={styles.label}>{label}</p>
      <div className={styles.track}>
        <div className={`${styles.strip} ${direction === 'right' ? styles.stripReverse : ''}`}>
          {doubled.map((logo, i) => (
            <div key={i} className={styles.logoWrap}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={W}
                height={H}
                className={styles.logo}
                style={{ width: 'auto', height: '55px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AboutLogosMobile() {
  return (
    <div className={styles.root}>
      <MarqueeRow logos={AGENCIA} direction="left" label="En agencia" />
      <MarqueeRow logos={FREELANCE} direction="right" label="Freelance" />
    </div>
  );
}
