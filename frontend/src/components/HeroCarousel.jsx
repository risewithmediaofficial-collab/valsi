import { useEffect, useRef, useState, useCallback } from 'react';

const INTERVAL = 3000;

export default function HeroCarousel({ slides }) {
  const [current, setCurrent]   = useState(0);
  const [paused, setPaused]     = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length);
  }, [slides.length]);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    if (!paused) {
      timerRef.current = setInterval(() => {
        setCurrent((c) => (c + 1) % slides.length);
      }, INTERVAL);
    }
  }, [paused, slides.length]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const handleDotClick = (index) => {
    goTo(index);
    resetTimer();
  };

  return (
    <section
      className="hero-carousel"
      aria-label="Featured image carousel"
      onMouseEnter={() => { setPaused(true);  clearInterval(timerRef.current); }}
      onMouseLeave={() => { setPaused(false); resetTimer(); }}
    >
      {/* Track */}
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
        aria-live="polite"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="carousel-slide"
            aria-hidden={i !== current}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              style={{ objectPosition: slide.position || 'center 30%' }}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="carousel-dots" role="tablist" aria-label="Carousel slide indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            id={`carousel-dot-${i}`}
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </section>
  );
}
