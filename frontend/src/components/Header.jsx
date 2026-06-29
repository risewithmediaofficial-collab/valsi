import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, User, ShoppingCart } from 'lucide-react';
import { useLang, LANGUAGES } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { siteConfig } from '../data/siteContent';
import logo from '../assets/Valsii Official LOGO.png';

const navItems = [
  { label: 'Home',         labelTa: 'முகப்பு',            to: '/' },
  { label: 'About Us',     labelTa: 'எங்களைப் பற்றி',      to: '/about' },
  { label: 'Programs',     labelTa: 'திட்டங்கள்',         to: '/programs' },
  { label: 'Green Valsi',  labelTa: 'பசுமை வல்சி',         to: '/products', newTab: true },
  { label: 'Events',       labelTa: 'நிகழ்வுகள்',          to: '/events' },
  { label: 'Contact Us',   labelTa: 'தொடர்பு கொள்ள',      to: '/contact' },
];

function BrandMark() {
  return (
    <Link className="brand-mark" to="/" aria-label="VALSII LLP Home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
      <img
        src={logo}
        alt="VALSII LLP Logo"
        style={{ height: '40px', width: 'auto', objectFit: 'contain', flexShrink: 0 }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span className="brand-mark-top">VALSII LLP</span>
        <span className="brand-mark-bottom">- LEARN · GROW · LEAD -</span>
      </div>
    </Link>
  );
}

function LanguageToggle({ mobile = false }) {
  const { lang, setLang } = useLang();

  if (mobile) {
    return (
      <div className="mobile-lang-toggle">
        <button
          type="button"
          className={`mobile-lang-btn ${lang === LANGUAGES.EN ? 'active' : ''}`}
          onClick={() => setLang(LANGUAGES.EN)}
          aria-pressed={lang === LANGUAGES.EN}
        >
          English
        </button>
        <button
          type="button"
          className={`mobile-lang-btn ${lang === LANGUAGES.TA ? 'active' : ''}`}
          onClick={() => setLang(LANGUAGES.TA)}
          aria-pressed={lang === LANGUAGES.TA}
        >
          தமிழ்
        </button>
      </div>
    );
  }

  return (
    <div className="lang-toggle" role="group" aria-label="Language selector">
      <button
        type="button"
        className={`lang-toggle-btn ${lang === LANGUAGES.EN ? 'active' : ''}`}
        onClick={() => setLang(LANGUAGES.EN)}
        aria-pressed={lang === LANGUAGES.EN}
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-toggle-btn ${lang === LANGUAGES.TA ? 'active' : ''}`}
        onClick={() => setLang(LANGUAGES.TA)}
        aria-pressed={lang === LANGUAGES.TA}
      >
        தமிழ்
      </button>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useLang();
  const { cartTotalCount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="section-inner header-row">
        {/* Logo + Brand */}
        <BrandMark />

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            if (item.newTab) {
              return (
                <a
                  key={item.to}
                  href={item.to}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  {lang === LANGUAGES.TA ? item.labelTa : item.label}
                </a>
              );
            }
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {lang === LANGUAGES.TA ? item.labelTa : item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop Right Actions */}
        <div className="desktop-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <LanguageToggle />

          {/* Cart Icon Link */}
          <Link
            to="/cart"
            id="cart-icon-btn"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text)',
              padding: '8px',
              borderRadius: '50%',
              transition: 'background-color 150ms ease',
            }}
            aria-label="View Shopping Cart"
          >
            <ShoppingCart size={22} />
            {cartTotalCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  background: 'var(--secondary)',
                  color: 'white',
                  fontSize: '0.72rem',
                  fontWeight: 'bold',
                  borderRadius: '50%',
                  minWidth: '18px',
                  height: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 4px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                }}
              >
                {cartTotalCount}
              </span>
            )}
          </Link>

          {/* Shop Now CTA */}
          <a
            href="/products"
            target="_blank"
            rel="noreferrer"
            id="join-now-header-btn"
            className="premium-button primary compact"
            aria-label="Shop Now"
            style={{ backgroundColor: 'var(--secondary)', display: 'inline-flex', textDecoration: 'none' }}
          >
            {lang === LANGUAGES.TA ? 'இப்போதே வாங்குங்கள்' : 'Shop Now'}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="mobile-menu-button"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((c) => !c)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Panel */}
      {open && (
        <div className="mobile-panel" role="dialog" aria-label="Mobile menu">
          <div className="section-inner mobile-panel-inner">
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navItems.map((item) => {
                if (item.newTab) {
                  return (
                    <a
                      key={item.to}
                      href={item.to}
                      target="_blank"
                      rel="noreferrer"
                      className="mobile-nav-link"
                      onClick={() => setOpen(false)}
                    >
                      {lang === LANGUAGES.TA ? item.labelTa : item.label}
                    </a>
                  );
                }
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {lang === LANGUAGES.TA ? item.labelTa : item.label}
                  </NavLink>
                );
              })}
            </nav>

            <LanguageToggle mobile />

            <div className="mobile-actions" style={{ display: 'grid', gap: '10px', width: '100%', marginTop: '20px' }}>
              <Link
                to="/cart"
                className="premium-button ghost"
                style={{ width: '100%', justifyContent: 'center', borderRadius: 12 }}
                onClick={() => setOpen(false)}
              >
                <ShoppingCart size={18} style={{ marginRight: '8px' }} />
                {lang === LANGUAGES.TA ? 'கூடை' : 'Cart'} ({cartTotalCount})
              </Link>
              <a
                href="/products"
                target="_blank"
                rel="noreferrer"
                className="premium-button primary"
                style={{ width: '100%', justifyContent: 'center', borderRadius: 12, backgroundColor: 'var(--secondary)', display: 'inline-flex', textDecoration: 'none' }}
                onClick={() => setOpen(false)}
              >
                {lang === LANGUAGES.TA ? 'இப்போதே வாங்குங்கள்' : 'Shop Now'}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
