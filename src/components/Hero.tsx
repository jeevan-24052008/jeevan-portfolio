import { personalInfo, stats } from '../data/portfolio';
import { Button } from './Button';
import {
  GithubIcon,
  LinkedinIcon,
  LeetcodeIcon,
  ArrowDownIcon,
  DownloadIcon,
  ArrowRightIcon,
} from './Icons';
import { useReveal } from '../hooks/useReveal';
import styles from './Hero.module.css';

export function Hero() {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.1 });

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Background gradient */}
      <div className={styles.bgGradient} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />

      <div ref={ref} className={`${styles.inner} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.content}>
          <p className={styles.greeting}>
            <span className={styles.wave}>Hi, I'm</span> {personalInfo.shortName}
          </p>

          <h1 className={styles.title}>
            CSE (AI &amp; ML) Student
            <span className={styles.titleAccent}>Developer</span>
            <span className={styles.titleAccent2}>Problem Solver</span>
          </h1>

          <p className={styles.description}>
            I build practical applications across AI/ML, web development, APIs, and intelligent
            systems while continuously improving my problem-solving and software engineering skills.
          </p>

          <div className={styles.actions}>
            <Button onClick={scrollToProjects} variant="primary">
              View Projects
              <ArrowRightIcon width={18} height={18} />
            </Button>
            <Button href={personalInfo.resume} variant="secondary">
              <DownloadIcon width={18} height={18} />
              Download Resume
            </Button>
          </div>

          <div className={styles.socials}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <GithubIcon width={20} height={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <LinkedinIcon width={20} height={20} />
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LeetCode"
            >
              <LeetcodeIcon width={20} height={20} />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        className={styles.scrollHint}
        onClick={() =>
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
        aria-label="Scroll to about section"
      >
        <ArrowDownIcon width={20} height={20} />
      </button>
    </section>
  );
}
