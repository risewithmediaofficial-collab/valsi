import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Network, Sparkles, Sprout, SunMedium, Users, Waves } from 'lucide-react';

const STAGES = [
  {
    number: '01',
    label: 'Origin',
    title: 'A single grain holds infinite potential.',
    desc: 'Every system begins quietly, a seed at rest, waiting for the right conditions to wake.',
    Icon: Sparkles,
  },
  {
    number: '02',
    label: 'Emergence',
    title: 'Potential emerges and begins to flow.',
    desc: 'The first stir of movement: light, current, and intention drawn outward from the source.',
    Icon: Waves,
  },
  {
    number: '03',
    label: 'Growth',
    title: 'Learning flows, creating knowledge and capability.',
    desc: 'Threads branch into a living network: books, ideas, mentors, tools, and people.',
    Icon: Network,
  },
  {
    number: '04',
    label: 'Practice',
    title: 'Knowledge meets the soil.',
    desc: 'We return to the field and put what we know into action, patient, deliberate, real.',
    Icon: Sprout,
  },
  {
    number: '05',
    label: 'Harmony',
    title: 'Farming and learning work together.',
    desc: 'Communities strengthen as nature, knowledge, and technology move in the same rhythm.',
    Icon: Users,
  },
  {
    number: '06',
    label: 'Future',
    title: 'Capability in action creates a sustainable future.',
    desc: 'From a single grain to a living landscape, a future shaped by every hand that tended it.',
    Icon: SunMedium,
  },
];

function StageContent({ stage, align }) {
  return (
    <div className={`ss-stage-content ss-align-${align}`}>
      <div className="ss-stage-meta">
        <span>{stage.number}</span>
        <span>{stage.label}</span>
      </div>
      <h3>{stage.title}</h3>
      <p>{stage.desc}</p>
    </div>
  );
}

function StageRow({ stage, index, total }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 30%'] });
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [0.2, 1, 1, 0.55]);
  const y = useTransform(scrollYProgress, [0, 0.5], [40, 0]);
  const iconScale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const isRight = index % 2 === 1;
  const Icon = stage.Icon;

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="ss-stage-row">
      <div className="ss-stage-mobile">
        <motion.div style={{ scale: iconScale }} className="ss-stage-icon">
          <Icon size={22} strokeWidth={1.5} />
          {index === total - 1 && <span className="ss-stage-pulse" aria-hidden="true" />}
        </motion.div>
        <StageContent stage={stage} align="center" />
      </div>

      <div className="ss-stage-side ss-stage-left">
        {!isRight && <StageContent stage={stage} align="right" />}
      </div>
      <div className="ss-stage-center">
        <motion.div style={{ scale: iconScale }} className="ss-stage-icon">
          <Icon size={22} strokeWidth={1.5} />
          {index === total - 1 && <span className="ss-stage-pulse" aria-hidden="true" />}
        </motion.div>
      </div>
      <div className="ss-stage-side ss-stage-right">
        {isRight && <StageContent stage={stage} align="left" />}
      </div>
    </motion.div>
  );
}

export default function SeedlingStoryFlow() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });
  const headerOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0.55]);
  const manifestoRef = useRef(null);
  const { scrollYProgress: manifestoProgress } = useScroll({ target: manifestoRef, offset: ['start 80%', 'end 60%'] });
  const useLineY = (start, end) => useTransform(manifestoProgress, [start, end], [24, 0]);
  const useLineO = (start, end) => useTransform(manifestoProgress, [start, end], [0, 1]);

  return (
    <section ref={sectionRef} id="story" className="ss-story" aria-labelledby="story-heading">
      <div className="ss-story-wash" aria-hidden="true" />
      <div className="ss-story-inner">
        <motion.header style={{ opacity: headerOpacity }} className="ss-story-header">
          <p className="ss-kicker">
            <span />
            The Flow of the Story
            <span />
          </p>
          <h2 id="story-heading">
            From a single grain
            <br />
            <em>to a living future.</em>
          </h2>
        </motion.header>

        <div className="ss-stage-list">
          <div className="ss-stage-rail" aria-hidden="true" />
          <motion.div style={{ scaleY: lineScale, transformOrigin: 'top' }} className="ss-stage-rail-fill" aria-hidden="true" />
          <motion.span className="ss-stage-traveller" aria-hidden="true" style={{ top: useTransform(lineScale, (value) => `${value * 100}%`) }} />
          {STAGES.map((stage, index) => (
            <StageRow key={stage.label} stage={stage} index={index} total={STAGES.length} />
          ))}
        </div>

        <div ref={manifestoRef} className="ss-manifesto">
          <div className="ss-manifesto-glow" aria-hidden="true" />
          <p className="ss-manifesto-label">The Manifesto</p>
          <div className="ss-manifesto-lines">
            <motion.p style={{ opacity: useLineO(0, 0.25), y: useLineY(0, 0.25) }}>
              From a grain of potential <em>to knowledge.</em>
            </motion.p>
            <motion.p style={{ opacity: useLineO(0.2, 0.45), y: useLineY(0.2, 0.45) }}>
              From knowledge <em>to farming.</em>
            </motion.p>
            <motion.p style={{ opacity: useLineO(0.4, 0.65), y: useLineY(0.4, 0.65) }}>
              From farming <em>to a better future.</em>
            </motion.p>
          </div>
          <motion.p style={{ opacity: useLineO(0.6, 0.85), y: useLineY(0.6, 0.85) }} className="ss-manifesto-signoff">
            This is Valsii.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
