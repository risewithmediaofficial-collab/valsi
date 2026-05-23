import {
  CTASection,
  CommunitySection,
  FounderSection,
  HeroSection,
  ProblemSection,
  ProgramsSection,
  SolutionCardsSection,
  TextContentSection,
  TransformationSection,
  TrustSection,
} from '../components/PremiumSections';
import { skillNetMastery } from '../data/siteContent';

export default function SkillNetMastery() {
  return (
    <>
      <HeroSection data={skillNetMastery.hero} />
      <TrustSection data={skillNetMastery.trust} />
      <ProblemSection data={skillNetMastery.problem} />
      <SolutionCardsSection data={skillNetMastery.solution} />
      <ProgramsSection data={skillNetMastery.programs} />
      <TransformationSection data={skillNetMastery.transformation} />
      <CommunitySection data={skillNetMastery.community} />
      <FounderSection data={skillNetMastery.founder} />
      <TextContentSection data={skillNetMastery.futureEcosystem} />
      <CTASection data={skillNetMastery.finalCta} />
    </>
  );
}
