import { CTASection, ContentCards, HeroSection, ImageSection, ProcessRail, QuotePanel } from '../components/PremiumSections';
import { images } from '../data/siteContent';

const skills = [
  { title: 'Subconscious Mind Power', text: 'Objective: Build internal stability and mental clarity', icon: 'Brain', items: ['Thought pattern awareness', 'Emotional regulation', 'Fear handling', 'Habit conditioning'] },
  { title: 'Leadership & Identity Development', text: 'Objective: Develop individuals who can lead themselves', icon: 'Users', items: ['Self-leadership', 'Personal responsibility', 'Identity clarity', 'Decision-making ownership'] },
  { title: 'Public Speaking & Communication', text: 'Objective: Enable confident communication', icon: 'MessageCircle', items: ['Clear expression', 'Confidence in speaking', 'Audience understanding', 'Ethical influence'] },
  { title: 'Time Management & Work Discipline', text: 'Objective: Improve productivity and reduce confusion', icon: 'Clock3', items: ['Daily planning', 'Priority setting', 'Consistency building', 'Work accountability'] },
  { title: 'Teamwork & People Handling', text: 'Objective: Work effectively within teams', icon: 'Users', items: ['Understanding personalities', 'Collaboration skills', 'Conflict handling', 'Group coordination'] },
  { title: 'Opportunity Awareness', text: 'Objective: Identify opportunities responsibly', icon: 'Route', items: ['Understanding opportunities', 'Decision clarity', 'Ethical judgement', 'Growth mindset'] },
];

const methodology = [
  { title: 'Concept explanation', text: 'Clear foundations before application.' },
  { title: 'Practical examples', text: 'Relatable examples connected to real work.' },
  { title: 'Guided exercises', text: 'Structured practice with support.' },
  { title: 'Field-level application', text: 'Learning moves into real-world execution.' },
  { title: 'Review and feedback', text: 'Capability improves through measured reflection.' },
];

const notTraining = [
  { title: 'Not instant success training', text: 'Capability is built over time.', icon: 'XCircle', tone: 'negative' },
  { title: 'Not shortcut-based motivation', text: 'We avoid artificial hype and pressure.', icon: 'XCircle', tone: 'negative' },
  { title: 'Not personality show programs', text: 'The focus stays on practical skill building.', icon: 'XCircle', tone: 'negative' },
];

const outcomes = [
  { title: 'Strong mental clarity', text: 'Participants build a steadier operating mindset.', icon: 'CheckCircle2' },
  { title: 'Confident communication', text: 'Clearer expression and responsible influence.', icon: 'CheckCircle2' },
  { title: 'Leadership behaviour', text: 'Personal responsibility and self-direction.', icon: 'CheckCircle2' },
  { title: 'Team coordination ability', text: 'Better collaboration in field contexts.', icon: 'CheckCircle2' },
  { title: 'Readiness for structured execution', text: 'Prepared for responsible system participation.', icon: 'CheckCircle2' },
];

export default function SkillNetMastery() {
  return (
    <>
      <HeroSection
        eyebrow="Structured Skill Development"
        title="Build Real Capability & Clarity"
        text="Structured skill training that builds work discipline, thinking clarity, and readiness for real-world execution. No hype. No artificial motivation."
        image={images.training}
        primary={['View Course Curriculum', 'https://training.zoho.com']}
        secondary={['Contact for Orientation', '/contact']}
      />
      <ContentCards eyebrow="Core Skill Areas" title="Core Skill Areas" items={skills} warm />
      <ProcessRail eyebrow="Training Methodology" title="Practical, structured approach to skill development" items={methodology} />
      <QuotePanel quote="No hype. No artificial motivation. Just practical skill building." />
      <ContentCards eyebrow="Boundaries" title="What This Training Is NOT" items={notTraining} columns="three" />
      <ContentCards eyebrow="Outcome clarity" title="What you can expect after completing the program" items={outcomes} warm />
      <ImageSection
        eyebrow="Connection to Farm-to-Home"
        title="Skills create readiness. Products create continuity."
        text="SkillNet Mastery prepares individuals with human and execution skills, while Farm-to-Home provides real product-based field exposure."
        image={images.supply}
        imageAlt="Supply activity connected to training readiness"
      />
      <CTASection
        title="Learn about Farm-to-Home System"
        text="See how product-backed field activity gives trained capability a responsible place to operate."
        image={images.harvest}
        cta={['Learn about Farm-to-Home System', '/farm-to-home']}
      />
    </>
  );
}
