import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import logo from '../assets/logo.png';
import { siteConfig } from '../data/siteContent';

const navigationColumns = [
  {
    title: 'Ecosystem',
    items: [
      { label: 'Home', to: '/' },
      { label: 'About Valsii', to: '/about' },
      { label: 'Core Systems', to: '/core-systems' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Platforms',
    items: [
      { label: 'SkillNet Mastery', to: '/skillnet-mastery' },
      { label: 'Farm-to-Home', href: '/farm-to-home', newTab: true },
      { label: 'Join SkillNet', href: siteConfig.whatsappSkillNetUrl, newTab: true },
      { label: 'Talk to Valsii', href: siteConfig.whatsappGeneralUrl, newTab: true },
    ],
  },
];

const quickConnectItems = [
  { label: 'Email Valsii', href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: 'WhatsApp Valsii', href: siteConfig.whatsappGeneralUrl, icon: MessageCircle, newTab: true },
  { label: 'Call Valsii', href: `tel:${siteConfig.phoneDigits}`, icon: Phone },
];

function FooterItem({ item }) {
  if (item.to) {
    return <Link to={item.to}>{item.label}</Link>;
  }

  return (
    <a href={item.href} target={item.newTab ? '_blank' : undefined} rel={item.newTab ? 'noreferrer' : undefined}>
      {item.label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner">
        <div className="footer-shell">
          <span className="footer-ambient-wordmark" aria-hidden="true">
            VALSII ECOSYSTEM
          </span>

          <div className="footer-grid">
            <div className="footer-story">
              <Link className="footer-brand-lockup" to="/">
                <span className="footer-logo-shell">
                  <img src={logo} alt="Valsii LLP logo" />
                </span>

                <span className="footer-brand-mark">
                  <span className="footer-brand-name">VALSII LLP</span>
                  <span className="footer-brand-subtitle">Premium ecosystem company</span>
                </span>
              </Link>

              <div className="footer-story-copy">
                <span className="footer-kicker">Future-ready ecosystems</span>
                <h2>Building future-ready leadership and healthier living ecosystems for the next generation.</h2>
                <p>
                  SkillNet Mastery leads the active flagship experience today, while Farm-to-Home extends
                  the Valsii vision into healthier living, family trust, and long-term brand scale.
                </p>
              </div>

              <div className="footer-contact-stack">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail size={16} />
                  <span>{siteConfig.email}</span>
                </a>

                <a href={`tel:${siteConfig.phoneDigits}`}>
                  <Phone size={16} />
                  <span>{siteConfig.phone}</span>
                </a>

                <Link to="/contact">
                  <MapPin size={16} />
                  <span>{siteConfig.founderLocation}</span>
                </Link>
              </div>

              <div className="footer-connect-icons" aria-label="Quick connect">
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

            <div className="footer-cta-panel">
              <h3>Connect</h3>
              <p className="footer-cta-title">Enter the flagship. Stay close to what comes next.</p>
              <p className="footer-cta-copy">
                Choose your starting point and move into the right Valsii journey with clarity, calm,
                and premium support.
              </p>

              <div className="footer-cta-actions">
                <a className="premium-button primary footer-cta-button" href={siteConfig.whatsappSkillNetUrl} target="_blank" rel="noreferrer">
                  <span>Join SkillNet</span>
                  <ArrowUpRight size={16} />
                </a>

                <a className="premium-button secondary footer-cta-button" href="/farm-to-home" target="_blank" rel="noreferrer">
                  <span>Explore FTH</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="footer-cta-notes">
                <span>Flagship platform: SkillNet Mastery</span>
                <span>Expansion horizon: Farm-to-Home</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>Copyright {new Date().getFullYear()} Valsii LLP. All rights reserved.</p>
            <span className="footer-bottom-tagline">One ecosystem. Distinct premium journeys.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
