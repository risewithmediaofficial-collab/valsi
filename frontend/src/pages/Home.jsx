import { CTASection, EditorialHero, EditorialProcess, EditorialQuotes, MarqueeTicker, MinimalCards, StatsBlock } from '../components/PremiumSections';
import { images, skillAreas } from '../data/siteContent';

const stats = [
  { value: '2', label: 'Main Programs' },
  { value: '500+', label: 'People Trained' },
  { value: '100+', label: 'Farmer Network' },
];

const journey = [
  { title: 'Introduction & Goal', text: 'Understand the work, the steps, and what suits you', image: images.orientation },
  { title: 'SkillNet Training', text: 'Practical training to build useful work skills', image: images.training },
  { title: 'Field Work', text: 'Real practice with people, products, and daily work', image: images.fieldHands, position: 'center 48%' },
  { title: 'Supply Work', text: 'Product supply and sales support for earning opportunities', image: images.supply, position: 'center 48%' },
];

const editorialCards = [
  {
    title: 'SkillNet Mastery',
    kicker: 'Learning system',
    image: images.training,
    what: 'A step-by-step learning program for discipline, clear thinking, speaking, and work habits.',
    how: 'It helps people prepare for real work, field activity, and steady earning opportunities.',
    features: 'Guided introduction, live training, practice tasks, and regular progress checks.',
    description: 'Training for clear thinking, discipline, communication, and real work.',
    tags: ['Training', 'Clear thinking', 'Work ready'],
  },
  {
    title: 'Farm-to-Home',
    kicker: 'Supply system',
    image: images.harvest,
    position: 'center 58%',
    what: 'A farm product supply model connecting farmers, trained teams, and families.',
    how: 'It builds trust through clear sourcing, fair work, and focus on product quality.',
    features: 'Direct sourcing, product explanation, local delivery, and farmer-friendly pricing.',
    description: 'A clear product supply model connecting farmers, trained people, and homes.',
    tags: ['Farm supply', 'Trust', 'Quality'],
  },
  {
    title: 'Knowledge to Income',
    kicker: 'Combined model',
    image: images.supply,
    position: 'center 48%',
    what: 'A link between training, product work, and regular skill improvement.',
    how: 'It gives people a practical place to use their skills with genuine products.',
    features: 'Guidance, field practice, product knowledge, and progress-based growth.',
    description: 'A link between learning, product work, and steady growth.',
    tags: ['Field work', 'Guidance', 'Growth'],
  },
  {
    title: 'Core Skill Areas',
    kicker: 'People skills',
    image: images.study,
    what: 'Focused lessons on clear thinking, leadership, communication, and time use.',
    how: 'It builds the habits and language people need to move with confidence in real work.',
    features: 'Mental clarity, self-leadership, communication practice, time discipline.',
    description: 'Simple skill lessons for honest work and better confidence.',
    tags: ['Leadership', 'Communication', 'Habits'],
  },
];

const quotes = [
  {
    title: 'Learning With Real Work',
    quote: 'Valsii makes learning practical. Every idea connects to people, products, and real work.',
    author: 'Intro Session Participant',
    role: 'SkillNet cohort',
    image: images.training,
    tags: ['Learning', 'Field work', 'SkillNet'],
  },
  {
    title: 'Honest Growth Model',
    quote: 'The model respects both sides: skill growth for people and fair respect for farmers.',
    author: 'Field Partner',
    role: 'Farm-to-Home network',
    image: images.harvest,
    position: 'center 58%',
    tags: ['Farm-to-Home', 'Trust', 'Farmers'],
  },
  {
    title: 'Useful Real-World Learning',
    quote: 'It feels less like a course and more like a system for becoming useful in the real world.',
    author: 'Community Lead',
    role: 'Valsii network',
    image: images.fieldHands,
    position: 'center 48%',
    tags: ['Community', 'Practice', 'Growth'],
  },
];

export default function Home() {
  return (
    <>
      <EditorialHero
        eyebrow="Building Useful Work Systems"
        title="Skills That Create Real Income "
        text="Valsii connects practical skill training with honest product supply work, giving people a clear way to move from learning to real work."
      />
      <MarqueeTicker />
      <StatsBlock stats={stats} />
      <MinimalCards eyebrow="Main programs" title="Training, products, and field work in one practical model." items={editorialCards} />
      <EditorialProcess eyebrow="Steps" title="From first introduction to real field progress." items={journey} />
      <MinimalCards
        eyebrow="Training areas"
        title="People skills that make field work clearer and more honest."
        items={skillAreas.map((item) => ({
          title: item.title,
          kicker: 'Skill area',
          image: item.image,
          what: item.text,
          description: item.text,
          how: 'It builds daily habits for learning, service, and regular field work.',
          features: 'Guided practice, simple routines, real examples, and progress checks.',
          tags: ['Skill area', 'Practice', 'Growth'],
        }))}
      />
      <EditorialQuotes items={quotes} />
      <CTASection
        title="Start With a Clear Introduction"
        text="Understand SkillNet and Farm-to-Home first, then choose your next step with no pressure and no forced commitment."
        image={images.landscape}
        cta={['Access Training Portal', 'https://training.zoho.com']}
      />
    </>
  );
}
