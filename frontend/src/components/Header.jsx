import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { OptimizedImage } from './PremiumSections';
import logo from '../assets/logo.png';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'What We Do', path: '/core-systems' },
  { label: 'About Valsii', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const coreLinks = [
  { label: 'SkillNet Mastery', path: '/skillnet-mastery' },
  { label: 'Farm-to-Home', path: '/farm-to-home' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.style.colorScheme = 'light';
    window.localStorage.setItem('theme', 'light');
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-wrap">
        <Link to="/" className="brand-link" aria-label="Valsii - Home" onClick={() => setOpen(false)}>
          <OptimizedImage src={logo} alt="" className="brand-mark" width="38" height="38" decoding="async" />
          <span>
            <strong>Valsii</strong>
            <small>A Skill & Supply Company</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className="nav-link" aria-label={item.label}>
              <span aria-hidden="true">+</span>{item.label}
            </NavLink>
          ))}
          <div className="nav-dropdown">
            <NavLink to="/core-systems" className="nav-link dropdown-trigger" aria-label="Core Systems">
              <span aria-hidden="true">+</span>Core Systems <ChevronDown size={14} aria-hidden="true" />
            </NavLink>
            <div className="dropdown-menu">
              {coreLinks.map((item) => (
                <NavLink key={item.path} to={item.path} className="dropdown-link" aria-label={item.label}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        <div className="nav-actions">
          <a href="https://training.zoho.com" className="nav-cta magnetic" target="_blank" rel="noreferrer" aria-label="Explore training portal (opens in new window)">Explore <span aria-hidden="true">&rarr;</span></a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className="mobile-nav-link" onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/skillnet-mastery" className="mobile-nav-link" onClick={() => setOpen(false)}>
            SkillNet Mastery
          </NavLink>
          <NavLink to="/farm-to-home" className="mobile-nav-link" onClick={() => setOpen(false)}>
            Farm-to-Home
          </NavLink>
          <a href="https://training.zoho.com" className="mobile-nav-link" onClick={() => setOpen(false)} target="_blank" rel="noreferrer">
            Join Now (opens in new window)
          </a>
        </nav>
      )}
    </header>
  );
}
