import { CTASection, ImageSection, OptimizedImage, PageIntro, StatsBlock } from '../components/PremiumSections';
import { caseStudies, images } from '../data/siteContent';

const stats = [
  { value: '42%', label: 'clearer field records in pilot learning groups' },
  { value: '18+', label: 'seasonal practices converted into repeatable steps' },
  { value: '3x', label: 'more confidence in supply communication' },
  { value: '120+', label: 'farmers, learners, and operators included in research' },
];

export default function Impact() {
  return (
    <>
      <PageIntro
        eyebrow="Impact"
        title="Measured through better decisions, stronger trust, and visible progress."
        text="Our impact work shows what changed, who benefited, and what can improve next."
      />
      <StatsBlock stats={stats} />
      <ImageSection
        eyebrow="Before and after"
        title="From scattered field knowledge to shared understanding."
        text="The first change is often simple: teams start using the same words for the field, season, quality, and customer promise."
        image={images.soil}
        imageAlt="Rich soil texture showing regenerative agriculture benefits"
      />
      <section className="cinematic-section warm-band">
        <div className="section-inner">
          <div className="section-heading reveal">
            <span className="eyebrow">Case studies</span>
            <h2>Small changes that grow over time.</h2>
          </div>
          <div className="case-grid">
            {caseStudies.map((study) => (
              <article className="case-card reveal" key={study.title}>
                <OptimizedImage
                  src={study.image}
                  alt={study.title}
                  sizes="(min-width: 980px) 50vw, 100vw"
                  position={study.position}
                />
                <div>
                  <h3>{study.title}</h3>
                  <p>{study.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Make your impact easier to see and trust."
        text="We help turn field realities into clear stories, systems, and proof."
        image={images.landscape}
      />
    </>
  );
}
