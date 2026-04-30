import React from 'react';
import { motion } from 'framer-motion';
import { Brain, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WordReveal, PageHero, TiltCard, fu } from '../components/UI';

const SkillNetMastery = () => {
  const modules = [
    { title: "Subconscious Mind Power", desc: "Thought pattern awareness and emotional regulation." },
    { title: "Leadership & Identity", desc: "Self-leadership and personal responsibility." },
    { title: "Communication", desc: "Public speaking, clear expression, and confidence." },
    { title: "Time Management", desc: "Daily planning and work accountability." },
    { title: "Teamwork", desc: "Understanding personalities and conflict handling." },
    { title: "Opportunity Awareness", desc: "Decision clarity and growth mindset." },
  ];

  return (
    <div className="v-page-skillnet">
      <PageHero 
        label="People System" 
        title="SkillNet Mastery." 
        subtitle="A People Preparation System. Structured skill training building work discipline, thinking clarity, and real-world execution readiness."
      />

      {/* PHILOSOPHY */}
      <section className="v-sec" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="v-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <motion.div {...fu()}>
              <span className="v-label">Approach</span>
              <h2 style={{ fontSize: 36, marginBottom: 24 }}>No hype. No artificial motivation.</h2>
              <p style={{ color: 'var(--text-2)', fontSize: 18, lineHeight: 1.7, fontWeight: 300 }}>
                SkillNet is built on the foundation of practical skill building. We don't rely on short-term emotional peaks; we focus on long-term capability development through structured, repeatable processes.
              </p>
            </motion.div>
            <div style={{ display: 'grid', gap: 24 }}>
              {[
                { title: "Practical Focus", desc: "Every concept is tied to a real-world application within the supply chain." },
                { title: "Ethical Foundation", desc: "Training emphasizes responsibility, integrity, and collective growth." }
              ].map((item, i) => (
                <motion.div key={i} {...fu(0.1 * i)} className="v-card" style={{ padding: 32 }}>
                  <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 8, color: 'var(--secondary)' }}>{item.title}</div>
                  <div style={{ color: 'var(--text-2)', fontSize: 15, lineHeight: 1.6, fontWeight: 300 }}>{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="v-sec" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div className="v-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <motion.div {...fu()}>
              <span className="v-label">The Core</span>
              <h2 style={{ fontSize: 42, marginBottom: 24 }}>Training that translates to income.</h2>
              <p style={{ color: 'var(--text-2)', fontSize: 18, lineHeight: 1.7, fontWeight: 300, marginBottom: 32 }}>
                Most training programs fail because they lack application. SkillNet is different—every module is designed with the Farm-to-Home execution system in mind.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {['Structured Learning Modules', 'Peer-to-Peer Review', 'Real-world Simulation', 'Direct System Bridge'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 16 }}>
                    <CheckCircle size={20} color="var(--secondary)" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fu(0.2)}>
              <TiltCard className="v-card" style={{ padding: 48, background: 'var(--primary)', color: '#fff' }}>
                 <Brain size={48} color="var(--accent)" style={{ marginBottom: 32 }} />
                  <h3 style={{ fontSize: 24, marginBottom: 16 }}>Training Method</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {[
                      'Concept Explanation', 'Practical Examples', 'Guided Exercises',
                      'Field-level Application', 'Review & Feedback'
                    ].map((step, i) => (
                      <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                        <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>{i + 1}</div>
                        <div style={{ fontSize: 15, fontWeight: 500 }}>{step}</div>
                      </div>
                    ))}
                  </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="v-sec" style={{ background: 'var(--bg)' }}>
        <div className="v-wrap">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <span className="v-label">Curriculum</span>
            <WordReveal text="What you will master." style={{ textAlign: 'center' }} colorWords={['master.']} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {modules.map((m, i) => (
              <motion.div key={i} {...fu(i * 0.1)}>
                <div className="v-card" style={{ padding: 32, height: '100%' }}>
                  <h4 style={{ fontSize: 18, marginBottom: 12 }}>{m.title}</h4>
                  <p style={{ color: 'var(--text-2)', fontSize: 14, lineHeight: 1.6, fontWeight: 300 }}>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* WHAT IT IS NOT */}
      <section className="v-sec" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="v-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <motion.div {...fu()}>
              <span className="v-label" style={{ color: '#ff6b6b' }}>Clarity</span>
              <h2 style={{ fontSize: 36, marginBottom: 24 }}>What SkillNet is NOT.</h2>
              <p style={{ color: 'var(--text-2)', fontSize: 18, lineHeight: 1.7, fontWeight: 300 }}>
                To understand our system, it is vital to know what we are NOT. We stand against shortcuts and superficial training models.
              </p>
            </motion.div>
            <div style={{ display: 'grid', gap: 16 }}>
              {[
                "Not instant success training.",
                "Not shortcut-based motivation.",
                "Not personality show programs."
              ].map((item, i) => (
                <motion.div key={i} {...fu(0.1 * i)} style={{ padding: '16px 24px', background: 'var(--bg)', borderRadius: 12, border: '1px solid var(--border-md)', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff6b6b' }} />
                  <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--text-1)' }}>{item}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="v-sec" style={{ textAlign: 'center', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div className="v-wrap">
          <WordReveal text="Ready to build your capability?" style={{ textAlign: 'center' }} colorWords={['capability?']} />
          <motion.div {...fu(0.3)} style={{ marginTop: 48 }}>
            <Link to="/contact" className="v-btn v-btn-p">Begin Your Journey</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SkillNetMastery;
