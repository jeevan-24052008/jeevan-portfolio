import { personalInfo } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { useReveal } from '../hooks/useReveal';
import styles from './About.module.css';

const interests = [
  'Artificial Intelligence',
  'Machine Learning',
  'Software Development',
  'Web Development',
  'APIs',
  'Problem Solving',
];

export function About() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="About" title="A bit about me" />

        <div ref={ref} className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.photoWrap}>
            <div className={styles.photoFrame}>
              <img
                src={personalInfo.photo}
                alt="Jeevan Kumar Ugandhar"
                className={styles.photo}
                width={480}
                height={560}
              />
            </div>
            <div className={styles.photoDecor} aria-hidden="true" />
          </div>

          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              I'm a <strong>CSE (AI &amp; ML)</strong> student at Chennai Institute of Technology,
              focused on building practical software across artificial intelligence, machine
              learning, web development, and API-driven systems.
            </p>
            <p className={styles.paragraph}>
              I enjoy turning ideas into working applications — from training ML models and wiring
              up backends to building clean, responsive interfaces. I'm also actively sharpening my
              problem-solving skills through Data Structures &amp; Algorithms practice on LeetCode.
            </p>
            <p className={styles.paragraph}>
              My current interests span across:
            </p>

            <ul className={styles.interests}>
              {interests.map((interest) => (
                <li key={interest} className={styles.interestTag}>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
