import { useEffect, useRef } from 'react';
import { useLang, t } from '../context/LanguageContext';
import { ShieldAlert, Sparkles, HeartPulse, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function WhyNatural() {
  const { lang } = useLang();
  const mainRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current.querySelectorAll('.gsap-fade'),
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out' }
      );
    }
  }, []);

  const items = [
    {
      icon: ShieldAlert,
      title: 'Zero Chemical Pesticides',
      titleTa: 'பூச்சிக்கொல்லி மருந்துகள் அற்றது',
      desc: 'All our produce is grown without synthetic fertilizers or harmful chemicals, preserving nature and health.',
      descTa: 'எங்கள் பொருட்கள் அனைத்தும் செயற்கை உரங்கள் அல்லது தீங்கு விளைவிக்கும் இரசாயனங்கள் இன்றி இயற்கையாக வளர்க்கப்படுகின்றன.',
    },
    {
      icon: Sparkles,
      title: 'Nutrient Rich & Pure',
      titleTa: 'ஊட்டச்சத்துக்கள் நிறைந்தது',
      desc: 'Traditional varieties naturally contain higher vitamins, minerals, and antioxidants compared to hybrid crops.',
      descTa: 'பாரம்பரிய ரகங்கள் இயற்கையிலேயே அதிக வைட்டமின்கள், தாதுக்கள் மற்றும் ஆன்டிஆக்ஸிடன்ட்களைக் கொண்டுள்ளன.',
    },
    {
      icon: HeartPulse,
      title: 'Healthier for Family',
      titleTa: 'குடும்பத்தின் ஆரோக்கியம்',
      desc: 'Protects children and elders from digestive and metabolic disorders related to pesticide residues in food.',
      descTa: 'உணவில் உள்ள இரசாயன எச்சங்களால் ஏற்படும் செரிமானம் மற்றும் வளர்சிதை மாற்றக் கோளாறுகளிலிருந்து பாதுகாக்கிறது.',
    },
    {
      icon: ShieldCheck,
      title: 'Hygienically Hand-Packed',
      titleTa: 'சுத்தமாக பேக் செய்யப்பட்டது',
      desc: 'Direct packaging at farm gate under strict hygiene guidelines. Delivered sealed directly to your home.',
      descTa: 'பண்ணை வாயிலிலேயே கடுமையான சுகாதார நெறிமுறைகளுடன் பேக் செய்யப்பட்டு உங்கள் வீட்டிற்கு அனுப்பப்படுகிறது.',
    },
  ];

  return (
    <div style={{ padding: '60px 0', minHeight: '80vh' }} ref={mainRef}>
      <div className="section-inner narrow">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-eyebrow gsap-fade">Why Natural</span>
          <h1 className="gsap-fade" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--primary)', margin: '16px 0 8px 0' }}>
            {t('Pure Chemical-Free Farming', 'சுத்தமான இரசாயனமற்ற விவசாயம்', lang)}
          </h1>
          <p className="gsap-fade" style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            {t('Discover why traditional, chemical-free methods are better for your health, environment, and our farmers.', 'பாரம்பரிய, இரசாயனமற்ற விவசாய முறைகள் உங்கள் ஆரோக்கியத்திற்கும், சுற்றுப்புறத்திற்கும் ஏன் சிறந்தது என அறியுங்கள்.', lang)}
          </p>
        </div>

        {/* Infographics Grid */}
        <div style={{ display: 'grid', gap: '30px', margin: '40px 0' }}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="gsap-fade lr-grid"
                style={{
                  padding: '24px 0',
                  borderBottom: i < items.length - 1 ? '1px solid var(--divider)' : 'none',
                  alignItems: 'center'
                }}
              >
                {/* Icon Column */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--secondary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--secondary)',
                  }}>
                    <Icon size={30} />
                  </div>
                </div>

                {/* Content Column */}
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 10px 0', color: 'var(--text)' }}>
                    {lang === LANGUAGES.TA ? item.titleTa : item.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                    {lang === LANGUAGES.TA ? item.descTa : item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout CTA */}
        <div className="gsap-fade" style={{
          textAlign: 'center',
          marginTop: '48px',
          padding: '30px',
          backgroundColor: 'var(--bg-soft)',
          border: '1.5px solid var(--stroke)',
          borderRadius: 'var(--radius-md)'
        }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '12px' }}>
            {t('Make the Healthy Switch Today', 'இன்றே ஆரோக்கியமான மாற்றத்தைத் தொடங்குங்கள்', lang)}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
            {t('Support organic farming and feed your family healthy chemical-free foods.', 'இயற்கை விவசாயத்தை ஆதரித்து உங்கள் குடும்பத்திற்கு இரசாயனமற்ற உணவை வழங்குங்கள்.', lang)}
          </p>
          <Link to="/products" className="premium-button primary compact" style={{ backgroundColor: 'var(--secondary)' }}>
            {t('Shop Organic Now', 'இப்போதே இயற்கை பொருட்கள் வாங்கு', lang)}
          </Link>
        </div>
      </div>
    </div>
  );
}
