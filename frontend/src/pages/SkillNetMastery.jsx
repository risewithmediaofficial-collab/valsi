import React from 'react';
import { motion } from 'framer-motion';
import { Brain, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WordReveal, PageHero, TiltCard, fu } from '../components/UI';

const SkillNetMastery = () => {
  const modules = [
    { title: "Thinking Clarity", desc: "Developing sharp, logical thinking and problem-solving capabilities." },
    { title: "Work Discipline", desc: "Building the habits and focus required for professional execution." },
    { title: "Leadership", desc: "Communicating vision and managing system nodes effectively." },
    { title: "System Logic", desc: "Understanding how components interact to create value." },
  ];

  return (
    <div className="v-page-skillnet">
      <PageHero 
        label="People System" 
        title="SkillNet Mastery." 
        subtitle="The foundation of the Valsii ecosystem. We don't just teach skills; we engineer capabilities that are ready for real-world application."
      />

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
                 <h3 style={{ fontSize: 24, marginBottom: 16 }}>Mastery Pathway</h3>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    {[1, 2, 3].map(step => (
                      <div key={step} style={{ display: 'flex', gap: 16 }}>
                        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>{step}</div>
                        <div>
                          <div style={{ fontWeight: 600 }}>{step === 1 ? 'Orientation' : step === 2 ? 'Active Training' : 'System Integration'}</div>
                          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>{step === 1 ? 'Understanding the Valsii vision' : step === 2 ? 'Building core mental and physical skills' : 'Transitioning to field execution'}</div>
                        </div>
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
