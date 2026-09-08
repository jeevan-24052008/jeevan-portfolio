import type { Project } from '../data/portfolio';
import { portfolioProject } from '../data/portfolio';
import { GithubIcon } from './Icons';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.techList}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkBtn}
          >
            <GithubIcon width={16} height={16} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export function PortfolioProjectCard() {
  return <ProjectCard project={portfolioProject} />;
}
