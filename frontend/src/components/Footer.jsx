import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import logo from '../assets/Valsii Official LOGO.png';
import { siteConfig } from '../data/siteContent';

const navigationColumns = [
  {
    title: 'VALSII LLP',
    items: [
      { label: 'Home',       to: '/' },
      { label: 'About Us',   to: '/about' },
      { label: 'Programs',   to: '/programs' },
      { label: 'Events',     to: '/events' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'Green VALSII',
    items: [
      { label: 'Shop Catalog',  href: '/products', newTab: true },
      { label: 'Why Natural',   href: '/why-natural', newTab: true },
      { label: 'Our Farmers',   href: '/our-farmers', newTab: true },
      { label: 'Healthy Recipes', href: '/recipes', newTab: true },
    ],
  },
];

const quickConnectItems = [
  { label: 'Email VALSII',     href: `mailto:${siteConfig.email}`,     icon: Mail },
  { label: 'WhatsApp VALSII',  href: siteConfig.whatsappGeneralUrl,    icon: MessageCircle, newTab: true },
  { label: 'Call VALSII',      href: `tel:${siteConfig.phoneDigits}`,  icon: Phone },
];

function FooterItem({ item }) {
  if (item.to) {
    return <Link to={item.to}>{item.label}</Link>;
  }
  return (
    <a
      href={item.href}
      target={item.newTab ? '_blank' : undefined}
      rel={item.newTab ? 'noreferrer' : undefined}
    >
      {item.label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner">
        <div className="footer-shell">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-story">
              <Link className="footer-brand-lockup" to="/" aria-label="VALSII LLP Home">
                <span className="footer-logo-shell">
                  <img src={logo} alt="VALSII LLP logo" style={{ objectFit: 'contain' }} />
                </span>
                <span className="footer-brand-mark">
                  <span className="footer-brand-name">VALSII LLP</span>
                  <span className="footer-brand-subtitle">- LEARN · GROW · LEAD -</span>
                </span>
              </Link>

              <p style={{ marginTop: '12px', fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Empowering individuals through practical learning, confidence, leadership development, and life skills training.
              </p>

              <div className="footer-contact-stack" style={{ marginTop: '16px' }}>
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail size={15} />
                  <span>{siteConfig.email}</span>
                </a>
                <a href={`tel:${siteConfig.phoneDigits}`}>
                  <Phone size={15} />
                  <span>{siteConfig.phone}</span>
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <MapPin size={15} />
                  <span>{siteConfig.founderLocation}</span>
                </div>
              </div>

              <div className="footer-connect-icons" aria-label="Quick connect" style={{ marginTop: '16px' }}>
                {quickConnectItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      className="footer-connect-icon"
                      href={item.href}
                      aria-label={item.label}
                      target={item.newTab ? '_blank' : undefined}
                      rel={item.newTab ? 'noreferrer' : undefined}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Nav Columns */}
            {navigationColumns.map((column) => (
              <div className="footer-nav-column" key={column.title}>
                <h3>{column.title}</h3>
                <div className="footer-links">
                  {column.items.map((item) => (
                    <FooterItem key={`${column.title}-${item.label}`} item={item} />
                  ))}
                </div>
              </div>
            ))}

            {/* CTA Panel */}
            <div className="footer-cta-panel">
              <h3>Join Our Journey</h3>
              <p className="footer-cta-title">
                Enroll in Inner Power Training or explore Green VALSII organic farm products.
              </p>

              <div className="footer-cta-actions">
                <Link
                  to="/register"
                  id="footer-join-now-btn"
                  className="footer-cta-button primary"
                >
                  <span>Register Now</span>
                  <ArrowUpRight size={15} />
                </Link>

                <a
                  href="/products"
                  id="footer-login-btn"
                  className="footer-cta-button secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Green VALSII</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <p>© {new Date().getFullYear()} VALSII LLP. All rights reserved. | Developed with RisewithMedia</p>
            <span className="footer-bottom-tagline">Learn. Grow. Lead. Inspired by Tamil Heritage, Built for the Future.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
