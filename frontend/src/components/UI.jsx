import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

/* ─── Motion helpers ─── */
export const fu = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
});

export const fa = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
});

/* ─── Word Reveal ─── */
export const WordReveal = ({ text, delay = 0, style, as: Tag = 'h2', colorWords = [] }) => {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setRevealed(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');
  return (
    <Tag ref={ref} style={style} className="word-reveal-parent">
      {words.map((word, i) => (
        <span key={i} className={`word-reveal-word ${revealed ? 'revealed' : ''}`}
          style={{ 
            display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', marginRight: '0.22em',
            transitionDelay: `${delay + i * 0.07}s` 
          }}>
          <span className="word-reveal-inner" 
            style={{ 
              display: 'inline-block', transform: revealed ? 'translateY(0%)' : 'translateY(110%)',
              transition: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)',
              color: colorWords.includes(word.replace(/[.,]/g, '')) ? 'var(--secondary)' : undefined 
            }}>
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
};

/* ─── Liquid Blob ─── */
export const LiquidBlob = ({ color, size = 400, top, left, bottom, right }) => (
  <div style={{ position: 'absolute', top, left, bottom, right, zIndex: 0, pointerEvents: 'none' }}>
    <div
      style={{
        width: size,
        height: size,
        background: color,
        filter: 'blur(52px)',
        opacity: 0.08,
        borderRadius: '50%',
      }}
    />
  </div>
);

/* ─── Tilt Card ─── */
export const TiltCard = ({ children, style, className }) => {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
    el.style.boxShadow = `${-x * 16}px ${y * 16}px 40px rgba(15,47,36,0.07)`;
  };
  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)';
    el.style.boxShadow = '';
  };
  return (
    <div
      ref={ref} className={`tilt-card ${className || ''}`}
      style={{ ...style, transition: 'transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease' }}
      onMouseMove={handleMove} onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
};

/* ─── Animated Counter ─── */
export const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const motionVal = useMotionValue(0);
  const inView = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !inView.current) {
        inView.current = true;
        const num = parseFloat(value.replace(/[^0-9.]/g, ''));
        const suf = value.includes('+') ? '+' : value.toLowerCase().includes('x') ? 'x' : value.includes('%') ? '%' : '';
        const controls = animate(motionVal, num, {
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v) + suf + suffix; },
        });
        return () => controls.stop();
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix, motionVal]);

  return <span ref={ref} className="counter-val" style={{ fontVariantNumeric: 'tabular-nums' }}>{value}</span>;
};

/* ─── Page Hero Container ─── */
export const PageHero = ({ label, title, subtitle, children }) => {
  return (
    <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 120, paddingBottom: 80 }}>
      <LiquidBlob color="var(--secondary)" size={500} top="-10%" left="10%" />
      <LiquidBlob color="var(--accent)" size={400} bottom="10%" right="5%" delay={2} />
      
      <div className="v-wrap">
        <div style={{ maxWidth: 800 }}>
          <motion.div {...fa(0.05)}><span className="v-label">{label}</span></motion.div>
          <div style={{ marginBottom: 32 }}>
            <WordReveal text={title} delay={0.1} as="h1" colorWords={title.split(' ').slice(-1)} style={{ fontSize: 'clamp(54px, 7vw, 84px)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 0.95 }} />
          </div>
          {subtitle && (
            <motion.p {...fa(0.3)} style={{ fontSize: 20, color: 'var(--text-2)', lineHeight: 1.6, maxWidth: 520, fontWeight: 300 }}>
              {subtitle}
            </motion.p>
          )}
          {children && <motion.div {...fa(0.4)} style={{ marginTop: 48 }}>{children}</motion.div>}
        </div>
      </div>
    </section>
  );
};
