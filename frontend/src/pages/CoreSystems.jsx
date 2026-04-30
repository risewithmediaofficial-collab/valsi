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

      {/* THE CONNECTION */}
      <section className="v-sec" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="v-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <motion.div {...fu()}>
              <span className="v-label">Integration</span>
              <h2 style={{ fontSize: 36, marginBottom: 24 }}>Skills create readiness. Products create continuity.</h2>
              <p style={{ color: 'var(--text-2)', fontSize: 18, lineHeight: 1.7, fontWeight: 300, marginBottom: 32 }}>
                Both systems are designed to work together, not independently. SkillNet Mastery prepares individuals with the human and execution skills needed to operate the Farm-to-Home system effectively.
              </p>
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ padding: '12px 20px', background: 'var(--white)', borderRadius: 12, border: '1px solid var(--border-md)', fontSize: 14, fontWeight: 500 }}>Shared Vision</div>
                <div style={{ padding: '12px 20px', background: 'var(--white)', borderRadius: 12, border: '1px solid var(--border-md)', fontSize: 14, fontWeight: 500 }}>Seamless Flow</div>
              </div>
            </motion.div>
            <motion.div {...fu(0.2)}>
              <div className="v-card" style={{ padding: 48, background: 'var(--white)' }}>
                <h3 style={{ fontSize: 24, marginBottom: 24 }}>System Synergy</h3>
                <div style={{ gridTemplateColumns: '1fr', display: 'grid', gap: 24 }}>
                  <div style={{ padding: 24, background: 'var(--bg)', borderRadius: 16 }}>
                    <div style={{ color: 'var(--secondary)', fontWeight: 600, marginBottom: 8 }}>SkillNet Mastery</div>
                    <div style={{ color: 'var(--text-3)', fontSize: 14 }}>Prepares individuals with human and execution skills.</div>
                  </div>
                  <div style={{ padding: 24, background: 'var(--bg)', borderRadius: 16 }}>
                    <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: 8 }}>Farm-to-Home</div>
                    <div style={{ color: 'var(--text-3)', fontSize: 14 }}>Provides real product-based field exposure.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SYSTEM FLOW */}
      <section className="v-sec" style={{ background: 'var(--white)' }}>
        <div className="v-wrap">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <motion.div {...fu()}><span className="v-label">Architecture</span></motion.div>
            <WordReveal text="The logic of growth." style={{ textAlign: 'center' }} colorWords={['growth.']} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            {/* SkillNet Flow */}
            <motion.div {...fu(0.1)} className="v-card" style={{ padding: 40 }}>
              <div style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24 }}>SkillNet Mastery Flow</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {[
                  { label: "Training", sub: "Concept & Discipline" },
                  { label: "Capability", sub: "Mental Readiness" },
                  { label: "Income Readiness", sub: "System Preparation" }
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--bg)', border: '1px solid var(--border-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700 }}>{i + 1}</div>
                    <div>
                      <div style={{ fontWeight: 600 }}>{step.label}</div>
                      <div style={{ fontSize: 13, color: 'var(--text-3)' }}>{step.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Farm-to-Home Flow */}
            <motion.div {...fu(0.2)} className="v-card" style={{ padding: 40 }}>
              <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24 }}>Farm-to-Home Flow</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {[
                  { label: "Product", sub: "Sourcing & Quality" },
                  { label: "Utility", sub: "Customer Value" },
                  { label: "Repeat Income", sub: "Trust & Continuity" }
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--bg)', border: '1px solid var(--border-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700 }}>{i + 1}</div>
                    <div>
                      <div style={{ fontWeight: 600 }}>{step.label}</div>
                      <div style={{ fontSize: 13, color: 'var(--text-3)' }}>{step.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
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
