import { useEffect, useRef } from 'react';
import { useLang, t } from '../context/LanguageContext';
import {
  OurStorySection,
  CoreDirectivesSection,
  CoreValuesSection,
  FounderMessageSection,
} from '../components/AboutSections';
import gsap from 'gsap';

export default function About() {
  const { lang } = useLang();
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.querySelectorAll('.gsap-title'),
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="section-inner" style={{ textAlign: 'center', marginBottom: '40px' }} ref={headerRef}>
        <span className="section-eyebrow gsap-title" style={{ display: 'inline-block' }}>{t('About Us', 'எங்களை பற்றி', lang)}</span>
        <h1
          className="gsap-title"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            color: 'var(--primary)',
            margin: '16px 0',
            letterSpacing: '-0.02em',
          }}
        >
          {t('VALSII Story & Directives', 'VALSII கதையும் வழிகாட்டுதல்களும்', lang)}
        </h1>
      </div>

      <OurStorySection />
      <CoreDirectivesSection />
      <CoreValuesSection />
      <FounderMessageSection />
    </div>
  );
}
