import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Droplets,
  Globe,
  Heart,
  Layers3,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Settings2,
  ShieldCheck,
  Sparkles,
  Sprout,
  TrendingUp,
  Truck,
  Users,
  Users2,
  Wheat,
  Workflow,
  XCircle,
} from 'lucide-react';

const iconMap = {
  BadgeCheck,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock3,
  Droplets,
  Globe,
  Heart,
  Layers3,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  MonitorCog: Settings2,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Sprout,
  TrendingUp,
  Truck,
  Users,
  Users2,
  Wheat,
  Workflow,
  XCircle,
};

const easing = [0.22, 1, 0.36, 1];
const sectionViewport = { once: true, margin: '-80px' };
const sectionReveal = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};
const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

function IconToken({ name }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={20} strokeWidth={1.9} />;
}

function Eyebrow({ children }) {
  if (!children) return null;
  return <span className="section-eyebrow">{children}</span>;
}

function SectionLead({ eyebrow, heading, text, align = 'left' }) {
  return (
    <div className={`section-lead ${align === 'center' ? 'center' : ''}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      {heading ? <h2>{heading}</h2> : null}
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function MediaImage({ src, alt, position = 'center' }) {
  return <img src={src} alt={alt} loading="lazy" style={{ objectPosition: position }} />;
}

function ActionLink({ action, className = '' }) {
  const classes = `premium-button ${action.variant || 'primary'} ${className}`.trim();
  const destination = action.href || action.to || '';
  const openInNewTab =
    action.newTab ||
    (action.external && !destination.startsWith('mailto:') && !destination.startsWith('tel:'));
  const content = (
    <>
      <span>{action.label}</span>
      <ArrowRight size={16} />
    </>
  );

  if (action.to && !action.newTab) {
    return (
      <Link className={classes} to={action.to}>
        {content}
      </Link>
    );
  }

  return (
    <a
      className={classes}
      href={destination}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noreferrer' : undefined}
    >
      {content}
    </a>
  );
}

function ActionGroup({ actions }) {
  if (!actions?.length) return null;
  return (
    <div className="action-group">
      {actions.map((action) => (
        <ActionLink key={`${action.label}-${action.to || action.href}`} action={action} />
      ))}
    </div>
  );
}

function BulletList({ items, tone = 'default' }) {
  if (!items?.length) return null;
  return (
    <ul className={`bullet-list ${tone}`}>
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 size={16} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InlinePillRow({ items }) {
  if (!items?.length) return null;
  return (
    <div className="inline-pill-row">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

export function HeroSection({ data }) {
  return (
    <motion.section
      className={`hero-premium theme-${data.theme || 'corporate'}`}
      style={{
        '--hero-image': `url(${data.backgroundImage})`,
        '--hero-position': data.backgroundPosition || 'center center',
      }}
      initial="hidden"
      animate="visible"
      variants={sectionReveal}
      transition={{ duration: 0.85, ease: easing }}
    >
      <div className="hero-overlay" />
      <div className="section-inner hero-grid">
        <motion.div
          className="hero-copy"
          variants={staggerGroup}
          transition={{ duration: 0.6, ease: easing }}
        >
          <motion.div variants={cardReveal} transition={{ duration: 0.55, ease: easing }}>
            <Eyebrow>{data.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h1 variants={cardReveal} transition={{ duration: 0.72, ease: easing }}>
            {data.heading}
          </motion.h1>

          {data.subheading ? (
            <motion.p
              className="hero-subheading"
              variants={cardReveal}
              transition={{ duration: 0.58, ease: easing }}
            >
              {data.subheading}
            </motion.p>
          ) : null}

          {data.description ? (
            <motion.p
              className="hero-description"
              variants={cardReveal}
              transition={{ duration: 0.58, ease: easing }}
            >
              {data.description}
            </motion.p>
          ) : null}

          {data.badges?.length ? (
            <motion.div
              className="hero-badges"
              variants={cardReveal}
              transition={{ duration: 0.55, ease: easing }}
            >
              {data.badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </motion.div>
          ) : null}

          <motion.div variants={cardReveal} transition={{ duration: 0.58, ease: easing }}>
            <ActionGroup actions={data.buttons} />
          </motion.div>
        </motion.div>

        {data.stats?.length ? (
          <motion.div
            className="hero-stats"
            initial="hidden"
            animate="visible"
            variants={staggerGroup}
          >
            {data.stats.map((stat) => (
              <motion.article
                className="hero-stat-card"
                key={`${stat.label}-${stat.value}`}
                variants={cardReveal}
                transition={{ duration: 0.52, ease: easing }}
              >
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </motion.article>
            ))}
          </motion.div>
        ) : null}
      </div>
    </motion.section>
  );
}

export function TrustSection({ data }) {
  return (
    <motion.section
      className="section-shell trust-shell"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.62, ease: easing }}
    >
      <div className="section-inner">
        <SectionLead eyebrow={data.eyebrow} heading={data.heading} text={data.description} align="center" />
        <motion.div
          className="highlight-grid compact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGroup}
        >
          {data.highlights?.map((highlight) => (
            <motion.article
              className="highlight-card"
              key={highlight.title}
              variants={cardReveal}
              transition={{ duration: 0.46, ease: easing }}
            >
              <div className="icon-chip">
                <IconToken name={highlight.icon} />
              </div>
              <h3>{highlight.title}</h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export function ProblemSection({ data }) {
  return (
    <motion.section
      className="section-shell problem-shell"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.62, ease: easing }}
    >
      <div className="section-inner problem-grid">
        <SectionLead eyebrow={data.eyebrow} heading={data.heading} text={data.content} />
        <motion.div
          className="problem-board"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardReveal}
          transition={{ duration: 0.5, ease: easing }}
        >
          <div className="problem-tags">
            {data.challenges?.map((challenge) => (
              <span key={challenge}>{challenge}</span>
            ))}
          </div>
          <p>{data.solution}</p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export function SolutionCardsSection({ data }) {
  return (
    <motion.section
      className="section-shell"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.62, ease: easing }}
    >
      <div className="section-inner">
        <SectionLead eyebrow={data.eyebrow} heading={data.heading} text={data.text} align="center" />
        <motion.div
          className="feature-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGroup}
        >
          {data.cards?.map((card) => (
            <motion.article
              className="feature-card"
              key={card.title}
              variants={cardReveal}
              transition={{ duration: 0.48, ease: easing }}
            >
              <div className="feature-card-top">
                <div className="icon-chip">
                  <IconToken name={card.icon} />
                </div>
                <h3>{card.title}</h3>
              </div>
              <p>{card.description}</p>
              {card.image ? (
                <div className="feature-image">
                  <MediaImage src={card.image} alt={card.title} position={card.imagePosition} />
                </div>
              ) : null}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export function ProgramsSection({ data }) {
  return (
    <motion.section
      className="section-shell"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.62, ease: easing }}
    >
      <div className="section-inner">
        <SectionLead eyebrow={data.eyebrow} heading={data.heading} text={data.text} align="center" />
        <motion.div
          className="program-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGroup}
        >
          {data.items?.map((program) => (
            <motion.article
              className="program-card"
              key={program.title}
              variants={cardReveal}
              transition={{ duration: 0.48, ease: easing }}
            >
              <div className="program-meta">
                <div className="icon-chip">
                  <IconToken name={program.icon} />
                </div>
                {program.duration ? <span className="duration-pill">{program.duration}</span> : null}
              </div>
              <h3>{program.title}</h3>
              <BulletList items={program.includes} />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export function TransformationSection({ data }) {
  return (
    <motion.section
      className="section-shell transformation-shell"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.62, ease: easing }}
    >
      <div className="section-inner">
        <SectionLead eyebrow={data.eyebrow} heading={data.heading} text={data.text} align="center" />
        <motion.div
          className="transformation-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGroup}
        >
          {data.changes?.map((item) => (
            <motion.article
              className="transformation-card"
              key={`${item.from}-${item.to}`}
              variants={cardReveal}
              transition={{ duration: 0.44, ease: easing }}
            >
              <span className="from-state">{item.from}</span>
              <ArrowRight size={18} />
              <strong>{item.to}</strong>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export function CommunitySection({ data }) {
  return (
    <motion.section
      className="section-shell split-shell"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.62, ease: easing }}
    >
      <div className={`section-inner split-grid ${data.reverse ? 'reverse' : ''}`}>
        <div className="split-copy">
          <SectionLead eyebrow={data.eyebrow} heading={data.heading} text={data.content} />
          <BulletList items={data.bullets} />
          <ActionGroup actions={data.buttons} />
        </div>
        {data.image ? (
          <div className="split-visual framed">
            <MediaImage src={data.image} alt={data.heading} position={data.imagePosition} />
          </div>
        ) : null}
      </div>
    </motion.section>
  );
}

export function FounderSection({ data }) {
  return (
    <motion.section
      className="section-shell founder-shell"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.62, ease: easing }}
    >
      <div className={`section-inner split-grid ${data.reverse ? 'reverse' : ''}`}>
        <div className="split-copy">
          <SectionLead eyebrow={data.eyebrow} heading={data.heading} text={data.content} />
          <div className="founder-card">
            <strong>{data.founderName}</strong>
            <span>{data.founderTitle}</span>
            <span>{data.founderLocation}</span>
          </div>
          <ActionGroup actions={data.buttons} />
        </div>
        {data.image ? (
          <div className="split-visual portrait">
            <MediaImage src={data.image} alt={data.founderName} position={data.imagePosition} />
          </div>
        ) : null}
      </div>
    </motion.section>
  );
}

export function ProductCategoriesSection({ data }) {
  return (
    <motion.section
      className="section-shell"
      id="products"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.62, ease: easing }}
    >
      <div className="section-inner">
        <SectionLead eyebrow={data.eyebrow} heading={data.heading} text={data.text} align="center" />
        <motion.div
          className="feature-grid product-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGroup}
        >
          {data.categories?.map((item) => (
            <motion.article
              className="feature-card product-card"
              key={item.title}
              variants={cardReveal}
              transition={{ duration: 0.46, ease: easing }}
            >
              <div className="feature-card-top">
                <div className="icon-chip">
                  <IconToken name={item.icon} />
                </div>
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
              {item.image ? (
                <div className="feature-image">
                  <MediaImage src={item.image} alt={item.title} position={item.imagePosition} />
                </div>
              ) : null}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export function TextContentSection({ data }) {
  return (
    <motion.section
      className="section-shell split-shell"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.62, ease: easing }}
    >
      <div className={`section-inner split-grid ${data.reverse ? 'reverse' : ''}`}>
        <div className="split-copy">
          <SectionLead eyebrow={data.eyebrow} heading={data.heading} text={data.content} />
          <BulletList items={data.benefits || data.bullets} />
          <ActionGroup actions={data.buttons} />
        </div>
        {data.image ? (
          <div className="split-visual framed">
            <MediaImage src={data.image} alt={data.heading} position={data.imagePosition} />
          </div>
        ) : null}
      </div>
    </motion.section>
  );
}

export function PageIntro({ data }) {
  return (
    <motion.section
      className="section-shell intro-shell"
      initial="hidden"
      animate="visible"
      variants={sectionReveal}
      transition={{ duration: 0.72, ease: easing }}
    >
      <div className="section-inner narrow">
        <SectionLead eyebrow={data.eyebrow} heading={data.heading} text={data.subheading} align="center" />
      </div>
    </motion.section>
  );
}

export function QuotePanel({ data }) {
  return (
    <motion.section
      className="section-shell quote-shell"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.58, ease: easing }}
    >
      <div className="section-inner narrow">
        <blockquote>
          <p>{data.text}</p>
          {data.byline ? <footer>{data.byline}</footer> : null}
        </blockquote>
      </div>
    </motion.section>
  );
}

export function ImageSection({ data }) {
  return (
    <motion.section
      className="section-shell split-shell"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.62, ease: easing }}
    >
      <div className={`section-inner split-grid ${data.reverse ? 'reverse' : ''}`}>
        <div className="split-copy">
          <SectionLead eyebrow={data.eyebrow} heading={data.heading} text={data.content} />
          <BulletList items={data.bullets} />
          <ActionGroup actions={data.buttons} />
        </div>
        <div className="split-visual framed">
          <MediaImage src={data.image} alt={data.heading} position={data.imagePosition} />
        </div>
      </div>
    </motion.section>
  );
}

export function ContentCards({ data, compact = false }) {
  return (
    <motion.section
      className="section-shell"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.62, ease: easing }}
    >
      <div className="section-inner">
        <SectionLead eyebrow={data.eyebrow} heading={data.heading} text={data.text} align="center" />
        <motion.div
          className={`content-card-grid ${compact ? 'compact' : ''}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGroup}
        >
          {data.items?.map((item) => (
            <motion.article
              className="content-card"
              key={item.title}
              variants={cardReveal}
              transition={{ duration: 0.45, ease: easing }}
            >
              {item.eyebrow ? <span className="card-eyebrow">{item.eyebrow}</span> : null}
              <div className="content-card-header">
                {item.icon ? (
                  <div className="icon-chip">
                    <IconToken name={item.icon} />
                  </div>
                ) : null}
                <h3>{item.title}</h3>
                {item.value ? <strong className="card-value">{item.value}</strong> : null}
              </div>
              <p>{item.text}</p>
              {item.image ? (
                <div className="card-inline-image">
                  <MediaImage src={item.image} alt={item.title} position={item.imagePosition} />
                </div>
              ) : null}
              <BulletList items={item.items} tone="muted" />
              {item.link ? <ActionLink action={{ ...item.link, variant: 'tertiary' }} className="inline-action" /> : null}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export function ProcessRail({ data }) {
  return (
    <motion.section
      className="section-shell process-shell"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.62, ease: easing }}
    >
      <div className="section-inner">
        <SectionLead eyebrow={data.eyebrow} heading={data.heading} text={data.text} align="center" />
        <motion.div
          className="process-rail"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGroup}
        >
          {data.items?.map((item, index) => (
            <motion.article
              className="process-step"
              key={item.title}
              variants={cardReveal}
              transition={{ duration: 0.45, ease: easing }}
            >
              <span className="process-index">{item.label || String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export function FAQSection({ title, items, eyebrow }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-shell faq-shell">
      <div className="section-inner narrow">
        <SectionLead eyebrow={eyebrow} heading={title} align="center" />
        <div className="faq-list">
          {items?.map((item, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <article className={`faq-item ${open ? 'open' : ''}`} key={item.question}>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={18} />
                </button>

                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      id={panelId}
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: easing }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CTASection({ data }) {
  return (
    <motion.section
      className="section-shell cta-shell"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.62, ease: easing }}
    >
      <div className="section-inner narrow">
        <div className="cta-panel">
          <SectionLead eyebrow={data.eyebrow} heading={data.heading} text={data.description} align="center" />
          <ActionGroup actions={data.buttons} />
        </div>
      </div>
    </motion.section>
  );
}

export function MetricStrip({ items }) {
  return (
    <motion.section
      className="section-shell metric-shell"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.58, ease: easing }}
    >
      <div className="section-inner">
        <motion.div
          className="metric-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGroup}
        >
          {items.map((item) => (
            <motion.article
              className="metric-card"
              key={`${item.label}-${item.value}`}
              variants={cardReveal}
              transition={{ duration: 0.42, ease: easing }}
            >
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export function BentoSection({ data }) {
  return (
    <motion.section
      className={`section-shell bento-shell ${data.theme ? `theme-${data.theme}` : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.62, ease: easing }}
    >
      <div className="section-inner">
        <SectionLead eyebrow={data.eyebrow} heading={data.heading} text={data.text} align={data.align || 'left'} />

        <motion.div
          className="bento-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGroup}
        >
          {data.featured ? (
            <motion.article
              className={`bento-card bento-feature ${data.featured.image ? 'with-visual' : ''}`}
              variants={cardReveal}
              transition={{ duration: 0.52, ease: easing }}
            >
              <div className="bento-feature-copy">
                {data.featured.label ? <span className="card-eyebrow">{data.featured.label}</span> : null}
                <h3>{data.featured.title}</h3>
                <p>{data.featured.text}</p>
                <InlinePillRow items={data.featured.pills} />
              </div>

              {data.featured.image ? (
                <div className="bento-feature-visual">
                  <MediaImage
                    src={data.featured.image}
                    alt={data.featured.title}
                    position={data.featured.imagePosition}
                  />
                </div>
              ) : null}
            </motion.article>
          ) : null}

          {data.items?.map((item) => (
            <motion.article
              className={`bento-card ${item.emphasis || ''}`.trim()}
              key={item.title}
              variants={cardReveal}
              transition={{ duration: 0.46, ease: easing }}
            >
              {item.eyebrow ? <span className="card-eyebrow">{item.eyebrow}</span> : null}

              <div className="bento-card-top">
                {item.icon ? (
                  <div className="icon-chip">
                    <IconToken name={item.icon} />
                  </div>
                ) : null}
                {item.value ? <strong className="bento-value">{item.value}</strong> : null}
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <BulletList items={item.items} tone="muted" />
              {item.link ? <ActionLink action={{ ...item.link, variant: 'tertiary' }} className="inline-action" /> : null}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export function ArchitectureSection({ data }) {
  return (
    <motion.section
      className="section-shell architecture-shell"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.62, ease: easing }}
    >
      <div className="section-inner">
        <SectionLead eyebrow={data.eyebrow} heading={data.heading} text={data.text} align="center" />

        <div className="architecture-stage">
          <motion.article
            className="architecture-node architecture-parent"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardReveal}
            transition={{ duration: 0.52, ease: easing }}
          >
            {data.parent?.eyebrow ? <span className="card-eyebrow">{data.parent.eyebrow}</span> : null}
            <h3>{data.parent?.title}</h3>
            <p>{data.parent?.text}</p>
            <InlinePillRow items={data.parent?.badges} />
          </motion.article>

          <div className="architecture-link" aria-hidden="true" />

          <motion.div
            className="architecture-branches"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerGroup}
          >
            {data.branches?.map((branch) => (
              <motion.article
                className={`architecture-node architecture-branch ${branch.tone || ''}`.trim()}
                key={branch.title}
                variants={cardReveal}
                transition={{ duration: 0.48, ease: easing }}
              >
                {branch.eyebrow ? <span className="card-eyebrow">{branch.eyebrow}</span> : null}
                <div className="content-card-header">
                  {branch.icon ? (
                    <div className="icon-chip">
                      <IconToken name={branch.icon} />
                    </div>
                  ) : null}
                  <h3>{branch.title}</h3>
                </div>
                <p>{branch.text}</p>
                <BulletList items={branch.bullets} tone="muted" />
              </motion.article>
            ))}
          </motion.div>
        </div>

        {data.notes?.length ? (
          <motion.div
            className="architecture-notes"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerGroup}
          >
            {data.notes.map((note) => (
              <motion.article
                className="architecture-note"
                key={note.title}
                variants={cardReveal}
                transition={{ duration: 0.42, ease: easing }}
              >
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </motion.article>
            ))}
          </motion.div>
        ) : null}
      </div>
    </motion.section>
  );
}

export function TimelineSection({ data }) {
  return (
    <motion.section
      className="section-shell timeline-shell"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionReveal}
      transition={{ duration: 0.62, ease: easing }}
    >
      <div className="section-inner">
        <SectionLead eyebrow={data.eyebrow} heading={data.heading} text={data.text} align="center" />
        <motion.div
          className="timeline-track"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerGroup}
        >
          {data.items?.map((item, index) => (
            <motion.article
              className="timeline-card"
              key={item.title}
              variants={cardReveal}
              transition={{ duration: 0.46, ease: easing }}
            >
              <span className="timeline-marker">{item.label || String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export function FloatingWhatsApp({ href }) {
  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Valsii on WhatsApp"
    >
      <MessageCircle size={20} />
      <span>WhatsApp</span>
    </a>
  );
}

export function CinematicBackdrop() {
  return (
    <div className="cinematic-backdrop" aria-hidden="true">
      <span className="backdrop-orb orb-one" />
      <span className="backdrop-orb orb-two" />
      <span className="backdrop-orb orb-three" />
    </div>
  );
}
