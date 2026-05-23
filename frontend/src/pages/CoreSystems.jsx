import {
  ArchitectureSection,
  BentoSection,
  CTASection,
  ContentCards,
  HeroSection,
  ProcessRail,
} from '../components/PremiumSections';
import { coreSystemsPage } from '../data/siteContent';

export default function CoreSystems() {
  return (
    <>
      <HeroSection data={coreSystemsPage.hero} />
      <ArchitectureSection data={coreSystemsPage.visualArchitecture} />
      <ContentCards data={coreSystemsPage.systems} />
      <BentoSection data={coreSystemsPage.experienceModel} />
      <ProcessRail data={coreSystemsPage.flow} />
      <ContentCards data={coreSystemsPage.comparison} compact />
      <CTASection data={coreSystemsPage.cta} />
    </>
  );
}
