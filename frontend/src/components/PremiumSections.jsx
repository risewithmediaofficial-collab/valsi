import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock3,
  Droplets,
  CalendarClock,
  MessageCircle,
  PackageCheck,
  Phone,
  Route,
  Sprout,
  SunMedium,
  Users,
  Wheat,
  XCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  BookOpen,
  Brain,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Droplets,
  MessageCircle,
  PackageCheck,
  Phone,
  Route,
  Sprout,
  SunMedium,
  Users,
  Wheat,
  XCircle,
};
const imageWidths = [640, 960, 1280, 1600, 2200];

function SmartLink({ to, className, children }) {
  if (to?.startsWith('http')) {
    return (
      <a href={to} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return <Link to={to} className={className}>{children}</Link>;
}

function imageUrl(src, width = 1200) {
  if (!src) return '';
  if (!src.includes('images.unsplash.com')) {
    return src;
  }
  const url = new URL(src);
  url.searchParams.set('auto', 'format');
  url.searchParams.set('fit', 'crop');
  url.searchParams.set('w', String(width));
  url.searchParams.set('q', width > 1600 ? '78' : '82');
  return url.toString();
}

function imageSet(src) {
  if (!src.includes('images.unsplash.com')) return undefined;
  return imageWidths.map((width) => `${imageUrl(src, width)} ${width}w`).join(', ');
}

export function OptimizedImage({
  src,
  alt = '',
  className = '',
  loading = 'lazy',
  sizes = '(min-width: 980px) 50vw, 100vw',
  position = 'center',
  width,
  height,
  ...props
}) {
  return (
    <img
      src={imageUrl(src, 1280)}
      srcSet={imageSet(src)}
      sizes={sizes}
      alt={alt}
      loading={loading}
      decoding="async"
      fetchPriority={loading === 'eager' ? 'high' : 'auto'}
      width={width}
      height={height}
      className={className}
      style={{ objectPosition: position }}
      {...props}
    />
  );
}

function BackdropImage({ src, alt = '', eager = false, position = 'center' }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      sizes="100vw"
      position={position}
      className="parallax-image"
    />
  );
}

export function CinematicBackdrop() {
  return (
    <>
      <div className="grain-layer" aria-hidden="true" />
      <div className="particle-field" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index} style={{ '--i': index }} />
        ))}
      </div>
    </>
  );
}

export function HeroSection({
  eyebrow,
  title,
  text,
  image,
  imageAlt = '',
  imagePosition = 'center',
  primary = ['Explore solutions', '/solutions'],
  secondary = ['Learn more', '/learn'],
}) {
  function handlePointerMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5).toFixed(3);
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5).toFixed(3);
    event.currentTarget.style.setProperty('--cursor-x', x);
    event.currentTarget.style.setProperty('--cursor-y', y);
  }

  function handlePointerLeave(event) {
    event.currentTarget.style.setProperty('--cursor-x', '0');
    event.currentTarget.style.setProperty('--cursor-y', '0');
  }

  return (
    <section className="hero-section image-depth interactive-field" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      <BackdropImage src={image} alt={imageAlt} eager position={imagePosition} />
      <div className="hero-shade" />
      <div className="light-sweep" aria-hidden="true" />
      <div className="section-inner hero-content reveal">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="button-row">
          <SmartLink to={primary[1]} className="premium-button">
            {primary[0]} <ArrowRight size={18} />
          </SmartLink>
          <SmartLink to={secondary[1]} className="quiet-button">{secondary[0]}</SmartLink>
        </div>
      </div>
    </section>
  );
}

export function ImageSection({ eyebrow, title, text, image, imageAlt = '', imagePosition = 'center', reverse = false, children }) {
  return (
    <section className="cinematic-section">
      <div className={`section-inner split-section ${reverse ? 'is-reverse' : ''}`}>
        <div className="copy-block reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{text}</p>
          {children}
        </div>
        <figure className="image-frame reveal image-depth">
          <OptimizedImage src={image} alt={imageAlt} position={imagePosition} />
        </figure>
      </div>
    </section>
  );
}

