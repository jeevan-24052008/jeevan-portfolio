import { useState } from 'react';
import type { Project } from '../data/portfolio';
import { GithubIcon, ExternalLinkIcon, CheckIcon } from './Icons';
import styles from './FeaturedProject.module.css';

interface FeaturedProjectProps {
  project: Project;
  reverse?: boolean;
}

export function FeaturedProject({ project, reverse }: FeaturedProjectProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className={`${styles.featured} ${reverse ? styles.reverse : ''}`}>
      {/* Image gallery */}
      <div className={styles.galleryWrap}>
        <div className={styles.mainImage}>
          <img
            src={project.images[activeImage]}
            alt={`${project.title} screenshot ${activeImage + 1}`}
            loading="lazy"
            width={640}
            height={400}
          />
        </div>
        {project.images.length > 1 && (
          <div className={styles.thumbnails}>
            {project.images.map((img, idx) => (
              <button
                key={idx}
                className={`${styles.thumb} ${idx === activeImage ? styles.thumbActive : ''}`}
                onClick={() => setActiveImage(idx)}
                aria-label={`View screenshot ${idx + 1}`}
              >
                <img src={img} alt={`${project.title} thumbnail ${idx + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.badge}>Featured</span>
          {project.subtitle && <span className={styles.subtitle}>{project.subtitle}</span>}
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        {project.highlights && (
          <ul className={styles.highlights}>
            {project.highlights.map((highlight) => (
              <li key={highlight} className={styles.highlightItem}>
                <CheckIcon width={14} height={14} className={styles.checkIcon} />
                {highlight}
              </li>
            ))}
          </ul>
        )}

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
            <GithubIcon width={18} height={18} />
            GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.linkBtn} ${styles.linkBtnLive}`}
            >
              <ExternalLinkIcon width={18} height={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
