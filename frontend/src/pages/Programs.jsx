import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang, LANGUAGES, t } from '../context/LanguageContext';
import { siteConfig, images } from '../data/siteContent';
import { CheckCircle, Play, ChevronDown, ChevronUp, Star, Award, BookOpen } from 'lucide-react';
import gsap from 'gsap';

export default function Programs() {
  const { lang } = useLang();
  const navigate = useNavigate();
  const mainRef = useRef(null);

  // Scroll to top and trigger GSAP animations
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current.querySelectorAll('.gsap-step'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
      );
    }
  }, []);

  // CTA Click handlers
  const handleJoinNow = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    window.open(siteConfig.lmsUrl, '_blank', 'noreferrer');
  };

  const handleEnrollTrack = (trackName) => {
    navigate(`/register?track=${encodeURIComponent(trackName)}`);
  };

  // Step 08 Accordion State
  const [activeFaq, setActiveFaq] = useState(null);
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: t('Duration', 'கால அளவு', lang),
      a: t(
        'Each learning track is designed to span 4 to 8 weeks, with flexible self-paced schedules and weekly live mentor reviews.',
        'ஒவ்வொரு பிரிவும் 4 முதல் 8 வாரங்கள் கொண்டதாக வடிவமைக்கப்பட்டுள்ளது, சுயவேக திட்டங்கள் மற்றும் வாராந்திர நேரடி வழிகாட்டி மதிப்புரைகளைக் கொண்டது.',
        lang
      )
    },
    {
      q: t('Language', 'மொழி', lang),
      a: t(
        'Programs are offered in bilingual formats (English and Tamil) to ensure clear understanding and effective learning.',
        'தெளிவான புரிதல் மற்றும் கற்றலை உறுதிப்படுத்த பாடநெறிகள் இருமொழிகளில் (ஆங்கிலம் மற்றும் தமிழ்) வழங்கப்படுகின்றன.',
        lang
      )
    },
    {
      q: t('Certificate', 'சான்றிதழ்', lang),
      a: t(
        'Yes! Upon successful completion of all coursework and milestones, you will receive an official VALSII LLP Certificate of Mastery.',
        'ஆம்! அனைத்து பாடநெறிகளையும் வெற்றிகரமாக முடித்த பிறகு, உங்களுக்கு அதிகாரப்பூர்வ VALSII LLP சான்றிதழ் வழங்கப்படும்.',
        lang
      )
    },
    {
      q: t('Eligibility', 'தகுதி', lang),
      a: t(
        'Inner Power Training is open to students, working professionals, job seekers, and entrepreneurs wishing to build key life competencies.',
        'மாணவர்கள், பணியாளர்கள், வேலை தேடுபவர்கள் மற்றும் தொழில்முனைவோர் அனைவரும் இதில் சேரலாம்.',
        lang
      )
    },
    {
      q: t('Fees', 'கட்டணம்', lang),
      a: t(
        'Pricing varies by track. Affordable installment plans and marginal student discount packages are available upon registration inquiry.',
        'கட்டணம் ஒவ்வொரு பாடப்பிரிவுக்கும் மாறுபடும். சுலபமான தவணை முறைகள் மற்றும் மாணவர் தள்ளுபடிகள் கிடைக்கின்றன.',
        lang
      )
    },
    {
      q: t('Support', 'ஆதரவு', lang),
      a: t(
        'VALSII offers direct WhatsApp support lines, periodic group training events, and email follow-ups with CEO and mentors.',
        'நேரடி WhatsApp ஆதரவு, அவ்வப்போதைய குழு பயிற்சிகள் மற்றும் மின்னஞ்சல் மூலம் தொடர்புகள் வழங்கப்படுகின்றன.',
        lang
      )
    }
  ];

  const audienceItems = [
    {
      label: t('School Students', 'பள்ளி மாணவர்கள்', lang),
      desc: t('Build focus, character, and values.', 'கவனம், ஒழுக்கம் மற்றும் மதிப்புகளை உருவாக்குங்கள்.', lang)
    },
    {
      label: t('College Students', 'கல்லூரி மாணவர்கள்', lang),
      desc: t('Prepare for campus to corporate jobs.', 'பல்கலைக்கழகத்திலிருந்து கார்ப்பரேட் பணிகளுக்குத் தயாராகுங்கள்.', lang)
    },
    {
      label: t('Job Seekers', 'வேலை தேடுபவர்கள்', lang),
      desc: t('Master interviews & communication.', 'நேர்காணல்கள் மற்றும் தொடர்பாடலில் தேர்ச்சி பெறுங்கள்.', lang)
    },
    {
      label: t('Working Professionals', 'பணியாளர்கள்', lang),
      desc: t('Excel in leadership & productivity.', 'தலைமைத்துவம் மற்றும் உற்பத்தித்திறனில் சிறந்து விளங்குங்கள்.', lang)
    },
    {
      label: t('Entrepreneurs', 'தொழில்முனைவோர்', lang),
      desc: t('Build money mindset & business vision.', 'பண மனநிலை மற்றும் வணிகப் பார்வையை உருவாக்குங்கள்.', lang)
    }
  ];

  const benefitsItems = [
    {
      title: t('Leadership', 'தலைமைத்துவம்', lang),
      desc: t('Inspire and guide others with integrity and responsibility.', 'பொறுப்புணர்வு மற்றும் நேர்மையுடன் மற்றவர்களை வழிநடத்துங்கள்.', lang)
    },
    {
      title: t('Fear Management', 'அச்ச மேலாண்மை', lang),
      desc: t('Overcome stage fear, public anxiety, and self-doubt.', 'மேடை அச்சம், பொது பதற்றம் மற்றும் சுய சந்தேகத்தை வெல்லுங்கள்.', lang)
    },
    {
      title: t('Mobile Addiction Recovery', 'கைப்பேசி அடிமைத்தன மீட்பு', lang),
      desc: t('Reclaim your time from social media distractions.', 'சமூக ஊடக கவனச்சிதறல்களிலிருந்து உங்கள் நேரத்தை மீட்டெடுங்கள்.', lang)
    }
  ];

  const catalogTracks = [
    {
      num: '01',
      title: t('Mindset Training', 'மனநிலை பயிற்சி', lang),
      desc: t('Shift from self-limiting beliefs to growth patterns.', 'சுய வரம்புகளிலிருந்து வளர்ச்சிப் பாதைக்கு மாறுங்கள்.', lang)
    },
    {
      num: '02',
      title: t('Fear Management', 'அச்ச மேலாண்மை', lang),
      desc: t('Conquer social fears, public speaking, and stage phobia.', 'மேடை அச்சம் மற்றும் சமூகப் பதற்றத்தை வெல்லுங்கள்.', lang)
    },
    {
      num: '03',
      title: t('Mobile Addiction Recovery', 'கைப்பேசி அடிமைத்தன மீட்பு', lang),
      desc: t('Master tech usage limits and maximize deep focus.', 'தொழில்நுட்பப் பயன்பாட்டை கட்டுப்படுத்தி, கவனத்தை மேம்படுத்துங்கள்.', lang)
    },
    {
      num: '04',
      title: t('Leadership Development', 'தலைமைத்துவ மேம்பாடு', lang),
      desc: t('Learn coordination, ownership, and team organization.', 'ஒருங்கிணைப்பு, பொறுப்புணர்வு மற்றும் குழு நிர்வாகத்தைக் கற்றுக்கொள்ளுங்கள்.', lang)
    },
    {
      num: '05',
      title: t('Time Management', 'நேர மேலாண்மை', lang),
      desc: t('Adopt scheduling tools, priority maps, and daily setups.', 'நேர திட்டமிடல் கருவிகள் மற்றும் முன்னுரிமை வரைபடங்களை அமையுங்கள்.', lang)
    },
    {
      num: '07',
      title: t('Emotional Intelligence', 'உணர்ச்சிசார் நுண்ணறிவு', lang),
      desc: t('Regulate stress, handle feedback, and build empathy.', 'மன அழுத்தத்தைக் கட்டுப்படுத்தி, மற்றவர்களிடம் அனுதாபம் கொள்ளுங்கள்.', lang)
    }
  ];

  const testimonialItems = [
    {
      name: 'Vijay Anand',
      role: t('College Student', 'கல்லூரி மாணவர்', lang),
      review: t(
        'The Stage Fear and Mobile Recovery track changed my daily routines. I can now speak in front of classes without any hesitation.',
        'மேடை அச்சம் மற்றும் கைப்பேசி மீட்புப் பயிற்சி எனது அன்றாட நடைமுறைகளை மாற்றியது. இப்போது என்னால் எந்தத் தயக்கமும் இன்றி வகுப்பின் முன் பேச முடிகிறது.',
        lang
      )
    },
    {
      name: 'Srinidhi K.',
      role: t('Job Seeker', 'வேலை தேடுபவர்', lang),
      review: t(
        'Before joining Money Mindset, I had zero ideas about personal financing. The training is practical and easy to follow.',
        'பண மனநிலை பயிற்சியில் சேருவதற்கு முன்பு, தனிநபர் நிதி மேலாண்மை பற்றி எனக்கு பூஜ்ஜிய அறிவு தான் இருந்தது. இப்பயிற்சி மிகவும் நடைமுறைக்குரியது மற்றும் எளிதானது.',
        lang
      )
    }
  ];

  return (
    <div ref={mainRef} style={{ overflow: 'hidden' }}>

      {/* ── STEP 02: HERO BANNER ────────────────────────────────── */}
      <section className="gsap-step" style={{
        position: 'relative',
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(' + images.learning + ') center/cover no-repeat',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="section-inner narrow">
          <span className="section-eyebrow" style={{ color: 'var(--primary)', borderColor: 'var(--primary-light)' }}>
            {t('VALSII Flagship Program', 'VALSII முதன்மைத் திட்டம்', lang)}
          </span>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
            fontWeight: 900,
            margin: '20px 0 12px 0',
            lineHeight: 1.1,
            letterSpacing: '-0.02em'
          }}>
            {t('Inner Power Training', 'உள்ளார்ந்த சக்தி பயிற்சி', lang)}
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', opacity: 0.9, marginBottom: '36px', fontWeight: 600 }}>
            {t('Unlock Your Inner Potential', 'உங்கள் உள்ளார்ந்த திறனை வெளிப்படுத்துங்கள்', lang)}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={handleJoinNow} className="premium-button primary" style={{ padding: '0.85rem 2rem' }}>
              {t('Join Now', 'இப்போதே சேருங்கள்', lang)}
            </button>
            <button onClick={handleLogin} className="premium-button ghost" style={{ borderColor: 'white', color: 'white', padding: '0.85rem 2rem' }}>
              {t('Login', 'உள்நுழைவு', lang)}
            </button>
          </div>
        </div>
      </section>

      {/* ── STEP 03: WHAT IS IT? ───────────────────────────────── */}
      <section className="section-shell gsap-step" id="what-is-ipt" style={{ padding: '80px 0' }}>
        <div className="section-inner">
          <div className="lr-grid" style={{ alignItems: 'center', gap: '48px' }}>
            {/* Image */}
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '2px solid var(--stroke)' }}>
              <img src={images.fieldGuidance} alt="Inner Power Training Classroom Guidance" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            {/* Text */}
            <div>
              <span className="section-eyebrow">{t('Overview', 'கண்ணோட்டம்', lang)}</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, color: 'var(--text)', margin: '12px 0' }}>
                {t('What is Inner Power Training?', 'உள்ளார்ந்த சக்தி பயிற்சி என்றால் என்ன?', lang)}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '24px', textAlign: 'justify' }}>
                {t(
                  "Inner Power Training is VALSII's flagship developmental program. It is specifically designed to help individuals build raw self-confidence, practice executive leadership, master communications, overcome social fears, manage daily stress, recover from digital distractions, and prepare for real-world life success. We combine ancient wisdom with modern training techniques to bring out your best self.",
                  "உள்ளார்ந்த சக்தி பயிற்சி (Inner Power Training) என்பது வல்சியின் முதன்மைத் திட்டமாகும். இது தனிநபர்கள் தங்களின் தன்னம்பிக்கையை வளர்க்கவும், தலைமைத்துவத்தை நடைமுறைப்படுத்தவும், தொடர்பாடலில் தேர்ச்சி பெறவும், சமூக அச்சங்களை வெல்லவும், அன்றாட மன அழுத்தத்தை நிர்வகிக்கவும், டிஜிட்டல் சிதறல்களிலிருந்து மீளவும் மற்றும் நிஜ உலக வெற்றிக்காக தங்களைத் தயார்படுத்தவும் வடிவமைக்கப்பட்டுள்ளது. உங்களின் சிறந்த ஆற்றலை வெளிக்கொணர பண்டைய ஞானத்தையும் நவீன பயிற்சி முறைகளையும் நாங்கள் இணைக்கிறோம்.",
                  lang
                )}
              </p>
              
              {/* CTAs */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button onClick={handleJoinNow} className="premium-button primary compact">{t('Join Now', 'இப்போதே சேருங்கள்', lang)}</button>
                <button onClick={handleLogin} className="premium-button ghost compact">{t('Login', 'உள்நுழைவு', lang)}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP 04: WHO CAN JOIN? ─────────────────────────────── */}
      <section className="section-shell gsap-step" id="who-can-join" style={{ backgroundColor: 'var(--bg-soft)', padding: '80px 0' }}>
        <div className="section-inner narrow">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-eyebrow">{t('Audience', 'பயனாளிகள்', lang)}</span>
            <h2>{t('Who Can Join?', 'யார் இணையலாம்?', lang)}</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            {audienceItems.map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: 'var(--bg)',
                border: '1.5px solid var(--stroke)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start'
              }}>
                <CheckCircle size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '0.98rem', fontWeight: 800 }}>{item.label}</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-light)', lineHeight: 1.4 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button onClick={handleJoinNow} className="premium-button primary compact">{t('Join Now', 'இப்போதே சேருங்கள்', lang)}</button>
            <button onClick={handleLogin} className="premium-button ghost compact">{t('Login', 'உள்நுழைவு', lang)}</button>
          </div>
        </div>
      </section>

      {/* ── STEP 05: BENEFITS ──────────────────────────────────── */}
      <section className="section-shell gsap-step" id="benefits" style={{ padding: '80px 0' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-eyebrow">{t('Core Outcomes', 'முக்கிய பலன்கள்', lang)}</span>
            <h2>{t('Why Join This Program? / Benefits', 'ஏன் இந்த திட்டத்தில் சேர வேண்டும்? / பலன்கள்', lang)}</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            {benefitsItems.map((benefit, idx) => (
              <div key={idx} style={{
                padding: '24px',
                border: '1.5px solid var(--stroke)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--card-bg)'
              }}>
                <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '12px' }}>💎</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 8px 0', color: 'var(--text)' }}>{benefit.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button onClick={handleJoinNow} className="premium-button primary compact">{t('Join Now', 'இப்போதே சேருங்கள்', lang)}</button>
            <button onClick={handleLogin} className="premium-button ghost compact">{t('Login', 'உள்நுழைவு', lang)}</button>
          </div>
        </div>
      </section>

      {/* ── STEP 06: COURSE CATALOGUE ──────────────────────────── */}
      <section className="section-shell gsap-step" id="courses" style={{ backgroundColor: 'var(--bg-soft)', padding: '80px 0' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-eyebrow">{t('Catalog', 'பாடநெறி', lang)}</span>
            <h2>{t('Course Catalogue', 'பாடநெறி பட்டியல்', lang)}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: '600px', margin: '8px auto 0 auto' }}>
              {t('Select from our 8 high-impact specialized curriculum tracks.', 'எங்கள் 8 சிறப்பு பயிற்சி பிரிவுகளிலிருந்து தேர்ந்தெடுங்கள்.', lang)}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {catalogTracks.map((track, idx) => (
              <div key={idx} style={{
                backgroundColor: 'var(--bg)',
                border: '1.5px solid var(--stroke)',
                borderRadius: 'var(--radius-lg)',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '240px'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--primary)' }}>{t('TRACK', 'பிரிவு', lang)} {track.num}</span>
                    <BookOpen size={16} color="var(--primary)" />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 900, margin: '0 0 8px 0', color: 'var(--text)' }}>{track.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>{track.desc}</p>
                </div>
                <button
                  onClick={() => handleEnrollTrack(track.title)}
                  className="premium-button ghost compact"
                  style={{ width: '100%', justifyContent: 'center', border: '1.5px dashed var(--primary)' }}
                >
                  {t('[ Enroll Now ]', '[ இப்போதே பதிவு செய்யவும் ]', lang)}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEP 07: STUDENT TESTIMONIALS ───────────────────────── */}
      <section className="section-shell gsap-step" id="testimonials" style={{ padding: '80px 0' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-eyebrow">{t('Success Stories', 'வெற்றி கதைகள்', lang)}</span>
            <h2>{t('Student Testimonials', 'மாணவர்களின் கருத்துரைகள்', lang)}</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {testimonialItems.map((rev, idx) => (
              <div key={idx} style={{
                padding: '30px',
                border: '1.5px solid var(--stroke)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--card-bg)'
              }}>
                <div style={{ display: 'flex', color: '#fbbf24', gap: '2px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  "{rev.review}"
                </p>
                
                {/* Visual placeholder for student photo & video */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    color: 'var(--primary)'
                  }}>
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 2px 0', fontSize: '0.9rem', fontWeight: 800 }}>{rev.name}</h4>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-light)', fontWeight: 600 }}>{rev.role}</span>
                  </div>
                </div>

                {/* Video player placeholder */}
                <div style={{
                  marginTop: '24px',
                  height: '140px',
                  backgroundColor: 'var(--bg-soft)',
                  border: '1.5px dashed var(--stroke)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                onClick={() => window.open('https://youtube.com', '_blank')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)' }}>
                    <Play size={18} fill="currentColor" />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>{t('Play Video Story', 'வீடியோ கதை பார்க்க', lang)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button onClick={handleJoinNow} className="premium-button primary compact">{t('Join Now', 'இப்போதே சேருங்கள்', lang)}</button>
            <button onClick={handleLogin} className="premium-button ghost compact">{t('Login', 'உள்நுழைவு', lang)}</button>
          </div>
        </div>
      </section>

      {/* ── STEP 08: FAQ ACCORDION ──────────────────────────────── */}
      <section className="section-shell gsap-step" id="faq" style={{ backgroundColor: 'var(--bg-soft)', padding: '80px 0' }}>
        <div className="section-inner narrow">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-eyebrow">{t('Questions', 'கேள்விகள்', lang)}</span>
            <h2>{t('FAQ Accordion', 'அடிக்கடி கேட்கப்படும் கேள்விகள்', lang)}</h2>
          </div>

          <div style={{ display: 'grid', gap: '16px', marginBottom: '40px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{
                backgroundColor: 'var(--bg)',
                border: '1.5px solid var(--stroke)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight: 700,
                    fontSize: '0.98rem',
                    textAlign: 'left',
                    color: 'var(--text)'
                  }}
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {activeFaq === idx && (
                  <div style={{
                    padding: '0 20px 20px 20px',
                    fontSize: '0.88rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    borderTop: '1px solid var(--divider)'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button onClick={handleJoinNow} className="premium-button primary compact">{t('Join Now', 'இப்போதே சேருங்கள்', lang)}</button>
            <button onClick={handleLogin} className="premium-button ghost compact">{t('Login', 'உள்நுழைவு', lang)}</button>
          </div>
        </div>
      </section>

      {/* ── STEP 09: FOOTER CTA ─────────────────────────────────── */}
      <section className="gsap-step" style={{
        backgroundColor: 'var(--primary)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="section-inner narrow">
          <Award size={48} style={{ margin: '0 auto 20px auto', display: 'block', color: 'var(--primary-light)' }} />
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 900,
            color: 'white',
            marginBottom: '16px',
            lineHeight: 1.2
          }}>
            {t('Ready to Start Your Learning Journey?', 'உங்கள் கற்றல் பயணத்தைத் தொடங்க நீங்கள் தயாரா?', lang)}
          </h2>
          <p style={{ opacity: 0.9, fontSize: '0.98rem', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px auto' }}>
            {t(
              "Enroll in VALSII's Inner Power Training today and gain access to resources, live mentoring, and certification.",
              "இன்றே வல்சியின் உள்ளார்ந்த சக்தி பயிற்சியில் சேர்ந்து, பயிற்சிக் கருவிகள், நேரடி வழிகாட்டுதல் மற்றும் சான்றிதழைப் பெறுங்கள்.",
              lang
            )}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={handleJoinNow} className="premium-button primary" style={{ backgroundColor: 'white', color: 'var(--primary)', padding: '0.85rem 2rem' }}>
              {t('Join Now', 'இப்போதே சேருங்கள்', lang)}
            </button>
            <button onClick={handleLogin} className="premium-button ghost" style={{ borderColor: 'white', color: 'white', padding: '0.85rem 2rem' }}>
              {t('Student Login', 'மாணவர் உள்நுழைவு', lang)}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
