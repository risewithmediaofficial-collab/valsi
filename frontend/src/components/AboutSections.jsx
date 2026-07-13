import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang, t, LANGUAGES } from '../context/LanguageContext';
import { siteConfig } from '../data/siteContent';
import founderImg from '../VALSI IMAGES/YOUNG MAN DISCUSSION.png';
import logo from '../assets/Valsii Official LOGO.png';
import gsap from 'gsap';

/* ── Expand toggle block with customized behavior ───────────── */
function ExpandBlock({ summary, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="gsap-reveal" style={{ marginBottom: '16px' }}>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.6, margin: '0 0 12px 0' }}>
        {summary}
      </p>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="premium-button ghost compact"
        style={{
          fontSize: '0.82rem',
          fontWeight: 700,
          padding: '4px 12px',
          borderRadius: 'var(--radius-pill)',
        }}
        aria-expanded={open}
      >
        {open ? '▲ Show Less' : '▼ Know More'}
      </button>
      <div className={`expand-body${open ? ' open' : ''}`} style={{
        maxHeight: open ? '500px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-out'
      }}>
        <div style={{ marginTop: '16px', padding: '16px', borderLeft: '3px solid var(--primary)', backgroundColor: 'var(--bg-soft)', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─── SECTION 1: OUR STORY ──────────────────────────────────── */
export function OurStorySection() {
  const { lang } = useLang();
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll('.gsap-reveal'),
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
    );
  }, []);

  return (
    <section className="section-shell" id="our-story" ref={containerRef} style={{ padding: '80px 0' }}>
      <div className="section-inner">
        <div className="lr-grid" style={{ alignItems: 'start', gap: '48px' }}>
          {/* LEFT: Text Panel */}
          <div>
            <div className="section-label-line gsap-reveal" style={{ marginBottom: '12px' }}>
              <span className="section-eyebrow" style={{ margin: 0 }}>Our Origins</span>
            </div>
            <h2 className="gsap-reveal" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, margin: '0 0 24px 0', color: 'var(--text)' }}>
              {t('Our Story', 'எங்கள் கதை', lang)}
            </h2>
            
            {/* Translated Display */}
            <div className="gsap-reveal" style={{ marginTop: '16px' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.75, margin: 0, textAlign: 'justify' }}>
                {t(
                  'Every great journey begins with a meaningful purpose. VALSII was established with a vision to create a learning ecosystem where education extends beyond classrooms and empowers individuals for life. We believe that confidence, leadership, practical skills, strong values, and continuous learning are the true foundations of personal and professional success. Inspired by the ancient Tamil word "Valsi," meaning "food for life," VALSII represents our belief that knowledge and life skills are essential nourishment for human growth. This philosophy led to the creation of Inner Power Training, our flagship learning initiative dedicated to helping students and young professionals unlock their potential, strengthen their character, and prepare for a purposeful future. Today, VALSII continues its journey with a commitment to empowering individuals, inspiring lifelong learning, and building a generation of confident, responsible, and value-driven leaders.',
                  'ஒவ்வொரு உயர்ந்த பயணமும் ஒரு அர்த்தமுள்ள நோக்கத்திலிருந்து தொடங்குகிறது. வாழ்க்கைக்கான கல்வி என்பது வகுப்பறைகளில் மட்டும் முடிவடையக் கூடாது என்ற எண்ணத்தில்தான் வல்சி உருவானது. தன்னம்பிக்கை, தலைமைத்துவம் நடைமுறை வாழ்க்கைத் திறன்கள், நல்ல மதிப்புகள் மற்றும் தொடர்ச்சியான கற்றலே தனிநபர் மற்றும் தொழில்முறை வெற்றிக்கான உண்மையான அடித்தளம் என்று நாங்கள் நம்புகிறோம். சங்க இலக்கியங்களில் இடம்பெறும் "வல்சி" என்ற தமிழ்ச் சொல்லின் ஆழமான கருத்திலிருந்து ஊக்கமடைந்து, மனிதர்களின் வளர்ச்சிக்குத் தேவையான உண்மையான ஆற்றலாக அறிவும் வாழ்க்கைத் திறன்களும் அமைகின்றன என்ற நம்பிக்கையை எங்கள் பெயர் பிரதிபலிக்கிறது. அந்த எண்ணத்தின் வெளிப்பாடாக Inner Power Training உருவாக்கப்பட்டது.',
                  lang
                )}
              </p>
            </div>
          </div>

          {/* RIGHT: Visual / Quote Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} className="gsap-reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img
                src={logo}
                alt="VALSII Logo"
                style={{ width: '80px', height: 'auto', objectFit: 'contain', flexShrink: 0 }}
              />
              <blockquote style={{
                margin: 0,
                borderLeft: '3px solid var(--primary)',
                paddingLeft: '16px',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--primary)',
                lineHeight: 1.5,
              }}>
                {t(
                  '"Knowledge and life skills are essential nourishment for human growth."',
                  '"அறிவும் வாழ்க்கைத் திறன்களும் மனித வளர்ச்சிக்குத் தேவையான உண்மையான ஆற்றல்."',
                  lang
                )}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 2: CORE DIRECTIVES ────────────────────────────── */
export function CoreDirectivesSection() {
  const { lang } = useLang();
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll('.gsap-reveal'),
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
    );
  }, []);

  const items = [
    {
      id: 'mission',
      title: 'Mission',
      titleTa: 'நோக்கம்',
      snippet: 'To empower individuals through practical learning experiences...',
      snippetTa: 'நடைமுறை கற்றல் அனுபவங்கள் மூலம் தனிநபர் வளர்ச்சியை மேம்படுத்த...',
      fullEn: 'To empower individuals through practical learning experiences that strengthen confidence, leadership, communication, life skills, and personal growth while preparing them to create a positive impact in society.',
      fullTa: 'நடைமுறை கற்றல் அனுபவங்கள் மூலம் தன்னம்பிக்கை, தலைமைத்துவம் தொடர்புத்திறன், வாழ்க்கைத் திறன்கள் மற்றும் தனிநபர் வளர்ச்சியை மேம்படுத்தி, சமூகத்தில் நேர்மறையான மாற்றத்தை உருவாக்கக்கூடிய நபர்களை உருவாக்குவதே எங்கள் நோக்கமாகும்.'
    },
    {
      id: 'vision',
      title: 'Vision',
      titleTa: 'பார்வை',
      snippet: 'To become a trusted learning ecosystem that inspires...',
      snippetTa: 'ஒவ்வொருவரும் தங்களுடைய முழுமையான திறனை உணர்ந்து வழிநடத்த...',
      fullEn: 'To become a trusted learning ecosystem that inspires individuals to unlock their potential, lead with integrity, embrace lifelong learning, and contribute to a better future.',
      fullTa: 'ஒவ்வொருவரும் தங்களுடைய முழுமையான திறனை உணர்ந்து, நேர்மையுடன் தலைமைத்துவம் மேற்கொண்டு, வாழ்நாள் முழுவதும் கற்றுக்கொண்டு, சிறந்த எதிர்காலத்தை உருவாக்குவதே எங்கள் பார்வையாகும்.'
    }
  ];

  return (
    <section className="section-shell" id="directives" ref={containerRef} style={{ backgroundColor: 'var(--bg-soft)', padding: '80px 0' }}>
      <div className="section-inner">
        <div className="section-lead gsap-reveal" style={{ marginBottom: '40px' }}>
          <span className="section-eyebrow">Strategic Directives</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, margin: '8px 0 0 0', color: 'var(--text)' }}>
            {t('Core Directives', 'முக்கிய வழிகாட்டுதல்கள்', lang)}
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px',
          marginBottom: '20px'
        }}>
          {items.map((item, i) => (
            <div key={item.id} className="gsap-reveal" style={{
              borderRadius: 'var(--radius-md)',
              padding: '32px',
              border: '1.5px solid var(--stroke)',
              backgroundColor: 'var(--bg)'
            }}>
              {/* Section title */}
              <div style={{ marginBottom: '20px' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', opacity: 0.2, fontFamily: 'var(--font-heading)', display: 'block', lineHeight: 1 }}>
                  0{i + 1}
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text)', margin: '8px 0 0 0' }}>
                  {lang === LANGUAGES.TA ? item.titleTa : item.title}
                </h3>
              </div>

              {/* Snippet with Expandable Content */}
              <div>
                <ExpandBlock
                  summary={lang === LANGUAGES.TA ? item.snippetTa : item.snippet}
                >
                  <p style={{ margin: 0, fontSize: '0.96rem', lineHeight: 1.7, color: 'var(--text)' }}>
                    {t(item.fullEn, item.fullTa, lang)}
                  </p>
                </ExpandBlock>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: CORE VALUES ────────────────────────────────── */
export function CoreValuesSection() {
  const { lang } = useLang();
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll('.gsap-reveal'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out' }
    );
  }, []);

  const values = [
    { number: '1', name: 'Continuous Learning', desc: 'We believe learning is a lifelong journey that empowers individuals to grow personally and professionally.' },
    { number: '2', name: 'Integrity', desc: 'We act with honesty, responsibility, and transparency in everything we do.' },
    { number: '3', name: 'Leadership', desc: 'We inspire individuals to lead with confidence, purpose, and positive influence.' },
    { number: '4', name: 'Practical Learning', desc: 'We focus on real-world skills that can be applied in everyday life and future careers.' },
    { number: '5', name: 'Personal Growth', desc: 'We encourage every individual to discover their potential and strive for continuous self-improvement.' },
    { number: '6', name: 'Respect', desc: 'We value every individual, every idea, and every opportunity to learn together.' },
    { number: '7', name: 'Positive Impact', desc: 'We are committed to creating meaningful change in individuals, communities, and society.' }
  ];

  return (
    <section className="section-shell" id="values" ref={containerRef} style={{ padding: '80px 0' }}>
      <div className="section-inner">
        <div className="section-lead gsap-reveal" style={{ marginBottom: '48px' }}>
          <span className="section-eyebrow">Ethos</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, margin: '8px 0 0 0', color: 'var(--text)' }}>
            {t('Core Values', 'முக்கிய மதிப்புகள்', lang)}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
          {values.map((val) => (
            <div key={val.number} className="gsap-reveal" style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start',
              padding: '24px',
              border: '1.5px solid var(--stroke)',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--card-bg)'
            }}>
              <span style={{
                fontSize: '1.25rem',
                fontWeight: 900,
                color: 'var(--primary)',
                backgroundColor: 'var(--primary-light)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontFamily: 'var(--font-heading)'
              }}>
                {val.number}
              </span>
              <div>
                <h4 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--text)', margin: '0 0 8px 0' }}>
                  {val.name}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 4: FOUNDER MESSAGE ────────────────────────────── */
export function FounderMessageSection() {
  const { lang } = useLang();
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll('.gsap-reveal'),
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
    );
  }, []);

  return (
    <section className="section-shell" id="founder" ref={containerRef} style={{ backgroundColor: 'var(--bg-soft)', padding: '80px 0' }}>
      <div className="section-inner">
        <div className="lr-grid" style={{ alignItems: 'center', gap: '48px' }}>
          
          {/* LEFT: Text Block */}
          <div className="gsap-reveal">
            <div className="section-label-line" style={{ marginBottom: '12px' }}>
              <span className="section-eyebrow">
                {t('Founder Message', 'நிறுவனர் செய்தி', lang)}
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, margin: '0 0 20px 0', color: 'var(--text)' }}>
              {t('Leadership Vision', 'தலைமைத்துவப் பார்வை', lang)}
            </h2>
            
            <blockquote style={{
              margin: '0 0 24px 0',
              borderLeft: '4px solid var(--primary)',
              paddingLeft: '20px',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: 'var(--primary)',
              lineHeight: 1.5,
            }}>
              "{t('Every individual has the potential to achieve more than they imagine.', 'ஒவ்வொரு மனிதனும் தான் நினைப்பதை விட அதிகமாக சாதிக்கும் திறன் கொண்டவன்.', lang)}"
            </blockquote>

            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
              lineHeight: 1.7,
              marginBottom: '20px',
              textAlign: 'justify'
            }}>
              {t(
                'I believe education should inspire confidence, build character, and prepare individuals for real life—not just examinations. This belief became the foundation of VALSII and our flagship program, Inner Power Training.',
                'தேர்வுகளுக்காக மட்டும் அல்லாமல், தன்னம்பிக்கையை வளர்த்து, நல் ஒழுக்கத்தை உருவாக்கி, மாணவர்களை உண்மையான வாழ்க்கைக்குத் தயார்படுத்தும் ஒன்றாகவே கல்வி அமைய வேண்டும் என்று நான் நம்புகிறேன். இந்த நம்பிக்கையே வல்சி மற்றும் எங்களின் முதன்மை திட்டமான Inner Power Training-ன் அடித்தளமாகும்.',
                lang
              )}
            </p>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
              lineHeight: 1.7,
              margin: 0,
              textAlign: 'justify'
            }}>
              {t(
                'Our mission is to create meaningful learning experiences that help students and young professionals discover their strengths, develop practical life skills, and become responsible leaders who contribute positively to society. Thank you for being a part of this journey. Together, let us learn, grow, and create a better future.',
                'மாணவர்கள் மற்றும் இளம் தலைமுறையினர் தங்களின் திறமைகளைக் கண்டறியவும், நடைமுறை வாழ்க்கைத் திறன்களை வளர்த்துக்கொள்ளவும், சமூகத்திற்கு நேர்மறையான பங்களிப்பை வழங்கக்கூடிய பொறுப்பான தலைவர்களாக மாறவும் உதவக்கூடிய அர்த்தமுள்ள கற்றல் வாய்ப்புகளை உருவாக்குவதே எங்களின் நோக்கமாகும். இந்த பயணத்தில் எங்களோடு இணைந்ததற்கு நன்றி. ஒன்றிணைந்து கற்போம், வளர்வோம், சிறந்த எதிர்காலத்தை உருவாக்குவோம்.',
                lang
              )}
            </p>
          </div>

          {/* RIGHT: Founder Photo and Sign-off */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }} className="gsap-reveal">
            <div style={{
              width: '100%',
              maxWidth: '300px',
              aspectRatio: '4/5',
              overflow: 'hidden',
              borderRadius: 'var(--radius-sm)',
              boxShadow: 'var(--shadow-md)',
              border: '2px solid var(--stroke)',
              backgroundColor: 'var(--bg)'
            }}>
              <img
                src={founderImg}
                alt="Ganeshan Mohan - Founder & CEO, VALSII LLP"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top'
                }}
              />
            </div>
            <div style={{ textAlign: 'center', borderTop: '2px solid var(--primary)', paddingTop: '16px', width: '100%', maxWidth: '300px' }}>
              <span style={{ display: 'block', fontSize: '1.15rem', fontWeight: 900, color: 'var(--text)', marginBottom: '4px' }}>
                Ganeshan Mohan
              </span>
              <span style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                {t('Founder & CEO, VALSII LLP', 'நிறுவனர் & தலைமை நிர்வாக அதிகாரி, VALSII LLP', lang)}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
