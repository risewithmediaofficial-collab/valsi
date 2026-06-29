import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useLang, t } from '../context/LanguageContext';
import { CheckCircle, Truck, Package, ShoppingBag, MapPin } from 'lucide-react';
import { useEffect } from 'react';

export default function OrderConfirmation() {
  const { state } = useLocation();
  const { lang } = useLang();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (!state) {
      navigate('/products');
    }
  }, [state, navigate]);

  if (!state) return null;

  const steps = [
    { label: 'Order Placed', labelTa: 'ஆர்டர் செய்யப்பட்டது', icon: CheckCircle, active: true },
    { label: 'Quality Check & Packing', labelTa: 'தரக்கட்டுப்பாடு & பேக்கிங்', icon: Package, active: true },
    { label: 'Out for Delivery', labelTa: 'டெலிவரிக்கு அனுப்பப்பட்டது', icon: Truck, active: false },
    { label: 'Delivered', labelTa: 'டெலிவரி செய்யப்பட்டது', icon: ShoppingBag, active: false },
  ];

  return (
    <div style={{ padding: '80px 0', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="section-inner narrow" style={{ textAlign: 'center' }}>
        {/* Success Icon */}
        <div style={{ color: 'var(--secondary)', display: 'inline-flex', marginBottom: '24px' }}>
          <CheckCircle size={64} fill="none" />
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--secondary)', margin: '0 0 16px 0' }}>
          {t('Order Confirmed!', 'ஆர்டர் உறுதி செய்யப்பட்டது!', lang)}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', maxWidth: '500px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
          {t('Thank you, ' + state.name + '. Your order has been registered successfully. We are harvesting your fresh products right now.', 'நன்றி ' + state.name + '. உங்கள் ஆர்டர் பதிவு செய்யப்பட்டது. உங்களுக்காக இயற்கை பொருட்கள் பண்ணையிலிருந்து பறிக்கப்படுகின்றன.', lang)}
        </p>

        {/* Tracking Progress Bar */}
        <div style={{
          backgroundColor: 'var(--bg-soft)',
          border: '1.5px solid var(--stroke)',
          borderRadius: 'var(--radius-md)',
          padding: '30px 24px',
          marginBottom: '40px',
          textAlign: 'left'
        }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '24px', color: 'var(--text)' }}>
            {t('Live Order Tracking', 'ஆர்டர் நிலை கண்காணிப்பு', lang)}
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            position: 'relative',
            paddingLeft: '16px'
          }}>
            {/* Visual connector line */}
            <div style={{
              position: 'absolute',
              left: '26px',
              top: '12px',
              bottom: '12px',
              width: '3px',
              backgroundColor: 'var(--stroke)',
              zIndex: 1
            }}></div>

            {/* Steps */}
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', zIndex: 2 }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: step.active ? 'var(--secondary)' : 'var(--bg)',
                    border: '2px solid ' + (step.active ? 'var(--secondary)' : 'var(--stroke)'),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                  }}>
                    {step.active && '✓'}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      margin: 0,
                      color: step.active ? 'var(--text)' : 'var(--text-light)'
                    }}>
                      {lang === LANGUAGES.TA ? step.labelTa : step.label}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Details Infobox */}
        <div style={{
          backgroundColor: 'var(--bg-soft)',
          border: '1.5px solid var(--stroke)',
          borderRadius: 'var(--radius-md)',
          padding: '24px',
          textAlign: 'left',
          marginBottom: '40px',
          display: 'grid',
          gap: '12px',
          fontSize: '0.92rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>{t('Payment Mode', 'கட்டண முறை', lang)}</span>
            <span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{state.payment}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>{t('Amount Paid', 'செலுத்திய தொகை', lang)}</span>
            <span style={{ fontWeight: 'bold', color: 'var(--secondary)' }}>₹{state.total}</span>
          </div>
          <div style={{ borderTop: '1px solid var(--divider)', paddingTop: '12px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
            <MapPin size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <span style={{ display: 'block', fontWeight: 'bold', color: 'var(--text)' }}>{t('Delivery Address', 'டெலிவரி முகவரி', lang)}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{state.address}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <Link to="/" className="premium-button primary compact" style={{ backgroundColor: 'var(--secondary)' }}>
            {t('Go to Home', 'முகப்புப் பக்கம் செல்', lang)}
          </Link>
          <Link to="/products" className="premium-button ghost compact">
            {t('Buy More Products', 'மேலும் பொருட்கள் வாங்கு', lang)}
          </Link>
        </div>
      </div>
    </div>
  );
}