export function StoryRail({ items }) {
  return (
    <section className="cinematic-section compact">
      <div className="section-inner">
        <div className="section-heading reveal">
          <span className="eyebrow">Story arc</span>
          <h2>Origin to growth to future.</h2>
        </div>
        <div className="story-rail">
          {items.map((item, index) => (
            <article className="story-step reveal" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessRail({ eyebrow = 'Process', title, items }) {
  return (
    <section className="cinematic-section compact">
      <div className="section-inner">
        <div className="section-heading reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <div className="story-rail">
          {items.map((item, index) => (
            <article className="story-step reveal" key={item.title}>
              <span>{item.step || String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureCards({ eyebrow = 'Highlights', title, items }) {
  return (
    <section className="cinematic-section warm-band">
      <div className="section-inner">
        <div className="section-heading reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <div className="feature-grid">
          {items.map((item) => {
            const Icon = iconMap[item.icon] || Sprout;
            return (
              <article className="feature-card reveal" key={item.title}>
                {item.image && (
                  <OptimizedImage
                    src={item.image}
                    alt={item.alt || item.title}
                    sizes="(min-width: 980px) 33vw, (min-width: 640px) 50vw, 100vw"
                    position={item.position || 'center'}
                  />
                )}
                <div className="feature-card-body">
                  <span className="icon-chip"><Icon size={20} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ContentCards({ eyebrow = 'Highlights', title, items, columns = 'three', warm = false }) {
  return (
    <section className={`cinematic-section ${warm ? 'warm-band' : ''}`}>
      <div className="section-inner">
        <div className="section-heading reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <div className={`content-grid content-grid-${columns}`}>
          {items.map((item) => {
            const Icon = iconMap[item.icon] || CheckCircle2;
            return (
              <article className="content-card reveal" key={item.title}>
                <span className={`icon-chip ${item.tone === 'negative' ? 'is-negative' : ''}`}>
                  <Icon size={20} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.items && (
                  <ul className="premium-list">
                    {item.items.map((line) => <li key={line}>{line}</li>)}
                  </ul>
                )}
                {item.link && (
                  <SmartLink className="inline-action" to={item.link[1]}>
                    {item.link[0]} <ArrowRight size={16} />
                  </SmartLink>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function QuotePanel({ quote, byline }) {
  return (
    <section className="reading-panel">
      <div className="section-inner narrow reveal">
        <blockquote className="quote-panel">
          <p>{quote}</p>
          {byline && <cite>{byline}</cite>}
        </blockquote>
      </div>
    </section>
  );
}

export function FAQSection({ title = 'Frequently Asked Questions', eyebrow = 'FAQ', subtitle, items }) {
  return (
    <section className="cinematic-section warm-band">
      <div className="section-inner">
        <div className="section-heading reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        <div className="faq-list">
          {items.map((item) => (
            <article className="faq-item reveal" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountNumber({ value }) {
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);
  const number = useMemo(() => Number.parseInt(value, 10) || 0, [value]);
  const suffix = String(value).replace(String(number), '');

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const duration = 1400;
      const tick = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(Math.round(number * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.45 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [number]);

  return <strong ref={ref}>{current}{suffix}</strong>;
}

export function StatsBlock({ stats }) {
  return (
    <section className="cinematic-section compact">
      <div className="section-inner stats-grid">
        {stats.map((stat) => (
          <article className="stat-card reveal" key={stat.label}>
            <CountNumber value={stat.value} />
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CTASection({ title, text, image, imageAlt = '', imagePosition = 'center', cta = ['Contact us', '/contact'] }) {
  return (
    <section className="cta-section image-depth">
      <BackdropImage src={image} alt={imageAlt} position={imagePosition} />
      <div className="hero-shade" />
      <div className="light-sweep" aria-hidden="true" />
      <div className="section-inner cta-content reveal">
        <h2>{title}</h2>
        <p>{text}</p>
        <SmartLink to={cta[1]} className="premium-button">{cta[0]} <ArrowRight size={18} /></SmartLink>
      </div>
    </section>
  );
}

export function PageIntro({ eyebrow, title, text }) {
  return (
    <section className="page-intro" aria-labelledby={`page-title-${title.replace(/\W+/g, '-').toLowerCase()}`}>
      <div className="section-inner narrow reveal">
        <span className="eyebrow">{eyebrow}</span>
        <h1 id={`page-title-${title.replace(/\W+/g, '-').toLowerCase()}`}>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
