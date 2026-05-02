import { CTASection, ContentCards, FAQSection, ImageSection, PageIntro, QuotePanel } from '../components/PremiumSections';
import { images } from '../data/siteContent';

const values = [
  { title: 'Purpose-Driven', text: 'Focus on practical skill development and sustainable income pathways', icon: 'CheckCircle2' },
  { title: 'Ethics & Transparency', text: 'Clear systems, honest communication, no hidden terms', icon: 'CheckCircle2' },
  { title: 'People-First', text: 'Training and support focused on individual growth and capability', icon: 'Users' },
  { title: 'Sustainable Growth', text: 'Focus on long-term development over short-term gains', icon: 'Sprout' },
];

const systems = [
  {
    title: 'SkillNet Mastery',
    text: 'Training to capability to income readiness.',
    icon: 'BookOpen',
    items: ['Structured skill training', 'Work discipline & thinking clarity', 'Real-world execution readiness'],
  },
  {
    title: 'Farm-to-Home',
    text: 'Product to utility to trust to repeat income.',
    icon: 'Sprout',
    items: ['Direct sourcing from farmers', 'Essential daily-use products', 'Transparent pricing & distribution'],
  },
];

const faqs = [
  {
    question: 'What does Valsii do?',
    answer: 'Valsii operates two integrated systems: SkillNet Mastery for skill training and Farm-to-Home for product-based field execution. We build capabilities and connect individuals with sustainable income activities.',
  },
  {
    question: 'Is Valsii a training company or a product company?',
    answer: 'Both. We believe skills without application and products without skilled people are incomplete. Our integrated approach combines both elements for complete growth.',
  },
  {
    question: "What's the philosophy behind Valsii?",
    answer: 'Build real capabilities through structured training and provide practical exposure through product-based systems. No hype, just sustainable growth.',
  },
  {
    question: 'Who can participate in Valsii systems?',
    answer: 'Individuals seeking structured skill development and practical field exposure. We focus on youth and individuals looking for direction and sustainable income pathways.',
  },
];

const fieldQuestions = [
  { title: 'Is there income opportunity?', text: 'Valsii does not promise income. Income depends on skill, effort, and consistency through participation in our systems.', icon: 'CheckCircle2' },
  { title: 'Is selling required?', text: 'No forced selling. Participants learn product handling and system execution through Farm-to-Home.', icon: 'CheckCircle2' },
  { title: 'Is it safe and reliable?', text: 'Yes. Training-first approach, pressure-free model, and transparent operations ensure safety and reliability.', icon: 'CheckCircle2' },
];

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="Our Story & Values"
        title="About Valsii"
        text="Valsii = A Skill & Supply Company. We operate at the intersection of skill development and practical execution, creating pathways that bridge training with real-world application."
      />
      <QuotePanel quote="Building skilled individuals and connecting them with sustainable product-based income systems." />
      <ImageSection
        eyebrow="Mission"
        title="Mission & Vision"
        text="To create structured pathways for skill development and practical income generation through integrated systems that work together for sustainable growth."
        image={images.orientation}
        imageAlt="Structured orientation and planning session"
      >
        <ul className="premium-list">
          <li>Skill development through training</li>
          <li>Practical field exposure</li>
          <li>Sustainable income pathways</li>
        </ul>
      </ImageSection>
      <ImageSection
        eyebrow="Vision"
        title="Where skills meet practical execution."
        text="To build an ecosystem where skills meet practical execution, creating responsible individuals who can operate in real-world systems with competence and ethics."
        image={images.farmer}
        imageAlt="Farmer representing practical field execution"
        reverse
      >
        <ul className="premium-list">
          <li>Skilled individuals in communities</li>
          <li>Ethical product distribution systems</li>
          <li>Sustainable income opportunities</li>
        </ul>
      </ImageSection>
      <ContentCards eyebrow="Values" title="Our Core Values" items={values} warm />
      <ContentCards eyebrow="Integrated systems" title="Our Two Integrated Systems" items={systems} columns="two" />
      <QuotePanel quote="Both systems are designed to work together, not independently." />
      <FAQSection title="Frequently Asked Questions" subtitle="Common questions about Valsii" items={faqs} />
      <ContentCards eyebrow="Field questions" title="Common Field-Level Questions" items={fieldQuestions} />
      <CTASection
        title="Learn More About Our Systems"
        text="Understand how our integrated approach creates sustainable growth pathways."
        image={images.fieldHands}
        cta={['View System Details', '/core-systems']}
      />
    </>
  );
}
