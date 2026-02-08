import { ReactNode } from 'react';
import styles from './TextContainer.module.css';

interface Props {
  children: ReactNode;
  className?: string;
}

export function TextContainer({ children, className }: Props) {
  return (
    <div className={`${styles.textContainer}${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
}
