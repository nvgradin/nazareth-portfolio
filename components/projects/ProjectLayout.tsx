import dynamic from 'next/dynamic';
import { ProjectWithLayout, LayoutSectionKey } from '@/lib/project-layout.types';
import { ProjectHero } from './ProjectHero';
import { BentoGallery } from './BentoGallery';
import { EditorialBlock } from './EditorialBlock';
import styles from './ProjectLayout.module.css';

// Secciones opcionales — cargadas solo cuando el proyecto las necesita
const CenteredHeading      = dynamic(() => import('./CenteredHeading').then(m => ({ default: m.CenteredHeading })));
const FeatureCards         = dynamic(() => import('./FeatureCards').then(m => ({ default: m.FeatureCards })));
const ParallaxImage        = dynamic(() => import('./ParallaxImage').then(m => ({ default: m.ParallaxImage })));
const ImageCompare         = dynamic(() => import('./ImageCompare').then(m => ({ default: m.ImageCompare })));
const HeroImage            = dynamic(() => import('./HeroImage').then(m => ({ default: m.HeroImage })));
const StatementBlock       = dynamic(() => import('./StatementBlock').then(m => ({ default: m.StatementBlock })));
const BrandingScrollerSection = dynamic(() => import('./BrandingScrollerSection').then(m => ({ default: m.BrandingScrollerSection })));
const ArchitectureWebFlow  = dynamic(() => import('./ArchitectureWebFlow').then(m => ({ default: m.ArchitectureWebFlow })));
const WebPanel             = dynamic(() => import('./WebPanel').then(m => ({ default: m.WebPanel })));
const ShowcaseTriptych     = dynamic(() => import('./ShowcaseTriptych').then(m => ({ default: m.ShowcaseTriptych })));
const ProjectReelsDeck     = dynamic(() => import('./ProjectReelsDeck').then(m => ({ default: m.ProjectReelsDeck })));
const FunnelFlow           = dynamic(() => import('./FunnelFlow').then(m => ({ default: m.FunnelFlow })));
const SistemScaled         = dynamic(() => import('./SistemScaled').then(m => ({ default: m.SistemScaled })));
const StaggeredProcess     = dynamic(() => import('./StaggeredProcess').then(m => ({ default: m.StaggeredProcess })));
const ProcessSteps         = dynamic(() => import('./ProcessSteps').then(m => ({ default: m.ProcessSteps })));
const ProjectVideoSection  = dynamic(() => import('./ProjectVideoSection').then(m => ({ default: m.ProjectVideoSection })));
const MediaGrid            = dynamic(() => import('./MediaGrid').then(m => ({ default: m.MediaGrid })));
const TextBlock            = dynamic(() => import('./TextBlock').then(m => ({ default: m.TextBlock })));
const LearningBlock        = dynamic(() => import('./LearningBlock').then(m => ({ default: m.LearningBlock })));
const ProjectLogos         = dynamic(() => import('./ProjectLogos').then(m => ({ default: m.ProjectLogos })));
const QuoteBanner          = dynamic(() => import('./QuoteBanner').then(m => ({ default: m.QuoteBanner })));
const ClosingText          = dynamic(() => import('./ClosingText').then(m => ({ default: m.ClosingText })));

interface Props {
  project: ProjectWithLayout;
}

// Orden por defecto — se usa cuando el proyecto no declara layoutOrder
const DEFAULT_ORDER: LayoutSectionKey[] = [
  'hero',
  'bento',
  'heading',
  'features',
  'introParallax',
  'imageCompare',
  'statementBlock',
  'brandingScroller',
  'architectureWebFlow',
  'web',
  'heroImage',
  'editorial',
  'branding',
  'reelsEditorial',
  'reelsDeck',
  'funnelFlow',
  'sistemScaled',
  'staggeredProcess',
  'process',
  'videoSection',
  'mediaGrid',
  'textBlock',
  'clientLogos',
  'quoteBanner',
  'closing',
];

