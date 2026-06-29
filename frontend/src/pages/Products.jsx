import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useLang, t, LANGUAGES } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { Search, ShoppingCart, Eye, Star } from 'lucide-react';
import gsap from 'gsap';

export default function Products() {
  const { lang } = useLang();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const categoryFilter = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  
  const gridRef = useRef(null);

  const categories = [
    { id: 'all', name: 'All Products', nameTa: 'அனைத்து பொருட்கள்' },
    { id: 'rice', name: '🌾 Rice', nameTa: '🌾 அரிசி' },
    { id: 'millets', name: '🌿 Millets', nameTa: '🌿 சிறுதானியங்கள்' },
    { id: 'oils', name: '🫒 Cold Pressed Oils', nameTa: '🫒 நல்லெண்ணெய்/கடலை எண்ணெய்' },
    { id: 'vegetables', name: '🥬 Vegetables', nameTa: '🥬 காய்கறிகள்' },
    { id: 'spices', name: '🌶️ Spices', nameTa: '🌶️ மசாலாக்கள்' },
    { id: 'natural', name: '🍯 Natural Products', nameTa: '🍯 இயற்கை பொருட்கள்' },
  ];

  // GSAP Entrance
  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.querySelectorAll('.product-card-anim'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out' }
      );
    }
  }, [categoryFilter, sortBy, searchQuery]);

  const handleCategoryChange = (catId) => {
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  // Filtering & Sorting
  const filteredProducts = products
    .filter((p) => {
      const matchCat = categoryFilter === 'all' || p.category === categoryFilter;
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.nameTa && p.nameTa.includes(searchQuery));
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

  const handleInstantBuy = (product) => {
    addToCart(product, 1);
    navigate('/cart');
  };

  return (
    <div style={{ padding: '60px 0', minHeight: '100vh' }}>
      <div className="section-inner">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-eyebrow">{t('Organic Store', 'இயற்கை அங்காடி', lang)}</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--primary)', margin: '12px 0' }}>
            {t('Pure Farm to Home Products', 'பண்ணையிலிருந்து நேரடி பொருட்கள்', lang)}
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            {t('Chemical-free traditional varieties harvested directly by Tamil Nadu farmers.', 'தமிழ்நாடு விவசாயிகளால் நேரடியாக அறுவடை செய்யப்பட்ட இரசாயனமற்ற பாரம்பரிய உணவுகள்.', lang)}
          </p>
        </div>

        {/* Toolbar: Search, Sort */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px',
          borderBottom: '1px solid var(--divider)',
          paddingBottom: '20px'
        }}>
          {/* Search */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
            <input
              type="text"
              placeholder={t('Search products...', 'தேடுக...', lang)}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: '40px' }}
            />
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
          </div>

          {/* Sort */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              {t('Sort By:', 'வரிசைப்படுத்துக:', lang)}
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ width: 'auto', padding: '0.5rem 2rem 0.5rem 1rem' }}
            >
              <option value="name">{t('Name', 'பெயர்', lang)}</option>
              <option value="price-low">{t('Price: Low to High', 'விலை: குறைந்ததிலிருந்து அதிகத்திற்கு', lang)}</option>
              <option value="price-high">{t('Price: High to Low', 'விலை: அதிகத்திலிருந்து குறைந்ததிற்கு', lang)}</option>
              <option value="rating">{t('Best Rating', 'மதிப்பீடு', lang)}</option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '40px',
          justifyContent: 'center'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.88rem',
                fontWeight: 600,
                border: '1.5px solid var(--stroke)',
                backgroundColor: categoryFilter === cat.id ? 'var(--secondary)' : 'var(--bg)',
                color: categoryFilter === cat.id ? 'white' : 'var(--text)',
                transition: 'all 150ms ease',
              }}
            >
              {lang === LANGUAGES.TA ? cat.nameTa : cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
            <h3>{t('No products found matching your criteria.', 'தயாரிப்புகள் ஏதும் இல்லை.', lang)}</h3>
          </div>
        ) : (
          <div
            ref={gridRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="product-card-anim"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1.5px solid var(--stroke)',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--card-bg)',
                  overflow: 'hidden',
                  transition: 'transform 300ms ease, box-shadow 300ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Product Image */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '1',
                    overflow: 'hidden',
                    backgroundColor: 'var(--bg-soft)',
                    cursor: 'pointer'
                  }}
                  onClick={() => navigate(`/product/${p.id}`)}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '4px 8px',
                    borderRadius: 'var(--radius-pill)',
                  }}>
                    {p.weight}
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', color: '#fbbf24' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < Math.floor(p.rating) ? 'currentColor' : 'none'} />
                      ))}
                    </div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-light)', fontWeight: 600 }}>({p.rating})</span>
                  </div>

                  <h3
                    onClick={() => navigate(`/product/${p.id}`)}
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: 'var(--text)',
                      margin: '0 0 8px 0',
                      cursor: 'pointer',
                    }}
                  >
                    {lang === LANGUAGES.TA ? p.nameTa : p.name}
                  </h3>

                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    margin: '0 0 16px 0',
                    lineHeight: 1.4,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {lang === LANGUAGES.TA ? p.descriptionTa : p.description}
                  </p>

                  <div style={{ marginTop: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-light)', fontWeight: 600 }}>{t('Price', 'விலை', lang)}</span>
                      <span style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--secondary)' }}>
                        ₹{p.price}
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <button
                        onClick={() => addToCart(p, 1)}
                        className="premium-button ghost compact"
                        style={{ justifyContent: 'center', fontSize: '0.82rem' }}
                      >
                        <ShoppingCart size={14} style={{ marginRight: '6px' }} />
                        {t('Add to Cart', 'கூடையில் சேர்', lang)}
                      </button>
                      <button
                        onClick={() => handleInstantBuy(p)}
                        className="premium-button primary compact"
                        style={{ justifyContent: 'center', fontSize: '0.82rem', backgroundColor: 'var(--secondary)' }}
                      >
                        {t('Buy Now', 'இப்போதே வாங்கு', lang)}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
