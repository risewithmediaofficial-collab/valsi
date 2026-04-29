import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Brain, Truck, Users, Target, CheckCircle, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SeedSystemAnimation from '../components/SeedSystemAnimation';
import { WordReveal, LiquidBlob, AnimatedCounter, fa, fu } from '../components/UI';

/* ─── Page Loader ─── */
const PageLoader = ({ onDone }) => {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let val = 0;
    const intervals = [{ to: 30, speed: 18 }, { to: 70, speed: 28 }, { to: 90, speed: 45 }, { to: 100, speed: 60 }];
    let i = 0;
    const next = () => {
      if (i >= intervals.length) return;
      const { to, speed } = intervals[i++];
      const timer = setInterval(() => {
        val++; setCount(val);
        const fill = document.getElementById('v-loader-bar-fill');
        if (fill) fill.style.width = val + '%';
        if (val >= to) {
          clearInterval(timer); next();
          if (val >= 100) setTimeout(() => { setLeaving(true); setTimeout(onDone, 700); }, 300);
        }
      }, speed);
    };
    next();
  }, [onDone]);

  return (
    <motion.div id="v-loader" style={{ position: 'fixed', inset: 0, background: 'var(--primary)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 24 }}
      animate={leaving ? { y: '-100%', opacity: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6 }}>
        <div style={{ fontFamily: 'Geist', fontSize: 'clamp(64px, 12vw, 120px)', fontWeight: 300, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>{String(count).padStart(2, '0')}</div>
        <div style={{ fontFamily: 'Geist', fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 300, color: 'rgba(255,255,255,0.35)', marginBottom: 6 }}>%</div>
      </div>
      <div style={{ width: 200, height: 1, background: 'rgba(255,255,255,0.15)', position: 'relative', overflow: 'hidden' }}>
        <div id="v-loader-bar-fill" style={{ position: 'absolute', left: 0, top: 0, height: '100%', background: 'var(--accent)', width: '0%' }} />
      </div>
      <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Initialising System</div>
    </motion.div>
  );
};

/* ─── Custom Cursor ─── */
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const raf = useRef(null);
  const hasMoved = useRef(false);
  const needsFrame = useRef(false);

  useEffect(() => {
    const canUseCustomCursor = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canUseCustomCursor) return undefined;

    const syncHoverState = () => {
      const el = document.elementFromPoint(pos.current.x, pos.current.y);
      document.body.classList.remove('cursor-hover', 'cursor-link');
      if (!el) return;
      if (el.closest('a, button, [data-cursor-hover]')) document.body.classList.add('cursor-link');
      else if (el.closest('.v-card, .tilt-card')) document.body.classList.add('cursor-hover');
    };

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!hasMoved.current) {
        hasMoved.current = true;
        ringPos.current = pos.current;
        cursorRef.current?.classList.add('is-visible');
        ringRef.current?.classList.add('is-visible');
      }
      cursorRef.current?.style.setProperty('transform', `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`);
      needsFrame.current = true;
      syncHoverState();
    };
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      if (needsFrame.current) {
        ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.18);
        ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.18);
        ringRef.current?.style.setProperty('transform', `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`);
        needsFrame.current = Math.abs(ringPos.current.x - pos.current.x) > 0.5 || Math.abs(ringPos.current.y - pos.current.y) > 0.5;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    const onEnter = syncHoverState;
    const onLeave = () => document.body.classList.remove('cursor-hover', 'cursor-link');
    const onScroll = () => {
      if (hasMoved.current) window.requestAnimationFrame(syncHoverState);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      document.body.classList.remove('cursor-hover', 'cursor-link');
      cancelAnimationFrame(raf.current);
    };
  }, []);
  return (<><div id="v-cursor" ref={cursorRef} /><div id="v-cursor-ring" ref={ringRef} /></>);
};

/* ─── Scroll Progress ─── */
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return <motion.div id="v-progress-bar" style={{ scaleX }} />;
};

