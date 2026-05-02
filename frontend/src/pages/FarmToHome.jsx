import { CTASection, ContentCards, FeatureCards, HeroSection, ImageSection, ProcessRail, QuotePanel } from '../components/PremiumSections';
import { images, productCategories } from '../data/siteContent';

const groundReality = [
  { title: 'Farmers lack stable market access', text: 'Ground reality', icon: 'XCircle', tone: 'negative' },
  { title: 'Consumers face inconsistent quality and pricing', text: 'Ground reality', icon: 'XCircle', tone: 'negative' },
  { title: 'Middle layers reduce trust and value', text: 'Ground reality', icon: 'XCircle', tone: 'negative' },
  { title: 'Youth lack real product-based field exposure', text: 'Ground reality', icon: 'XCircle', tone: 'negative' },
];

const solution = [
  { title: 'Direct producer-to-consumer supply', text: 'Production, people, and consumption connected ethically.', icon: 'CheckCircle2' },
  { title: 'Transparent quality and pricing', text: 'Clear product value without hidden pressure.', icon: 'CheckCircle2' },
  { title: 'Skill-based field execution', text: 'Prepared people handle products responsibly.', icon: 'CheckCircle2' },
];

const flow = [
  { title: 'Producers / Farmers', text: 'Direct sourcing from verified producers' },
  { title: 'Quality Check & Sourcing', text: 'Thorough quality verification process' },
  { title: 'Transparent Pricing', text: 'Clear pricing without hidden margins' },
  { title: 'Trained Participants', text: 'SkillNet Mastery trained individuals' },
  { title: 'Household Distribution', text: 'Direct to consumer delivery' },
  { title: 'Repeat Demand', text: 'Building trust for continuous business' },
];

const participantTraining = [
  { title: 'Understand product value', text: 'Participants learn what they handle and why it matters.', icon: 'CheckCircle2' },
  { title: 'Explain usage and quality clearly', text: 'Communication stays responsible and practical.', icon: 'MessageCircle' },
  { title: 'Handle customers responsibly', text: 'Trust is built through discipline and respect.', icon: 'Users' },
  { title: 'Manage distribution discipline', text: 'Consistency matters more than pressure.', icon: 'Clock3' },
  { title: 'Build long-term trust', text: 'The system is designed for repeat demand.', icon: 'Sprout' },
];

const requirements = [
  { title: 'Complete SkillNet Mastery training', text: 'Preparation comes first.', icon: 'CheckCircle2' },
  { title: 'System orientation and clarity', text: 'Participants understand the flow before acting.', icon: 'CheckCircle2' },
  { title: 'Readiness assessment', text: 'Capability is checked before field participation.', icon: 'CheckCircle2' },
  { title: 'Ethical commitment', text: 'Responsible conduct is part of the system.', icon: 'CheckCircle2' },
];

const different = [
  { title: 'Product-backed system', text: 'Real goods, real demand.', icon: 'PackageCheck' },
  { title: 'Transparent sourcing and pricing', text: 'Clear product movement and value.', icon: 'CheckCircle2' },
  { title: 'Skill-based field execution', text: 'Prepared people, not random selling.', icon: 'Users' },
  { title: 'No stock-pressure mindset', text: 'Responsibility before volume.', icon: 'XCircle', tone: 'negative' },
  { title: 'Built for stability, not shortcuts', text: 'Long-term growth over instant claims.', icon: 'Sprout' },
];

const notSystem = [
  { title: 'Not quick-profit trading', text: 'No shortcut framing.', icon: 'XCircle', tone: 'negative' },
  { title: 'Not inventory dumping', text: 'No pressure-based stock movement.', icon: 'XCircle', tone: 'negative' },
  { title: 'Not commission-only selling', text: 'Training and responsibility come first.', icon: 'XCircle', tone: 'negative' },
  { title: 'Not MLM retail hype', text: 'The system is supply-led and transparent.', icon: 'XCircle', tone: 'negative' },
];

