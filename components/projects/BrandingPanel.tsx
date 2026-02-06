import Image from 'next/image';
import { BrandingPanel as BrandingPanelType } from '@/lib/project-layout.types';
import styles from './BrandingPanel.module.css';

interface Props {
  data: BrandingPanelType;
}

export function BrandingPanel({ data }: Props) {
  const { typography, colors, mockup, backgroundColor } = data;

  return (
    <section
      className={styles.panel}
      style={{ backgroundColor: backgroundColor || '#1E3A5F' }}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Tipografía */}
          <div>
            <h3 className={styles.sectionTitle}>Tipografía</h3>
            <div className={styles.fonts}>
              {typography.map((font, index) => (
                <div key={index} className={styles.font}>
                  <span className={styles.fontName}>{font.name}</span>
                  <span
                    className={styles.fontSample}
                    style={{ fontFamily: font.family }}
                  >
                    {font.sample || 'Aa Bb Cc Dd Ee'}
                  </span>
                  <span className={styles.fontFamily}>{font.family}</span>
                  {font.weights && (
                    <span className={styles.fontWeights}>
                      {font.weights.join(' / ')}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Paleta de colores */}
          <div>
            <h3 className={styles.sectionTitle}>Paleta</h3>
            <div className={styles.colorGrid}>
              {colors.map((color, index) => (
                <div key={index} className={styles.color}>
                  <div
                    className={styles.colorSwatch}
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className={styles.colorName}>{color.name}</span>
                  <span className={styles.colorHex}>{color.hex}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup */}
          {mockup && (
            <div className={styles.mockup}>
              <Image
                src={mockup.src}
                alt={mockup.alt || 'Branding mockup'}
                fill
                className={styles.mockupImg}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
