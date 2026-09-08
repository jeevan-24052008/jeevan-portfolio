import { personalInfo, navLinks } from '../data/portfolio';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import styles from './Footer.module.css';

export function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>JK</span>
              <span className={styles.logoText}>{personalInfo.name}</span>
            </div>
            <p className={styles.tagline}>{personalInfo.role}</p>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.socials}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <GithubIcon width={18} height={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <LinkedinIcon width={18} height={18} />
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LeetCode"
            >
              <LeetcodeIcon width={18} height={18} />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; 2026 Jeevan Kumar</p>
        </div>
      </div>
    </footer>
  );
}
