import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang, t } from '../context/LanguageContext';
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
    { q: 'Duration', a: 'Each learning track is designed to span 4 to 8 weeks, with flexible self-paced schedules and weekly live mentor reviews.' },
    { q: 'Language', a: 'Programs are offered in bilingual formats (English and Tamil) to ensure clear understanding and effective learning.' },
    { q: 'Certificate', a: 'Yes! Upon successful completion of all coursework and milestones, you will receive an official VALSII LLP Certificate of Mastery.' },
    { q: 'Eligibility', a: 'Inner Power Training is open to students, working professionals, job seekers, and entrepreneurs wishing to build key life competencies.' },
    { q: 'Fees', a: 'Pricing varies by track. Affordable installment plans and marginal student discount packages are available upon registration inquiry.' },
    { q: 'Support', a: 'VALSII offers direct WhatsApp support lines, periodic group training events, and email follow-ups with CEO and mentors.' }
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
            VALSII Flagship Program
          </span>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
            fontWeight: 900,
            margin: '20px 0 12px 0',
            lineHeight: 1.1,
            letterSpacing: '-0.02em'
          }}>
            Inner Power Training
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', opacity: 0.9, marginBottom: '36px', fontWeight: 600 }}>
            Unlock Your Inner Potential
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={handleJoinNow} className="premium-button primary" style={{ padding: '0.85rem 2rem' }}>
              Join Now
            </button>
            <button onClick={handleLogin} className="premium-button ghost" style={{ borderColor: 'white', color: 'white', padding: '0.85rem 2rem' }}>
              Student Login
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
              <span className="section-eyebrow">Overview</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, color: 'var(--text)', margin: '12px 0' }}>
                What is Inner Power Training?
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '24px', textAlign: 'justify' }}>
                Inner Power Training is VALSII's flagship developmental program. It is specifically designed to help individuals build raw self-confidence, practice executive leadership, master communications, overcome social fears, manage daily stress, recover from digital distractions, and prepare for real-world life success. We combine ancient wisdom with modern training techniques to bring out your best self.
              </p>
              
              {/* CTAs */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button onClick={handleJoinNow} className="premium-button primary compact">Join Now</button>
                <button onClick={handleLogin} className="premium-button ghost compact">Student Login</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP 04: WHO CAN JOIN? ─────────────────────────────── */}
      <section className="section-shell gsap-step" id="who-can-join" style={{ backgroundColor: 'var(--bg-soft)', padding: '80px 0' }}>
        <div className="section-inner narrow">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-eyebrow">Audience</span>
            <h2>Who Can Join?</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            {[
              { label: 'School Students', desc: 'Build focus, character, and values.' },
              { label: 'College Students', desc: 'Prepare for campus to corporate jobs.' },
              { label: 'Job Seekers', desc: 'Master interviews & communication.' },
              { label: 'Working Professionals', desc: 'Excel in leadership & productivity.' },
              { label: 'Entrepreneurs', desc: 'Build money mindset & business vision.' }
            ].map((item, idx) => (
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
            <button onClick={handleJoinNow} className="premium-button primary compact">Join Now</button>
            <button onClick={handleLogin} className="premium-button ghost compact">Student Login</button>
          </div>
        </div>
      </section>

      {/* ── STEP 05: BENEFITS ──────────────────────────────────── */}
      <section className="section-shell gsap-step" id="benefits" style={{ padding: '80px 0' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-eyebrow">Core Outcomes</span>
            <h2>Why Join This Program? / Benefits</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            {[
              { title: 'Confidence', desc: 'Develop unwavering self-belief to face any challenge.' },
              { title: 'Leadership', desc: 'Inspire and guide others with integrity and responsibility.' },
              { title: 'Communication', desc: 'Express your ideas clearly, concisely, and persuasively.' },
              { title: 'Fear Management', desc: 'Overcome stage fear, public anxiety, and self-doubt.' },
              { title: 'Mobile Addiction Recovery', desc: 'Reclaim your time from social media distractions.' },
              { title: 'Time Management', desc: 'Prioritize tasks, avoid procrastination, and double productivity.' },
              { title: 'Money Mindset', desc: 'Build healthy wealth-creation habits and financial literacy.' }
            ].map((benefit, idx) => (
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
            <button onClick={handleJoinNow} className="premium-button primary compact">Join Now</button>
            <button onClick={handleLogin} className="premium-button ghost compact">Student Login</button>
          </div>
        </div>
      </section>

      {/* ── STEP 06: COURSE CATALOGUE ──────────────────────────── */}
      <section className="section-shell gsap-step" id="courses" style={{ backgroundColor: 'var(--bg-soft)', padding: '80px 0' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-eyebrow">Catalog</span>
            <h2>Course Catalogue</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: '600px', margin: '8px auto 0 auto' }}>
              Select from our 8 high-impact specialized curriculum tracks.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {[
              { num: '01', title: 'Mindset Training', desc: 'Shift from self-limiting beliefs to growth patterns.' },
              { num: '02', title: 'Fear Management', desc: 'Conquer social fears, public speaking, and stage phobia.' },
              { num: '03', title: 'Mobile Addiction Recovery', desc: 'Master tech usage limits and maximize deep focus.' },
              { num: '04', title: 'Leadership Development', desc: 'Learn coordination, ownership, and team organization.' },
              { num: '05', title: 'Time Management', desc: 'Adopt scheduling tools, priority maps, and daily setups.' },
              { num: '06', title: 'Money Mindset', desc: 'Acquire wealth-building principles and budget management.' },
              { num: '07', title: 'Emotional Intelligence', desc: 'Regulate stress, handle feedback, and build empathy.' },
              { num: '08', title: 'Personal Growth', desc: 'Plan long-term goals and execute daily self-improvement.' }
            ].map((track, idx) => (
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
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--primary)' }}>TRACK {track.num}</span>
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
                  [ Enroll Now ]
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
            <span className="section-eyebrow">Success Stories</span>
            <h2>Student Testimonials</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {[
              { name: 'Vijay Anand', role: 'College Student', review: 'The Stage Fear and Mobile Recovery track changed my daily routines. I can now speak in front of classes without any hesitation.' },
              { name: 'Srinidhi K.', role: 'Job Seeker', review: 'Before joining Money Mindset, I had zero ideas about personal financing. The training is practical and easy to follow.' }
            ].map((rev, idx) => (
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
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Play Video Story</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button onClick={handleJoinNow} className="premium-button primary compact">Join Now</button>
            <button onClick={handleLogin} className="premium-button ghost compact">Student Login</button>
          </div>
        </div>
      </section>

      {/* ── STEP 08: FAQ ACCORDION ──────────────────────────────── */}
      <section className="section-shell gsap-step" id="faq" style={{ backgroundColor: 'var(--bg-soft)', padding: '80px 0' }}>
        <div className="section-inner narrow">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-eyebrow">Questions</span>
            <h2>FAQ Accordion</h2>
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
            <button onClick={handleJoinNow} className="premium-button primary compact">Join Now</button>
            <button onClick={handleLogin} className="premium-button ghost compact">Student Login</button>
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
            Ready to Start Your Learning Journey?
          </h2>
          <p style={{ opacity: 0.9, fontSize: '0.98rem', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px auto' }}>
            Enroll in VALSII's Inner Power Training today and gain access to resources, live mentoring, and certification.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={handleJoinNow} className="premium-button primary" style={{ backgroundColor: 'white', color: 'var(--primary)', padding: '0.85rem 2rem' }}>
              Join Now
            </button>
            <button onClick={handleLogin} className="premium-button ghost" style={{ borderColor: 'white', color: 'white', padding: '0.85rem 2rem' }}>
              Student Login
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
