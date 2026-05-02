import { CTASection, ImageSection, OptimizedImage, PageIntro, StatsBlock } from '../components/PremiumSections';
import { caseStudies, images } from '../data/siteContent';

const stats = [
  { value: '42%', label: 'clearer field documentation in pilot learning groups' },
  { value: '18+', label: 'seasonal practices mapped into repeatable playbooks' },
  { value: '3x', label: 'more confidence in partner-facing supply communication' },
  { value: '120+', label: 'farmers, learners, and operators represented in research' },
];

export default function Impact() {
  return (
    <>
      <PageIntro
        eyebrow="Impact"
        title="Measured in healthier decisions, stronger trust, and visible progress."
        text="Our impact work balances elegant storytelling with practical evidence: what changed, who benefited, and what can keep improving."
      />
      <StatsBlock stats={stats} />
      <ImageSection
        eyebrow="Before and after"
        title="From scattered field knowledge to shared operating clarity."
        text="The first change is often simple: teams begin seeing the same field, season, quality signal, and customer promise with a shared language."
        image={images.soil}
        imageAlt="Rich soil texture showing regenerative agriculture benefits"
      />
      <section className="cinematic-section warm-band">
        <div className="section-inner">
          <div className="section-heading reveal">
            <span className="eyebrow">Case studies</span>
            <h2>Quiet changes that compound.</h2>
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
        title="Make your impact easier to see and believe."
        text="We help translate field realities into evidence-rich stories, systems, and experiences."
        image={images.landscape}
      />
    </>
  );
}
