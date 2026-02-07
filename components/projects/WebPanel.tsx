import { WebPanel as WebPanelType } from '@/lib/project-layout.types';
import { ImageGallery } from './ImageGallery';
import styles from './WebPanel.module.css';

interface Props {
  data: WebPanelType;
}

export function WebPanel({ data }: Props) {
  const { mockups } = data;

  // Convert mockups to gallery format
  const galleryImages = mockups.map((mockup, index) => ({
    src: mockup.src,
    alt: mockup.alt || `Web mockup ${index + 1}`,
  }));

  return (
    <section className={styles.panel}>
      <ImageGallery
        images={galleryImages}
        aspectMode="16:9"
        listSize={100}
        gapMain={16}
        gapList={12}
        mainRadius={0}
        listRadius={0}
      />
    </section>
  );
}
