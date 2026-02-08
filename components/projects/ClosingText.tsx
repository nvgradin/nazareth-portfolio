import { ClosingText as ClosingTextType } from '@/lib/project-layout.types';
import { TextContainer } from '@/components/ui';
import styles from './ClosingText.module.css';

interface Props {
  data: ClosingTextType;
}

export function ClosingText({ data }: Props) {
  const { title, content } = data;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <TextContainer>
          {title && <h2 className={styles.title}>{title}</h2>}
          <p className={styles.content}>{content}</p>
        </TextContainer>
      </div>
    </section>
  );
}
