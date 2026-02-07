import { ProjectWithLayout } from '@/lib/project-layout.types';
import { ProjectHero } from './ProjectHero';
import { BentoGallery } from './BentoGallery';
import { CenteredHeading } from './CenteredHeading';
import { FeatureCards } from './FeatureCards';
import { EditorialBlock } from './EditorialBlock';
import { ShowcaseTriptych } from './ShowcaseTriptych';
import { BrandingPanel } from './BrandingPanel';
import { WebPanel } from './WebPanel';
import { ProcessSteps } from './ProcessSteps';
import { QuoteBanner } from './QuoteBanner';
import { ClosingText } from './ClosingText';
import styles from './ProjectLayout.module.css';

interface Props {
  project: ProjectWithLayout;
}

export function ProjectLayout({ project }: Props) {
  const { layout, tags } = project;

  return (
    <article className={styles.layout}>
      {/* 1) Hero 2 columnas */}
      <ProjectHero data={layout.hero} tags={tags} />

      {/* 2) Bento Gallery (8 slots = 4x2 grid) */}
      <BentoGallery data={layout.bento} />

      {/* 3) Heading centrado */}
      {layout.heading && <CenteredHeading data={layout.heading} />}

      {/* 4) Feature cards */}
      {layout.features && layout.features.length > 0 && (
        <FeatureCards data={layout.features} />
      )}

      {/* 5) Editorial block */}
      {layout.editorial && <EditorialBlock data={layout.editorial} />}

      {/* 6) Showcase triptych */}
      {layout.showcase && <ShowcaseTriptych data={layout.showcase} />}

      {/* 7) Branding panel */}
      {layout.branding && <BrandingPanel data={layout.branding} />}

      {/* 8) Web panel */}
      {layout.webPanel && <WebPanel data={layout.webPanel} />}

      {/* 9) Process steps */}
      {layout.process && layout.process.length > 0 && (
        <ProcessSteps data={layout.process} />
      )}

      {/* 10) Quote banner */}
      {layout.quoteBanner && <QuoteBanner data={layout.quoteBanner} />}

      {/* 11) Closing text */}
      {layout.closing && <ClosingText data={layout.closing} />}
    </article>
  );
}
