import {
  ArchitectureSection,
  BentoSection,
  CTASection,
  FounderSection,
  ImageSection,
  PageIntro,
  QuotePanel,
  TimelineSection,
} from '../components/PremiumSections';
import { aboutPage, siteConfig } from '../data/siteContent';

const aboutCta = {
  heading: 'Explore the active flagship experience.',
  description:
    'SkillNet Mastery is the main public-facing brand today, while Farm-to-Home remains ready for a separate premium launch path.',
  buttons: [
    { label: 'Explore SkillNet', to: '/skillnet-mastery', variant: 'primary' },
    { label: 'Chat with Valsii', href: siteConfig.whatsappGeneralUrl, external: true, variant: 'secondary' },
  ],
};

export default function About() {
  return (
    <>
      <PageIntro data={aboutPage.intro} />
      <ImageSection data={aboutPage.story} />
      <ArchitectureSection data={aboutPage.architecture} />
      <BentoSection data={aboutPage.philosophy} />
      <TimelineSection data={aboutPage.roadmap} />
      <QuotePanel data={aboutPage.founderQuote} />
      <FounderSection data={aboutPage.founder} />
      <CTASection data={aboutCta} />
    </>
  );
}
