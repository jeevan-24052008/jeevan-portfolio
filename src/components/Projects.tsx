import { featuredProjects } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { FeaturedProject } from './FeaturedProject';
import { PortfolioProjectCard } from './ProjectCard';
import { useReveal } from '../hooks/useReveal';
import styles from './Projects.module.css';

export function Projects() {
  const { ref: ref1, isVisible: vis1 } = useReveal<HTMLDivElement>();
  const { ref: ref2, isVisible: vis2 } = useReveal<HTMLDivElement>();
  const { ref: ref3, isVisible: vis3 } = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of projects spanning AI/ML, full-stack development, and API-driven systems."
        />

        <div className={styles.featuredWrap}>
          <div ref={ref1} className={`${vis1 ? styles.visible : ''} reveal`}>
            <FeaturedProject project={featuredProjects[0]} />
          </div>

          <div className={styles.divider} />

          <div ref={ref2} className={`${vis2 ? styles.visible : ''} reveal`}>
            <FeaturedProject project={featuredProjects[1]} reverse />
          </div>
        </div>

        {/* Portfolio project card */}
        <div ref={ref3} className={`${styles.portfolioWrap} ${vis3 ? styles.visible : ''} reveal`}>
          <h3 className={styles.otherTitle}>Also built</h3>
          <div className={styles.otherGrid}>
            <PortfolioProjectCard />
          </div>
        </div>
      </div>
    </section>
  );
}
