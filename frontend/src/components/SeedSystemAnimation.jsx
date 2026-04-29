import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Brain, Sprout, Truck, Users } from 'lucide-react';
import './SeedSystemAnimation.css';

const ScrollIndicator = memo(({ onClick }) => (
  <button
    className="scroll-indicator"
    type="button"
    onClick={onClick}
    aria-label="Scroll to The Valsii Way"
    data-cursor-hover
  >
    <span>Scroll to Explore</span>
    <div className="v-scroll-line" />
  </button>
));

const SystemEvolution = memo(() => {
  const nodes = [
    { label: 'Skill', icon: <Brain size={18} /> },
    { label: 'Growth', icon: <Sprout size={18} /> },
    { label: 'Supply', icon: <Truck size={18} /> },
    { label: 'Community', icon: <Users size={18} /> },
  ];

  return (
    <section className="seed-system-section" aria-labelledby="seed-system-title">
      <div className="seed-system-inner">
        <motion.div
          className="seed-system-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="v-label">Seed to System</span>
          <h2 id="seed-system-title">Potential becomes structure.</h2>
          <p>
            Every pathway starts with one prepared individual, then grows into skill,
            execution, supply, and community value.
          </p>
        </motion.div>

        <motion.div
          className="seed-system-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          data-cursor-hover
        >
          <div className="seed-orbit" />
          <div className="seed-root seed-root-left" />
          <div className="seed-root seed-root-right" />
          <div className="seed-stem" />
          <div className="seed-leaf seed-leaf-left" />
          <div className="seed-leaf seed-leaf-right" />
          <div className="seed-core">
            <Sprout size={28} />
          </div>

          <div className="seed-node-grid">
            {nodes.map((node, index) => (
              <motion.div
                className="seed-node"
                key={node.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.14 + index * 0.08 }}
              >
                <span>{node.icon}</span>
                {node.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

const QuoteSection = memo(() => (
  <section className="quote-section" id="valsii-way" aria-labelledby="valsii-way-title">
    <div className="quote-content">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="quote-title">The Valsii Way</div>
        <h2 className="quote-heading" id="valsii-way-title">
          From a grain of potential to knowledge.<br />
          From knowledge to farming.<br />
          From farming to a better future.
        </h2>
        <div className="quote-divider">
          <span className="divider-line" />
          This is Valsii
          <span className="divider-line" />
        </div>
      </motion.div>
    </div>
  </section>
));

const SeedSystemAnimation = () => {
  const handleScroll = () => {
    const target = document.getElementById('valsii-way');
    if (!target) return;

    const headerOffset = document.querySelector('.vh-nav')?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <ScrollIndicator onClick={handleScroll} />

      <SystemEvolution />

      <QuoteSection />
    </div>
  );
};

export default memo(SeedSystemAnimation);
