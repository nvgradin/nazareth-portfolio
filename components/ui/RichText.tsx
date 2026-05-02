import { Fragment } from 'react';
import styles from './RichText.module.css';

/**
 * Parsea sintaxis mínima de inline markup:
 * **texto** → <strong>
 * *texto*   → <em>
 * `texto`   → <span class="tag"> (pill con borde)
 */
export function parseInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <span key={i} className={styles.tag}>{part.slice(1, -1)}</span>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

interface Props {
  text: string;
  as?: 'p' | 'span';
  className?: string;
}

export function RichText({ text, as: Tag = 'p', className }: Props) {
  return <Tag className={className}>{parseInline(text)}</Tag>;
}
