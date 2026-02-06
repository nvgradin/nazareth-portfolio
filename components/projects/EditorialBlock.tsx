import Image from 'next/image';
import { EditorialBlock as EditorialBlockType } from '@/lib/project-layout.types';
import styles from './EditorialBlock.module.css';

interface Props {
  data: EditorialBlockType;
}

export function EditorialBlock({ data }: Props) {
  const { label, title, content, image } = data;

  return (
    <section className={styles.block}>
      {/* Parte superior: Label + Texto */}
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.label}>{label}</div>
          <div className={styles.text}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.content}>{content}</p>
          </div>
        </div>
      </div>

      {/* Imagen full-width */}
      <div className={styles.image}>
        <Image
          src={image.src}
          alt={image.alt || title}
          fill
          className={styles.img}
          sizes="100vw"
        />
      </div>
    </section>
  );
}
