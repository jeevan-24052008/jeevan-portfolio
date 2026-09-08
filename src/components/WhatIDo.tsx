import { capabilities } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { CapabilityIcon } from './Icons';
import { useReveal } from '../hooks/useReveal';
import styles from './WhatIDo.module.css';

export function WhatIDo() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="What I Do" title="Capabilities" />

        <div ref={ref} className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {capabilities.map((cap) => (
            <div key={cap.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <CapabilityIcon name={cap.icon} width={24} height={24} />
              </div>
              <h3 className={styles.cardTitle}>{cap.title}</h3>
              <p className={styles.cardDesc}>{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
