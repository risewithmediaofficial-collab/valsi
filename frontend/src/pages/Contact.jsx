import { useState } from 'react';
import { Mail, MessageCircle, Phone, MapPin, Send } from 'lucide-react';
import { siteConfig } from '../data/siteContent';
import { useLang, t } from '../context/LanguageContext';

export default function Contact() {
  const { lang } = useLang();
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const INTERESTS_EN = ['Inner Power Training', 'Course Enrollment', 'Partnership', 'General Inquiry', 'Other'];
  const INTERESTS_TA = ['உள்ளார்ந்த சக்தி பயிற்சி', 'பாடப்பதிவு', 'கூட்டாண்மை', 'பொதுவான விசாரணை', 'மற்றவை'];
  const INTERESTS = lang === 'ta' ? INTERESTS_TA : INTERESTS_EN;

  const change = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = t('Required', 'தேவை', lang);
    if (!form.email.trim()) e.email = t('Required', 'தேவை', lang);
    if (!form.message.trim()) e.message = t('Required', 'தேவை', lang);
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const msg = `Hello VALSII!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterest: ${form.interest}\n\nMessage: ${form.message}`;
    window.open(`https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent(msg)}`, '_blank', 'noreferrer');
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '60px 0' }}>
      {/* Page Title */}
      <div className="section-inner animate-text-reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span className="section-eyebrow">{t('Contact', 'தொடர்பு', lang)}</span>
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            color: 'var(--primary)',
            margin: '16px 0 8px 0',
            letterSpacing: '-0.02em',
          }}
        >
          {t("Let's Talk", 'பேசலாம்', lang)}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', margin: 0 }}>
          {t('Reach out for admissions or inquiries.', 'சேர்க்கை அல்லது விசாரணைக்கு தொடர்பு கொள்ளுங்கள்.', lang)}
        </p>
      </div>

      <section className="section-shell">
        <div className="section-inner">
          {/* Top: Quick contact links — left-right split */}
          <div className="lr-grid animate-text-reveal delay-100" style={{ marginBottom: '0', paddingTop: '0' }}>
            {/* LEFT: Info */}
            <div style={{ display: 'grid', gap: '24px' }}>
              <div>
                <div className="section-label-line">
                  <span className="section-eyebrow" style={{ margin: 0 }}>
                    {t('Reach Us', 'தொடர்பு கொள்ளுங்கள்', lang)}
                  </span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 900, margin: '8px 0 12px 0', color: 'var(--text)' }}>
                  {t('VALSII Contact Details', 'VALSII தொடர்பு விவரங்கள்', lang)}
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0 0 20px 0', lineHeight: 1.6 }}>
                  {t(
                    'WhatsApp is the fastest path for direct follow-up.',
                    'WhatsApp மூலம் விரைவாக தொடர்பு கொள்ளலாம்.',
                    lang
                  )}
                </p>
                <div style={{ display: 'grid', gap: '16px' }}>
                  <a href={`mailto:${siteConfig.email}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                    <Mail size={16} color="var(--primary)" />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text)' }}>{siteConfig.email}</span>
                  </a>
                  <a href={`tel:${siteConfig.phoneDigits}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                    <Phone size={16} color="var(--primary)" />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text)' }}>{siteConfig.phone}</span>
                  </a>
                  <a
                    href={siteConfig.whatsappGeneralUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
                  >
                    <MessageCircle size={16} color="var(--primary)" />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text)' }}>
                      {t('WhatsApp Chat', 'WhatsApp அரட்டை', lang)}
                    </span>
                  </a>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <MapPin size={16} color="var(--primary)" />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text)' }}>{siteConfig.founderLocation}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div>
              <div className="section-label-line">
                <span className="section-eyebrow" style={{ margin: 0 }}>
                  {t('Send a Message', 'செய்தி அனுப்புங்கள்', lang)}
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 900, margin: '8px 0 16px 0', color: 'var(--text)' }}>
                {t('Write to Us', 'எங்களுக்கு எழுதுங்கள்', lang)}
              </h2>

              {submitted ? (
                <div style={{ padding: '24px 0' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--secondary)', margin: '0 0 8px 0' }}>
                    ✔ {t('Message Forwarded', 'செய்தி அனுப்பப்பட்டது', lang)}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                    {t('We will get back to you shortly.', 'விரைவில் உங்களை தொடர்பு கொள்வோம்.', lang)}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: 'grid', gap: '16px' }}>
                  <div style={{ display: 'grid', gap: '6px' }}>
                    <label className="form-label" htmlFor="c-name">
                      {t('Full Name *', 'முழு பெயர் *', lang)}
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      className="form-input"
                      placeholder={t('Your name', 'உங்கள் பெயர்', lang)}
                      value={form.name}
                      onChange={(e) => change('name', e.target.value)}
                    />
                    {errors.name && <span style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>{errors.name}</span>}
                  </div>

                  <div style={{ display: 'grid', gap: '6px' }}>
                    <label className="form-label" htmlFor="c-email">
                      {t('Email Address *', 'மின்னஞ்சல் முகவரி *', lang)}
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      className="form-input"
                      placeholder={t('you@example.com', 'you@example.com', lang)}
                      value={form.email}
                      onChange={(e) => change('email', e.target.value)}
                    />
                    {errors.email && <span style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>{errors.email}</span>}
                  </div>

                  <div style={{ display: 'grid', gap: '6px' }}>
                    <label className="form-label" htmlFor="c-interest">
                      {t("I'm interested in", 'என்னில் ஆர்வம்', lang)}
                    </label>
                    <select
                      id="c-interest"
                      className="form-input"
                      value={form.interest}
                      onChange={(e) => change('interest', e.target.value)}
                    >
                      <option value="">{t('Select a topic', 'ஒரு தலைப்பை தேர்வு செய்யுங்கள்', lang)}</option>
                      {INTERESTS.map((i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ display: 'grid', gap: '6px' }}>
                    <label className="form-label" htmlFor="c-message">
                      {t('Message *', 'செய்தி *', lang)}
                    </label>
                    <textarea
                      id="c-message"
                      className="form-input"
                      rows={4}
                      placeholder={t('How can we help?', 'நாங்கள் எவ்வாறு உதவலாம்?', lang)}
                      value={form.message}
                      onChange={(e) => change('message', e.target.value)}
                    />
                    {errors.message && <span style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>{errors.message}</span>}
                  </div>

                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    className="premium-button primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
                  >
                    <Send size={16} /> {t('Send Message', 'செய்தி அனுப்பு', lang)}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
