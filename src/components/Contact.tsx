import { useState, type FormEvent } from 'react';
import { personalInfo } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import {
  MailIcon,
  PhoneIcon,
  GithubIcon,
  LinkedinIcon,
  LeetcodeIcon,
  ArrowRightIcon,
} from './Icons';
import { useReveal } from '../hooks/useReveal';
import styles from './Contact.module.css';

export function Contact() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);

  const contactItems = [
    {
      icon: MailIcon,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: 'jeevan-24052008',
      href: personalInfo.github,
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'Jeevan Kumar Ugandhar',
      href: personalInfo.linkedin,
    },
    {
      icon: LeetcodeIcon,
      label: 'LeetCode',
      value: 'jeevan_240508',
      href: personalInfo.leetcode,
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something meaningful."
          subtitle="Whether it's a project, collaboration, or just a hello — I'm always open to a conversation."
          align="center"
        />

        <div ref={ref} className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {/* Contact info */}
          <div className={styles.infoSide}>
            <div className={styles.contactList}>
              {contactItems.map((item) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith('http');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className={styles.contactItem}
                  >
                    <div className={styles.contactIcon}>
                      <Icon width={20} height={20} />
                    </div>
                    <div className={styles.contactText}>
                      <span className={styles.contactLabel}>{item.label}</span>
                      <span className={styles.contactValue}>{item.value}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact form */}
          <div className={styles.formSide}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={styles.textarea}
                  placeholder="Tell me about your project or idea..."
                  required
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                {submitted ? 'Message ready to send' : 'Send message'}
                <ArrowRightIcon width={18} height={18} />
              </button>

              {submitted && (
                <p className={styles.note}>
                  This form needs an endpoint to actually deliver messages. Connect a form service
                  (e.g. Formspree, Web3Forms) to enable sending.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
