import { WebPanel as WebPanelType } from '@/lib/project-layout.types';
import { ImageGallery } from './ImageGallery';
import styles from './WebPanel.module.css';

interface Props {
  data: WebPanelType;
  background?: string;
}

export function WebPanel({ data, background }: Props) {
  const { mockups } = data;

  // Convert mockups to gallery format
  const galleryImages = mockups.map((mockup, index) => ({
    src: mockup.src,
    alt: mockup.alt || `Web mockup ${index + 1}`,
  }));

  return (
    <section className={styles.panel}>
      <div className={styles.inner}>
        <ImageGallery
          images={galleryImages}
          aspectMode="16:9"
          mainWidth="69%"
          mainBackground={background}
          mainPadding={64}
          listSize={200}
          gapMain={0}
          gapList={0}
          mainRadius={0}
          listRadius={0}
          listFullWidth={false}
        />
      </div>
    </section>
  );
}
