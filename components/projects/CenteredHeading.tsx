'use client';

import { motion } from 'framer-motion';
import { CenteredHeading as CenteredHeadingType } from '@/lib/project-layout.types';
import { TextContainer } from '@/components/ui';
import styles from './CenteredHeading.module.css';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface Props {
  data: CenteredHeadingType;
}

export function CenteredHeading({ data }: Props) {
  const { title, subtitle } = data;

  return (
    <section className={styles.heading}>
      <div className={styles.container}>
        <TextContainer>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              {subtitle}
            </motion.p>
          )}
        </TextContainer>
      </div>
    </section>
  );
}
