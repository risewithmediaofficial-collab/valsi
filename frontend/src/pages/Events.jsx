import { Link } from 'react-router-dom';
import { useLang, t } from '../context/LanguageContext';

export default function Events() {
  const { lang } = useLang();
  return (
    <div style={{ padding: '80px 0', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="section-inner narrow animate-text-reveal" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '16px' }} aria-hidden="true">🗓️</div>
        <span className="section-eyebrow" style={{ margin: '0 auto 12px', display: 'table' }}>
          {t('Events', 'நிகழ்வுகள்', lang)}
        </span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', margin: '12px 0' }}>
          {t('Coming Soon', 'விரைவில் வருகிறது', lang)}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: '0 0 24px 0', lineHeight: 1.5 }}>
          {t('VALSII workshops, seminars, and live sessions are on the way.', 'VALSII பயிற்சி பட்டறைகள், கருத்தரங்கள் மற்றும் நேரடி அமர்வுகள் வருகின்றன.', lang)}
        </p>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <Link to="/register" id="events-join-now-btn" className="premium-button primary compact">
            {t('Join Now', 'இப்போதே சேருங்கள்', lang)}
          </Link>
          <Link to="/contact" id="events-contact-btn" className="premium-button ghost compact">
            {t('Get Notified', 'அறிவிப்பு பெறுங்கள்', lang)}
          </Link>
        </div>
      </div>
    </div>
  );
}
