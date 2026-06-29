import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useLang, t } from '../context/LanguageContext';
import { useNavigate, Link } from 'react-router-dom';
import { CreditCard, Truck, ArrowLeft, CheckCircle } from 'lucide-react';

export default function Checkout() {
  const { cartItems, cartTotalPrice, cartTotalWeight, clearCart } = useCart();
  const { lang } = useLang();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', phone: '', address: '', email: '', payment: 'cod' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (cartItems.length === 0) {
      navigate('/products');
    }
  }, [cartItems, navigate]);

  const shippingCost = cartTotalPrice >= 500 ? 0 : 50;
  const grandTotal = cartTotalPrice + shippingCost;

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = t('Name is required', 'பெயர் தேவை', lang);
    if (!form.phone.trim() || form.phone.length < 10) e.phone = t('Enter valid phone number', 'தொலைபேசி எண் தேவை', lang);
    if (!form.address.trim()) e.address = t('Address is required', 'முகவரி தேவை', lang);
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleOrderSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);

    // Simulate API order placement
    setTimeout(() => {
      // Clear the cart
      clearCart();
      // Navigate to order-confirmation
      navigate('/order-confirmation', {
        state: {
          name: form.name,
          phone: form.phone,
          address: form.address,
          total: grandTotal,
          payment: form.payment
        }
      });
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div style={{ padding: '60px 0', minHeight: '80vh' }}>
      <div className="section-inner">
        {/* Back Link */}
        <Link to="/cart" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '32px' }}>
          <ArrowLeft size={16} /> {t('Back to Cart', 'கூடைக்கு திரும்பு', lang)}
        </Link>

        <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, marginBottom: '32px' }}>
          {t('Checkout Details', 'ஆர்டர் முகவரி', lang)}
        </h1>

        <div className="lr-grid" style={{ alignItems: 'start', gap: '32px', borderBottom: 'none', padding: '0' }}>
          {/* Left Column: Form */}
          <div>
            <form onSubmit={handleOrderSubmit} style={{ display: 'grid', gap: '20px' }}>
              {/* Full Name */}
              <div style={{ display: 'grid', gap: '6px' }}>
                <label className="form-label" htmlFor="check-name">{t('Full Name *', 'முழு பெயர் *', lang)}</label>
                <input
                  id="check-name"
                  type="text"
                  className="form-input"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <span style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>{errors.name}</span>}
              </div>

              {/* Phone */}
              <div style={{ display: 'grid', gap: '6px' }}>
                <label className="form-label" htmlFor="check-phone">{t('Mobile Number *', 'தொலைபேசி எண் *', lang)}</label>
                <input
                  id="check-phone"
                  type="tel"
                  className="form-input"
                  placeholder="10-digit number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                {errors.phone && <span style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>{errors.phone}</span>}
              </div>

              {/* Email */}
              <div style={{ display: 'grid', gap: '6px' }}>
                <label className="form-label" htmlFor="check-email">{t('Email Address (Optional)', 'மின்னஞ்சல் முகவரி', lang)}</label>
                <input
                  id="check-email"
                  type="email"
                  className="form-input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              {/* Shipping Address */}
              <div style={{ display: 'grid', gap: '6px' }}>
                <label className="form-label" htmlFor="check-address">{t('Delivery Address *', 'வசிக்கும் முகவரி *', lang)}</label>
                <textarea
                  id="check-address"
                  className="form-input"
                  rows={3}
                  placeholder="Door No, Street Name, City, Pincode"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                />
                {errors.address && <span style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>{errors.address}</span>}
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="form-label" style={{ marginBottom: '10px', display: 'block' }}>{t('Payment Method', 'பணம் செலுத்தும் முறை', lang)}</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {/* COD */}
                  <label
                    style={{
                      border: '1.5px solid ' + (form.payment === 'cod' ? 'var(--secondary)' : 'var(--stroke)'),
                      borderRadius: 'var(--radius-md)',
                      padding: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      backgroundColor: form.payment === 'cod' ? 'var(--secondary-light)' : 'var(--bg)',
                      fontWeight: 600
                    }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={form.payment === 'cod'}
                      onChange={() => setForm({ ...form, payment: 'cod' })}
                      style={{ width: 'auto', margin: 0 }}
                    />
                    <div>
                      <span style={{ display: 'block', fontSize: '0.92rem' }}>{t('Cash on Delivery', 'டோர் டெலிவரி பணம்', lang)}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 500 }}>Pay when order arrives</span>
                    </div>
                  </label>

                  {/* UPI */}
                  <label
                    style={{
                      border: '1.5px solid ' + (form.payment === 'upi' ? 'var(--secondary)' : 'var(--stroke)'),
                      borderRadius: 'var(--radius-md)',
                      padding: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      backgroundColor: form.payment === 'upi' ? 'var(--secondary-light)' : 'var(--bg)',
                      fontWeight: 600
                    }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={form.payment === 'upi'}
                      onChange={() => setForm({ ...form, payment: 'upi' })}
                      style={{ width: 'auto', margin: 0 }}
                    />
                    <div>
                      <span style={{ display: 'block', fontSize: '0.92rem' }}>{t('Pay via UPI / QR', 'UPI / QR வழி கட்டணம்', lang)}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 500 }}>Instant mobile transfer</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Order Placement CTA */}
              <button
                type="submit"
                className="premium-button primary"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.85rem 1rem',
                  backgroundColor: 'var(--secondary)',
                  marginTop: '12px',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? t('Processing...', 'பரிசீலிக்கப்படுகிறது...', lang) : t('Place Order Now', 'ஆர்டரை உறுதிசெய்', lang)}
              </button>
            </form>
          </div>

          {/* Right Column: Order Review */}
          <div>
            <div style={{
              backgroundColor: 'var(--bg-soft)',
              borderRadius: 'var(--radius-md)',
              border: '1.5px solid var(--stroke)',
              padding: '24px',
            }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '20px', borderBottom: '1px solid var(--divider)', paddingBottom: '12px' }}>
                {t('Order Items', 'ஆர்டர் விவரம்', lang)}
              </h2>

              <div style={{ display: 'grid', gap: '16px', marginBottom: '20px', maxHeight: '320px', overflowY: 'auto' }}>
                {cartItems.map((item) => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontWeight: 'bold', color: 'var(--text-light)' }}>{item.quantity}x</span>
                      <span style={{ color: 'var(--text)', fontWeight: 600 }}>
                        {lang === LANGUAGES.TA && item.nameTa ? item.nameTa : item.name}
                      </span>
                    </div>
                    <span style={{ fontWeight: 'bold' }}>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div style={{
                display: 'grid',
                gap: '12px',
                borderTop: '1.5px solid var(--divider)',
                paddingTop: '16px',
                marginBottom: '16px',
                fontSize: '0.92rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
                  <span>₹{cartTotalPrice}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Weight</span>
                  <span>{cartTotalWeight.toFixed(2)} kg</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Shipping</span>
                  <span>{shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}</span>
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1.2rem',
                fontWeight: 900,
                borderTop: '1.5px solid var(--divider)',
                paddingTop: '16px',
                color: 'var(--text)'
              }}>
                <span>Grand Total</span>
                <span style={{ color: 'var(--secondary)' }}>₹{grandTotal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
