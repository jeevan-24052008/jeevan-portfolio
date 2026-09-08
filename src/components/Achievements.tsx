import { achievements, certifications, research, education } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import {
  AwardIcon,
  CertificateIcon,
  ResearchIcon,
  GraduationCapIcon,
  MapPinIcon,
  SparkleIcon,
} from './Icons';
import { useReveal } from '../hooks/useReveal';
import styles from './Achievements.module.css';

export function Achievements() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const { ref: certRef, isVisible: certVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition & milestones"
          subtitle="Hackathon results, problem-solving milestones, and ongoing academic pursuits."
        />

        {/* Achievement cards */}
        <div ref={ref} className={`${styles.achievementGrid} ${isVisible ? styles.visible : ''}`}>
          {achievements.map((achievement) => (
            <div key={achievement.title} className={styles.achievementCard}>
              <div className={styles.achievementIcon}>
                <AwardIcon width={24} height={24} />
              </div>
              <div className={styles.achievementBody}>
                <h3 className={styles.achievementTitle}>{achievement.title}</h3>
                <p className={styles.achievementDesc}>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={styles.subSection}>
          <h3 className={styles.subTitle}>
            <CertificateIcon width={20} height={20} />
            Certifications
          </h3>
          <div
            ref={certRef}
            className={`${styles.certGrid} ${certVisible ? styles.visible : ''}`}
          >
            {certifications.map((cert) => (
              <div key={cert.title} className={styles.certItem}>
                <div className={styles.certTitle}>{cert.title}</div>
                <div className={styles.certIssuer}>{cert.issuer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Research */}
        <div className={styles.subSection}>
          <h3 className={styles.subTitle}>
            <ResearchIcon width={20} height={20} />
            Research &amp; Extracurricular
          </h3>
          <div className={styles.researchCard}>
            <div className={styles.researchIcon}>
              <SparkleIcon width={20} height={20} />
            </div>
            <div>
              <h4 className={styles.researchTitle}>{research.title}</h4>
              <p className={styles.researchDesc}>{research.description}</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className={styles.subSection}>
          <h3 className={styles.subTitle}>
            <GraduationCapIcon width={20} height={20} />
            Education
          </h3>
          <div className={styles.eduCard}>
            <div className={styles.eduLeft}>
              <h4 className={styles.eduInstitution}>{education.institution}</h4>
              <p className={styles.eduDegree}>{education.degree}</p>
            </div>
            <div className={styles.eduRight}>
              <div className={styles.eduMeta}>
                <span className={styles.eduExpected}>{education.expected}</span>
                <span className={styles.eduCgpa}>CGPA: {education.cgpa}</span>
              </div>
              <div className={styles.eduLocation}>
                <MapPinIcon width={14} height={14} />
                {education.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
