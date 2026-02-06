import Image from 'next/image';
import { QuoteBanner as QuoteBannerType } from '@/lib/project-layout.types';
import styles from './QuoteBanner.module.css';

interface Props {
  data: QuoteBannerType;
}

export function QuoteBanner({ data }: Props) {
  const { quote, author, role, backgroundImage } = data;

  return (
    <section className={styles.banner}>
      {/* Background image */}
      <div className={styles.bg}>
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt || 'Quote background'}
          fill
          className={styles.bgImg}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.container}>
        <blockquote className={styles.quote}>{quote}</blockquote>
        {(author || role) && (
          <div className={styles.attribution}>
            {author && <span className={styles.author}>{author}</span>}
            {author && role && <span className={styles.separator}>—</span>}
            {role && <span className={styles.role}>{role}</span>}
          </div>
        )}
      </div>
    </section>
  );
}
