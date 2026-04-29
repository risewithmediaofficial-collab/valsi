import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Shield, Heart, BookOpen, Sprout, Link2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap');

  .vf {
    background: var(--white, #ffffff);
    border-top: 1px solid rgba(40, 80, 30, 0.09);
    font-family: 'Geist', sans-serif;
    color: #536348;
    position: relative;
    overflow: hidden;
  }

  /* EFFECT 1 — very faint noise grain */
  .vf::after {
    content: '';
    position: absolute; inset: 0;
    pointer-events: none; z-index: 0;
    opacity: 0.022;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='512' height='512' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 180px 180px;
  }

  .vf-inner {
    max-width: 1160px;
    margin: 0 auto;
    padding: 72px 40px 40px;
    position: relative; z-index: 1;
  }

  .vf-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: 56px;
    margin-bottom: 56px;
  }

  /* Brand column */
  .vf-logo {
    display: flex; align-items: center; gap: 10px;
    text-decoration: none; margin-bottom: 20px;
  }
  .vf-logo img { width: 30px; height: 30px; object-fit: contain; opacity: 0.9; }
  .vf-logo-name {
    font-size: 18px; font-weight: 700; letter-spacing: -0.02em;
    background: linear-gradient(120deg, #2a6b2e 0%, #4a9b4e 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .vf-logo-sub {
    font-size: 10px; font-weight: 400; color: #94a689;
    letter-spacing: 0.06em; text-transform: uppercase; margin-top: 1px;
  }

  .vf-tagline {
    font-size: 13.5px; font-weight: 300; color: #536348;
    line-height: 1.7; margin-bottom: 20px;
  }

  /* EFFECT 2 — blur tag for ethics note */
  .vf-ethics {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 5px 12px; border-radius: 100px;
    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
    background: rgba(246,248,244,0.8);
    border: 1px solid rgba(40,80,30,0.14);
    font-size: 12px; font-weight: 500; color: #536348;
  }

  /* Nav columns */
  .vf-col-title {
    font-size: 11px; font-weight: 600; letter-spacing: 0.12em;
    text-transform: uppercase; color: #111810;
    margin-bottom: 20px;
  }

  .vf-links { list-style: none; display: flex; flex-direction: column; gap: 12px; }
  .vf-link {
    display: flex; align-items: center; gap: 8px;
    font-size: 13.5px; font-weight: 400; color: #536348;
    text-decoration: none;
    transition: color 0.18s ease;
  }
  .vf-link:hover { color: #2a6b2e; }
  .vf-link-icon {
    font-size: 13px; opacity: 0.7;
    flex-shrink: 0;
  }

  /* Contact items */
  .vf-contact-list { display: flex; flex-direction: column; gap: 16px; }
  .vf-contact-item {
    display: flex; align-items: flex-start; gap: 12px;
    font-size: 13px; color: #536348; font-weight: 300;
    text-decoration: none;
    transition: color 0.18s ease;
  }
  a.vf-contact-item:hover { color: #2a6b2e; }
  .vf-contact-icon {
    flex-shrink: 0; margin-top: 1px;
    color: #4a9b4e;
  }

  /* Bottom bar */
  .vf-bottom {
    border-top: 1px solid rgba(40,80,30,0.09);
    padding-top: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
  }

  .vf-copy {
    font-size: 12px; color: #94a689; font-weight: 400;
    letter-spacing: 0.01em;
  }

  .vf-quick-links {
    display: flex; gap: 24px;
  }
  .vf-quick-link {
    font-size: 12px; color: #94a689; text-decoration: none;
    transition: color 0.18s ease; font-weight: 400;
  }
  .vf-quick-link:hover { color: #2a6b2e; }

  .vf-made {
    font-size: 12px; color: #94a689;
    display: flex; align-items: center; gap: 6px;
  }

  /* Bottom accent line */
  .vf-accent {
    height: 1.5px;
    background: linear-gradient(90deg, transparent 0%, rgba(74,155,78,0.35) 50%, transparent 100%);
    margin-top: 28px;
  }

  @media (max-width: 768px) {
    .vf-inner { padding: 52px 20px 32px; }
    .vf-grid  { grid-template-columns: 1fr; gap: 36px; margin-bottom: 40px; }
    .vf-bottom { flex-direction: column; align-items: flex-start; gap: 12px; }
    .vf-made { display: none; }
  }
`;

/* EFFECT 3 — calm fade-up */
const fu = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-32px' },
  transition: { duration: 0.48, ease: [0.25, 1, 0.35, 1], delay },
});

const Footer = () => (
  <>
    <style>{css}</style>
    <footer className="vf">
      <div className="vf-inner">

        {/* ── Main grid ── */}
        <div className="vf-grid">

          {/* Brand */}
          <motion.div {...fu(0)}>
            <Link to="/" className="vf-logo">
              <img src={logo} alt="Valsii" />
              <div>
                <div className="vf-logo-name">Valsii</div>
                <div className="vf-logo-sub">Skill &amp; Supply Co.</div>
              </div>
            </Link>
            <p className="vf-tagline">
              Building skilled individuals and connecting them with sustainable product-based income systems.
            </p>
            {/* EFFECT 2 — blur tag */}
            <span className="vf-ethics">
              <Shield size={11} style={{ color: '#4a9b4e' }} />
              Ethics &amp; Transparency
            </span>
          </motion.div>

          {/* Core Systems */}
          <motion.div {...fu(0.07)}>
            <p className="vf-col-title">Core Systems</p>
            <ul className="vf-links">
              {[
                { name: 'SkillNet Mastery', path: '/skillnet-mastery', icon: <BookOpen size={13} /> },
                { name: 'Farm-to-Home', path: '/farm-to-home', icon: <Sprout size={13} /> },
                { name: 'How Systems Connect', path: '/core-systems', icon: <Link2 size={13} /> },
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="vf-link">
                    <span className="vf-link-icon">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div {...fu(0.14)}>
            <p className="vf-col-title">Contact</p>
            <div className="vf-contact-list">
              <div className="vf-contact-item">
                <MapPin size={14} className="vf-contact-icon" />
                <div>
                  <div style={{ color: '#111810', fontWeight: 500, fontSize: 13, marginBottom: 2 }}>Valsii LLP</div>
                  <div>Chennai, Tamil Nadu</div>
                </div>
              </div>
              <a href="tel:+919876543210" className="vf-contact-item">
                <Phone size={14} className="vf-contact-icon" />
                +91 98765 43210
              </a>
              <a href="mailto:orientation@valsii.com" className="vf-contact-item">
                <Mail size={14} className="vf-contact-icon" />
                orientation@valsii.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div className="vf-bottom" {...fu(0.18)}>
          <span className="vf-copy">
            © {new Date().getFullYear()} Valsii LLP. All rights reserved.
          </span>

          <nav className="vf-quick-links">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map(l => (
              <Link key={l.name} to={l.path} className="vf-quick-link">{l.name}</Link>
            ))}
          </nav>

          <span className="vf-made">
            Made with <Heart size={12} style={{ color: '#4a9b4e' }} /> in India
          </span>
        </motion.div>

        {/* EFFECT 1 — accent line */}
        <div className="vf-accent" />

      </div>
    </footer>
  </>
);

export default Footer;
