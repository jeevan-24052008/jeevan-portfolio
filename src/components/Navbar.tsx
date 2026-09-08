import { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../data/portfolio';
import { useScrollDirection } from '../hooks/useReveal';
import { MenuIcon, CloseIcon, DownloadIcon } from './Icons';
import { Button } from './Button';
import styles from './Navbar.module.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrolled = useScrollDirection();

  useEffect(() => {
    const sections = navLinks.map((link) => {
      const id = link.href.slice(1);
      return { id, el: document.getElementById(id) };
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach(({ el }) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a
          href="#home"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
        >
          <span className={styles.logoMark}>JK</span>
          <span className={styles.logoText}>Jeevan Kumar</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                activeSection === link.href.slice(1) ? styles.active : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.desktopActions}>
          <Button href={personalInfo.resume} variant="primary" className={styles.resumeBtn}>
            <DownloadIcon width={16} height={16} />
            Resume
          </Button>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon width={24} height={24} /> : <MenuIcon width={24} height={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{ transitionDelay: menuOpen ? `${index * 60 + 100}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <Button
            href={personalInfo.resume}
            variant="primary"
            className={styles.mobileResumeBtn}
          >
            <DownloadIcon width={16} height={16} />
            Download Resume
          </Button>
        </nav>
      </div>
    </header>
  );
}
