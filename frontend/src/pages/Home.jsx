import {
  BentoSection,
  CTASection,
  ContentCards,
  HeroSection,
  ProcessRail,
  QuotePanel,
  TextContentSection,
} from '../components/PremiumSections';
import { homepage } from '../data/siteContent';

export default function Home() {
  return (
    <>
      <HeroSection data={homepage.hero} />
      <BentoSection data={homepage.overviewBento} />
      <TextContentSection data={homepage.philosophy} />
      <ContentCards data={homepage.brands} />
      <ProcessRail data={homepage.ecosystemFlow} />
      <QuotePanel data={homepage.quote} />
      <CTASection data={homepage.finalCta} />
    </>
  );
}
