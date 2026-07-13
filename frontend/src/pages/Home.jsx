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
    { image: images.nameMeaning, alt: 'VALSI - Meaning of Name & Heritage' },
    { image: images.mobileAddiction, alt: 'VALSI - Mobile Addiction Recovery' },
    { image: images.fearManagement, alt: 'VALSI - Fear Management Training' }
  ];

  return (
    <div ref={mainRef} style={{ overflow: 'hidden' }}>
      
      {/* SECTION 1: HERO WITH CAROUSEL AND MEANING */}
      <section className="gsap-section" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0',
        minHeight: 'min(65vh, 500px)',
        alignItems: 'stretch'
      }}>
        {/* Left: Carousel */}
        <div style={{ width: '100%' }}>
          <HeroCarousel slides={carouselSlides} />
        </div>

        {/* Right: Meaning of VALSII Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '40px',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          overflowY: 'auto'
        }}>
          <span className="section-eyebrow" style={{ color: 'var(--primary)', marginBottom: '12px', display: 'block' }}>
            {t('THE MEANING OF VALSII', 'வல்சியின் பொருள்', lang)}
          </span>
          <h2 style={{
            fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
            fontWeight: 900,
            color: 'var(--text)',
            margin: '0 0 16px 0',
            lineHeight: 1.2
          }}>
            {t('Inspired by Tamil Heritage', 'தமிழ் பாரம்பரியத்தால் ஈர்க்கப்பட்டு', lang)}
          </h2>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
            lineHeight: 1.6,
            marginBottom: '12px'
          }}>
            {lang === 'ta' ? (
              <>
                <strong>வல்சி</strong> என்ற பெயர் சங்க இலக்கியங்களில் காணப்படும் பண்டைய தமிழ்ச் சொல்லான "வல்சி" என்பதிலிருந்து ஈர்க்கப்பட்டது.
              </>
            ) : (
              <>
                The name <strong>VALSII</strong> is inspired by the ancient Tamil word "வல்சி", found in Sangam literature.
              </>
            )}
          </p>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
            lineHeight: 1.6,
            margin: 0
          }}>
            {t(
              'Knowledge, skills, confidence, leadership, and values are equally essential for building a meaningful and successful life.',
              'அறிவு, திறன்கள், தன்னம்பிக்கை, தலைமைத்துவம் மற்றும் நல்ல மதிப்புகளும் வாழ்க்கையை வளப்படுத்தும் அடிப்படை ஆற்றல்கள்.',
              lang
            )}
          </p>
        </div>
      </section>

      {/* SECTION 2: THE MEANING OF VALSII (Full Width Below Hero) */}
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
                {t('DETAILED MEANING', 'விரிவான பொருள்', lang)}
              </span>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 900,
                color: 'var(--text)',
                margin: '0 0 20px 0',
                lineHeight: 1.2
              }}>
                {t('Inspired by Tamil Heritage, Built for the Future', 'தமிழ் பாரம்பரியத்தால் ஈர்க்கப்பட்டு, எதிர்காலத்திற்காக உருவாக்கப்பட்டது', lang)}
              </h2>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                marginBottom: '20px'
              }}>
                {lang === 'ta' ? (
                  <>
                    <strong>வல்சி</strong> என்ற பெயர் சங்க இலக்கியங்களில் காணப்படும் பண்டைய தமிழ்ச் சொல்லான “வல்சி” என்பதிலிருந்து ஈர்க்கப்பட்டது. தமிழ் இலக்கிய மரபில், “வல்சி” என்ற சொல் “வாழ்க்கைக்கான உணவு” அல்லது “உயிரைக் காக்கும் பொருள்” என்பதைக் குறிக்கிறது.
                  </>
                ) : (
                  <>
                    The name <strong>VALSII</strong> is inspired by the ancient Tamil word “வல்சி”, found in Sangam literature. In Tamil literary tradition, the word “வல்சி” refers to “food for life” or “that which sustains life.”
                  </>
                )}
              </p>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                margin: 0
              }}>
                {t(
                  'At VALSII, we believe that nourishment is not limited to food alone. Knowledge, skills, confidence, leadership, and values are equally essential for building a meaningful and successful life.',
                  'வல்சியில், ஊட்டச்சத்து என்பது உணவோடு மட்டும் முடிந்துவிடுவதில்லை என்று நாங்கள் நம்புகிறோம். அர்த்தமுள்ள மற்றும் வெற்றிகரமான வாழ்க்கையை உருவாக்குவதற்கு அறிவு, திறன்கள், தன்னம்பிக்கை, தலைமைத்துவம் மற்றும் நல் ஒழுக்கங்கள் ஆகியவை சமமாக அவசியமானவையாகும்.',
                  lang
                )}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: WHY VALSII */}
      <section className="section-shell gsap-section" id="why-valsii" style={{ backgroundColor: 'var(--bg-soft)', padding: '80px 0' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-eyebrow">{t('Our Purpose', 'எங்கள் நோக்கம்', lang)}</span>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 900,
              color: 'var(--text)',
              margin: '12px 0 0 0'
            }}>
              {t('Why VALSII?', 'ஏன் வல்சி?', lang)}
            </h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              textAlign: 'justify',
              marginBottom: '24px'
            }}>
              {t(
                "The name VALSII is inspired by the ancient Tamil word 'Valsii,' meaning 'food for life.' We believe that knowledge, practical skills, confidence, leadership, and values are the true nourishment that empowers individuals to grow, succeed, and lead with purpose.",
                "ஏன் வல்சி? 'வல்சி' என்ற தமிழ்ச் சொல் 'வாழ்க்கைக்கான உணவு' என்ற ஆழமான பொருளை கொண்டுள்ளது. உடலுக்கு உணவு எவ்வளவு அவசியமோ, அதேபோல் அறிவு, திறன், தன்னம்பிக்கை, தலைமைத்துவம் மற்றும் நல்ல மதிப்புகளும் மனித வாழ்வை வளப்படுத்தும் அடிப்படை ஆற்றல்கள் என்று நாங்கள் நம்புகிறோம்.",
                lang
              )}
            </p>

            <div style={{
              padding: '24px',
              border: '1.5px solid var(--stroke)',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg)',
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start'
            }}>
              <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>💡</span>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 8px 0', color: 'var(--text)' }}>
                  {t('Knowledge & Values as Nourishment', 'அறிவும் மதிப்புகளும் உணவாக', lang)}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {t(
                    'Just as food nourishes the body, knowledge, skills, and strong values nourish the mind and soul. Together, they create the foundation for a meaningful, purposeful, and successful life.',
                    'உணவு உடலை ஊட்டமளிப்பது போல், அறிவு, திறன்கள் மற்றும் நல்ல மதிப்புகள் மனத்தையும் ஆத்மாவையும் ஊட்டமளிக்கின்றன. இவை சேர்ந்து ஒரு அர்த்தமுள்ள, நோக்கமுள்ள மற்றும் வெற்றிகரமான வாழ்க்கைக்கான ஆணிவேராக செயல்படுகின்றன.',
                    lang
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
