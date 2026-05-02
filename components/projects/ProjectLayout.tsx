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
import { TextBlock } from './TextBlock';
import { MediaGrid } from './MediaGrid';
import { QuoteBanner } from './QuoteBanner';
import { ClosingText } from './ClosingText';
import { ProjectLogos } from './ProjectLogos';
import { ProjectVideoSection } from './ProjectVideoSection';
import { FunnelFlow } from './FunnelFlow';
import { HeroImage } from './HeroImage';
import { StaggeredProcess } from './StaggeredProcess';
import { StatementBlock } from './StatementBlock';
import { SistemScaled } from './SistemScaled';
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

      {/* Parallax image — separador visual tras features */}
      {layout.introParallax && (
        <ParallaxImage src={layout.introParallax.src} alt={layout.introParallax.alt} />
      )}

      {/* Image Compare (before/after) — tras features o introParallax */}
      {layout.imageCompare && (
        <ImageCompare
          before={{ src: layout.imageCompare.before.src, alt: layout.imageCompare.before.alt || 'Before' }}
          after={{ src: layout.imageCompare.after.src, alt: layout.imageCompare.after.alt || 'After' }}
          initial={layout.imageCompare.initial}
          labels={layout.imageCompare.labels}
          background={layout.imageCompare.background}
          caption={layout.imageCompare.caption}
        />
      )}

      {/* Statement block — posición A: antes del brandingScroller (por defecto) */}
      {layout.statementBlock && !layout.statementBlock.afterBranding && (
        <StatementBlock
          label={layout.statementBlock.label}
          setup={layout.statementBlock.setup}
          statement={layout.statementBlock.statement}
          accentColor={layout.statementBlock.accentColor}
        />
      )}

      {/* 5) Branding Scroller */}
      {layout.brandingScroller && !layout.branding && (
        <BrandingScrollerSection data={layout.brandingScroller} />
      )}

      {/* Statement block — posición B: después del brandingScroller */}
      {layout.statementBlock && layout.statementBlock.afterBranding && (
        <StatementBlock
          label={layout.statementBlock.label}
          setup={layout.statementBlock.setup}
          statement={layout.statementBlock.statement}
          accentColor={layout.statementBlock.accentColor}
        />
      )}

      {/* 6a) ArchitectureWebFlow: reemplaza editorial+web cuando existe */}
      {layout.architectureWebFlow && (
        <ArchitectureWebFlow data={layout.architectureWebFlow} />
      )}

      {/* 6b) Editorial: Web + WebPanel */}
      {layout.web && (
        <EditorialBlock
          title={layout.web.title}
          subtitle={layout.web.subtitle}
          content={layout.web.content}
          columns={layout.web.columns}
        >
          {layout.webPanel && (
            <WebPanel
              data={layout.webPanel}
              background={layout.bento?.background}
            />
          )}
        </EditorialBlock>
      )}

      {/* Fallback: WebPanel sin EditorialBlock de web */}
      {layout.webPanel && !layout.web && (
        <WebPanel data={layout.webPanel} background={layout.bento?.background} />
      )}

      {/* 7) Hero Image — imagen destacada a ancho completo */}
      {layout.heroImage && <HeroImage data={layout.heroImage} />}

      {/* Editorial: Arquitectura de Información + Parallax Image */}
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

      {/* Editorial: Branding + Showcase Triptych */}
      {layout.branding && (
        <EditorialBlock
          title={layout.branding.title}
          subtitle={layout.branding.subtitle}
          content={layout.branding.content}
        >
          {layout.showcase && <ShowcaseTriptych data={layout.showcase} />}
        </EditorialBlock>
      )}

      {/* Branding Scroller — solo si va acompañado de branding editorial */}
      {layout.brandingScroller && layout.branding && (
        <BrandingScrollerSection data={layout.brandingScroller} />
      )}

      {/* Fallback: Showcase sin EditorialBlock de branding */}
      {layout.showcase && !layout.branding && (
        <ShowcaseTriptych data={layout.showcase} />
      )}

      {layout.reelsEditorial && (
        <EditorialBlock
          title={layout.reelsEditorial.title}
          subtitle={layout.reelsEditorial.subtitle}
          content={layout.reelsEditorial.content}
        />
      )}

      {/* Reels deck */}
      {layout.reelsDeck && <ProjectReelsDeck data={layout.reelsDeck} />}

      {layout.funnelFlow && <FunnelFlow data={layout.funnelFlow} />}

      {layout.sistemScaled && <SistemScaled data={layout.sistemScaled} />}

      {/* Staggered process (reservado para playground) */}
      {layout.staggeredProcess && <StaggeredProcess data={layout.staggeredProcess} />}

      {/* Process steps (legacy) */}
      {layout.process && layout.process.length > 0 && (
        <ProcessSteps data={layout.process} />
      )}

      {/* Sección audiovisual: editorial + vídeo con play overlay */}
      {layout.videoSection && <ProjectVideoSection data={layout.videoSection} />}

      {/* Media grid: 2col + 3col full-bleed con header editorial */}
      {layout.mediaGrid && <MediaGrid data={layout.mediaGrid} />}

      {/* 8) TextBlock (nuevo) o learning (legacy) */}
      {layout.textBlock && <TextBlock data={layout.textBlock} />}
      {!layout.textBlock && layout.learning && <LearningBlock data={layout.learning} />}

      {layout.clientLogos && layout.clientLogos.length > 0 && (
        <ProjectLogos logos={layout.clientLogos} staticOnDesktop={layout.clientLogosStatic} />
      )}

      {/* 9) Quote banner */}
      {layout.quoteBanner && <QuoteBanner data={layout.quoteBanner} />}

      {/* 10) Closing text */}
      {layout.closing && <ClosingText data={layout.closing} />}
    </article>
  );
}
