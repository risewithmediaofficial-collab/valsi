import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { WordReveal, PageHero, fu } from '../components/UI';

const contactInfo = [
  { icon: <Phone size={20} />, title: "Phone", details: "+91 98765 43210", sub: "Mon–Fri, 10 AM – 6 PM" },
  { icon: <Mail size={20} />, title: "Email", details: "orientation@valsii.com", sub: "Response within 24 hours" },
  { icon: <MapPin size={20} />, title: "Office", details: "Valsii LLP", sub: "Chennai, Tamil Nadu" },
  { icon: <Clock size={20} />, title: "Orientation", details: "Weekly Sessions", sub: "By appointment only" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="v-page-contact">
      {/* HERO */}
      <PageHero 
        label="Get in Touch" 
        title="Contact Valsii." 
        subtitle="Get clarity about our systems. Understand the process. Start with orientation. Our orientation is training-first and pressure-free."
      />

      {/* CONTACT INFO */}
      <section className="v-sec-sm" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--white)' }}>
        <div className="v-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {contactInfo.map((info, i) => (
              <motion.div key={i} {...fu(i * 0.1)}>
                <div className="v-card" style={{ padding: 32, height: '100%' }}>
                  <div style={{ color: 'var(--secondary)', marginBottom: 20 }}>{info.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 8 }}>{info.title}</div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-1)', marginBottom: 4 }}>{info.details}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-3)', fontWeight: 300 }}>{info.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="v-sec" style={{ background: 'var(--bg)' }}>
        <div className="v-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            
            <motion.div {...fu()}>
              <div style={{ marginBottom: 48 }}>
                <span className="v-label">Inquiry</span>
                <h2 style={{ fontSize: 36, marginBottom: 20 }}>Request Orientation</h2>
                <p style={{ color: 'var(--text-2)', fontSize: 18, fontWeight: 300, lineHeight: 1.6 }}>
                  Fill this form to schedule a session with our system architects. We usually respond within 24 hours.
                </p>
              </div>

              <div className="v-card" style={{ padding: 32, background: 'var(--white)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--green-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', fontSize: 14, fontWeight: 600 }}>1</div>
                    <div style={{ fontSize: 15, fontWeight: 500 }}>System Orientation</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--green-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', fontSize: 14, fontWeight: 600 }}>2</div>
                    <div style={{ fontSize: 15, fontWeight: 500 }}>Capability Assessment</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--green-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', fontSize: 14, fontWeight: 600 }}>3</div>
                    <div style={{ fontSize: 15, fontWeight: 500 }}>Execution Path</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fu(0.2)}>
              <div className="v-card" style={{ padding: 48, background: 'var(--bg)', boxShadow: 'inset 8px 8px 16px rgba(15, 47, 36, 0.05), inset -8px -8px 16px rgba(255, 255, 255, 0.8)' }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--secondary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                      <CheckCircle size={32} />
                    </div>
                    <h3 style={{ fontSize: 24, marginBottom: 12 }}>Request Received</h3>
                    <p style={{ color: 'var(--text-2)', fontWeight: 300 }}>We'll reach out to you shortly to schedule your orientation.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div className="v-field-group">
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Full Name</label>
                      <input 
                        required type="text" placeholder="John Doe" 
                        style={{ width: '100%', padding: '16px', borderRadius: 12, border: '1px solid var(--border-md)', background: 'var(--bg)', outline: 'none', transition: 'all 0.3s' }} 
                        className="v-input-neumorphic"
                      />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                      <div className="v-field-group">
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Email</label>
                        <input required type="email" placeholder="john@example.com" style={{ width: '100%', padding: '16px', borderRadius: 12, border: '1px solid var(--border-md)', background: 'var(--bg)', outline: 'none' }} />
                      </div>
                      <div className="v-field-group">
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Phone</label>
                        <input required type="tel" placeholder="+91 00000 00000" style={{ width: '100%', padding: '16px', borderRadius: 12, border: '1px solid var(--border-md)', background: 'var(--bg)', outline: 'none' }} />
                      </div>
                    </div>
                    <div className="v-field-group">
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Message</label>
                      <textarea placeholder="Tell us about your goals..." style={{ width: '100%', padding: '16px', borderRadius: 12, border: '1px solid var(--border-md)', background: 'var(--bg)', outline: 'none', minHeight: 120, resize: 'none' }} />
                    </div>
                    <button type="submit" disabled={loading} className="v-btn v-btn-p" style={{ width: '100%', height: 56 }}>
                      {loading ? 'Processing...' : 'Send Orientation Request'} <ArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="v-sec" style={{ textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <div className="v-wrap">
          <WordReveal text="Prefer to talk now?" colorWords={['talk', 'now?']} />
          <motion.div {...fu(0.2)} style={{ marginTop: 40, display: 'flex', justifyContent: 'center', gap: 16 }}>
             <a href="tel:+919876543210" className="v-btn v-btn-neumorphic"><Phone size={18} /> +91 98765 43210</a>
             <a href="mailto:orientation@valsii.com" className="v-btn v-btn-neumorphic"><Mail size={18} /> orientation@valsii.com</a>
          </motion.div>
        </div>
      </section>

      <style>{`
        .v-input-neumorphic:focus {
          box-shadow: inset 4px 4px 8px rgba(15, 47, 36, 0.05), inset -4px -4px 8px rgba(255, 255, 255, 0.8);
          border-color: var(--secondary) !important;
        }
      `}</style>
    </div>
  );
};

export default Contact;
