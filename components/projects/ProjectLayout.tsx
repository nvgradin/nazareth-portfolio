import { ProjectWithLayout } from '@/lib/project-layout.types';
import { ProjectHero } from './ProjectHero';
import { BentoGallery } from './BentoGallery';
import { CenteredHeading } from './CenteredHeading';
import { FeatureCards } from './FeatureCards';
import { ProjectReelsDeck } from './ProjectReelsDeck';
import { EditorialBlock } from './EditorialBlock';
import { ParallaxImage } from './ParallaxImage';
import { ShowcaseTriptych } from './ShowcaseTriptych';
import { BrandingScrollerSection } from './BrandingScrollerSection';
import { ArchitectureWebFlow } from './ArchitectureWebFlow';
import { ImageCompare } from './ImageCompare';
import { WebPanel } from './WebPanel';
import { ProcessSteps } from './ProcessSteps';
import { LearningBlock } from './LearningBlock';
import { MediaGrid } from './MediaGrid';
import { QuoteBanner } from './QuoteBanner';
import { ClosingText } from './ClosingText';
import { ProjectLogos } from './ProjectLogos';
import styles from './ProjectLayout.module.css';

interface Props {
  project: ProjectWithLayout;
}

export function ProjectLayout({ project }: Props) {
  const { layout } = project;

  return (
    <article className={styles.layout}>
      {/* 1) Hero 2 columnas */}
      <ProjectHero data={layout.hero} />

      {/* 2) Bento Gallery */}
      <BentoGallery data={layout.bento} />

      {/* 3) Heading centrado */}
      {layout.heading && <CenteredHeading data={layout.heading} />}

      {/* 4) Feature cards */}
      {layout.features && layout.features.length > 0 && (
        <FeatureCards data={layout.features} />
      )}

      {/* Parallax image — separador visual entre features y contenido */}
      {layout.introParallax && (
        <ParallaxImage src={layout.introParallax.src} alt={layout.introParallax.alt} />
      )}

      {/* Media grid: 2col + 3col full-bleed con header editorial */}
      {layout.mediaGrid && <MediaGrid data={layout.mediaGrid} />}

      {/* Editorial previo a reels */}
      {layout.reelsEditorial && (
        <EditorialBlock
          title={layout.reelsEditorial.title}
          subtitle={layout.reelsEditorial.subtitle}
          content={layout.reelsEditorial.content}
        />
      )}

      {/* Reels deck */}
      {layout.reelsDeck && <ProjectReelsDeck data={layout.reelsDeck} />}

      {/* ═══ SECCIONES VARIABLES (entre features y quote) ═══ */}

      {/* Image Compare (before/after) */}
      {layout.imageCompare && (
        <ImageCompare
          before={{ src: layout.imageCompare.before.src, alt: layout.imageCompare.before.alt || 'Before' }}
          after={{ src: layout.imageCompare.after.src, alt: layout.imageCompare.after.alt || 'After' }}
          initial={layout.imageCompare.initial}
          labels={layout.imageCompare.labels}
          background={layout.imageCompare.background}
        />
      )}

      {/* 5) Editorial: Arquitectura de Información + Parallax Image */}
      {layout.editorial && (
        <EditorialBlock
          title={layout.editorial.title}
          subtitle={layout.editorial.subtitle}
          content={layout.editorial.content}
        >
          {layout.editorial.image && (
            <ParallaxImage
              src={layout.editorial.image.src}
              alt={layout.editorial.image.alt || layout.editorial.title}
            />
          )}
        </EditorialBlock>
      )}

      {/* 6a) Editorial: Branding + Showcase Triptych */}
      {layout.branding && (
        <EditorialBlock
          title={layout.branding.title}
          subtitle={layout.branding.subtitle}
          content={layout.branding.content}
        >
          {layout.showcase && <ShowcaseTriptych data={layout.showcase} />}
        </EditorialBlock>
      )}

      {/* 6b) Branding Scroller */}
      {layout.brandingScroller && (
        <BrandingScrollerSection data={layout.brandingScroller} />
      )}

      {/* 7a) ArchitectureWebFlow: reemplaza editorial+web cuando existe */}
      {layout.architectureWebFlow && (
        <ArchitectureWebFlow data={layout.architectureWebFlow} />
      )}

      {/* 7b) Editorial: Web + WebPanel (fallback) */}
      {layout.web && (
        <EditorialBlock
          title={layout.web.title}
          subtitle={layout.web.subtitle}
          content={layout.web.content}
        >
          {layout.webPanel && (
            <WebPanel
              data={layout.webPanel}
              background={layout.bento?.background}
            />
          )}
        </EditorialBlock>
      )}

      {/* Fallback: Showcase sin EditorialBlock de branding */}
      {layout.showcase && !layout.branding && (
        <ShowcaseTriptych data={layout.showcase} />
      )}

      {/* Fallback: WebPanel sin EditorialBlock de web */}
      {layout.webPanel && !layout.web && (
        <WebPanel data={layout.webPanel} background={layout.bento?.background} />
      )}

      {/* 8) Learning block */}
      {layout.learning && <LearningBlock data={layout.learning} />}

      {/* 9) Process steps (legacy) */}
      {layout.process && layout.process.length > 0 && (
        <ProcessSteps data={layout.process} />
      )}

      {/* 10) Client logos marquee */}
      {layout.clientLogos && layout.clientLogos.length > 0 && (
        <ProjectLogos logos={layout.clientLogos} />
      )}

      {/* 11) Closing text — después de logos, antes del quote */}
      {layout.closing && <ClosingText data={layout.closing} />}

      {/* 12) Quote banner */}
      {layout.quoteBanner && <QuoteBanner data={layout.quoteBanner} />}
    </article>
  );
}
