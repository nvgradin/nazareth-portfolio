import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'Sobre mí | Nazareth',
  description: 'Product & Experience Designer con pasión por crear experiencias digitales significativas.',
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <AboutHero />
    </main>
  );
}
