import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe2, Heart, Mail, MapPin, Phone, ShieldCheck, Sprout } from 'lucide-react';
import { OptimizedImage } from './PremiumSections';
import logo from '../assets/logo.png';

const columns = [
  {
    title: 'Explore',
    links: [
      ['Home', '/'],
      ['About', '/about'],
      ['Contact', '/contact'],
    ],
  },
  {
    title: 'Core Systems',
    links: [
      ['SkillNet Mastery', '/skillnet-mastery'],
      ['Farm-to-Home', '/farm-to-home'],
      ['How Systems Connect', '/core-systems'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-grid">
        <div className="footer-brand reveal">
          <Link to="/" className="brand-link footer-logo">
            <OptimizedImage src={logo} alt="" className="brand-mark" width="38" height="38" loading="lazy" decoding="async" />
            <span>
              <strong>Valsii</strong>
              <small>A Skill & Supply Company</small>
            </span>
          </Link>
          <p>
            Building skilled individuals and connecting them with sustainable
            product-based income systems.
          </p>
          <Link to="/contact" className="text-link">
            Ethics & Transparency <ArrowUpRight size={16} />
          </Link>
        </div>

        {columns.map((column) => (
          <div className="footer-column reveal" key={column.title}>
            <h2>{column.title}</h2>
            {column.links.map(([label, path]) => (
              <Link to={path} key={label}>{label}</Link>
            ))}
          </div>
        ))}

        <div className="footer-column reveal">
          <h2>Reach</h2>
          <span><Sprout size={15} /> Valsii LLP (Registered Entity)</span>
          <span><MapPin size={15} /> Chennai, Tamil Nadu</span>
          <a href="tel:+919876543210"><Phone size={15} /> +91 98765 43210</a>
          <a href="mailto:orientation@valsii.com"><Mail size={15} /> orientation@valsii.com</a>
        </div>

        <div className="footer-column footer-social reveal">
          <h2>Channels</h2>
          <a href="https://training.zoho.com" target="_blank" rel="noreferrer"><Globe2 size={17} /> Portal</a>
          <a href="mailto:orientation@valsii.com"><Mail size={17} /> Email</a>
          <a href="tel:+919876543210"><Phone size={17} /> Call</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 Valsii LLP. All rights reserved.</span>
        <span><ShieldCheck size={13} /> Cookies</span>
        <span><Globe2 size={13} /> English</span>
        <span>Made with <Heart size={13} /> in India</span>
      </div>
      <p className="footer-tagline">Building real capabilities and sustainable systems for meaningful growth</p>
    </footer>
  );
}
