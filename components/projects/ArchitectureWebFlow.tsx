import Image from 'next/image';
import { ArchitectureWebFlow as ArchitectureWebFlowType } from '@/lib/project-layout.types';
import { TextContainer } from '@/components/ui';
import styles from './ArchitectureWebFlow.module.css';

interface Props {
  data: ArchitectureWebFlowType;
}

export function ArchitectureWebFlow({ data }: Props) {
  const { sectionTitle, intro, background, modules } = data;

  return (
    <section
      className={styles.section}
      style={{ backgroundColor: background }}
    >
      {/* Header */}
      <TextContainer>
        <header className={styles.header}>
          <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
          <p className={styles.intro}>{intro}</p>
        </header>
      </TextContainer>

      {/* Modules */}
      <div className={styles.modules}>
        {modules.map((mod, i) => {
          if (mod.layout === 'full-image') {
            return (
              <div key={i} className={styles.moduleFull}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={mod.image.src}
                    alt={mod.image.alt || ''}
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            );
          }

          const isReversed = mod.layout === 'image-text';

          return (
            <div
              key={i}
              className={`${styles.module}${isReversed ? ` ${styles.moduleReversed}` : ''}`}
            >
              <div className={styles.moduleText}>
                {mod.title && <h3 className={styles.moduleTitle}>{mod.title}</h3>}
                {mod.content && <p className={styles.moduleContent}>{mod.content}</p>}
                {mod.bullets && mod.bullets.length > 0 && (
                  <ul className={styles.moduleBullets}>
                    {mod.bullets.map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className={styles.moduleImageWrap}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={mod.image.src}
                    alt={mod.image.alt || ''}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
