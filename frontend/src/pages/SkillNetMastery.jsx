import { CTASection, ContentCards, HeroSection, ImageSection, ProcessRail, QuotePanel, TimelineStory } from '../components/PremiumSections';
import { images, trainingWorkflowTimeline } from '../data/siteContent';

const skills = [
  { title: 'Mindset & Clear Thinking', text: 'Goal: Build calmness, focus, and clear thinking', icon: 'Brain', items: ['Understanding thought patterns', 'Handling emotions', 'Managing fear', 'Building good habits'] },
  { title: 'Leadership & Self-Confidence', text: 'Goal: Help people take responsibility for themselves', icon: 'Users', items: ['Self-leadership', 'Personal responsibility', 'Self-confidence', 'Better decisions'] },
  { title: 'Public Speaking & Communication', text: 'Goal: Speak clearly and confidently', icon: 'MessageCircle', items: ['Clear expression', 'Speaking confidence', 'Understanding listeners', 'Respectful influence'] },
  { title: 'Time Management & Work Discipline', text: 'Goal: Improve daily planning and reduce confusion', icon: 'Clock3', items: ['Daily planning', 'Priority setting', 'Consistency', 'Work responsibility'] },
  { title: 'Teamwork & People Handling', text: 'Goal: Work well with others', icon: 'Users', items: ['Understanding people', 'Teamwork', 'Handling disagreements', 'Group coordination'] },
  { title: 'Opportunity Awareness', text: 'Goal: Understand opportunities in an honest way', icon: 'Route', items: ['Understanding opportunities', 'Clear decisions', 'Honest judgement', 'Growth mindset'] },
];

const methodology = [
  { title: 'Simple explanation', text: 'Understand the basics before practice.' },
  { title: 'Practical examples', text: 'Examples connected to real work and daily life.' },
  { title: 'Guided exercises', text: 'Structured practice with support.' },
  { title: 'Field practice', text: 'Learning is applied in real situations.' },
  { title: 'Review and feedback', text: 'Skills improve through regular feedback.' },
];

const notTraining = [
  { title: 'Not instant success training', text: 'Real skill is built over time.', icon: 'XCircle', tone: 'negative' },
  { title: 'Not shortcut-based motivation', text: 'We avoid artificial hype and pressure.', icon: 'XCircle', tone: 'negative' },
  { title: 'Not a show-off personality program', text: 'The focus stays on practical skill building.', icon: 'XCircle', tone: 'negative' },
];

const outcomes = [
  { title: 'Clearer thinking', text: 'Participants build a calmer and steadier mindset.', icon: 'CheckCircle2' },
  { title: 'Confident communication', text: 'Speak clearly and influence responsibly.', icon: 'CheckCircle2' },
  { title: 'Leadership behaviour', text: 'Take responsibility and guide yourself better.', icon: 'CheckCircle2' },
  { title: 'Team coordination ability', text: 'Work better with teams in real situations.', icon: 'CheckCircle2' },
  { title: 'Ready for real work', text: 'Prepared to take part responsibly in Valsii work.', icon: 'CheckCircle2' },
];

export default function SkillNetMastery() {
  return (
    <>
      <HeroSection
        eyebrow="Practical Skill Training"
        title="Build Real Skills & Clear Thinking"
        text="Step-by-step training that builds work discipline, clear thinking, and preparation for real work. No hype. No artificial motivation."
        image={images.training}
        primary={['View Course Curriculum', 'https://training.zoho.com']}
        secondary={['Contact for Introduction', '/contact']}
      />
      <ContentCards eyebrow="Core Skill Areas" title="Core Skill Areas" items={skills} warm variant="bento" />
      <TimelineStory eyebrow="Training Path" title="Your SkillNet Mastery Journey: 7 Stages of Growth" items={trainingWorkflowTimeline} />
      <ProcessRail eyebrow="Training Method" title="Simple and practical skill training method" items={methodology} />
      <QuotePanel quote="No hype. No artificial motivation. Just practical skill building." />
      <ContentCards eyebrow="Boundaries" title="What This Training Is NOT" items={notTraining} columns="three" variant="boundary" />
      <ContentCards eyebrow="Expected results" title="What you can expect after completing the program" items={outcomes} warm variant="outcomes" />
      <ImageSection
        eyebrow="Connection to Farm-to-Home"
        title="Skills prepare people. Products give real practice."
        text="SkillNet Mastery prepares people with communication and work skills, while Farm-to-Home gives real product-based field practice."
        image={images.supply}
        imageAlt="Supply activity connected to training preparation"
      />
      <CTASection
        title="Learn about Farm-to-Home System"
        text="See how product-based field work gives trained people a practical place to use their skills."
        image={images.harvest}
        cta={['Learn about Farm-to-Home System', '/farm-to-home']}
      />
    </>
  );
}
