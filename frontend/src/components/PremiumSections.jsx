import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock3,
  Droplets,
  CalendarClock,
  DollarSign,
  Leaf,
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
  DollarSign,
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

function imageUrl(src) {
  if (!src) return '';
  return src;
}

function imageSet() {
  return undefined;
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
  const [loaded, setLoaded] = useState(() => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false);

  useEffect(() => {
    let progress = 0;
    const root = document.documentElement;
    const cursor = document.querySelector('.custom-cursor');
    const counter = document.querySelector('.preloader-count');
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    const loader = reduceMotion
      ? undefined
      : window.setInterval(() => {
          progress = Math.min(progress + Math.ceil(Math.random() * 12), 100);
          if (counter) counter.textContent = `${progress}%`;
          if (progress >= 100) {
            window.clearInterval(loader);
            window.setTimeout(() => setLoaded(true), 220);
          }
        }, 58);

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

    const observedRevealNodes = new Set();
    const observedCountNodes = new Set();
    const interactiveNodes = new Set();
    const magneticNodes = new Set();

    const observeRevealNodes = () => {
      document.querySelectorAll('.reveal, .zoom-reveal').forEach((node) => {
        if (observedRevealNodes.has(node)) return;
        observedRevealNodes.add(node);
        revealObserver.observe(node);
      });
    };

    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.target.dataset.counted === 'true') return;
        entry.target.dataset.counted = 'true';
        const target = Number(entry.target.dataset.target || 0);
        const suffix = entry.target.dataset.suffix || '';
        const start = performance.now();
        const tick = (time) => {
          const progressValue = Math.min((time - start) / 1300, 1);
          const eased = 1 - Math.pow(1 - progressValue, 3);
          entry.target.textContent = `${Math.round(target * eased)}${suffix}`;
          if (progressValue < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.45 });

    const observeCountNodes = () => {
      document.querySelectorAll('[data-countup]').forEach((node) => {
        if (observedCountNodes.has(node)) return;
        observedCountNodes.add(node);
        countObserver.observe(node);
      });
    };

    let lastX = 0, lastY = 0;
    const moveCursor = (event) => {
      if (Math.abs(event.clientX - lastX) < 5 && Math.abs(event.clientY - lastY) < 5) return;
      lastX = event.clientX;
      lastY = event.clientY;
      root.style.setProperty('--mouse-x', `${event.clientX}px`);
      root.style.setProperty('--mouse-y', `${event.clientY}px`);
    };

    const growCursor = () => cursor?.classList.add('is-hovering');
    const shrinkCursor = () => cursor?.classList.remove('is-hovering');
    const bindInteractiveNodes = () => {
      document.querySelectorAll('a, button, .editorial-card, .process-step, .quote-card').forEach((node) => {
        if (interactiveNodes.has(node)) return;
        interactiveNodes.add(node);
        node.addEventListener('pointerenter', growCursor);
        node.addEventListener('pointerleave', shrinkCursor);
      });
    };

    const moveMagnet = (event) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 16;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 16;
      event.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
    };
    const resetMagnet = (event) => {
      event.currentTarget.style.transform = '';
    };
    const bindMagneticNodes = () => {
      document.querySelectorAll('.magnetic').forEach((node) => {
        if (magneticNodes.has(node)) return;
        magneticNodes.add(node);
        node.addEventListener('pointermove', moveMagnet);
        node.addEventListener('pointerleave', resetMagnet);
      });
    };

    const hydrateInteractions = () => {
      observeRevealNodes();
      observeCountNodes();
      bindInteractiveNodes();
      bindMagneticNodes();
    };

    const mutationObserver = new MutationObserver(hydrateInteractions);
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    hydrateInteractions();

    const onScroll = () => root.style.setProperty('--scroll-parallax', String(window.scrollY * -0.035));

    window.addEventListener('pointermove', moveCursor, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      if (loader) window.clearInterval(loader);
      revealObserver.disconnect();
      countObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('pointermove', moveCursor);
      window.removeEventListener('scroll', onScroll);
      interactiveNodes.forEach((node) => {
        node.removeEventListener('pointerenter', growCursor);
        node.removeEventListener('pointerleave', shrinkCursor);
      });
      magneticNodes.forEach((node) => {
        node.removeEventListener('pointermove', moveMagnet);
        node.removeEventListener('pointerleave', resetMagnet);
      });
    };
  }, []);

  return (
    <>
      <div className={`preloader ${loaded ? 'is-hidden' : ''}`} aria-hidden={loaded ? 'true' : 'false'}>
        <span className="preloader-mark"><Leaf size={24} /></span>
        <span className="preloader-count">0%</span>
      </div>
      <div className="custom-cursor" aria-hidden="true" />
      <div className="grain-layer" aria-hidden="true" />
    </>
  );
}

