import { ReactNode } from 'react';
import { EditorialContent } from '@/lib/project-layout.types';
import { TextContainer } from '@/components/ui';
import styles from './EditorialBlock.module.css';

interface Props {
  title: string;
  subtitle: string;
  content: EditorialContent;
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
  const isRich = typeof content !== 'string';

  return (
    <section className={styles.block}>
      {/* Layout 2 columnas: título izquierda, subtítulo + texto derecha */}
      <div className={styles.top}>
        <TextContainer className={styles.container}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.text}>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            {isRich ? (
              <>
                <p className={styles.content}>{content.text}</p>
                <ul className={styles.bullets}>
                  {content.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p className={styles.content}>{content}</p>
            )}
          </div>
        </TextContainer>
      </div>

      {/* Contenido adicional (parallax image, triptych, etc.) */}
      {children}
    </section>
  );
}