/* ─── System Flow Visual ─── */
const SystemFlowVisual = () => (
  <div className="v-hero-flow" style={{ position: 'relative', width: '100%', height: '100%', minHeight: 500 }}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{ width: 300, height: 300, background: 'rgba(31, 122, 99, 0.08)', filter: 'blur(60px)', zIndex: 0, borderRadius: '50%' }} />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40, position: 'relative', zIndex: 1, padding: '40px 0' }}>
      <div style={{ position: 'absolute', top: 60, bottom: 60, left: '50%', transform: 'translateX(-50%)', width: 2, zIndex: 0 }}>
        <div style={{ width: '100%', height: '100%', background: 'var(--border-md)' }} />
        <motion.div animate={{ top: ['0%', '100%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', left: -2, width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', zIndex: 2 }} />
      </div>
      {[
        { label: 'Skill', icon: <Brain size={20} /> }, { label: 'Capability', icon: <Target size={20} /> },
        { label: 'System', icon: <Truck size={20} />, active: true }, { label: 'Execution', icon: <Users size={20} /> },
        { label: 'Income', icon: <CheckCircle size={20} />, accent: true },
      ].map((node, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20, width: 240, justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end', marginLeft: i % 2 === 0 ? -120 : 120 }}>
          {i % 2 !== 0 && (<div style={{ textAlign: 'right' }}><div style={{ fontSize: 14, fontWeight: 500 }}>{node.label}</div></div>)}
          <div className={`flow-node-icon ${node.active ? 'active' : ''} ${node.accent ? 'accent' : ''}`}>{node.icon}</div>
          {i % 2 === 0 && (<div style={{ textAlign: 'left' }}><div style={{ fontSize: 14, fontWeight: 500 }}>{node.label}</div></div>)}
        </div>
      ))}
    </div>
  </div>
);

/* ─── Home Page ─── */
const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroO = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.65], [0, 40]);

  const mqItems = ['SkillNet Mastery', '-', 'Farm-to-Home', '-', 'System Execution', '-', 'Real Income', '-', 'Sustainable Growth', '-'];
  
  return (
    <>
      {!loaded && <PageLoader onDone={() => setLoaded(true)} />}
      <ScrollProgressBar />

      <div className="vh-home">
        {/* HERO */}
        <section ref={heroRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 80, paddingBottom: 80 }}>
          <LiquidBlob color="var(--secondary)" size={600} top="-10%" left="20%" />
          <LiquidBlob color="var(--accent)" size={500} bottom="-10%" right="10%" delay={2} />

          <div className="v-wrap">
            <div className="v-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 40, alignItems: 'center' }}>
              <motion.div style={{ opacity: heroO, y: heroY }}>
                <motion.div {...fa(0.05)} style={{ marginBottom: 24 }}>
                  <span className="v-badge">Valsii System v2.0</span>
                </motion.div>
                <div style={{ marginBottom: 28 }}>
                  <WordReveal text="From Skill to System." delay={0.1} as="h1" colorWords={['to', 'System.']} style={{ fontSize: 'clamp(54px, 7vw, 84px)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 0.95 }} />
                </div>
                <motion.p {...fa(0.3)} style={{ fontSize: 20, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 48, fontWeight: 300, maxWidth: 480 }}>
                  Structured pathways from learning to real-world execution. We engineer environments where capability translates to income.
                </motion.p>
                <motion.div {...fa(0.4)} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Link to="/contact" className="v-btn v-btn-p">Start Orientation</Link>
                  <a href="#how-it-works" className="v-btn v-btn-neumorphic">Explore Architecture <ArrowDown size={15} /></a>
                </motion.div>
                <motion.div {...fa(0.5)} style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 64 }}>
                  <div style={{ display: 'flex', position: 'relative', height: 32, width: 80 }}>
                    {[1, 2, 3, 4].map(i => (<div key={i} style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid var(--bg)', background: i % 2 === 0 ? 'var(--secondary)' : 'var(--accent)', position: 'absolute', left: (i - 1) * 16, zIndex: 5 - i, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Users size={14} color="#fff" /></div>))}
                  </div>
                  <div><div style={{ fontSize: 14, fontWeight: 600 }}>Join 500+ executing</div><div style={{ fontSize: 12, color: 'var(--text-3)' }}>within the global system</div></div>
                </motion.div>
              </motion.div>
              <motion.div {...fa(0.2)}><SystemFlowVisual /></motion.div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div style={{ padding: '16px 0', overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--white)' }}>
          <div className="v-mq-track">
            {[...Array(2)].map((_, rep) => (
              <React.Fragment key={rep}>
                {mqItems.map((item, i) => (
                  <span key={i} style={{ padding: '0 32px', fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: item === '-' ? 'var(--secondary)' : 'var(--text-3)', whiteSpace: 'nowrap' }}>{item}</span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* SEED → SYSTEM EVOLUTION */}
        <div id="how-it-works"><SeedSystemAnimation /></div>

        {/* STATS */}
        <section className="v-sec-sm" style={{ background: 'var(--bg)' }}>
          <div className="v-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, background: 'var(--bg)', padding: 40, borderRadius: 'var(--r-lg)', boxShadow: 'inset 8px 8px 16px rgba(15, 47, 36, 0.05), inset -8px -8px 16px rgba(255, 255, 255, 0.8)' }}>
              {[
                { val: '500+', label: 'Participants' }, { val: '100+', label: 'Nodes' },
                { val: '5x', label: 'Efficiency' }, { val: '100%', label: 'Transparency' },
              ].map((s, i) => (
                <motion.div key={i} {...fu(i * 0.1)} style={{ padding: '16px 24px', borderLeft: '1px solid var(--border-md)' }}>
                  <div style={{ fontSize: 48, fontWeight: 300, color: 'var(--primary)', marginBottom: 8 }}><AnimatedCounter value={s.val} /></div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="v-sec" style={{ textAlign: 'center' }}>
          <div className="v-wrap">
            <motion.div {...fu(0)} style={{ marginBottom: 32 }}><span className="v-badge">System Access Open</span></motion.div>
            <WordReveal text="Integrate into the system." delay={0.05} style={{ fontSize: 'clamp(40px, 5vw, 64px)', maxWidth: 800, margin: '0 auto 24px', lineHeight: 1.1 }} colorWords={['system']} />
            <motion.p {...fu(0.2)} style={{ color: 'var(--text-2)', fontSize: 18, maxWidth: 500, margin: '0 auto 48px', fontWeight: 300 }}>Transition from learning to execution. Join the network today.</motion.p>
            <motion.div {...fu(0.3)}><Link to="/contact" className="v-btn v-btn-p">Begin Orientation</Link></motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
