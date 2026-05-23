import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'SkillNet Mastery', to: '/skillnet-mastery' },
  { label: 'About', to: '/about' },
  { label: 'Core Systems', to: '/core-systems' },
  { label: 'Contact', to: '/contact' },
];

function BrandMark() {
  return (
    <Link className="brand-mark" to="/">
      <span className="brand-mark-top">VALSII LLP</span>
      <span className="brand-mark-bottom">Leadership + Healthy Living Ecosystem</span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="section-inner header-row">
        <BrandMark />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="desktop-actions">
          <a className="nav-utility-link" href="/farm-to-home" target="_blank" rel="noreferrer">
            Explore FTH
          </a>
          <a className="premium-button tertiary compact" href={siteConfig.whatsappGeneralUrl} target="_blank" rel="noreferrer">
            <span>WhatsApp</span>
          </a>
        </div>

        <button
          type="button"
          className="mobile-menu-button"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="mobile-panel">
          <div className="section-inner mobile-panel-inner">
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mobile-actions">
              <a href="/farm-to-home" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                Open Farm-to-Home
              </a>
              <a href={siteConfig.whatsappGeneralUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