const outcomes = [
  { title: 'Real product handling experience', text: 'Practical exposure with essential goods.', icon: 'CheckCircle2' },
  { title: 'Field confidence development', text: 'Confidence comes from responsible practice.', icon: 'CheckCircle2' },
  { title: 'Customer interaction skills', text: 'Clear, respectful household communication.', icon: 'CheckCircle2' },
  { title: 'Understanding of supply systems', text: 'Participants learn how product flow works.', icon: 'CheckCircle2' },
  { title: 'Consistent activity exposure', text: 'Repeat-demand products support continuity.', icon: 'CheckCircle2' },
  { title: 'Long-term growth mindset', text: 'This supports long-term growth, not instant results.', icon: 'CheckCircle2' },
];

const entry = [
  { title: 'Orientation', text: 'Understand the complete system first.' },
  { title: 'Skill Readiness', text: 'Prepare through the essential training path.' },
  { title: 'System Clarity', text: 'Participate only with no pressure and no forced commitment.' },
];

export default function FarmToHome() {
  return (
    <>
      <HeroSection
        eyebrow="Product Execution System"
        title="Farm Direct to Homes & Communities"
        text="Essential product supply & field execution system. Direct sourcing from producers, transparent pricing, and skill-driven distribution to households."
        image={images.harvest}
        primary={['Contact Us for Orientation', '/contact']}
        secondary={['Learn SkillNet Mastery', '/skillnet-mastery']}
      />
      <QuotePanel quote="Not retail hype. Structured product movement with responsibility." />
      <ContentCards eyebrow="Why Farm-to-Home Exists" title="Solving real problems in agricultural supply chains" items={groundReality} warm />
      <ContentCards eyebrow="Our solution" title="Farm-to-Home connects production, people, and consumption ethically" items={solution} />
      <FeatureCards eyebrow="Products We Handle" title="Essential daily-use products from trusted sources" items={productCategories} />
      <QuotePanel quote="Only repeat-demand, necessity-based products. Not luxury, not impulse items." />
      <ProcessRail eyebrow="How the System Works" title="Six-step integrated supply flow" items={flow} />
      <ImageSection
        eyebrow="Role of Trained Participants"
        title="Farm-to-Home is not open selling."
        text="Only individuals trained through SkillNet Mastery participate in this system. Products are handled by prepared people, not random sellers."
        image={images.fieldHands}
        imageAlt="Prepared people handling field supply responsibly"
      />
      <ContentCards eyebrow="Participants are trained to" title="Responsible handling starts with readiness" items={participantTraining} warm />
      <ContentCards eyebrow="System requirements" title="Entry requires clarity and preparation" items={requirements} columns="two" />
      <ContentCards eyebrow="Differentiators" title="What Makes Farm-to-Home Different" items={different} warm />
      <ContentCards eyebrow="Boundaries" title="What Farm-to-Home Is NOT" items={notSystem} />
      <QuotePanel quote="It is a responsibility-driven supply system." />
      <ContentCards eyebrow="Outcome clarity" title="What participants gain from Farm-to-Home" items={outcomes} warm />
      <ImageSection
        eyebrow="Connection to SkillNet Mastery"
        title="Skills prepare individuals. Products sustain real-world activity."
        text="Both systems are designed to work together, not independently. SkillNet Mastery prepares people; Farm-to-Home creates continuity through real product activity."
        image={images.training}
        imageAlt="Training connected with product execution"
        reverse
      />
      <ProcessRail eyebrow="Entry & Orientation Process" title="Participation begins only after completing essential steps" items={entry} />
      <CTASection
        title="There is no pressure and no forced commitment."
        text="Start with orientation, understand the model clearly, and choose the next step only when the system makes sense to you."
        image={images.landscape}
        cta={['Contact Us for Orientation', '/contact']}
      />
    </>
  );
}
