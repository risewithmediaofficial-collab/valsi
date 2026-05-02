import { CTASection, ContentCards, HeroSection, ImageSection, ProcessRail, QuotePanel } from '../components/PremiumSections';
import { images } from '../data/siteContent';

const systems = [
  {
    title: 'SkillNet Mastery',
    text: 'People Preparation System. Structured skill training that builds work discipline, thinking clarity, and readiness for real-world execution.',
    icon: 'BookOpen',
    items: ['Skill development through structured modules', 'Mental clarity and work discipline', 'Leadership and communication training', 'Field readiness preparation'],
    link: ['Explore This System', '/skillnet-mastery'],
  },
  {
    title: 'Farm-to-Home',
    text: 'Product Execution System. Direct sourcing of essential products from producers to households through transparent, skill-driven field execution.',
    icon: 'Sprout',
    items: ['Essential daily-use product handling', 'Direct farmer-to-consumer supply', 'Transparent pricing structure', 'Field exposure and customer interaction'],
    link: ['Explore This System', '/farm-to-home'],
  },
];

const flow = [
  { title: 'Skill Development', text: 'Training in SkillNet Mastery' },
  { title: 'Capability Building', text: 'Mental clarity & execution skills' },
  { title: 'System Orientation', text: 'Understanding Farm-to-Home flow' },
  { title: 'Product Handling', text: 'Field execution with real products' },
  { title: 'Continuous Activity', text: 'Income + Experience + Trust' },
];

const comparison = [
  { title: 'Skills alone lack practical application', text: 'Single-system limitation', icon: 'XCircle', tone: 'negative' },
  { title: 'Products fail without skilled people', text: 'Single-system limitation', icon: 'XCircle', tone: 'negative' },
  { title: 'Theoretical knowledge without execution', text: 'Single-system limitation', icon: 'XCircle', tone: 'negative' },
  { title: 'Skills prepare individuals for execution', text: 'Integrated approach benefit', icon: 'CheckCircle2' },
  { title: 'Products sustain real-world activity', text: 'Integrated approach benefit', icon: 'CheckCircle2' },
  { title: 'Practical learning with continuous growth', text: 'Integrated approach benefit', icon: 'CheckCircle2' },
];

export default function CoreSystems() {
  return (
    <>
      <HeroSection
        eyebrow="Integrated Systems Approach"
        title="How Our Two Systems Work Together"
        text="Skills prepare individuals. Products sustain real-world activity. Together, they create sustainable growth pathways."
        image={images.supply}
        primary={['Contact for Orientation', '/contact']}
        secondary={['View Training Portal', 'https://training.zoho.com']}
      />
      <ContentCards eyebrow="Two Systems, One Purpose" title="Two Systems, One Purpose" items={systems} columns="two" warm />
      <ProcessRail eyebrow="How Systems Connect" title="Training creates capability. Products create consistency." items={flow} />
      <ImageSection
        eyebrow="System indicator"
        title="Skills to products, preparation to continuity."
        text="Each system serves a specific function, and together they create complete growth pathways for people, producers, and households."
        image={images.training}
        imageAlt="Skill development session connected to product execution"
      />
      <ContentCards eyebrow="Why two systems?" title="Each system alone is incomplete." items={comparison} />
      <QuotePanel
        quote="Skills alone are incomplete. Products alone fail without skilled people."
        byline="Valsii System Design Principle"
      />
      <CTASection
        title="Ready to Experience Both Systems?"
        text="Start with SkillNet Mastery training and progress to Farm-to-Home execution. Complete growth pathway with structured guidance."
        image={images.landscape}
        cta={['Contact for Orientation', '/contact']}
      />
    </>
  );
}
