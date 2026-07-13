import { useCart } from '../context/CartContext';
import { useLang, t, LANGUAGES } from '../context/LanguageContext';
import { useNavigate, Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowLeft, Truck, Weight } from 'lucide-react';
import { useEffect } from 'react';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, cartTotalPrice, cartTotalWeight } = useCart();
  const { lang } = useLang();
  const navigate = useNavigate();

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Shipping rate calculation (e.g. Free shipping above ₹500, else ₹50 base rate)
  const shippingCost = cartTotalPrice >= 500 || cartTotalPrice === 0 ? 0 : 50;
  const grandTotal = cartTotalPrice + shippingCost;

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '100px 0', textAlign: 'center', minHeight: '60vh' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>🛒</div>
        <h2 style={{ fontWeight: 800 }}>{t('Your Cart is Empty', 'உங்கள் கூடை காலியாக உள்ளது', lang)}</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
          {t('Explore our store and add some fresh organic items.', 'தயாரிப்புகள் பக்கத்திற்குச் சென்று உங்களுக்குத் தேவையானதை தேர்ந்தெடுங்கள்.', lang)}
        </p>
        <Link to="/products" className="premium-button primary" style={{ backgroundColor: 'var(--secondary)' }}>
          {t('Start Shopping', 'வாங்குவதைத் தொடங்கு', lang)}
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '60px 0', minHeight: '80vh' }}>
      <div className="section-inner">
        <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, marginBottom: '32px' }}>
          {t('Shopping Cart', 'உணவுக் கூடை', lang)}
        </h1>

        <div className="lr-grid" style={{ alignItems: 'start', gap: '32px', borderBottom: 'none', padding: '0' }}>
          {/* Left Column: Cart Items List */}
          <div>
            <div style={{ display: 'grid', gap: '20px' }}>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="cart-item"
                  style={{
                    display: 'flex',
                    flexDirection: window.innerWidth < 640 ? 'column' : 'row',
                    alignItems: window.innerWidth < 640 ? 'stretch' : 'center',
                    gap: '16px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid var(--divider)',
                    justifyContent: 'space-between'
                  }}
                >
                  {/* Image & Basic Details */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: 'var(--radius-xs)',
                        objectFit: 'cover',
                        border: '1px solid var(--stroke)'
                      }}
                    />
                    <div>
                      <h3 style={{ fontSize: '0.98rem', fontWeight: 800, margin: '0 0 4px 0' }}>
                        {lang === LANGUAGES.TA && item.nameTa ? item.nameTa : item.name}
                      </h3>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 600 }}>
                        {item.weight} | ₹{item.price}
                      </span>
                    </div>
                  </div>

                  {/* Quantity Controls & Prices */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    {/* Quantity controls */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1.5px solid var(--stroke)',
                      borderRadius: 'var(--radius-pill)',
                      overflow: 'hidden',
                      height: '36px'
                    }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{ padding: '0 12px', fontWeight: 'bold' }}
                      >
                        -
                      </button>
                      <span style={{ width: '30px', textAlign: 'center', fontWeight: 'bold', fontSize: '0.88rem' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{ padding: '0 12px', fontWeight: 'bold' }}
                      >
                        +
                      </button>
                    </div>

                    {/* Total Price */}
                    <span style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--secondary)', minWidth: '60px', textAlign: 'right' }}>
                      ₹{item.price * item.quantity}
                    </span>

                    {/* Delete button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{ color: 'var(--primary)', padding: '6px' }}
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Back to Products */}
            <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)', marginTop: '24px' }}>
              <ArrowLeft size={16} /> {t('Continue Shopping', 'மேலும் பொருட்கள் வாங்கு', lang)}
            </Link>
          </div>

          {/* Right Column: Order Summary */}
          <div>
            <div style={{
              backgroundColor: 'var(--bg-soft)',
              borderRadius: 'var(--radius-md)',
              border: '1.5px solid var(--stroke)',
              padding: '24px',
            }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '20px', borderBottom: '1px solid var(--divider)', paddingBottom: '12px' }}>
                {t('Order Summary', 'ஆர்டர் சுருக்கம்', lang)}
              </h2>

              <div style={{ display: 'grid', gap: '12px', marginBottom: '20px' }}>
                {/* Items Price */}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>{t('Subtotal', 'துணைத் தொகை', lang)}</span>
                  <span style={{ fontWeight: 'bold' }}>₹{cartTotalPrice}</span>
                </div>

                {/* Total Weight */}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', alignItems: 'center' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Weight size={14} /> {t('Total Weight', 'மொத்த எடை', lang)}
                  </span>
                  <span style={{ fontWeight: 'bold' }}>{cartTotalWeight.toFixed(2)} kg</span>
                </div>

                {/* Delivery */}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', alignItems: 'center' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Truck size={14} /> {t('Shipping', 'டெலிவரி கட்டணம்', lang)}
                  </span>
                  <span style={{ fontWeight: 'bold', color: shippingCost === 0 ? 'var(--secondary)' : 'var(--text)' }}>
                    {shippingCost === 0 ? t('FREE', 'இலவசம்', lang) : `₹${shippingCost}`}
                  </span>
                </div>

                {/* Free shipping criteria hint */}
                {shippingCost > 0 && (
                  <p style={{ fontSize: '0.78rem', color: 'var(--primary)', margin: '4px 0 0 0', lineHeight: 1.3 }}>
                    {t('Add ₹' + (500 - cartTotalPrice) + ' more for FREE shipping!', 'இலவச டெலிவரி பெற இன்னும் ₹' + (500 - cartTotalPrice) + ' சேர்க்கவும்!', lang)}
                  </p>
                )}
              </div>

              {/* Grand Total */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1.2rem',
                fontWeight: 900,
                borderTop: '1.5px solid var(--divider)',
                paddingTop: '16px',
                marginBottom: '24px'
              }}>
                <span>{t('Total Price', 'மொத்த தொகை', lang)}</span>
                <span style={{ color: 'var(--secondary)' }}>₹{grandTotal}</span>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => navigate('/checkout')}
                className="premium-button primary"
                style={{ width: '100%', justifyContent: 'center', padding: '0.85rem 1rem', backgroundColor: 'var(--secondary)' }}
              >
                <ShoppingBag size={16} style={{ marginRight: '8px' }} />
                {t('Proceed to Checkout', 'செக் அவுட் செய்ய தொடரவும்', lang)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
