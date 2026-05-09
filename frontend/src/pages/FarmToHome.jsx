import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2, Leaf, PackageCheck, Route, ShieldCheck, Sprout, Users, Wheat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { farmToHomeTimeline, images, productCategories } from '../data/siteContent';

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    eyebrow: 'Farm-to-Home',
    title: 'Honest food supply, filmed like a living system.',
    text: 'Farmers, trained handlers, and families connected through clear sourcing, fair pricing, and repeat trust.',
    image: images.delivery,
    align: 'left',
    meta: ['Direct supply', 'Clear pricing', 'Trained handling'],
  },
  {
    eyebrow: 'The Problem',
    title: 'Markets move fast. Trust moves slowly.',
    text: 'Farmers need stable access. Families need visible quality. Young people need real product-based field experience.',
    image: images.farmer,
    align: 'right',
    meta: ['Market access', 'Quality clarity', 'Field work'],
  },
  {
    eyebrow: 'The Model',
    title: 'No retail noise. Just product movement with responsibility.',
    text: 'Products are sourced, checked, explained, and delivered through a disciplined process instead of pressure selling.',
    image: images.supply,
    align: 'left',
    meta: ['Source', 'Check', 'Deliver'],
  },
  {
    eyebrow: 'Daily Essentials',
    title: 'Repeat demand creates a steadier rhythm.',
    text: 'Rice, oils, vegetables, spices, and core home essentials keep the system practical and grounded.',
    image: images.essentials,
    align: 'right',
    meta: productCategories.map((item) => item.title),
  },
];

const principles = [
  { icon: Wheat, label: 'Source', text: 'Direct farmer relationships and seasonal understanding.' },
  { icon: ShieldCheck, label: 'Check', text: 'Quality inspection before products move forward.' },
  { icon: Users, label: 'Prepare', text: 'Trained people handle, explain, and serve responsibly.' },
  { icon: Route, label: 'Deliver', text: 'Clear home supply with direct customer feedback.' },
];

const boundaries = [
  'Not quick-profit trading',
  'Not inventory dumping',
  'Not random selling',
  'Not MLM retail hype',
];

export default function FarmToHome() {
  const pageRef = useRef(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.cinema-scene').forEach((section) => {
        const image = section.querySelector('.cinema-scene-bg img');
        const copy = section.querySelectorAll('.cinema-kicker, .cinema-title, .cinema-copy, .cinema-meta, .cinema-action');

        gsap.fromTo(copy, { y: 42, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: reduceMotion ? 0.01 : 0.9,
          stagger: reduceMotion ? 0 : 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 68%',
            end: 'center 42%',
            toggleActions: 'play none none reverse',
          },
        });

        if (!reduceMotion) {
          gsap.fromTo(image, { scale: 1.06 }, {
            scale: 1.015,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 72%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main className="farm-cinema-page" ref={pageRef}>
      {scenes.map((scene, index) => (
        <section className={`cinema-scene cinema-scene--${scene.align}`} key={scene.title}>
          <figure className="cinema-scene-bg" aria-hidden="true">
            <img src={scene.image} alt="" loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
          </figure>
          <div className="cinema-noise" aria-hidden="true" />
          <div className="cinema-ambient" aria-hidden="true" />
          <div className="cinema-vignette" aria-hidden="true" />
          <div className="cinema-inner">
            <motion.span
              className="cinema-kicker"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index === 0 ? 0.25 : 0 }}
            >
              {scene.eyebrow}
            </motion.span>
            <h1 className="cinema-title">{scene.title}</h1>
            <p className="cinema-copy">{scene.text}</p>
            <div className="cinema-meta" aria-label={`${scene.title} highlights`}>
              {scene.meta.map((item) => <span key={item}>{item}</span>)}
            </div>
            {index === 0 && (
              <Link className="cinema-action" to="/contact">
                Start with an introduction <ArrowRight size={18} />
              </Link>
            )}
          </div>
        </section>
      ))}

      <section className="cinema-scene cinema-process-scene">
        <figure className="cinema-scene-bg" aria-hidden="true">
          <img src={images.crops} alt="" loading="lazy" decoding="async" />
        </figure>
        <div className="cinema-noise" aria-hidden="true" />
        <div className="cinema-ambient" aria-hidden="true" />
        <div className="cinema-vignette" aria-hidden="true" />
        <div className="cinema-inner cinema-inner--wide">
          <span className="cinema-kicker">Supply Flow</span>
          <h2 className="cinema-title">A clear movement from farm to doorstep.</h2>
          <div className="cinema-process-line">
            {farmToHomeTimeline.slice(0, 6).map((item, index) => (
              <article className="cinema-step" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cinema-scene cinema-principles-scene">
        <figure className="cinema-scene-bg" aria-hidden="true">
          <img src={images.fieldHands} alt="" loading="lazy" decoding="async" />
        </figure>
        <div className="cinema-noise" aria-hidden="true" />
        <div className="cinema-ambient" aria-hidden="true" />
        <div className="cinema-vignette" aria-hidden="true" />
        <div className="cinema-inner cinema-inner--wide">
          <span className="cinema-kicker">Trained Handling</span>
          <h2 className="cinema-title">Products move through people who understand responsibility.</h2>
          <div className="cinema-principles">
            {principles.map(({ icon: Icon, label, text }) => (
              <article className="cinema-principle" key={label}>
                <Icon size={24} />
                <h3>{label}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cinema-scene cinema-final-scene">
        <figure className="cinema-scene-bg" aria-hidden="true">
          <img src={images.landscape} alt="" loading="lazy" decoding="async" />
        </figure>
        <div className="cinema-noise" aria-hidden="true" />
        <div className="cinema-ambient" aria-hidden="true" />
        <div className="cinema-vignette" aria-hidden="true" />
        <div className="cinema-inner">
          <span className="cinema-kicker">Boundaries</span>
          <h2 className="cinema-title">Built for stable trust, not hype.</h2>
          <p className="cinema-copy">Start with a calm introduction, understand the model clearly, and choose the next step only when it makes sense.</p>
          <div className="cinema-meta">
            {boundaries.map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="cinema-final-actions">
            <Link className="cinema-action" to="/contact">
              Contact for introduction <ArrowRight size={18} />
            </Link>
            <Link className="cinema-secondary-action" to="/skillnet-mastery">
              SkillNet Mastery
            </Link>
          </div>
        </div>
        <div className="cinema-orbit" aria-hidden="true">
          <Leaf size={30} />
          <PackageCheck size={30} />
          <CheckCircle2 size={30} />
          <Sprout size={30} />
        </div>
      </section>
    </main>
  );
}
