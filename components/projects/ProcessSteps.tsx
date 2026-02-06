import { ProcessStep } from '@/lib/project-layout.types';
import styles from './ProcessSteps.module.css';

interface Props {
  data: ProcessStep[];
}

export function ProcessSteps({ data }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {data.map((step) => (
            <div key={step.number} className={styles.step}>
              <span className={styles.stepNumber}>
                {String(step.number).padStart(2, '0')}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
