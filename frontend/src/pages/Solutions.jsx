import { CTASection, FeatureCards, ImageSection, PageIntro } from '../components/PremiumSections';
import { images, solutions } from '../data/siteContent';

export default function Solutions() {
  return (
    <>
      <PageIntro
        eyebrow="Solutions"
        title="Practical systems for farms, learning groups, and product supply."
        text="Each solution combines clear communication, simple process, and useful technology while keeping agriculture human and practical."
      />
      <FeatureCards eyebrow="What we build" title="Simple parts, strong roots." items={solutions} />
      <ImageSection
        eyebrow="System design"
        title="From farm work to trusted customer experience."
        text="We connect farming work with clear information for educators, operators, and customers. The result is easier to understand, trust, and improve."
        image={images.greenhouse}
        imageAlt="Modern greenhouse with sustainable farming technology"
      />
      <CTASection
        title="Choose the solution that fits your current need."
        text="We can begin with focused guidance, a learning hub, or a complete agriculture brand system."
        image={images.crops}
      />
    </>
  );
}
