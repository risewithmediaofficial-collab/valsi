import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Sprout, ShieldCheck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WordReveal, PageHero, TiltCard, fu } from '../components/UI';

const FarmToHome = () => {
  return (
    <div className="v-page-farm">
      <PageHero 
        label="Product System" 
        title="Farm-to-Home." 
        subtitle="The engine of real-world execution. We connect producers directly with consumers through a transparent, high-integrity supply chain."
      />

      <section className="v-sec" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div className="v-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 80, alignItems: 'center' }}>
             <motion.div {...fu()}>
                <span className="v-label">The Network</span>
                <h2 style={{ fontSize: 42, marginBottom: 24 }}>Eliminating inefficiency. Building trust.</h2>
                <p style={{ color: 'var(--text-2)', fontSize: 18, lineHeight: 1.7, fontWeight: 300, marginBottom: 40 }}>
                  Traditional supply chains are bloated with middlemen and lack transparency. Farm-to-Home uses trained Valsii nodes to manage the flow of goods with precision and ethics.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                  {[
                    { icon: <Sprout size={20} />, title: "Direct Sourcing", desc: "No middlemen. Just farmers and execution nodes." },
                    { icon: <ShieldCheck size={20} />, title: "Quality Control", desc: "Every product is verified by trained Valsii members." },
                  ].map((f, i) => (
                    <div key={i}>
                      <div style={{ color: 'var(--secondary)', marginBottom: 12 }}>{f.icon}</div>
                      <div style={{ fontWeight: 600, marginBottom: 8 }}>{f.title}</div>
                      <div style={{ fontSize: 14, color: 'var(--text-3)', lineHeight: 1.5 }}>{f.desc}</div>
                    </div>
                  ))}
                </div>
             </motion.div>
             <motion.div {...fu(0.2)}>
                <div className="v-card" style={{ padding: 48, background: 'var(--bg)', boxShadow: 'inset 8px 8px 16px rgba(15, 47, 36, 0.05), inset -8px -8px 16px rgba(255, 255, 255, 0.8)' }}>
                  <Truck size={40} color="var(--secondary)" style={{ marginBottom: 24 }} />
                  <h3 style={{ fontSize: 22, marginBottom: 20 }}>System Flow</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    {['Farmer Sourcing', 'Logistics Node', 'Final Distribution'].map((step, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <CheckCircle size={20} color="var(--secondary)" />
                        <div style={{ fontSize: 16, fontWeight: 500 }}>{step}</div>
                      </div>
                    ))}
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      <section className="v-sec" style={{ background: 'var(--bg)' }}>
        <div className="v-wrap">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <span className="v-label">Impact</span>
            <WordReveal text="Connecting the community." style={{ textAlign: 'center' }} colorWords={['community.']} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
             {[
               { title: "Fair Pricing", body: "Farmers get better rates, consumers pay fair prices. The system removes the greed of middlemen." },
               { title: "Local Presence", body: "Every node is part of the community, ensuring high accountability and trust." },
               { title: "Real Income", body: "Trained participants earn based on the value they provide to the distribution chain." },
             ].map((c, i) => (
               <motion.div key={i} {...fu(i * 0.1)}>
                 <TiltCard className="v-card" style={{ padding: 40, height: '100%' }}>
                    <h4 style={{ fontSize: 20, marginBottom: 16 }}>{c.title}</h4>
                    <p style={{ color: 'var(--text-2)', fontSize: 15, lineHeight: 1.6, fontWeight: 300 }}>{c.body}</p>
                 </TiltCard>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      <section className="v-sec" style={{ textAlign: 'center', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div className="v-wrap">
          <WordReveal text="Ready to enter the supply chain?" style={{ textAlign: 'center' }} colorWords={['supply', 'chain?']} />
          <motion.div {...fu(0.3)} style={{ marginTop: 48 }}>
            <Link to="/contact" className="v-btn v-btn-p">Start Orientation</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FarmToHome;
