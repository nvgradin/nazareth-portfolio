import { LearningBlock as LearningBlockType } from '@/lib/project-layout.types';
import { TextContainer } from '@/components/ui';
import styles from './LearningBlock.module.css';

interface Props {
  data: LearningBlockType;
}

export function LearningBlock({ data }: Props) {
  const { title, intro, columns } = data;

  return (
    <section className={styles.block}>
      <TextContainer>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.intro}>{intro}</p>
        </div>

        <div className={styles.columns}>
          {columns.map((column, index) => (
            <div key={index} className={styles.column}>
              <h3 className={styles.subtitle}>{column.subtitle}</h3>
              <p className={styles.text}>{column.text}</p>
            </div>
          ))}
        </div>
      </TextContainer>
    </section>
  );
}