export function BotanicalMark() {
  return (
    <div className="botanical-mark" aria-hidden="true">
      <svg viewBox="0 0 180 180" role="img">
        <path d="M90 86C62 58 62 26 90 10c28 16 28 48 0 76Z" />
        <path d="M94 90c28-28 60-28 76 0-16 28-48 28-76 0Z" />
        <path d="M90 94c28 28 28 60 0 76-28-16-28-48 0-76Z" />
        <path d="M86 90c-28 28-60 28-76 0 16-28 48-28 76 0Z" />
        <circle cx="90" cy="90" r="14" />
      </svg>
    </div>
  );
}

function OrganicDivider() {
  return (
    <div className="organic-divider" aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0 72c143-58 274-58 394 0s250 58 390 0 277-58 410 0 212 58 246 28v20H0Z" />
      </svg>
    </div>
  );
}

export function MarqueeTicker() {
  const line = 'EXPLORE NATURE / DISCOVER KNOWLEDGE / GROW TOGETHER /';
  return (
    <section className="marquee-section" aria-label="Valsii values">
      <div className="marquee-track">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index}>
            {line}
            <Leaf className="marquee-leaf" size={28} />
          </span>
        ))}
      </div>
    </section>
  );
}

export function EditorialHero({ eyebrow, title, text, image, imageAlt = '', imagePosition = 'center' }) {
  return (
    <section className="editorial-hero cinematic-split-hero">
      <div className="section-inner editorial-hero-inner">
        <div className="hero-copy-panel">
          <span className="eyebrow reveal">{eyebrow}</span>
          <div className="hero-title-wrap">
            <h1 className="reveal">{title}</h1>
          </div>
          <p className="reveal">{text}</p>
          <a href="#editorial-cards" className="scroll-cue magnetic" aria-label="Scroll to services">
            <ArrowDown size={28} />
          </a>
        </div>
        {image && (
          <figure className="hero-media-panel reveal image-depth">
            <OptimizedImage src={image} alt={imageAlt} position={imagePosition} sizes="(min-width: 980px) 50vw, 100vw" />
          </figure>
        )}
      </div>
      <OrganicDivider />
    </section>
  );
}

