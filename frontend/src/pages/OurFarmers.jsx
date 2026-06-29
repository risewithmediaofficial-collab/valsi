import { useEffect, useRef, useState } from 'react';
import { useLang, t } from '../context/LanguageContext';
import { siteConfig, images } from '../data/siteContent';
import { CheckCircle2, Star, UserCheck } from 'lucide-react';
import gsap from 'gsap';

export default function OurFarmers() {
  const { lang } = useLang();
  const mainRef = useRef(null);
  
  const [partnerForm, setPartnerForm] = useState({ name: '', phone: '', location: '', acres: '' });
  const [submitted, setSubmitted] = useState(false);

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

  const farmers = [
    {
      name: 'Ranganathan K.',
      village: 'Kaveripattinam, Krishnagiri',
      villageTa: 'காவேரிப்பட்டினம், கிருஷ்ணகிரி',
      specialty: 'Traditional Samba Rice',
      specialtyTa: 'பாரம்பரிய சம்பா நெல்',
      story: 'Ranganathan has been practicing organic farming for over 12 years. He cultivates Kavuni and Mapillai Samba red rice using natural Panchagavya fertilizer.',
      storyTa: 'ரங்கநாதன் கடந்த 12 ஆண்டுகளுக்கும் மேலாக இயற்கை விவசாயம் செய்து வருகிறார். பஞ்சகவ்யா உரங்களைப் பயன்படுத்தி கவுனி மற்றும் மாப்பிள்ளை சம்பா அரிசியை விளைவிக்கிறார்.',
      image: images.farmer
    },
    {
      name: 'Saraswathi M.',
      village: 'Rayakottai, Krishnagiri',
      villageTa: 'இராயக்கோட்டை, கிருஷ்ணகிரி',
      specialty: 'Organic Vegetables & Millets',
      specialtyTa: 'இயற்கை காய்கறிகள் & சிறுதானியங்கள்',
      story: 'Saraswathi manages a 3-acre chemical-free farm producing high-quality thinai and fresh greens, using traditional multi-cropping techniques.',
      storyTa: 'சரஸ்வதி தனது 3 ஏக்கர் நிலத்தில் தினை மற்றும் புதிய கீரை வகைகளை பலபயிர் சாகுபடி முறையில் இரசாயன உரங்கள் இன்றி விளைவித்து வருகிறார்.',
      image: images.farmTraining
    }
  ];

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    if (!partnerForm.name || !partnerForm.phone) return;
    
    const msg = `Hello Green VALSII!\nI want to join as a Partner Farmer.\n\nName: ${partnerForm.name}\nPhone: ${partnerForm.phone}\nLocation: ${partnerForm.location}\nFarm Area: ${partnerForm.acres} Acres`;
    window.open(`https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent(msg)}`, '_blank', 'noreferrer');
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '60px 0', minHeight: '80vh' }} ref={mainRef}>
      <div className="section-inner">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-eyebrow gsap-fade">Our Farming Community</span>
          <h1 className="gsap-fade" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--primary)', margin: '16px 0 8px 0' }}>
            {t('Meet Our Farmers', 'விவசாயிகளை சந்தியுங்கள்', lang)}
          </h1>
          <p className="gsap-fade" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            {t('We partner directly with marginal organic farmers in Tamil Nadu, paying them fair prices and supporting natural farming practices.', 'நாங்கள் தமிழ்நாட்டின் பாரம்பரிய இயற்கை விவசாயிகளுடன் நேரடியாக கூட்டு வைத்துள்ளோம், அவர்களுக்கு நியாயமான விலையை வழங்கி ஆதரவளிக்கிறோம்.', lang)}
          </p>
        </div>

        {/* Farmers Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '60px'
        }}>
          {farmers.map((farmer, i) => (
            <div
              key={i}
              className="gsap-fade"
              style={{
                border: '1.5px solid var(--stroke)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: 'var(--card-bg)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Image */}
              <div style={{ aspectRatio: '1.5', overflow: 'hidden', backgroundColor: 'var(--bg-soft)' }}>
                <img src={farmer.image} alt={farmer.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              {/* Content */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>
                  {lang === LANGUAGES.TA ? farmer.specialtyTa : farmer.specialty}
                </span>
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 4px 0' }}>{farmer.name}</h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-light)', fontWeight: 600, display: 'block', marginBottom: '16px' }}>
                  📍 {lang === LANGUAGES.TA ? farmer.villageTa : farmer.village}
                </span>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {lang === LANGUAGES.TA ? farmer.storyTa : farmer.story}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Form Section */}
        <div className="gsap-fade lr-grid partner-form-card" style={{
          backgroundColor: 'var(--bg-soft)',
          border: '1.5px solid var(--stroke)',
          borderRadius: 'var(--radius-lg)',
          alignItems: 'center'
        }}>
          {/* Info */}
          <div>
            <span className="section-eyebrow" style={{ color: 'var(--secondary)' }}>Join Us</span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 900, color: 'var(--primary)', margin: '12px 0' }}>
              {t('Become a Partner Farmer', 'கூட்டு விவசாயி ஆகுங்கள்', lang)}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
              {t('Are you practicing natural or chemical-free farming? Partner with Green VALSII to get fair prices and direct market access for your produce.', 'நீங்கள் இயற்கை அல்லது இரசாயனமற்ற விவசாயம் செய்கிறீர்களா? நியாயமான விலை மற்றும் நேரடி சந்தை வாய்ப்புகளைப் பெற Green VALSII-உடன் இணையுங்கள்.', lang)}
            </p>
            
            <div style={{ display: 'grid', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--secondary)" />
                <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>Direct market pricing support</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--secondary)" />
                <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>Free organic training & workshops</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ backgroundColor: 'var(--bg)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--stroke)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <UserCheck size={48} color="var(--secondary)" style={{ marginBottom: '16px' }} />
                <h3>{t('Application Submitted!', 'விண்ணப்பம் அனுப்பப்பட்டது!', lang)}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>We will contact you via WhatsApp shortly.</p>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} style={{ display: 'grid', gap: '16px' }}>
                {/* Name */}
                <div style={{ display: 'grid', gap: '4px' }}>
                  <label className="form-label">{t('Farmer Name *', 'விவசாயி பெயர் *', lang)}</label>
                  <input type="text" className="form-input" required value={partnerForm.name} onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })} />
                </div>
                {/* Phone */}
                <div style={{ display: 'grid', gap: '4px' }}>
                  <label className="form-label">{t('Phone Number *', 'தொலைபேசி எண் *', lang)}</label>
                  <input type="tel" className="form-input" required value={partnerForm.phone} onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })} />
                </div>
                {/* Location */}
                <div style={{ display: 'grid', gap: '4px' }}>
                  <label className="form-label">{t('Village & City', 'கிராமம் & நகரம்', lang)}</label>
                  <input type="text" className="form-input" value={partnerForm.location} onChange={(e) => setPartnerForm({ ...partnerForm, location: e.target.value })} />
                </div>
                {/* Acres */}
                <div style={{ display: 'grid', gap: '4px' }}>
                  <label className="form-label">{t('Farm Size (in Acres)', 'விவசாய நில அளவு (ஏக்கரில்)', lang)}</label>
                  <input type="number" className="form-input" value={partnerForm.acres} onChange={(e) => setPartnerForm({ ...partnerForm, acres: e.target.value })} />
                </div>

                <button type="submit" className="premium-button primary" style={{ width: '100%', justifyContent: 'center', backgroundColor: 'var(--secondary)' }}>
                  {t('Send Details to Join', 'இணைய விபரங்களை அனுப்பு', lang)}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
