import { useEffect, useRef } from 'react';
import { useLang, t } from '../context/LanguageContext';
import { images } from '../data/siteContent';
import HeroCarousel from '../components/HeroCarousel';
import valsiMeaningImg from '../assets/meaning_of_valsi_leaf.png';
import gsap from 'gsap';

export default function Home() {
  const { lang } = useLang();
  const mainRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current.querySelectorAll('.gsap-section'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
      );
    }
  }, []);

  const carouselSlides = [
    { image: images.fieldGuidance, alt: 'VALSII Field Guidance' },
    { image: images.team, alt: 'VALSII Team' },
    { image: images.learning, alt: 'VALSII Classroom Learning' }
  ];

  return (
    <div ref={mainRef} style={{ overflow: 'hidden' }}>
      
      {/* SECTION 1: HERO CAROUSEL */}
      <div className="gsap-section">
        <HeroCarousel slides={carouselSlides} />
      </div>

      {/* SECTION 2: THE MEANING OF VALSII */}
      <section className="section-shell gsap-section" id="meaning-of-valsi" style={{ padding: '80px 0' }}>
        <div className="section-inner">
          <div className="lr-grid" style={{ alignItems: 'center', gap: '48px' }}>
            
            {/* Left Panel: Visual Asset */}
            <div style={{
              width: '100%',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '2px solid var(--stroke)',
              backgroundColor: 'var(--bg-soft)'
            }}>
              <img
                src={valsiMeaningImg}
                alt="Meaning of VALSII - Olai Chuvadi (Palm-leaf manuscript)"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Right Panel: Exact Text Copy */}
            <div>
              <span className="section-eyebrow" style={{ color: 'var(--primary)', marginBottom: '12px', display: 'block' }}>
                THE MEANING OF VALSII
              </span>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 900,
                color: 'var(--text)',
                margin: '0 0 20px 0',
                lineHeight: 1.2
              }}>
                Inspired by Tamil Heritage, Built for the Future
              </h2>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                marginBottom: '20px'
              }}>
                The name <strong>VALSII</strong> is inspired by the ancient Tamil word “வல்சி”, found in Sangam literature. In Tamil literary tradition, the word “வல்சி” refers to “food for life” or “that which sustains life.”
              </p>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                margin: 0
              }}>
                At VALSII, we believe that nourishment is not limited to food alone. Knowledge, skills, confidence, leadership, and values are equally essential for building a meaningful and successful life.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
