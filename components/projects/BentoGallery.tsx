import Image from 'next/image';
import { BentoGallery as BentoGalleryType } from '@/lib/project-layout.types';
import styles from './BentoGallery.module.css';

interface Props {
  data: BentoGalleryType;
}

/**
 * Bento Gallery - Grid 4x2 con 3 variantes de layout
 * Variante A: 2x2 + 1x1 + 1x1 / 1x1 + 1x1 + 2x1
 * Variante B: 1x2 + 2x1 + 1x1 / 1x1 + 1x2 + 1x1
 * Variante C: 1x1 + 1x1 + 2x2 / 2x1 + 1x1 + 1x1
 */
export function BentoGallery({ data }: Props) {
  const { images, variant, backgroundColor } = data;

  // Aseguramos 8 imágenes para el grid 4x2
  const gridImages = images.slice(0, 8);

  return (
    <section
      className={styles.bento}
      style={{ backgroundColor: backgroundColor || '#1E3A5F' }}
    >
      <div className={`${styles.grid} ${styles[`variant${variant}`]}`}>
        {gridImages.map((image, index) => (
          <div key={index} className={`${styles.cell} ${styles[`cell${index + 1}`]}`}>
            <Image
              src={image.src}
              alt={image.alt || `Gallery image ${index + 1}`}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
