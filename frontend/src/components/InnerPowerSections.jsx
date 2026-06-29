import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang, t } from '../context/LanguageContext';
import { innerPowerTraining, siteConfig } from '../data/siteContent';

/* ── Shared: CTA row ──────────────────────────────────────────── */
export function SectionCTAs({ id, joinLabel, loginLabel }) {
  const { lang } = useLang();
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
      <button
        id={`join-now-${id}`}
        type="button"
        className="premium-button primary compact"
        onClick={() => navigate('/register')}
      >
        {joinLabel || t('Join Now', 'இப்போதே சேருங்கள்', lang)}
      </button>
      <a
        id={`login-${id}`}
        href={siteConfig.lmsUrl}
        target="_blank"
        rel="noreferrer"
        className="premium-button ghost compact"
      >
        {loginLabel || t('Student Login', 'மாணவர் உள்நுழைவு', lang)}
      </a>
    </div>
  );
}

/* ── Shared: Expand toggle ────────────────────────────────────── */
function ViewMore({ children }) {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '0.82rem',
          fontWeight: 700,
          color: 'var(--primary)',
          padding: '0',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          letterSpacing: '0.03em',
          margin: '0 0 4px 0',
        }}
        aria-expanded={open}
      >
        {open
          ? t('▲ Show Less', '▲ குறைவாக காட்டு', lang)
          : t('▼ View More', '▼ மேலும் காண்க', lang)}
      </button>
      <div className={`expand-body${open ? ' open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

/* ─── IPT INTRO ────────────────────────────────────────────────── */
export function IPTIntroSection() {
  const { lang } = useLang();
  const { intro } = innerPowerTraining;

  return (
    <section className="section-shell" id="what-is-ipt">
      <div className="section-inner">
        <div className="lr-grid animate-text-reveal delay-100">
          {/* LEFT */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span className="section-eyebrow" style={{ margin: 0 }}>
                {t('What is Inner Power Training?', 'உள்ளார்ந்த சக்தி பயிற்சி என்றால் என்ன?', lang)}
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, margin: '0 0 12px 0', color: 'var(--text)' }}>
              {t('A Transformative Learning Experience', 'ஒரு மாற்றமளிக்கும் கற்றல் அனுபவம்', lang)}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.93rem', lineHeight: 1.65, margin: '0 0 12px 0' }}>
              {t(
                "VALSII's flagship program to build confidence, leadership, and life skills.",
                "தன்னம்பிக்கை, தலைமைத்துவம் மற்றும் வாழ்க்கைத் திறன்களை வளர்க்கும் VALSII இன் முதன்மை திட்டம்.",
                lang
              )}
            </p>
            <ViewMore>
              <p style={{ margin: '8px 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                {t(
                  intro.text,
                  'Inner Power Training என்பது மாணவர்கள், இளம் தொழில் வல்லுனர்கள் மற்றும் தனிநபர்கள் தங்கள் வரம்புகளை கடந்து, அசைக்க முடியாத நம்பிக்கையை வளர்க்கவும், அத்தியாவசிய வாழ்க்கைத் திறன்களை வளர்க்கவும் உதவும் VALSII இன் முன்னோடி கற்றல் திட்டம்.',
                  lang
                )}
              </p>
            </ViewMore>
            <SectionCTAs id="intro" />
          </div>
          {/* RIGHT */}
          <div style={{ paddingTop: '8px', borderTop: '2px solid var(--primary)' }}>
            <span style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, color: 'var(--divider)', fontFamily: 'var(--font-heading)', lineHeight: 1, display: 'block' }}>IPT</span>
            <span style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em', marginTop: '8px', textTransform: 'uppercase' }}>
              {t('Inner Power Training', 'உள்ளார்ந்த சக்தி பயிற்சி', lang)}
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px' }}>
              {[
                { num: '8+', label: t('Learning Tracks', 'கற்றல் பாதைகள்', lang) },
                { num: '15-30', label: t('Days / Track', 'நாட்கள் / பாதை', lang) },
                { num: '2', label: t('Languages', 'மொழிகள்', lang) },
                { num: '100%', label: t('Certified', 'சான்றிதழ் பெற்றது', lang) },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>{num}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── WHO CAN JOIN ────────────────────────────────────────────── */
export function IPTAudienceSection() {
  const { lang } = useLang();
  const { audience } = innerPowerTraining;

  const tamilItems = [
    { label: 'பள்ளி மாணவர்கள்', icon: '🎒' },
    { label: 'கல்லூரி மாணவர்கள்', icon: '🎓' },
    { label: 'வேலை தேடுபவர்கள்', icon: '💼' },
    { label: 'பணி புரிவோர்', icon: '👔' },
    { label: 'தொழில் முனைவோர்', icon: '🚀' },
  ];

  const items = lang === 'ta' ? tamilItems : audience.items;

  return (
    <section className="section-shell" id="who-can-join">
      <div className="section-inner">
        <div className="lr-grid reverse animate-text-reveal delay-200">
          {/* LEFT (will be right due to reverse) */}
          <div>
            <div className="section-label-line">
              <span className="section-eyebrow" style={{ margin: 0 }}>
                {t('Who Can Join?', 'யார் சேரலாம்?', lang)}
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, margin: '0 0 20px 0', color: 'var(--text)' }}>
              {t('This Program is For You', 'இந்த திட்டம் உங்களுக்கானது', lang)}
            </h2>
            <div style={{ display: 'grid', gap: '12px' }}>
              {items.map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '1rem' }}>✓</span>
                  <span style={{ fontWeight: 600, fontSize: '0.93rem' }}>{item.icon} {item.label}</span>
                </div>
              ))}
            </div>
            <SectionCTAs id="audience" />
          </div>
          {/* RIGHT (will be left due to reverse) */}
          <div style={{ paddingTop: '8px', borderTop: '2px solid var(--secondary)' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
              {t(
                'Anyone with a desire to grow, lead, and create a meaningful life is welcome at VALSII.',
                'வளர விரும்பும், தலைமை தாங்க விரும்பும், அர்த்தமுள்ள வாழ்க்கை வாழ விரும்பும் எவரும் VALSII இல் வரவேற்கப்படுகிறார்கள்.',
                lang
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── BENEFITS ────────────────────────────────────────────────── */
export function IPTBenefitsSection() {
  const { lang } = useLang();
  const { benefits } = innerPowerTraining;

  const tamilBenefits = [
    { icon: '💪', title: 'நம்பிக்கை வளர்க்க', desc: 'சந்தேகங்களை கடந்து உங்களிடமுள்ள திறனில் நம்பிக்கை வளர்க்கவும்.' },
    { icon: '🌟', title: 'தலைமைத்துவ திறன்கள்', desc: 'தெளிவுடனும் நோக்கத்துடனும் மற்றவர்களை ஊக்குவிக்க கற்றுக்கொள்ளுங்கள்.' },
    { icon: '🗣️', title: 'தகவல் தொடர்பு', desc: 'உங்கள் கருத்துக்களை தெளிவாக வெளிப்படுத்தி மற்றவர்களுடன் இணைக்கவும்.' },
    { icon: '🧠', title: 'பயம் மேலாண்மை', desc: 'உங்கள் பயங்களை அடையாளம் கண்டு வாழ்க்கையில் புதிய சாத்தியங்களை திறக்கவும்.' },
    { icon: '📱', title: 'மொபைல் அடிமையிலிருந்து விடுதலை', desc: 'டிஜிட்டல் சார்பிலிருந்து விடுபட்டு உங்கள் கவனத்தை மீட்டுக்கொள்ளுங்கள்.' },
    { icon: '⏰', title: 'நேர மேலாண்மை', desc: 'முக்கியமானவற்றில் கவனம் செலுத்த உதவும் உற்பத்தி முறைகளை கற்றுக்கொள்ளுங்கள்.' },
    { icon: '💰', title: 'பண மனோபாவம்', desc: 'பணத்துடன் ஆரோக்கியமான உறவை வளர்த்துக்கொண்டு நிதி பொறுப்பை வளர்க்கவும்.' },
  ];

  const displayItems = lang === 'ta' ? tamilBenefits : benefits.items;
  const INITIAL_COUNT = 4;
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? displayItems : displayItems.slice(0, INITIAL_COUNT);

  return (
    <section className="section-shell" id="benefits">
      <div className="section-inner animate-text-reveal delay-200">
        <div style={{ marginBottom: '28px' }}>
          <span className="section-eyebrow">
            {t('Why Join This Program?', 'ஏன் இந்த திட்டத்தில் சேர வேண்டும்?', lang)}
          </span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, margin: '8px 0 0 0', color: 'var(--text)' }}>
            {t('Transform Every Area of Your Life', 'உங்கள் வாழ்வின் ஒவ்வொரு பகுதியையும் மாற்றுங்கள்', lang)}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
          {visible.map((benefit) => (
            <div key={benefit.title} style={{ paddingBottom: '16px', borderBottom: '1px solid var(--divider)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: '0 0 6px 0', color: 'var(--text)' }}>
                {benefit.icon} {benefit.title}
              </h3>
              <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setShowAll(o => !o)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)',
            padding: '12px 0 0 0', display: 'flex', alignItems: 'center', gap: '4px',
          }}
        >
          {showAll
            ? t('▲ Show Less', '▲ குறைவாக காட்டு', lang)
            : t(`▼ View All ${displayItems.length} Benefits`, `▼ அனைத்து ${displayItems.length} நன்மைகளையும் காண்க`, lang)}
        </button>

        <SectionCTAs id="benefits" />
      </div>
    </section>
  );
}

/* ─── COURSE CATALOGUE ────────────────────────────────────────── */
export function IPTCoursesSection() {
  const { lang } = useLang();
  const { courses } = innerPowerTraining;
  const navigate = useNavigate();

  const tamilCourses = [
    { number: '01', icon: '🧠', title: 'மனோபாவ பயிற்சி', desc: 'உங்கள் சிந்தனை முறைகளை மாற்றி வளர்ச்சி மனோபாவத்தை செயல்படுத்துங்கள்.' },
    { number: '02', icon: '😨', title: 'பயம் மேலாண்மை', desc: 'வாழ்க்கையின் அனைத்து பகுதிகளிலும் பயத்தை நிரந்தரமாக கடக்க முறையான நுட்பங்கள்.' },
    { number: '03', icon: '📱', title: 'மொபைல் அடிமையிலிருந்து விடுதலை', desc: 'டிஜிட்டல் அடிமை பழக்கங்களை உடைத்து உங்கள் கவனத்தை மீட்டெடுக்கும் திட்டம்.' },
    { number: '04', icon: '👥', title: 'தலைமைத்துவ வளர்ச்சி', desc: 'உங்கள் தலைமைத்துவ பண்புகளை, முடிவெடுக்கும் திறன்களை வளர்க்கவும்.' },
    { number: '05', icon: '⏰', title: 'நேர மேலாண்மை', desc: 'முன்னுரிமை, இலக்கு நிர்ணயம் மற்றும் சக்திவாய்ந்த தினசரி பழக்கங்களுக்கான நிரூபிக்கப்பட்ட கட்டமைப்புகள்.' },
    { number: '06', icon: '💰', title: 'பண மனோபாவம்', desc: 'மனோபாவ மாற்றங்கள் மற்றும் நடைமுறை திறன்கள் மூலம் பணத்துடன் ஆரோக்கியமான உறவை வளர்க்கவும்.' },
    { number: '07', icon: '❤️', title: 'உணர்ச்சி நுண்ணறிவு', desc: 'உங்கள் உணர்வுகளை புரிந்துகொண்டு ஆழமான உறவுகளை கட்டியெழுப்புங்கள்.' },
    { number: '08', icon: '🌱', title: 'தனிநபர் வளர்ச்சி', desc: 'சுய விழிப்புணர்வு, நோக்கம் கண்டுபிடிப்பு, பழக்க உருவாக்கம் மற்றும் வாழ்க்கை வடிவமைப்பை உள்ளடக்கிய திட்டம்.' },
  ];

  const displayCourses = lang === 'ta' ? tamilCourses : courses.items;
  const INITIAL_COUNT = 4;
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? displayCourses : displayCourses.slice(0, INITIAL_COUNT);

  return (
    <section className="section-shell" id="courses">
      <div className="section-inner animate-text-reveal delay-200">
        <div style={{ marginBottom: '28px' }}>
          <span className="section-eyebrow">
            {t('Course Catalogue', 'பாடத்திட்ட பட்டியல்', lang)}
          </span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, margin: '8px 0 0 0', color: 'var(--text)' }}>
            {t('Choose Your Learning Track', 'உங்கள் கற்றல் பாதையை தேர்வு செய்யுங்கள்', lang)}
          </h2>
        </div>

        <div style={{ display: 'grid', gap: '0' }}>
          {visible.map((course) => (
            <div
              key={course.number}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid var(--divider)',
                padding: '16px 0',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', minWidth: '24px', opacity: 0.5 }}>{course.number}</span>
                <div>
                  <h3 style={{ fontSize: '0.98rem', fontWeight: 800, margin: '0 0 3px 0', color: 'var(--primary)' }}>
                    {course.icon} {course.title}
                  </h3>
                  <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>{course.desc}</p>
                </div>
              </div>
              <button
                id={`enroll-course-${course.number}`}
                type="button"
                className="premium-button primary compact"
                style={{ fontSize: '0.78rem', whiteSpace: 'nowrap' }}
                onClick={() => navigate('/register', { state: { course: course.title } })}
              >
                {t('Enroll', 'சேர்க', lang)}
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setShowAll(o => !o)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)',
            padding: '12px 0', display: 'flex', alignItems: 'center', gap: '4px',
          }}
        >
          {showAll
            ? t('▲ Show Less', '▲ குறைவாக காட்டு', lang)
            : t(`▼ View All ${displayCourses.length} Tracks`, `▼ அனைத்து ${displayCourses.length} பாதைகளையும் காண்க`, lang)}
        </button>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ────────────────────────────────────────────── */
export function IPTTestimonialsSection() {
  const { lang } = useLang();
  const { testimonials } = innerPowerTraining;

  const tamilTestimonials = [
    {
      initials: 'A', name: 'அனன்யா S.', role: 'கல்லூரி மாணவி, சென்னை',
      text: 'Inner Power Training என் சிந்தனையையே மாற்றியது. பொதுவில் பேச பயந்த நான் இப்போது கல்லூரி கலாச்சார குழுவை நம்பிக்கையுடன் வழிநடத்துகிறேன்.',
      stars: 5,
    },
    {
      initials: 'R', name: 'ராஜன் M.', role: 'வேலை தேடுபவர், கோயம்புத்தூர்',
      text: 'பயம் மேலாண்மை தொகுதி என் நேர்காணல் கவலையை நேரடியாக எதிர்கொள்ள உதவியது. ஒரு மாதத்தில் இரண்டு நேர்காணல்களில் வெற்றி பெற்றேன்.',
      stars: 5,
    },
    {
      initials: 'P', name: 'பிரியா K.', role: 'பள்ளி மாணவி, கிருஷ்ணகிரி',
      text: 'மொபைல் அடிமை மீட்பு பாதை எனக்கு தெளிவான திட்டம் கொடுத்தது. இனி நான் திரும்பி பார்க்கவில்லை.',
      stars: 5,
    },
  ];

  const items = lang === 'ta' ? tamilTestimonials : testimonials.items;
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? items : items.slice(0, 2);

  return (
    <section className="section-shell" id="testimonials">
      <div className="section-inner animate-text-reveal delay-200">
        <div style={{ marginBottom: '28px' }}>
          <span className="section-eyebrow">
            {t('Student Testimonials', 'மாணவர் அனுபவங்கள்', lang)}
          </span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, margin: '8px 0 0 0', color: 'var(--text)' }}>
            {t('Real Stories, Real Transformation', 'உண்மையான கதைகள், உண்மையான மாற்றம்', lang)}
          </h2>
        </div>

        <div style={{ display: 'grid', gap: '24px' }}>
          {visible.map((item) => (
            <div key={item.name} style={{ borderLeft: '3px solid var(--secondary)', paddingLeft: '16px' }}>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: '0 0 8px 0', lineHeight: 1.6 }}>
                "{item.text}"
              </p>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)' }}>
                — {item.name}, <span style={{ color: 'var(--text-light)', fontWeight: 500 }}>{item.role}</span>
              </span>
            </div>
          ))}
        </div>

        {items.length > 2 && (
          <button
            type="button"
            onClick={() => setShowAll(o => !o)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)',
              padding: '12px 0', display: 'flex', alignItems: 'center', gap: '4px',
            }}
          >
            {showAll
              ? t('▲ Show Less', '▲ குறைவாக காட்டு', lang)
              : t('▼ View All Stories', '▼ அனைத்து கதைகளையும் காண்க', lang)}
          </button>
        )}

        <SectionCTAs id="testimonials" />
      </div>
    </section>
  );
}

/* ─── FAQ ─────────────────────────────────────────────────────── */
function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--divider)', padding: '16px 0' }}>
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        onClick={() => setOpen(o => !o)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpen(o => !o)}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', gap: '16px' }}
      >
        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)' }}>{item.question}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase' }}>{item.category}</span>
          <span style={{ transition: 'transform 200ms ease', transform: open ? 'rotate(180deg)' : 'none', color: 'var(--primary)' }}>▼</span>
        </div>
      </div>
      <div
        id={`faq-answer-${index}`}
        style={{ maxHeight: open ? '200px' : '0', opacity: open ? 1 : 0, overflow: 'hidden', transition: 'all 250ms ease' }}
        aria-hidden={!open}
      >
        <p style={{ margin: '12px 0 0 0', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.answer}</p>
      </div>
    </div>
  );
}

export function IPTFAQSection() {
  const { lang } = useLang();
  const { faq } = innerPowerTraining;

  const tamilFAQ = [
    { category: 'காலம்', question: 'Inner Power Training திட்டம் எவ்வளவு காலம் நீடிக்கும்?', answer: 'பெரும்பாலான தொகுதிகள் 15-30 நாட்கள் கட்டமைக்கப்பட்ட கற்றலுடன் இருக்கும். நெகிழ்வான அட்டவணை கிடைக்கும்.' },
    { category: 'மொழி', question: 'பயிற்சி தமிழிலும் கிடைக்குமா?', answer: 'ஆம்! அனைத்து VALSII திட்டங்களும் ஆங்கிலம் மற்றும் தமிழில் கிடைக்கும். எங்கள் பயிற்சியாளர்கள் இருமொழி வல்லுனர்கள்.' },
    { category: 'சான்றிதழ்', question: 'முடிந்தவுடன் சான்றிதழ் கிடைக்குமா?', answer: 'ஆம். திட்டத்தை வெற்றிகரமாக முடித்த அனைத்து பங்கேற்பாளர்களும் VALSII Inner Power Training முடிவு சான்றிதழை பெறுவார்கள்.' },
    { category: 'தகுதி', question: 'யார் Inner Power Training-ல் சேரலாம்?', answer: 'பள்ளி மாணவர்கள் (8+ வகுப்பு), கல்லூரி மாணவர்கள், வேலை தேடுபவர்கள், பணி புரிவோர் மற்றும் தொழில் முனைவோர் சேரலாம்.' },
    { category: 'கட்டணம்', question: 'பாட கட்டணம் என்ன? உதவித்தொகை உள்ளதா?', answer: 'கட்டணம் பாதையை பொறுத்து மாறுபடும். தகுதியான மாணவர்களுக்கு உதவித்தொகை விருப்பங்கள் உள்ளன.' },
    { category: 'ஆதரவு', question: 'திட்டத்தின் போது என்ன ஆதரவு கிடைக்கும்?', answer: 'அனைத்து பங்கேற்பாளர்களுக்கும் பயிற்சியாளர் ஆதரவு, WhatsApp குழுக்கள், கேள்வி-பதில் அமர்வுகள் கிடைக்கும்.' },
  ];

  const items = lang === 'ta' ? tamilFAQ : faq.items;

  return (
    <section className="section-shell" id="faq">
      <div className="section-inner animate-text-reveal delay-200">
        <div style={{ marginBottom: '8px' }}>
          <span className="section-eyebrow">
            {t('Frequently Asked Questions', 'அடிக்கடி கேட்கப்படும் கேள்விகள்', lang)}
          </span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, margin: '8px 0 0 0', color: 'var(--text)' }}>
            {t('Everything You Need to Know', 'நீங்கள் அறிய வேண்டியது அனைத்தும்', lang)}
          </h2>
        </div>

        <div style={{ marginTop: '24px' }}>
          {items.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>

        <SectionCTAs id="faq" />
      </div>
    </section>
  );
}

/* ─── FOOTER CTA ──────────────────────────────────────────────── */
export function IPTFooterCTA() {
  const { lang } = useLang();
  const navigate = useNavigate();
  return (
    <section className="section-shell" id="ipt-footer-cta" style={{ borderTop: '1px solid var(--divider)', padding: '60px 0' }}>
      <div className="section-inner animate-text-reveal delay-200" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, margin: '0 0 8px 0', color: 'var(--text)' }}>
          {t('Start Your Learning Journey', 'உங்கள் கற்றல் பயணத்தை தொடங்குங்கள்', lang)}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', margin: '0 0 24px 0' }}>
          {t('Transform your life with Inner Power Training.', 'Inner Power Training மூலம் உங்கள் வாழ்வை மாற்றுங்கள்.', lang)}
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            id="ipt-final-join-btn"
            type="button"
            className="premium-button primary"
            onClick={() => navigate('/register')}
          >
            {t('Join Now', 'இப்போதே சேருங்கள்', lang)}
          </button>
          <a
            id="ipt-final-login-btn"
            href={siteConfig.lmsUrl}
            target="_blank"
            rel="noreferrer"
            className="premium-button ghost"
          >
            {t('Student Login', 'மாணவர் உள்நுழைவு', lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
