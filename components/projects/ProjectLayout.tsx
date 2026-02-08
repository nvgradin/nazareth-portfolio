import { ProjectWithLayout } from '@/lib/project-layout.types';
import { ProjectHero } from './ProjectHero';
import { BentoGallery } from './BentoGallery';
import { CenteredHeading } from './CenteredHeading';
import { FeatureCards } from './FeatureCards';
import { EditorialBlock } from './EditorialBlock';
import { ParallaxImage } from './ParallaxImage';
import { ShowcaseTriptych } from './ShowcaseTriptych';
import { BrandingScrollerSection } from './BrandingScrollerSection';
import { WebPanel } from './WebPanel';
import { ProcessSteps } from './ProcessSteps';
import { LearningBlock } from './LearningBlock';
import { QuoteBanner } from './QuoteBanner';
import { ClosingText } from './ClosingText';
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

      {/* 7) Editorial: Web + WebPanel */}
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

      {/* 10) Quote banner */}
      {layout.quoteBanner && <QuoteBanner data={layout.quoteBanner} />}

      {/* 10) Closing text */}
      {layout.closing && <ClosingText data={layout.closing} />}
    </article>
  );
}
