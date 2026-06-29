import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLang, t } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ShoppingCart, Star, ArrowLeft, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import gsap from 'gsap';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLang();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current.querySelectorAll('.gsap-detail'),
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
      );
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!product) {
    return (
      <div style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2>Product not found.</h2>
        <Link to="/products" className="premium-button primary compact" style={{ marginTop: '16px' }}>
          Back to Store
        </Link>
      </div>
    );
  }

  const handleInstantBuy = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  // Find related products (same category, excluding current product)
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const tabs = [
    { id: 'description', label: 'Description', labelTa: 'விளக்கம்' },
    { id: 'benefits', label: 'Benefits', labelTa: 'நன்மைகள்' },
    { id: 'ingredients', label: 'Ingredients', labelTa: 'பொருட்கள்' },
    { id: 'nutrition', label: 'Nutrition', labelTa: 'ஊட்டச்சத்து' },
  ];

  return (
    <div style={{ padding: '60px 0', minHeight: '100vh' }} ref={mainRef}>
      <div className="section-inner">
        {/* Back Link */}
        <button
          onClick={() => navigate('/products')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: 'var(--primary)',
            marginBottom: '32px',
          }}
        >
          <ArrowLeft size={16} /> {t('Back to Shop', 'கடைக்கு திரும்பு', lang)}
        </button>

        {/* Product Grid */}
        <div className="lr-grid" style={{ gap: '40px', marginBottom: '60px', borderBottom: 'none', padding: '0' }}>
          {/* Left Column: Image */}
          <div className="gsap-detail" style={{
            position: 'relative',
            aspectRatio: '1',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-soft)',
            border: '1.5px solid var(--stroke)',
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              backgroundColor: 'var(--primary)',
              color: 'white',
              fontSize: '0.8rem',
              fontWeight: 700,
              padding: '6px 12px',
              borderRadius: 'var(--radius-pill)',
            }}>
              {product.weight}
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="gsap-detail">
            <span className="section-eyebrow" style={{ textTransform: 'uppercase' }}>
              {lang === LANGUAGES.TA ? product.categoryTa : product.category}
            </span>
            
            <h1 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 900,
              color: 'var(--text)',
              margin: '12px 0 16px 0',
              lineHeight: 1.2
            }}>
              {lang === LANGUAGES.TA ? product.nameTa : product.name}
            </h1>

            {/* Ratings */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', color: '#fbbf24' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                ))}
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 600 }}>({product.rating} / 5)</span>
            </div>

            {/* Price */}
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '8px',
              marginBottom: '24px',
              borderBottom: '1px solid var(--divider)',
              paddingBottom: '16px'
            }}>
              <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--secondary)' }}>
                ₹{product.price}
              </span>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-light)' }}>/ {product.weight}</span>
            </div>

            {/* Snippet Description */}
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
              {lang === LANGUAGES.TA ? product.descriptionTa : product.description}
            </p>

            {/* Quantity Selector & Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
              {/* Quantity */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                border: '1.5px solid var(--stroke)',
                borderRadius: 'var(--radius-pill)',
                overflow: 'hidden',
                backgroundColor: 'var(--bg)',
              }}>
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  style={{ padding: '0.6rem 1.2rem', fontWeight: 'bold' }}
                >
                  -
                </button>
                <span style={{ width: '40px', textAlign: 'center', fontWeight: 'bold', fontSize: '0.95rem' }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  style={{ padding: '0.6rem 1.2rem', fontWeight: 'bold' }}
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => addToCart(product, quantity)}
                className="premium-button ghost"
                style={{ borderRadius: 'var(--radius-pill)', padding: '0.75rem 1.75rem' }}
              >
                <ShoppingCart size={16} style={{ marginRight: '8px' }} />
                {t('Add to Cart', 'கூடையில் சேர்', lang)}
              </button>

              {/* Buy Now */}
              <button
                onClick={handleInstantBuy}
                className="premium-button primary"
                style={{
                  borderRadius: 'var(--radius-pill)',
                  padding: '0.75rem 1.75rem',
                  backgroundColor: 'var(--secondary)',
                }}
              >
                {t('Buy Now', 'இப்போதே வாங்கு', lang)}
              </button>
            </div>

            {/* Highlights Infobox */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              padding: '20px',
              backgroundColor: 'var(--bg-soft)',
              borderRadius: 'var(--radius-md)',
              border: '1.5px solid var(--stroke)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={20} color="var(--secondary)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>100% Chemical-Free</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Truck size={20} color="var(--secondary)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Direct Farm Delivery</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <RefreshCw size={20} color="var(--secondary)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Hygienically Packed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Info Tabs */}
        <div style={{ marginBottom: '60px' }} className="gsap-detail">
          {/* Tab Headers */}
          <div style={{
            display: 'flex',
            borderBottom: '2px solid var(--divider)',
            marginBottom: '20px',
            overflowX: 'auto',
            gap: '24px'
          }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '12px 4px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: activeTab === tab.id ? 'var(--primary)' : 'var(--text-light)',
                  borderBottom: activeTab === tab.id ? '3px solid var(--primary)' : 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                {lang === LANGUAGES.TA ? tab.labelTa : tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ minHeight: '120px' }}>
            {activeTab === 'description' && (
              <div style={{ lineHeight: 1.7, color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                <p>{lang === LANGUAGES.TA ? product.descriptionTa : product.description}</p>
                <div style={{ marginTop: '16px' }}>
                  <strong>{t('Storage Instructions:', 'சேமிப்பு வழிமுறைகள்:', lang)}</strong>
                  <p>{product.storage}</p>
                </div>
              </div>
            )}

            {activeTab === 'benefits' && (
              <ul style={{ paddingLeft: '20px', lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                {product.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}

            {activeTab === 'ingredients' && (
              <ul style={{ paddingLeft: '20px', lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                {product.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            )}

            {activeTab === 'nutrition' && (
              <div style={{ maxWidth: '320px', border: '1.5px solid var(--stroke)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '10px 16px', borderBottom: '1px solid var(--divider)', fontWeight: 'bold' }}>
                  <span>Nutritional Fact</span>
                  <span>Per 100g</span>
                </div>
                {Object.entries(product.nutrition).map(([key, val]) => (
                  <div key={key} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '8px 16px', borderBottom: '1px solid var(--divider)' }}>
                    <span style={{ textTransform: 'capitalize' }}>{key}</span>
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="gsap-detail">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '24px' }}>
              {t('Related Products', 'தொடர்புடைய பொருட்கள்', lang)}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
              {related.map((p) => (
                <div
                  key={p.id}
                  style={{
                    border: '1.5px solid var(--stroke)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    backgroundColor: 'var(--card-bg)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: '100%', aspectRatio: '1.2', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => navigate(`/product/${p.id}`)}
                  />
                  <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h4 style={{ margin: '0 0 8px 0', fontSize: '1rem', fontWeight: 800 }}>
                      <Link to={`/product/${p.id}`} style={{ color: 'var(--text)' }}>
                        {lang === LANGUAGES.TA ? p.nameTa : p.name}
                      </Link>
                    </h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                      <span style={{ fontWeight: 'bold', color: 'var(--secondary)' }}>₹{p.price}</span>
                      <Link to={`/product/${p.id}`} className="premium-button primary compact" style={{ fontSize: '0.78rem', padding: '0.4rem 0.8rem', backgroundColor: 'var(--secondary)' }}>
                        {t('View details', 'விவரம் காண்', lang)}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
