import { Link } from 'react-router-dom';
import { useLang, t } from '../context/LanguageContext';

export default function Resources() {
  const { lang } = useLang();
  return (
    <div style={{ padding: '80px 0', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="section-inner narrow animate-text-reveal" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '16px' }} aria-hidden="true">📚</div>
        <span className="section-eyebrow" style={{ margin: '0 auto 12px', display: 'table' }}>
          {t('Resources', 'வளங்கள்', lang)}
        </span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', margin: '12px 0' }}>
          {t('Coming Soon', 'விரைவில் வருகிறது', lang)}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: '0 0 24px 0', lineHeight: 1.5 }}>
          {t('Curated tools and articles for personal growth. Check back soon.', 'தனிப்பட்ட வளர்ச்சிக்கான கருவிகள் மற்றும் கட்டுரைகள் விரைவில் வருகின்றன.', lang)}
        </p>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <Link to="/programs" id="resources-explore-programs-btn" className="premium-button primary compact">
            {t('Explore Programs', 'திட்டங்களை காண்க', lang)}
          </Link>
          <Link to="/contact" id="resources-contact-btn" className="premium-button ghost compact">
            {t('Contact Us', 'தொடர்பு கொள்ளுங்கள்', lang)}
          </Link>
        </div>
      </div>
    </div>
  );
}