export function ProjectLayout({ project }: Props) {
  const { layout } = project;
  const order = layout.layoutOrder ?? DEFAULT_ORDER;

  function renderSection(key: LayoutSectionKey) {
    switch (key) {
      case 'hero':
        return <ProjectHero key="hero" data={layout.hero} />;

      case 'bento':
        return <BentoGallery key="bento" data={layout.bento} />;

      case 'heading':
        return layout.heading
          ? <CenteredHeading key="heading" data={layout.heading} />
          : null;

      case 'features':
        return layout.features && layout.features.length > 0
          ? <FeatureCards key="features" data={layout.features} />
          : null;

      case 'introParallax':
        return layout.introParallax
          ? <ParallaxImage key="introParallax" src={layout.introParallax.src} alt={layout.introParallax.alt} />
          : null;

      case 'imageCompare':
        return layout.imageCompare
          ? <ImageCompare
              key="imageCompare"
              before={{ src: layout.imageCompare.before.src, alt: layout.imageCompare.before.alt || 'Before' }}
              after={{ src: layout.imageCompare.after.src, alt: layout.imageCompare.after.alt || 'After' }}
              initial={layout.imageCompare.initial}
              labels={layout.imageCompare.labels}
              background={layout.imageCompare.background}
              caption={layout.imageCompare.caption}
            />
          : null;

      case 'heroImage':
        return layout.heroImage
          ? <HeroImage key="heroImage" data={layout.heroImage} />
          : null;

      case 'statementBlock':
        return layout.statementBlock
          ? <StatementBlock
              key="statementBlock"
              label={layout.statementBlock.label}
              setup={layout.statementBlock.setup}
              statement={layout.statementBlock.statement}
              accentColor={layout.statementBlock.accentColor}
            />
          : null;

      case 'brandingScroller':
        return layout.brandingScroller
          ? <BrandingScrollerSection key="brandingScroller" data={layout.brandingScroller} />
          : null;

      case 'architectureWebFlow':
        return layout.architectureWebFlow
          ? <ArchitectureWebFlow key="architectureWebFlow" data={layout.architectureWebFlow} />
          : null;

      case 'web':
        return layout.web
          ? <EditorialBlock
              key="web"
              title={layout.web.title}
              subtitle={layout.web.subtitle}
              content={layout.web.content}
              columns={layout.web.columns}
            >
              {layout.webPanel && (
                <WebPanel data={layout.webPanel} background={layout.bento?.background} />
              )}
            </EditorialBlock>
          : layout.webPanel
            ? <WebPanel key="web" data={layout.webPanel} background={layout.bento?.background} />
            : null;

      case 'editorial':
        return layout.editorial
          ? <EditorialBlock
              key="editorial"
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
          : null;

      case 'branding':
        return layout.branding
          ? <EditorialBlock
              key="branding"
              title={layout.branding.title}
              subtitle={layout.branding.subtitle}
              content={layout.branding.content}
            >
              {layout.showcase && <ShowcaseTriptych data={layout.showcase} />}
            </EditorialBlock>
          : layout.showcase
            ? <ShowcaseTriptych key="branding" data={layout.showcase} />
            : null;

      case 'reelsEditorial':
        return layout.reelsEditorial
          ? <EditorialBlock
              key="reelsEditorial"
              title={layout.reelsEditorial.title}
              subtitle={layout.reelsEditorial.subtitle}
              content={layout.reelsEditorial.content}
            />
          : null;

      case 'reelsDeck':
        return layout.reelsDeck
          ? <ProjectReelsDeck key="reelsDeck" data={layout.reelsDeck} />
          : null;

      case 'funnelFlow':
        return layout.funnelFlow
          ? <FunnelFlow key="funnelFlow" data={layout.funnelFlow} />
          : null;

      case 'sistemScaled':
        return layout.sistemScaled
          ? <SistemScaled key="sistemScaled" data={layout.sistemScaled} />
          : null;

      case 'staggeredProcess':
        return layout.staggeredProcess
          ? <StaggeredProcess key="staggeredProcess" data={layout.staggeredProcess} />
          : null;

      case 'process':
        return layout.process && layout.process.length > 0
          ? <ProcessSteps key="process" data={layout.process} />
          : null;

      case 'videoSection':
        return layout.videoSection
          ? <ProjectVideoSection key="videoSection" data={layout.videoSection} />
          : null;

      case 'mediaGrid':
        return layout.mediaGrid
          ? <MediaGrid key="mediaGrid" data={layout.mediaGrid} />
          : null;

      case 'textBlock':
        return layout.textBlock
          ? <TextBlock key="textBlock" data={layout.textBlock} />
          : layout.learning
            ? <LearningBlock key="textBlock" data={layout.learning} />
            : null;

      case 'clientLogos':
        return layout.clientLogos && layout.clientLogos.length > 0
          ? <ProjectLogos key="clientLogos" logos={layout.clientLogos} staticOnDesktop={layout.clientLogosStatic} label={layout.clientLogosLabel} note={layout.clientLogosNote} />
          : null;

      case 'quoteBanner':
        return layout.quoteBanner
          ? <QuoteBanner key="quoteBanner" data={layout.quoteBanner} />
          : null;

      case 'closing':
        return layout.closing
          ? <ClosingText key="closing" data={layout.closing} />
          : null;

      default:
        return null;
    }
  }

  return (
    <article className={styles.layout}>
      {order.map(renderSection)}
    </article>
  );
}
