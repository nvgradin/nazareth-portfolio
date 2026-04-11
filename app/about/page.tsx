import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutManifesto from '@/components/about/AboutManifesto';
import AboutStory from '@/components/about/AboutStory';
import AboutLogos from '@/components/about/AboutLogos';
import AboutPillars from '@/components/about/AboutPillars';
import AboutTimeline from '@/components/about/AboutTimeline';
import AboutCTA from '@/components/about/AboutCTA';
import { Footer } from '@/components/layout';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'Sobre mí | Nazareth',
  description: 'Digital Product & Experience Designer. Estrategia, diseño y desarrollo desde una sola mirada.',
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <AboutHero />
      <AboutManifesto />
      <AboutStory />
      <AboutLogos />
      <AboutPillars />
      <AboutTimeline />
      <AboutCTA />
      <Footer />
    </main>
  );
}
