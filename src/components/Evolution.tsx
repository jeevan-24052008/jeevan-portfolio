import { evolutionStages } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { GithubIcon, ExternalLinkIcon, ArrowDownIcon } from './Icons';
import { useReveal } from '../hooks/useReveal';
import styles from './Evolution.module.css';

export function Evolution() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Project Evolution"
          title="Weather projects: from PDF reports to AI-powered intelligence"
          subtitle="Three stages of increasing complexity — showing how a simple weather report generator evolved into a full weather intelligence platform."
        />

        <div className={styles.timeline}>
          {evolutionStages.map((stage, index) => (
            <EvolutionStage
              key={stage.title}
              stage={stage}
              index={index}
              isLast={index === evolutionStages.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface EvolutionStageProps {
  stage: (typeof evolutionStages)[number];
  index: number;
  isLast: boolean;
}

function EvolutionStage({ stage, index, isLast }: EvolutionStageProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <>
      <div ref={ref} className={`${styles.stage} ${isVisible ? styles.visible : ''}`}>
        {/* Stage marker */}
        <div className={styles.marker}>
          <div className={styles.markerDot}>
            <span className={styles.markerNum}>{index + 1}</span>
          </div>
          {!isLast && <div className={styles.connector} aria-hidden="true" />}
        </div>

        {/* Stage content */}
        <div className={styles.stageContent}>
          <div className={styles.stageHeader}>
            <span className={styles.stageLabel}>{stage.stage}</span>
            <h3 className={styles.stageTitle}>{stage.title}</h3>
          </div>

          <div className={styles.stageImages}>
            {stage.images.map((img, imgIdx) => (
              <div key={imgIdx} className={styles.stageImageWrap}>
                <img
                  src={img}
                  alt={`${stage.title} screenshot ${imgIdx + 1}`}
                  loading="lazy"
                  width={300}
                  height={188}
                />
              </div>
            ))}
          </div>

          <p className={styles.stageDesc}>{stage.description}</p>

          <div className={styles.stageTech}>
            {stage.technologies.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.stageLinks}>
            <a
              href={stage.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtn}
            >
              <GithubIcon width={16} height={16} />
              GitHub
            </a>
            {stage.live && (
              <a
                href={stage.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkBtn} ${styles.linkBtnLive}`}
              >
                <ExternalLinkIcon width={16} height={16} />
                Live
              </a>
            )}
          </div>

          {/* Complexity indicator */}
          <div className={styles.complexity}>
            <span className={styles.complexityLabel}>Complexity</span>
            <div className={styles.complexityBar}>
              <div
                className={styles.complexityFill}
                style={{ width: `${((index + 1) / evolutionStages.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Arrow between stages */}
      {!isLast && (
        <div className={styles.arrowRow} aria-hidden="true">
          <ArrowDownIcon width={20} height={20} className={styles.arrow} />
        </div>
      )}
    </>
  );
}
