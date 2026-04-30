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
                <span className="v-label">Architecture</span>
                <h2 style={{ fontSize: 42, marginBottom: 24 }}>The Problem & The Solution.</h2>
                <div style={{ display: 'grid', gap: 32, marginBottom: 40 }}>
                  <div style={{ padding: 24, background: 'rgba(255, 107, 107, 0.05)', borderLeft: '4px solid #ff6b6b', borderRadius: '0 12px 12px 0' }}>
                    <div style={{ fontWeight: 700, color: '#ff6b6b', fontSize: 13, textTransform: 'uppercase', marginBottom: 8 }}>The Problem</div>
                    <div style={{ color: 'var(--text-2)', fontSize: 15, lineHeight: 1.6 }}>Farmers lack market access; Consumers face inconsistent quality; Youth lack real product-based exposure.</div>
                  </div>
                  <div style={{ padding: 24, background: 'rgba(31, 122, 99, 0.05)', borderLeft: '4px solid var(--secondary)', borderRadius: '0 12px 12px 0' }}>
                    <div style={{ fontWeight: 700, color: 'var(--secondary)', fontSize: 13, textTransform: 'uppercase', marginBottom: 8 }}>The Solution</div>
                    <div style={{ color: 'var(--text-2)', fontSize: 15, lineHeight: 1.6 }}>Direct producer-to-consumer supply with transparent quality and pricing, managed by trained participants.</div>
                  </div>
                </div>
             </motion.div>
              <motion.div {...fu(0.2)}>
                <div className="v-card" style={{ padding: 48, background: 'var(--bg)', boxShadow: 'inset 8px 8px 16px rgba(15, 47, 36, 0.05), inset -8px -8px 16px rgba(255, 255, 255, 0.8)' }}>
                  <Truck size={40} color="var(--secondary)" style={{ marginBottom: 24 }} />
                  <h3 style={{ fontSize: 22, marginBottom: 20 }}>Operating Flow</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {[
                      'Producers (Direct Sourcing)', 'Quality Check Verification', 'Transparent Pricing Set',
                      'Trained Participants Handle', 'Household Distribution', 'Repeat Demand Building'
                    ].map((step, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--secondary)', color: '#fff', fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                        <div style={{ fontSize: 15, fontWeight: 500 }}>{step}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="v-sec" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="v-wrap">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <span className="v-label">Portfolio</span>
            <WordReveal text="Product Categories." colorWords={['Categories.']} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
            {[
              { title: "Rice & Grains", items: "Basmati, Sona Masoori, Millets" },
              { title: "Cooking Oils", items: "Sunflower, Groundnut, Coconut, Mustard" },
              { title: "Vegetables & Farm Produce", items: "Seasonal vegetables, leafy greens" },
              { title: "Home Essentials", items: "Pulses, Spices, Flour, Groceries" },
            ].map((cat, i) => (
              <motion.div key={i} {...fu(i * 0.1)} className="v-card" style={{ padding: 32 }}>
                <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 12, color: 'var(--secondary)' }}>{cat.title}</div>
                <div style={{ color: 'var(--text-3)', fontSize: 14, lineHeight: 1.6 }}>{cat.items}</div>
              </motion.div>
            ))}
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
