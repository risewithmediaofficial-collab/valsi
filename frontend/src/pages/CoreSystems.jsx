import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Truck, Link as LinkIcon, RefreshCw, Target, CheckCircle, ArrowUpRight } from 'lucide-react';
import { WordReveal, PageHero, TiltCard, fu } from '../components/UI';

const CoreSystems = () => {
  const systems = [
    {
      title: "SkillNet Mastery",
      tagline: "People Preparation System",
      description: "Structured skill training that builds work discipline, thinking clarity, and readiness for real-world execution.",
      points: ["Skill development modules", "Thinking clarity training", "Leadership readiness", "Field preparation"],
      icon: <Brain size={24} />,
      path: "/skillnet-mastery"
    },
    {
      title: "Farm-to-Home",
      tagline: "Product Execution System",
      description: "Direct sourcing of essential products from producers to households through transparent, skill-driven field execution.",
      points: ["Direct farmer supply", "Daily-use essentials", "Transparent pricing", "Customer interaction"],
      icon: <Truck size={24} />,
      path: "/farm-to-home"
    }
  ];

  return (
    <div className="v-page-systems">
      {/* HERO */}
      <PageHero 
        label="Integrated Architecture" 
        title="Two Systems. One Purpose." 
        subtitle="Skills prepare individuals. Products sustain real-world activity. Together, they create sustainable growth pathways for the future."
      />

      {/* SYSTEMS OVERVIEW */}
      <section className="v-sec" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="v-wrap">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <motion.div {...fu()}><span className="v-label">Overview</span></motion.div>
            <WordReveal text="The Valsii Framework." style={{ textAlign: 'center' }} colorWords={['Framework.']} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 32 }}>
            {systems.map((s, i) => (
              <motion.div key={i} {...fu(i * 0.1)}>
                <TiltCard className="v-card" style={{ padding: 48, height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--green-soft)', border: '1px solid var(--border-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
                      {s.icon}
                    </div>
                    <span className="v-blur-tag">{s.tagline}</span>
                  </div>
                  <h3 style={{ fontSize: 28, marginBottom: 16 }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-2)', fontSize: 16, lineHeight: 1.7, marginBottom: 32, fontWeight: 300 }}>{s.description}</p>
                  
                  <div style={{ background: 'var(--bg)', padding: 24, borderRadius: 16, marginBottom: 32, border: '1px solid var(--border)' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>Core Focus</div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {s.points.map((p, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-1)' }}>
                          <CheckCircle size={14} color="var(--secondary)" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to={s.path} className="v-btn v-btn-neumorphic" style={{ width: '100%' }}>
                    Explore System Architecture <ArrowUpRight size={16} />
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTION FLOW */}
      <section className="v-sec" style={{ background: 'var(--bg)' }}>
        <div className="v-wrap">
          <div style={{ maxWidth: 600, marginBottom: 80 }}>
            <motion.div {...fu()}><span className="v-label">Execution Flow</span></motion.div>
            <WordReveal text="How systems connect." colorWords={['connect.']} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {[
              { step: 1, title: "Skill Training", sub: "SkillNet Mastery", icon: <Brain size={18} /> },
              { step: 2, title: "Capability", sub: "Mental clarity", icon: <Target size={18} /> },
              { step: 3, title: "Integration", sub: "System Bridge", icon: <LinkIcon size={18} /> },
              { step: 4, title: "Execution", sub: "Farm-to-Home", icon: <Truck size={18} /> },
              { step: 5, title: "Consistency", sub: "Income Growth", icon: <RefreshCw size={18} /> },
            ].map((step, i) => (
              <motion.div key={i} {...fu(i * 0.1)}>
                <div className="v-card" style={{ padding: 24, textAlign: 'center', height: '100%' }}>
                   <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary)', color: '#fff', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>{step.step}</div>
                   <div style={{ color: 'var(--secondary)', marginBottom: 8 }}>{step.icon}</div>
                   <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{step.title}</div>
                   <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{step.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="v-sec" style={{ textAlign: 'center', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div className="v-wrap">
          <WordReveal text="Ready to enter the system?" delay={0.1} style={{ textAlign: 'center' }} colorWords={['system?']} />
          <motion.div {...fu(0.3)} style={{ marginTop: 48, display: 'flex', justifyContent: 'center', gap: 16 }}>
            <Link to="/contact" className="v-btn v-btn-p">Begin Orientation</Link>
            <Link to="/about" className="v-btn v-btn-neumorphic">Learn Our Philosophy</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CoreSystems;
