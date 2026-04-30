import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Users, TrendingUp, BookOpen, Heart, ArrowRight, ArrowUpRight, Check, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WordReveal, PageHero, TiltCard, fu } from '../components/UI';

const values = [
  { icon: <Target size={20} />, title: "Purpose-Driven", body: "Focus on practical skill development and sustainable income." },
  { icon: <Shield size={20} />, title: "Ethics & Transparency", body: "Clear systems, honest communication, no hidden terms." },
  { icon: <Users size={20} />, title: "People-First", body: "Training and support focused on individual growth." },
  { icon: <TrendingUp size={20} />, title: "Sustainable Growth", body: "Long-term development over short-term gains." },
];

const faqItems = [
  {
    question: "What does Valsii do?",
    answer: "Valsii operates two integrated systems — SkillNet Mastery for skill training and Farm-to-Home for product-based field execution.",
  },
  {
    question: "Is Valsii a training company or a product company?",
    answer: "Both. We believe skills without application and products without skilled people are incomplete. Our integrated approach combines both elements.",
  },
  {
    question: "What's the philosophy behind Valsii?",
    answer: "Build real capabilities through structured training and provide practical exposure through product-based systems. No hype, just sustainable growth.",
  },
];

const About = () => (
  <div className="v-page-about">
    {/* HERO */}
    <PageHero 
      label="Our Story & Values" 
      title="About Valsii." 
      subtitle="A Skill & Supply Company. We bridge the gap between training and real-world application."
    >
      <div style={{ display: 'flex', gap: 16 }}>
        <Link to="/contact" className="v-btn v-btn-p">Join Our Mission</Link>
        <span className="v-blur-tag">Integrated by Design</span>
      </div>
    </PageHero>

    {/* PHILOSOPHY & APPROACH */}
    <section className="v-sec" style={{ background: 'var(--bg)' }}>
      <div className="v-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <motion.div {...fu()}>
            <span className="v-label">Identity</span>
            <h2 style={{ fontSize: 36, marginBottom: 24 }}>A Skill & Supply Company.</h2>
            <p style={{ color: 'var(--text-2)', fontSize: 18, lineHeight: 1.7, fontWeight: 300 }}>
              Valsii operates at the intersection of skill development and practical execution. We believe that skills without application are incomplete, and products without skilled people are unsustainable.
            </p>
          </motion.div>
          <div style={{ display: 'grid', gap: 24 }}>
            {[
              { title: "Our Philosophy", desc: "Building skilled individuals and connecting them with sustainable product-based income systems." },
              { title: "Our Approach", desc: "Operating at the intersection of skill development and practical execution, bridging training with real-world application." }
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

    {/* MISSION & VISION */}
    <section className="v-sec" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="v-wrap">
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <motion.div {...fu()}><span className="v-label">Purpose</span></motion.div>
          <WordReveal text="Mission & Vision." delay={0.1} style={{ textAlign: 'center' }} colorWords={['Vision.']} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {/* Mission */}
          <motion.div {...fu(0.1)}>
            <TiltCard className="v-card" style={{ padding: 48, height: '100%' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--green-soft)', border: '1px solid var(--border-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', marginBottom: 32 }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: 24, marginBottom: 16 }}>Our Mission</h3>
              <p style={{ color: 'var(--text-2)', lineHeight: 1.7, fontSize: 16, marginBottom: 32, fontWeight: 300 }}>
                To create structured pathways for skill development and practical income generation through integrated systems.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Skill development through training', 'Practical field exposure', 'Sustainable income pathways'].map((p, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: 'var(--text-1)' }}>
                    <Check size={16} color="var(--secondary)" /> {p}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </motion.div>

          {/* Vision */}
          <motion.div {...fu(0.2)}>
            <TiltCard className="v-card" style={{ padding: 48, height: '100%' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--green-soft)', border: '1px solid var(--border-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', marginBottom: 32 }}>
                <Heart size={24} />
              </div>
              <h3 style={{ fontSize: 24, marginBottom: 16 }}>Our Vision</h3>
              <p style={{ color: 'var(--text-2)', lineHeight: 1.7, fontSize: 16, marginBottom: 32, fontWeight: 300 }}>
                To build an ecosystem where skills meet practical execution, creating responsible individuals with competence and ethics.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Skilled individuals in communities', 'Ethical product distribution', 'Sustainable income for all'].map((p, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: 'var(--text-1)' }}>
                    <Check size={16} color="var(--secondary)" /> {p}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CORE VALUES */}
    <section className="v-sec" style={{ background: 'var(--bg)' }}>
      <div className="v-wrap">
        <div style={{ maxWidth: 600, marginBottom: 80 }}>
          <motion.div {...fu()}><span className="v-label">Principles</span></motion.div>
          <WordReveal text="Four values. One direction." colorWords={['One', 'direction.']} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {values.map((v, i) => (
            <motion.div key={i} {...fu(i * 0.1)}>
              <div className="v-card" style={{ padding: 32, height: '100%' }}>
                <div style={{ color: 'var(--secondary)', marginBottom: 20 }}>{v.icon}</div>
                <h4 style={{ fontSize: 18, marginBottom: 12 }}>{v.title}</h4>
                <p style={{ color: 'var(--text-2)', fontSize: 14, lineHeight: 1.6, fontWeight: 300 }}>{v.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="v-sec" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
      <div className="v-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80 }}>
          <div>
            <motion.div {...fu()}><span className="v-label">Clarity</span></motion.div>
            <WordReveal text="Common questions." colorWords={['questions.']} />
            <motion.p {...fu(0.2)} style={{ color: 'var(--text-2)', marginTop: 24, fontSize: 18, fontWeight: 300 }}>
              Direct answers to help you understand the Valsii ecosystem.
            </motion.p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqItems.map((item, i) => (
              <motion.div key={i} {...fu(i * 0.1)}>
                <div className="v-card" style={{ padding: 32 }}>
                  <h4 style={{ fontSize: 18, marginBottom: 12, display: 'flex', gap: 12 }}>
                    <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>Q</span> {item.question}
                  </h4>
                  <p style={{ color: 'var(--text-2)', fontSize: 15, lineHeight: 1.7, fontWeight: 300, paddingLeft: 28 }}>{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="v-sec" style={{ textAlign: 'center', background: 'var(--bg)' }}>
      <div className="v-wrap">
        <WordReveal text="Become part of the system." delay={0.1} style={{ textAlign: 'center' }} colorWords={['system.']} />
        <motion.div {...fu(0.3)} style={{ marginTop: 48 }}>
          <Link to="/contact" className="v-btn v-btn-p">Begin Orientation</Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default About;
