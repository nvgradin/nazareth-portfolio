import { ReactNode } from 'react';
import { TextContainer } from '@/components/ui';
import styles from './EditorialBlock.module.css';

interface Props {
  title: string;
  subtitle: string;
  content: string;
  children?: ReactNode;
}

/**
 * EditorialBlock - Bloque reutilizable con layout 2 columnas
 *
 * Uso:
 * - Arquitectura de Información: con ParallaxImage
 * - Branding: con ShowcaseTriptych
 * - Web: con WebPanel/mockups
 * - Audiovisuales: con video/galería
 */
export function EditorialBlock({ title, subtitle, content, children }: Props) {
  return (
    <section className={styles.block}>
      {/* Layout 2 columnas: título izquierda, subtítulo + texto derecha */}
      <div className={styles.top}>
        <TextContainer className={styles.container}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.text}>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <p className={styles.content}>{content}</p>
          </div>
        </TextContainer>
      </div>

      {/* Contenido adicional (parallax image, triptych, etc.) */}
      {children}
    </section>
  );
}
