import { Metadata } from 'next';
import { breadcrumbSchema } from '@/lib/schemas';
import AboutHero from '@/components/about/AboutHero';
import AboutManifesto from '@/components/about/AboutManifesto';
import AboutStory from '@/components/about/AboutStory';
import AboutLogos from '@/components/about/AboutLogos';
import AboutPillars from '@/components/about/AboutPillars';
import AboutTimeline from '@/components/about/AboutTimeline';
import AboutPersonal from '@/components/about/AboutPersonal';
import AboutCTA from '@/components/about/AboutCTA';
import { AboutThemeWatcher } from '@/components/about/AboutThemeWatcher';
import { Footer } from '@/components/layout';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'Sobre mí | Nazareth',
  description: 'Digital Product & Experience Designer. Estrategia, diseño y desarrollo desde una sola mirada.',
};

const BREADCRUMB = breadcrumbSchema([
  { name: 'Inicio', url: 'https://nazarethgradin.com' },
  { name: 'Sobre mí', url: 'https://nazarethgradin.com/about' },
]);

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <AboutThemeWatcher />
      <AboutHero />
      <AboutManifesto />
      <AboutStory />
      <AboutLogos />
      <AboutPillars />
      <AboutTimeline />
      <AboutPersonal />
      <AboutCTA />
      <Footer />
    </main>
  );
}
