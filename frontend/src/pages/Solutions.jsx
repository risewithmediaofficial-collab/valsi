import { CTASection, FeatureCards, ImageSection, PageIntro } from '../components/PremiumSections';
import { images, solutions } from '../data/siteContent';

export default function Solutions() {
  return (
    <>
      <PageIntro
        eyebrow="Solutions"
        title="Premium systems for farms, knowledge networks, and sustainable supply."
        text="Each solution combines beautiful communication, grounded process, and useful technology without losing the human texture of agriculture."
      />
      <FeatureCards eyebrow="What we build" title="Clean modules, deep roots." items={solutions} />
      <ImageSection
        eyebrow="System design"
        title="From field signal to brand experience."
        text="We connect the practical work of farming with the clarity needed by educators, operators, and conscious customers. The result is a system that is easier to understand, trust, and improve."
        image={images.greenhouse}
        imageAlt="Modern greenhouse with sustainable farming technology"
      />
      <CTASection
        title="Choose the solution path that fits your season."
        text="We can begin with a focused advisory sprint, a knowledge hub, or a full agricultural brand ecosystem."
        image={images.crops}
      />
    </>
  );
}
