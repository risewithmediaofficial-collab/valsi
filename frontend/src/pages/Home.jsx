import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Clock,
  Sprout,
  SunMedium,
  Target,
  Truck,
  Users,
} from 'lucide-react';
import './Home.css';

const challenges = [
  {
    icon: Brain,
    title: 'Skills Without Purpose',
    text: 'Training disconnected from real-world income opportunities',
  },
  {
    icon: Users,
    title: 'Youth at Crossroads',
    text: 'Unclear pathways from learning to sustainable employment',
  },
  {
    icon: Sprout,
    title: 'Farmers Undervalued',
    text: 'Broken supply chains cutting farmer margins and dignity',
  },
];

const systems = [
  {
    title: 'SkillNet Mastery',
    label: 'Training People',
    text: 'Structured skill training programs focused on mental clarity, work discipline, and real-world readiness. We transform potential into measurable capability.',
    outcome: 'A trained individual equipped to operate, sell, manage, and grow sustainable systems',
    icon: Brain,
    accent: 'green',
    path: '/skillnet-mastery',
  },
  {
    title: 'Farm-to-Home',
    label: 'Supplying With Purpose',
    text: 'Direct sourcing from farmers with transparent pricing and quality assurance. Building distribution networks that create consistent, repeatable income.',
    outcome: 'A stable ecosystem supporting continuous income activity and farmer empowerment',
    icon: Truck,
    accent: 'orange',
    path: '/farm-to-home',
  },
];

const journey = [
  ['Orientation & Vision', 'Clear direction and structured guidance for your journey'],
  ['SkillNet Training', 'Comprehensive practical program to build capability'],
  ['Field Execution', 'Hands-on real-world experience and application'],
  ['Distribution Work', 'Sales and supply chain participation for income'],
  ['Performance Growth', 'Advancement based on measurable results'],
];

const skillAreas = [
  { icon: Brain, title: 'Mental Clarity', text: 'Subconscious mind power for consistent performance' },
  { icon: Users, title: 'Leadership', text: 'Self-leadership and identity clarity', warm: true },
  { icon: Target, title: 'Communication', text: 'Confident and respectful communication', tilt: true },
  { icon: Clock, title: 'Productivity', text: 'Time management and work discipline', warm: true },
];

const Home = () => {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-wrap home-hero-grid">
          <div className="home-hero-copy">
            <span className="home-pill">
              <Sprout size={18} />
              Building Sustainable Systems
            </span>

            <h1>
              Skills That
              <span>Create Real Income</span>
            </h1>

            <p>
              Valsii integrates practical skill development with ethical product
              distribution, creating transparent pathways from training to sustainable
              income for farmers and professionals.
            </p>

            <div className="home-actions">
              <Link to="/contact" className="home-btn home-btn-primary">
                Join Training Program
                <ArrowRight size={22} />
              </Link>
              <Link to="/about" className="home-btn home-btn-secondary">
                Get Oriented Today
              </Link>
            </div>

            <div className="home-stats">
              <div>
                <Users size={26} />
                <strong>500+</strong>
                <span>Trained Professionals</span>
              </div>
              <div>
                <Sprout size={26} />
                <strong>100+</strong>
                <span>Partner Farmers</span>
              </div>
              <div>
                <SunMedium size={26} />
                <strong>24/7</strong>
                <span>Dedicated Support</span>
              </div>
            </div>
          </div>

          <div className="home-hero-visual" aria-label="Farm to Flourish system overview">
            <div className="home-visual-pattern" />
            <SunMedium className="home-sun" size={78} />
            <h2>Farm to Flourish</h2>
            <p>From training to sustainable income</p>
            <Link to="/core-systems" className="home-visual-btn">
              Watch System Overview
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section home-challenges">
        <div className="home-wrap">
          <div className="home-section-head">
            <h2>The Challenges We Solve</h2>
            <p>Three interconnected challenges. One integrated solution.</p>
          </div>

          <div className="home-challenge-grid">
            {challenges.map(({ icon: Icon, title, text }) => (
              <article className="home-card home-challenge-card" key={title}>
                <span className="home-icon-chip">
                  <Icon size={28} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <p className="home-note">Structured solutions. Real impact. No shortcuts.</p>
        </div>
      </section>

      <section className="home-section home-systems">
        <div className="home-wrap">
          <div className="home-section-head">
            <h2>Our Two Integrated Systems</h2>
            <p>How skills and supply chains work together for sustainable impact</p>
          </div>

          <div className="home-system-grid">
            {systems.map(({ title, label, text, outcome, icon: Icon, accent, path }) => (
              <article className={`home-card home-system-card ${accent}`} key={title}>
                <div className="home-system-top">
                  <div>
                    <h3>{title}</h3>
                    <span>{label}</span>
                  </div>
                  <div className="home-system-icon">
                    <Icon size={26} />
                  </div>
                </div>
                <p>{text}</p>
                <div className="home-outcome">
                  <strong>Expected Outcome</strong>
                  <p>{outcome}</p>
                </div>
                <Link to={path} className="home-text-link">
                  Explore This System
                  <ArrowRight size={18} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-journey">
        <div className="home-wrap">
          <div className="home-section-head">
            <h2>Your Journey With Valsii</h2>
            <p>Structured steps from orientation to sustainable growth</p>
          </div>

          <div className="home-timeline">
            {journey.map(([title, text], index) => (
              <article className={`home-timeline-row ${index === 2 ? 'active' : ''}`} key={title}>
                <div className="home-timeline-num">{String(index + 1).padStart(2, '0')}</div>
                <div className="home-card home-timeline-card">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-skills">
        <div className="home-wrap">
          <div className="home-section-head">
            <h2>Core Skill Areas</h2>
            <p>Comprehensive training across essential domains</p>
          </div>

          <div className="home-skill-grid">
            {skillAreas.map(({ icon: Icon, title, text, warm, tilt }) => (
              <article className={`home-card home-skill-card ${warm ? 'warm' : ''} ${tilt ? 'tilt' : ''}`} key={title}>
                <span className="home-icon-chip">
                  <Icon size={24} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-wrap home-cta-inner">
          <h2>Ready to Build Real Capabilities?</h2>
          <p>
            Join a community of professionals and farmers building sustainable income
            systems. Practical execution. Real results. No shortcuts.
          </p>
          <div className="home-actions home-cta-actions">
            <a href="https://training.zoho.com" target="_blank" rel="noopener noreferrer" className="home-btn home-btn-light">
              Access Training Portal
              <ArrowRight size={20} />
            </a>
            <Link to="/contact" className="home-btn home-btn-outline">
              Schedule Orientation
            </Link>
          </div>
          <span className="home-support">
            <CheckCircle size={20} />
            Personalized guidance available for all participants
          </span>
        </div>
      </section>
    </div>
  );
};

export default Home;