export function EditorialCards({ eyebrow, title, items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="cinematic-section editorial-cards-section" id="editorial-cards">
      <div className="section-inner">
        <div className="section-heading reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <div className="editorial-card-stack">
          {items.map((item, index) => {
            const expanded = openIndex === index;
            return (
              <article className={`editorial-card zoom-reveal ${expanded ? 'is-open' : ''}`} key={item.title}>
                <OptimizedImage src={item.image} alt={item.alt || item.title} position={item.position || 'center'} sizes="100vw" />
                <div className="editorial-card-overlay" />
                <span className="editorial-card-number">{String(index + 1).padStart(2, '0')}</span>
                <div className="editorial-card-body">
                  <span className="eyebrow">{item.kicker}</span>
                  <h3>{item.title}</h3>
                  <button type="button" className="accordion-trigger magnetic" onClick={() => setOpenIndex(expanded ? -1 : index)} aria-expanded={expanded}>
                    {expanded ? 'Close' : 'Explore'} <ArrowRight size={17} />
                  </button>
                  <div className="accordion-content">
                    <dl>
                      <div>
                        <dt>What it is</dt>
                        <dd>{item.what}</dd>
                      </div>
                      <div>
                        <dt>How it helps</dt>
                        <dd>{item.how}</dd>
                      </div>
                      <div>
                        <dt>Key features</dt>
                        <dd>{item.features}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function EditorialProcess({ eyebrow, title, items }) {
  const [active, setActive] = useState(0);

  return (
    <section className="cinematic-section process-section">
      <div className="section-inner">
        <div className="section-heading reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <div className="process-grid">
          {items.map((item, index) => (
            <article className={`process-step reveal ${active === index ? 'is-active' : ''}`} key={item.title} onClick={() => setActive(index)}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <OptimizedImage src={item.image} alt="" position={item.position || 'center'} sizes="(min-width: 980px) 25vw, 100vw" />
            </article>
          ))}
        </div>
      </div>
      <OrganicDivider />
    </section>
  );
}

export function EditorialQuotes({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const goTo = useCallback((index) => {
    const nextIndex = Math.max(0, Math.min(items.length - 1, index));
    const slider = sliderRef.current;
    const card = slider?.querySelector(`[data-quote-index="${nextIndex}"]`);
    setActiveIndex(nextIndex);
    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }, [items.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') goTo(activeIndex - 1);
      if (event.key === 'ArrowRight') goTo(activeIndex + 1);
    };
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('keydown', handleKeyDown);
      return () => slider.removeEventListener('keydown', handleKeyDown);
    }
  }, [activeIndex, goTo]);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const cards = Array.from(slider.querySelectorAll('[data-quote-index]'));
    const current = cards.reduce((closest, card) => {
      const distance = Math.abs(card.offsetLeft - slider.scrollLeft);
      return distance < closest.distance ? { index: Number(card.dataset.quoteIndex), distance } : closest;
    }, { index: 0, distance: Number.POSITIVE_INFINITY });
    setActiveIndex(current.index);
  };

  const handlePointerDown = (event) => {
    const slider = sliderRef.current;
    if (!slider || event.pointerType === 'touch') return;
    dragState.current = { active: true, startX: event.clientX, scrollLeft: slider.scrollLeft };
    slider.setPointerCapture(event.pointerId);
    slider.classList.add('is-dragging');
  };

  const handlePointerMove = (event) => {
    const slider = sliderRef.current;
    if (!slider || !dragState.current.active) return;
    slider.scrollLeft = dragState.current.scrollLeft - (event.clientX - dragState.current.startX);
  };

  const stopDrag = (event) => {
    const slider = sliderRef.current;
    if (!slider || !dragState.current.active) return;
    dragState.current.active = false;
    slider.classList.remove('is-dragging');
    if (slider.hasPointerCapture?.(event.pointerId)) slider.releasePointerCapture(event.pointerId);
  };

  return (
    <section className="quote-carousel-section">
      <div className="quote-section-inner">
        <div className="quote-section-heading reveal">
          <span className="eyebrow">Voices</span>
          <h2>What the Valsii network says.</h2>
        </div>
        <div className="quote-controls" aria-label="Quote navigation">
          <button type="button" aria-label="Previous quote" onClick={() => goTo(activeIndex - 1)}>
            <ArrowLeft size={18} />
          </button>
          <button type="button" aria-label="Next quote" onClick={() => goTo(activeIndex + 1)}>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div
        className="quote-slider"
        aria-label="Testimonials"
        ref={sliderRef}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        onPointerLeave={stopDrag}
      >
        {items.map((item, index) => (
          <blockquote
            className="quote-card reveal"
            key={item.author}
            data-quote-index={index}
            style={{ '--quote-delay': `${index * 0.1}s` }}
          >
            <div className="quote-card-copy">
              <span className="quote-mark" aria-hidden="true">"</span>
              <p>{item.quote}</p>
              <div className="quote-divider" aria-hidden="true" />
              <div className="quote-author">
                <span>{item.author}</span>
                <cite>{item.role}</cite>
              </div>
            </div>
          </blockquote>
        ))}
      </div>
      <div className="quote-dots" aria-label="Quote progress">
        {items.map((item, index) => (
          <button
            type="button"
            key={item.author}
            className={index === activeIndex ? 'is-active' : ''}
            aria-label={`Show quote ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  );
}

export function MinimalCards({ eyebrow, title, items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  const handleKeyDown = (event, index) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    toggleCard(index);
  };

  return (
    <section className="cinematic-section minimal-card-section">
      <div className="section-inner">
        <div className="section-heading reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>

        <div className={`minimal-card-grid ${activeIndex !== null ? 'is-focused' : ''}`}>
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <article
                className={`minimal-card ${isActive ? 'is-active' : ''} ${activeIndex !== null && !isActive ? 'is-muted' : ''}`}
                key={item.title}
                tabIndex={0}
                role="button"
                aria-expanded={isActive}
                aria-label={`${item.title}. ${isActive ? 'Collapse details' : 'Expand details'}`}
                onPointerEnter={(event) => {
                  if (event.pointerType !== 'touch') setActiveIndex(index);
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType !== 'touch') setActiveIndex(null);
                }}
                onFocus={() => {
                  if (window.matchMedia?.('(hover: hover)').matches) setActiveIndex(index);
                }}
                onBlur={() => setActiveIndex(null)}
                onClick={() => {
                  if (!window.matchMedia?.('(hover: hover)').matches) toggleCard(index);
                }}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                {item.image && (
                  <figure className="minimal-card-media">
                    <OptimizedImage
                      src={item.image}
                      alt={item.alt || item.title}
                      position={item.position || 'center'}
                      sizes="(min-width: 1180px) 340px, (min-width: 760px) 42vw, 86vw"
                    />
                    <div className="minimal-card-shade" aria-hidden="true" />
                  </figure>
                )}
                <div className="minimal-card-copy">
                  <span className="minimal-card-kicker">{item.kicker || item.label || 'Valsii system'}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description || item.text || item.what}</p>
                  <div className="minimal-card-reveal" aria-hidden={!isActive}>
                    <dl>
                      <div>
                        <dt>Model</dt>
                        <dd>{item.how || item.description || item.text}</dd>
                      </div>
                      <div>
                        <dt>Focus</dt>
                        <dd>{item.features || (item.tags || []).join(', ')}</dd>
                      </div>
                    </dl>
                    <div className="minimal-card-tags" aria-label={`${item.title} tags`}>
                      {(item.tags || []).slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <div className="minimal-card-actions" aria-hidden="true">
                      <span>Explore <ArrowRight size={15} /></span>
                      <span>Details</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HorizontalSlideCards({ eyebrow, title, items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef(null);
  const wheelLock = useRef(false);

  const goTo = (index) => {
    const nextIndex = Math.max(0, Math.min(index, items.length - 1));
    setActiveIndex(nextIndex);
  };

  const goNext = () => goTo(activeIndex + 1);
  const goPrev = () => goTo(activeIndex - 1);

  function handleWheel(event) {
    if (Math.abs(event.deltaY) < 18 || wheelLock.current) return;
    wheelLock.current = true;
    if (event.deltaY > 0) goNext();
    else goPrev();
    window.setTimeout(() => {
      wheelLock.current = false;
    }, 640);
  }

  function handleTouchStart(event) {
    touchStart.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (touchStart.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 42) {
      if (delta < 0) goNext();
      else goPrev();
    }
    touchStart.current = null;
  }

  return (
    <section className="cinematic-section slide-card-section">
      <div className="section-inner">
        <div className="section-heading reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>

        <div
          className="slide-card-shell reveal"
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="slide-card-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {items.map((item, index) => (
              <article className="slide-card" key={item.title}>
                <figure className="slide-card-image">
                  <OptimizedImage src={item.image} alt={item.alt || item.title} position={item.position || 'center'} sizes="100vw" />
                </figure>
                <div className="slide-card-body">
                  <span className="slide-card-number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description || item.text || item.what}</p>
                    <div className="slide-card-tags" aria-label={`${item.title} tags`}>
                      {(item.tags || []).map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="slide-card-dots" aria-label="Card navigation">
          {items.map((item, index) => (
            <button
              type="button"
              key={item.title}
              className={index === activeIndex ? 'is-active' : ''}
              aria-label={`Show ${item.title}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
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
    <section className="hero-section cinematic-split-hero interactive-field" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      <div className="section-inner hero-split-shell">
        <div className="hero-content reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{text}</p>
          <div className="button-row">
            <SmartLink to={primary[1]} className="premium-button magnetic">
              {primary[0]} <ArrowRight size={18} />
            </SmartLink>
            <SmartLink to={secondary[1]} className="quiet-button magnetic">{secondary[0]}</SmartLink>
          </div>
        </div>
        <figure className="hero-media-panel reveal">
          <OptimizedImage src={image} alt={imageAlt} eager position={imagePosition} sizes="(min-width: 980px) 50vw, 100vw" />
        </figure>
      </div>
    </section>
  );
}

export function ImageSection({ eyebrow, title, text, image, imageAlt = '', imagePosition = 'center', reverse = false, children }) {
  return (
    <section className={`cinematic-section editorial-image-section ${reverse ? 'editorial-image-section--reverse' : ''}`}>
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
    <section className="cinematic-section compact workflow-section">
      <div className="section-inner">
        <div className="section-heading reveal">
          <span className="eyebrow">Story arc</span>
          <h2>Origin to growth to future.</h2>
        </div>
        <div className="story-rail workflow-rail">
          {items.map((item, index) => (
            <article className="story-step workflow-step reveal" key={item.title}>
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
    <section className="cinematic-section warm-band feature-section">
      <div className="section-inner">
        <div className="section-heading reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <div className="feature-grid">
          {items.map((item) => {
            const Icon = iconMap[item.icon] || Sprout;
            return (
              <article className="feature-card reveal magnetic" key={item.title}>
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

export function ContentCards({ eyebrow = 'Highlights', title, items, columns = 'three', warm = false, variant = 'ledger' }) {
  return (
    <section className={`cinematic-section content-system-section content-system-${variant} ${warm ? 'warm-band' : ''}`}>
      <div className="section-inner">
        <div className="section-heading reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <div className={`content-grid content-grid-${columns} content-grid-${variant} ${warm ? 'content-grid--warm' : ''}`}>
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || CheckCircle2;
            return (
              <article className={`content-card ${item.tone === 'negative' ? 'content-card--caution' : ''} ${item.items?.length ? 'content-card--detailed' : ''} reveal`} style={{ '--card-index': index }} key={item.title}>
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
    <section className="cinematic-section compact stats-section">
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

export function TimelineStory({ eyebrow, title, items, variant = 'vertical' }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpanded = useCallback((index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  }, [expandedIndex]);

  return (
    <section className="timeline-story-section">
      <div className="section-inner">
        <div className="section-heading reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>

        <div className={`timeline-container timeline-${variant}`}>
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || Sprout;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={item.title}
                className={`timeline-item reveal ${isExpanded ? 'is-expanded' : ''}`}
                onClick={() => toggleExpanded(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleExpanded(index);
                  }
                }}
              >
                <div className="timeline-marker">
                  <div className="timeline-icon">
                    <Icon size={24} />
                  </div>
                  <div className="timeline-number">{String(index + 1).padStart(2, '0')}</div>
                </div>

                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p className="timeline-description">{item.description || item.text}</p>

                  {item.details && (
                    <details className={`timeline-details ${isExpanded ? 'open' : ''}`}>
                      <summary className="timeline-summary">
                        {item.details.title || 'Learn more'}
                      </summary>
                      <div className="timeline-details-content">
                        {item.details.text && <p>{item.details.text}</p>}
                        {item.details.points && (
                          <ul className="timeline-points">
                            {item.details.points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </details>
                  )}

                  {item.image && (
                    <figure className="timeline-image">
                      <OptimizedImage
                        src={item.image}
                        alt={item.title}
                        sizes="(min-width: 980px) 45vw, (min-width: 640px) 80vw, 100vw"
                      />
                    </figure>
                  )}

                  {item.tags && (
                    <div className="timeline-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="timeline-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
