import { useEffect, useRef, useState } from 'react';
import { useLang, t, LANGUAGES } from '../context/LanguageContext';
import { Clock, BookOpen, ChefHat, Play } from 'lucide-react';
import gsap from 'gsap';

export default function Recipes() {
  const { lang } = useLang();
  const mainRef = useRef(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current.querySelectorAll('.gsap-fade'),
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out' }
      );
    }
  }, [filter]);

  const recipeList = [
    {
      id: 'r1',
      title: 'Traditional Millet Koozh',
      titleTa: 'பாரம்பரிய கம்பு கூழ்',
      category: 'millet',
      time: '20 mins',
      difficulty: 'Easy',
      difficultyTa: 'எளிது',
      ingredients: ['1 cup Pearl Millet Flour (Kambu)', '2 cups Water', '1 cup Buttermilk', 'Small onions (chopped)', 'Salt to taste'],
      ingredientsTa: ['1 கப் கம்பு மாவு', '2 கப் தண்ணீர்', '1 கப் மோர்', 'சின்ன வெங்காயம்', 'உப்பு தேவையான அளவு'],
      steps: [
        'Mix millet flour with water without lumps and ferment overnight.',
        'Next morning, cook the mixture on low flame, stirring constantly until thick.',
        'Let it cool completely. Mix with buttermilk, salt, and chopped small onions before serving.'
      ],
      stepsTa: [
        'கம்பு மாவை தண்ணீரில் கட்டிகள் இல்லாமல் கலந்து இரவே புளிக்க வைக்கவும்.',
        'மறுநாள் காலையில், குறைந்த தணலில் மாவை கெட்டியாகும் வரை கிளறி வேக வைக்கவும்.',
        'நன்கு ஆறியதும், மோர், உப்பு மற்றும் நறுக்கிய சின்ன வெங்காயம் கலந்து பருகவும்.'
      ]
    },
    {
      id: 'r2',
      title: 'Traditional Mapillai Samba Pongal',
      titleTa: 'மாப்பிள்ளை சம்பா அரிசி பொங்கல்',
      category: 'traditional',
      time: '35 mins',
      difficulty: 'Medium',
      difficultyTa: 'நடுத்தரம்',
      ingredients: ['1 cup Mapillai Samba Rice', '1/4 cup Moong Dal', '3.5 cups Water', 'Ginger, Pepper, Cumin seeds', 'Ghee, Cashew nuts, Curry leaves'],
      ingredientsTa: ['1 கப் மாப்பிள்ளை சம்பா அரிசி', '1/4 கப் பாசிப்பருப்பு', '3.5 கப் தண்ணீர்', 'இஞ்சி, மிளகு, சீரகம்', 'நெய், முந்திரி, கறிவேப்பிலை'],
      steps: [
        'Soak Mapillai Samba rice for 3-4 hours as it is raw traditional red rice.',
        'Dry roast moong dal until fragrant. Pressure cook rice and dal with water for 5 whistles.',
        'In a pan, heat ghee, temper with pepper, cumin, ginger, cashews, and curry leaves. Mix into cooked pongal.'
      ],
      stepsTa: [
        'மாப்பிள்ளை சம்பா அரிசியை சமைப்பதற்கு முன் 3-4 மணி நேரம் ஊற வைக்கவும்.',
        'பாசிப்பருப்பை வறுத்து, அரிசியுடன் தண்ணீர் சேர்த்து குக்கரில் 5 விசில் வரும் வரை வேக வைக்கவும்.',
        'தாளிக்கும் கரண்டியில் நெய் சூடாக்கி மிளகு, சீரகம், இஞ்சி, முந்திரி, கறிவேப்பிலை தாளித்து பொங்கலில் சேர்க்கவும்.'
      ]
    }
  ];

  const filtered = recipeList.filter(r => filter === 'all' || r.category === filter);

  return (
    <div style={{ padding: '60px 0', minHeight: '80vh' }} ref={mainRef}>
      <div className="section-inner">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-eyebrow gsap-fade">Traditional Cooking</span>
          <h1 className="gsap-fade" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--primary)', margin: '16px 0 8px 0' }}>
            {t('Healthy Recipes', 'ஆரோக்கியமான சமையல் குறிப்புகள்', lang)}
          </h1>
          <p className="gsap-fade" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            {t('Cook healthy, traditional meals using organic millets and native red rice varieties.', 'இயற்கை சிறுதானியங்கள் மற்றும் பாரம்பரிய அரிசி ரகங்களை கொண்டு ஆரோக்கியமான உணவுகளை சமைக்க பழகுங்கள்.', lang)}
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '40px' }} className="gsap-fade">
          <button
            onClick={() => setFilter('all')}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: 'var(--radius-pill)',
              fontWeight: 600,
              fontSize: '0.85rem',
              border: '1.5px solid var(--stroke)',
              backgroundColor: filter === 'all' ? 'var(--secondary)' : 'var(--bg)',
              color: filter === 'all' ? 'white' : 'var(--text)'
            }}
          >
            {t('All Recipes', 'அனைத்து குறிப்புகள்', lang)}
          </button>
          <button
            onClick={() => setFilter('millet')}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: 'var(--radius-pill)',
              fontWeight: 600,
              fontSize: '0.85rem',
              border: '1.5px solid var(--stroke)',
              backgroundColor: filter === 'millet' ? 'var(--secondary)' : 'var(--bg)',
              color: filter === 'millet' ? 'white' : 'var(--text)'
            }}
          >
            {t('Millet Recipes', 'சிறுதானிய சமையல்', lang)}
          </button>
          <button
            onClick={() => setFilter('traditional')}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: 'var(--radius-pill)',
              fontWeight: 600,
              fontSize: '0.85rem',
              border: '1.5px solid var(--stroke)',
              backgroundColor: filter === 'traditional' ? 'var(--secondary)' : 'var(--bg)',
              color: filter === 'traditional' ? 'white' : 'var(--text)'
            }}
          >
            {t('Traditional Rice Recipes', 'பாரம்பரிய அரிசி சமையல்', lang)}
          </button>
        </div>

        {/* Recipes Grid */}
        <div style={{ display: 'grid', gap: '40px' }}>
          {filtered.map((recipe) => (
            <div
              key={recipe.id}
              className="gsap-fade lr-grid"
              style={{
                padding: '30px',
                border: '1.5px solid var(--stroke)',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--card-bg)',
                alignItems: 'start'
              }}
            >
              {/* Ingredients Column */}
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  {recipe.category}
                </span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary)', margin: '0 0 16px 0' }}>
                  {lang === LANGUAGES.TA ? recipe.titleTa : recipe.title}
                </h2>
                
                <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', fontSize: '0.88rem', color: 'var(--text-light)', fontWeight: 600 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> {recipe.time}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><ChefHat size={16} /> {lang === LANGUAGES.TA ? recipe.difficultyTa : recipe.difficulty}</span>
                </div>

                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text)', marginBottom: '12px' }}>
                  {t('Ingredients Required', 'தேவையான பொருட்கள்', lang)}
                </h4>
                <ul style={{ paddingLeft: '20px', lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {(lang === LANGUAGES.TA && recipe.ingredientsTa ? recipe.ingredientsTa : recipe.ingredients).map((ing, idx) => (
                    <li key={idx}>{ing}</li>
                  ))}
                </ul>
              </div>

              {/* Cooking Steps Column */}
              <div style={{ borderLeft: '1.5px solid var(--divider)', paddingLeft: '32px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <BookOpen size={18} color="var(--primary)" /> {t('Instructions & Steps', 'செய்முறை விளக்கங்கள்', lang)}
                </h4>
                
                <ol style={{ paddingLeft: '20px', display: 'grid', gap: '16px', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {(lang === LANGUAGES.TA && recipe.stepsTa ? recipe.stepsTa : recipe.steps).map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>

                {/* Optional Play Video CTA */}
                <div style={{
                  marginTop: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  color: 'var(--secondary)'
                }}
                onClick={() => window.open('https://youtube.com', '_blank')}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--secondary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Play size={14} fill="currentColor" />
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{t('Watch Cooking Video', 'சமையல் வீடியோவை காண்க', lang)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
