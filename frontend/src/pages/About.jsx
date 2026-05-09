import { CTASection, ContentCards, FAQSection, ImageSection, PageIntro, QuotePanel } from '../components/PremiumSections';
import { images } from '../data/siteContent';

const values = [
  { title: 'Clear Purpose', text: 'Focus on practical skills and steady earning opportunities', icon: 'CheckCircle2' },
  { title: 'Ethics & Transparency', text: 'Clear systems, honest communication, no hidden terms', icon: 'CheckCircle2' },
  { title: 'People-First', text: 'Training and support focused on personal growth and confidence', icon: 'Users' },
  { title: 'Steady Growth', text: 'Focus on long-term improvement instead of quick claims', icon: 'Sprout' },
];

const systems = [
  {
    title: 'SkillNet Mastery',
    text: 'Training to skills to income preparation.',
    icon: 'BookOpen',
    items: ['Step-by-step skill training', 'Work discipline and clear thinking', 'Preparation for real work'],
  },
  {
    title: 'Farm-to-Home',
    text: 'Useful products, trust, and repeat work.',
    icon: 'Sprout',
    items: ['Direct sourcing from farmers', 'Daily-use essential products', 'Clear pricing and supply'],
  },
];

const faqs = [
  {
    question: 'What does Valsii do?',
    answer: 'Valsii runs two connected programs: SkillNet Mastery for skill training and Farm-to-Home for product-based field work. We train people and connect them with steady income activities.',
  },
  {
    question: 'Is Valsii a training company or a product company?',
    answer: 'Both. Skills need practice, and product work needs trained people. Valsii brings both together.',
  },
  {
    question: "What's the philosophy behind Valsii?",
    answer: 'Build real skills through step-by-step training and give practical exposure through product work. No hype, just steady growth.',
  },
  {
    question: 'Who can participate in Valsii systems?',
    answer: 'People who want practical skill training and real field exposure. We focus on youth and others looking for direction and steady earning opportunities.',
  },
];

const fieldQuestions = [
  { title: 'Is there income opportunity?', text: 'Valsii does not promise income. Income depends on skill, effort, and consistency.', icon: 'CheckCircle2' },
  { title: 'Is selling required?', text: 'No forced selling. Participants learn product handling and supply work through Farm-to-Home.', icon: 'CheckCircle2' },
  { title: 'Is it safe and reliable?', text: 'Yes. Training comes first, there is no pressure, and the process is explained clearly.', icon: 'CheckCircle2' },
];

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="Our Story & Values"
        title="About Valsii"
        text="Valsii is a Skill & Supply Company. We connect skill training with practical product work so people can move from learning to real work."
      />
      <QuotePanel quote="Training people and connecting them with product-based income opportunities." />
      <ImageSection
        eyebrow="Mission"
        title="Mission & Vision"
        text="To create a clear route for skill training and practical earning opportunities through two connected programs."
        image={images.orientation}
        imageAlt="Introduction and planning session"
      >
        <ul className="premium-list">
          <li>Skill development through training</li>
          <li>Practical field exposure</li>
          <li>Steady earning opportunities</li>
        </ul>
      </ImageSection>
      <ImageSection
        eyebrow="Vision"
        title="Where skills meet practical work."
        text="To build a system where skills lead to real work, and people learn to work responsibly and honestly."
        image={images.farmer}
        imageAlt="Farmer representing practical field work"
        reverse
      >
        <ul className="premium-list">
          <li>Skilled individuals in communities</li>
          <li>Honest product supply systems</li>
          <li>Steady earning opportunities</li>
        </ul>
      </ImageSection>
      <ContentCards eyebrow="Values" title="Our Core Values" items={values} warm variant="bento" />
      <ContentCards eyebrow="Connected programs" title="Our Two Main Programs" items={systems} columns="two" variant="spotlight" />
      <QuotePanel quote="Both systems are designed to work together, not independently." />
      <FAQSection title="Frequently Asked Questions" subtitle="Common questions about Valsii" items={faqs} />
      <ContentCards eyebrow="Common questions" title="Common Practical Questions" items={fieldQuestions} variant="stacked" />
      <CTASection
        title="Learn More About Our Programs"
        text="Understand how our training and product work support steady growth."
        image={images.fieldHands}
        cta={['View System Details', '/core-systems']}
      />
    </>
  );
}
