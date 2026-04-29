import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, ArrowUpRight, BookOpen, Sprout } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

/* ─────────────────────────────────────────────
   Valsii Header — same design system as Home
   4 effects only: noise-gradient bg, blur labels,
   flow fade-up, soft light highlight
   ───────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&display=swap');

  .vh-nav {
    /* EFFECT 4 — soft inner top highlight */
    background: rgba(246, 248, 244, 0.88);
    /* EFFECT 2 — blur */
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(40, 80, 30, 0.09);
    position: sticky;
    top: 0;
    z-index: 100;
    /* subtle top edge highlight */
    box-shadow: inset 0 -1px 0 rgba(40,80,30,0.07), 0 1px 0 rgba(40,80,30,0.04);
    font-family: 'Geist', sans-serif;
    transition: box-shadow 0.25s ease;
  }

  .vh-nav.scrolled {
    box-shadow:
      inset 0 -1px 0 rgba(40,80,30,0.10),
      0 4px 24px rgba(40,80,30,0.06);
  }

  .vh-nav-inner {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 40px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }

  /* ── Logo ── */
  .vh-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    flex-shrink: 0;
  }
  .vh-logo-img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    transition: opacity 0.2s ease;
  }
  .vh-logo:hover .vh-logo-img { opacity: 0.82; }
  .vh-logo-name {
    font-family: 'Instrument Serif', serif;
    font-size: 22px;
    font-weight: 400;
    /* EFFECT 1 — green gradient */
    background: linear-gradient(120deg, #2a6b2e 0%, #4a9b4e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.01em;
    line-height: 1;
  }
  .vh-logo-sub {
    font-size: 10px;
    font-weight: 400;
    color: #94a689;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    line-height: 1;
    margin-top: 2px;
  }

  /* ── Desktop nav links ── */
  .vh-links {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .vh-link {
    position: relative;
    font-size: 13.5px;
    font-weight: 500;
    color: #536348;
    text-decoration: none;
    padding: 7px 12px;
    border-radius: 8px;
    transition: color 0.18s ease, background 0.18s ease;
    letter-spacing: 0.01em;
    cursor: pointer;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: 'Geist', sans-serif;
    white-space: nowrap;
  }
  .vh-link:hover {
    color: #2a6b2e;
    background: rgba(42,107,46,0.06);
  }
  .vh-link.active {
    color: #2a6b2e;
  }
  /* Active underline — thin, intentional */
  .vh-link.active::after {
    content: '';
    position: absolute;
    bottom: 3px;
    left: 12px;
    right: 12px;
    height: 1.5px;
    background: #4a9b4e;
    border-radius: 2px;
  }

  /* ── Dropdown ── */
  .vh-dropdown-wrap { position: relative; }

  .vh-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    min-width: 220px;
    /* EFFECT 2 — blur panel */
    background: rgba(250, 252, 248, 0.95);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(40,80,30,0.12);
    border-radius: 14px;
    overflow: hidden;
    /* EFFECT 4 — soft inner highlight */
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.9),
      0 8px 32px rgba(40,80,30,0.10);
  }

  .vh-dropdown-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 18px;
    text-decoration: none;
    font-size: 13.5px;
    font-weight: 500;
    color: #536348;
    border-bottom: 1px solid rgba(40,80,30,0.07);
    transition: color 0.16s ease, background 0.16s ease;
    font-family: 'Geist', sans-serif;
  }
  .vh-dropdown-item:last-child { border-bottom: none; }
  .vh-dropdown-item:hover {
    color: #2a6b2e;
    background: rgba(42,107,46,0.05);
  }
  .vh-dropdown-item.active {
    color: #2a6b2e;
    background: rgba(42,107,46,0.07);
  }
  .vh-dropdown-item-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .vh-item-icon {
    /* EFFECT 2 — blur chip */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px; height: 28px;
    border-radius: 7px;
    background: rgba(42,107,46,0.07);
    border: 1px solid rgba(42,107,46,0.15);
    font-size: 14px;
    flex-shrink: 0;
  }
  .vh-arrow-icon {
    color: #94a689;
    opacity: 0;
    transform: translateX(-4px);
    transition: opacity 0.16s ease, transform 0.16s ease, color 0.16s ease;
  }
  .vh-dropdown-item:hover .vh-arrow-icon,
  .vh-dropdown-item.active .vh-arrow-icon {
    opacity: 1;
    transform: translateX(0);
    color: #2a6b2e;
  }

  /* ── CTA button ── */
  .vh-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Geist', sans-serif;
    font-size: 13px;
    font-weight: 500;
    padding: 9px 20px;
    border-radius: 100px;
    background: #2a6b2e;
    color: #fff;
    text-decoration: none;
    border: none;
    cursor: pointer;
    /* EFFECT 4 — soft top highlight */
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.14);
    transition: background 0.18s ease;
    white-space: nowrap;
  }
  .vh-cta:hover { background: #215924; }

  /* ── Hamburger ── */
  .vh-burger {
    display: none;
    align-items: center;
    justify-content: center;
    width: 36px; height: 36px;
    border-radius: 8px;
    background: none;
    border: 1px solid rgba(40,80,30,0.14);
    color: #536348;
    cursor: pointer;
    transition: background 0.16s ease, color 0.16s ease;
    flex-shrink: 0;
  }
  .vh-burger:hover {
    background: rgba(42,107,46,0.06);
    color: #2a6b2e;
  }

  /* ── Mobile menu ── */
  .vh-mobile {
    border-top: 1px solid rgba(40,80,30,0.08);
    /* EFFECT 2 — consistent blur */
    background: rgba(246,248,244,0.97);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    overflow: hidden;
  }
  .vh-mobile-inner {
    max-width: 1160px;
    margin: 0 auto;
    padding: 16px 40px 24px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .vh-m-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 14px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #536348;
    text-decoration: none;
    transition: color 0.16s ease, background 0.16s ease;
    cursor: pointer;
    background: none;
    border: none;
    font-family: 'Geist', sans-serif;
    width: 100%;
    text-align: left;
  }
  .vh-m-link:hover {
    color: #2a6b2e;
    background: rgba(42,107,46,0.06);
  }
  .vh-m-link.active {
    color: #2a6b2e;
    background: rgba(42,107,46,0.07);
    border-left: 2px solid #4a9b4e;
    padding-left: 12px;
  }
  .vh-m-sub {
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 2px;
  }
  .vh-m-cta {
    margin-top: 12px;
    padding-top: 16px;
    border-top: 1px solid rgba(40,80,30,0.08);
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .vh-nav-inner { padding: 0 20px; height: 60px; }
    .vh-links { display: none; }
    .vh-cta-desktop { display: none; }
    .vh-burger { display: flex; }
    .vh-mobile-inner { padding: 14px 20px 20px; }
  }
`;

/* EFFECT 3 — calm fade, no bounce */
const fadeDown = {
  initial: { opacity: 0, y: -8 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -6 },
  transition: { duration: 0.22, ease: [0.25, 1, 0.35, 1] },
};
const fadeUp = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: 'auto' },
  exit:    { opacity: 0, height: 0 },
  transition: { duration: 0.28, ease: [0.25, 1, 0.35, 1] },
};

const menuItems = [
  { name: 'Home',           path: '/' },
  { name: 'What We Do',     path: '/core-systems' },
  {
    name: 'Our Systems',
    path: '/core-systems',
    submenu: [
      { name: 'SkillNet Mastery', path: '/skillnet-mastery', icon: <BookOpen size={14} /> },
      { name: 'Farm-to-Home',     path: '/farm-to-home',     icon: <Sprout size={14} /> },
    ],
  },
  { name: 'About',   path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled]       = useState(false);
  const location                      = useLocation();

  /* Scroll detection — adds shadow when user scrolls */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    const id = window.setTimeout(() => {
      setMenuOpen(false);
      setMobileSubOpen(false);
    }, 0);
    return () => window.clearTimeout(id);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  const isDropActive = (submenu) => submenu?.some(i => isActive(i.path));

  return (
    <>
      <style>{css}</style>
      <header className={`vh-nav${scrolled ? ' scrolled' : ''}`}>

        {/* ── Main row ── */}
        <div className="vh-nav-inner">

          {/* Logo */}
          <Link to="/" className="vh-logo">
            <img src={logo} alt="Valsii" className="vh-logo-img" />
            <div>
              <div className="vh-logo-name">Valsii</div>
              <div className="vh-logo-sub">Skill & Supply Co.</div>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="vh-links">
            {menuItems.map((item) =>
              item.submenu ? (
                /* Dropdown item */
                <div
                  key={item.name}
                  className="vh-dropdown-wrap"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`vh-link${isDropActive(item.submenu) ? ' active' : ''}`}
                  >
                    {item.name}
                    <motion.span
                      animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                      transition={{ duration: 0.22, ease: [0.25, 1, 0.35, 1] }}
                      style={{ display: 'flex', color: '#94a689' }}
                    >
                      <ChevronDown size={13} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        {...fadeDown}
                        className="vh-dropdown"
                      >
                        {item.submenu.map(sub => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className={`vh-dropdown-item${isActive(sub.path) ? ' active' : ''}`}
                          >
                            <div className="vh-dropdown-item-left">
                              <span className="vh-item-icon">{sub.icon}</span>
                              {sub.name}
                            </div>
                            <ArrowRight size={13} className="vh-arrow-icon" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                /* Regular link */
                <Link
                  key={item.name}
                  to={item.path}
                  className={`vh-link${isActive(item.path) ? ' active' : ''}`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://training.zoho.com"
            target="_blank"
            rel="noopener noreferrer"
            className="vh-cta vh-cta-desktop"
          >
            Join Training
            <ArrowUpRight size={13} />
          </a>

          {/* Hamburger */}
          <button
            className="vh-burger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{    rotate:  90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'flex' }}
                >
                  <X size={16} />
                </motion.span>
              ) : (
                <motion.span
                  key="m"
                  initial={{ rotate:  90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{    rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'flex' }}
                >
                  <Menu size={16} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div {...fadeUp} className="vh-mobile">
              <div className="vh-mobile-inner">

                {menuItems.map(item =>
                  item.submenu ? (
                    <div key={item.name}>
                      <button
                        className={`vh-m-link${isDropActive(item.submenu) ? ' active' : ''}`}
                        onClick={() => setMobileSubOpen(o => !o)}
                      >
                        <span>{item.name}</span>
                        <motion.span
                          animate={{ rotate: mobileSubOpen ? 180 : 0 }}
                          transition={{ duration: 0.22 }}
                          style={{ display: 'flex', color: '#94a689' }}
                        >
                          <ChevronDown size={14} />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {mobileSubOpen && (
                          <motion.div {...fadeUp} className="vh-m-sub">
                            {item.submenu.map(sub => (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                className={`vh-m-link${isActive(sub.path) ? ' active' : ''}`}
                                style={{ fontSize: 13.5 }}
                                onClick={() => setMenuOpen(false)}
                              >
                                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                  <span className="vh-item-icon" style={{ width: 24, height: 24, fontSize: 12 }}>{sub.icon}</span>
                                  {sub.name}
                                </span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`vh-m-link${isActive(item.path) ? ' active' : ''}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                )}

                {/* Mobile CTA */}
                <div className="vh-m-cta">
                  <a
                    href="https://training.zoho.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vh-cta"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Join Training
                    <ArrowUpRight size={14} />
                  </a>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>
    </>
  );
};

export default Header;
