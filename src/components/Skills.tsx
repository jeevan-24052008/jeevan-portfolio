import { skillCategories } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { useReveal } from '../hooks/useReveal';
import styles from './Skills.module.css';

export function Skills() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          subtitle="Technologies and tools I work with across the stack."
        />

        <div ref={ref} className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {skillCategories.map((category) => (
            <div key={category.name} className={styles.category}>
              <h3 className={styles.categoryName}>{category.name}</h3>
              <ul className={styles.skillList}>
                {category.skills.map((skill) => (
                  <li key={skill} className={styles.skillTag}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
