import Image from 'next/image';
import { WebPanel as WebPanelType } from '@/lib/project-layout.types';
import styles from './WebPanel.module.css';

interface Props {
  data: WebPanelType;
}

export function WebPanel({ data }: Props) {
  const { title, description, bullets, mockups } = data;

  return (
    <section className={styles.panel}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Contenido */}
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            {bullets && bullets.length > 0 && (
              <ul className={styles.bullets}>
                {bullets.map((bullet, index) => (
                  <li key={index} className={styles.bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mockups */}
          <div className={styles.mockups}>
            {mockups.map((mockup, index) => (
              <div key={index} className={styles.mockup}>
                <Image
                  src={mockup.src}
                  alt={mockup.alt || `Web mockup ${index + 1}`}
                  fill
                  className={styles.mockupImg}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
