import { CTASection, EditorialHero, EditorialProcess, EditorialQuotes, MarqueeTicker, MinimalCards, StatsBlock } from '../components/PremiumSections';
import { images, skillAreas } from '../data/siteContent';

const stats = [
  { value: '2', label: 'Integrated Systems' },
  { value: '500+', label: 'Learning Participants' },
  { value: '100+', label: 'Producer Network' },
];

const journey = [
  { title: 'Orientation & Vision', text: 'Clear direction and structured guidance for your journey', image: images.orientation },
  { title: 'SkillNet Training', text: 'Comprehensive practical program to build capability', image: images.training },
  { title: 'Field Execution', text: 'Hands-on real-world experience and application', image: images.fieldHands, position: 'center 48%' },
  { title: 'Distribution Work', text: 'Sales and supply chain participation for income', image: images.supply, position: 'center 48%' },
];

const editorialCards = [
  {
    title: 'SkillNet Mastery',
    kicker: 'Learning system',
    image: images.training,
    what: 'A structured knowledge path for discipline, clarity, communication, and performance.',
    how: 'It turns personal development into practical readiness for field activity and sustainable work.',
    features: 'Guided orientation, live training, practice rituals, measurable growth reviews.',
    description: 'Structured training for clarity, discipline, communication, and real-world readiness.',
    tags: ['Training', 'Clarity', 'Readiness'],
  },
  {
    title: 'Farm-to-Home',
    kicker: 'Supply system',
    image: images.harvest,
    position: 'center 58%',
    what: 'A responsible farm product channel connecting farmers, trained teams, and households.',
    how: 'It strengthens trust with transparent sourcing, fairer participation, and quality-focused distribution.',
    features: 'Direct sourcing, product education, local logistics, farmer-conscious pricing.',
    description: 'A responsible product flow connecting producers, trained people, and households.',
    tags: ['Farm supply', 'Trust', 'Quality'],
  },
  {
    title: 'Knowledge to Income',
    kicker: 'Integrated model',
    image: images.supply,
    position: 'center 48%',
    what: 'A bridge between learning, product-backed execution, and ongoing capability building.',
    how: 'It gives people a practical place to apply skills while growing with ethical products.',
    features: 'Mentoring, field exposure, product literacy, performance-led advancement.',
    description: 'A bridge between learning, product-backed activity, and sustainable growth.',
    tags: ['Execution', 'Mentoring', 'Growth'],
  },
  {
    title: 'Core Skill Areas',
    kicker: 'Human capability',
    image: images.study,
    what: 'Focused capability modules across clarity, leadership, communication, and productivity.',
    how: 'It builds the habits and language people need to move with confidence in real work.',
    features: 'Mental clarity, self-leadership, communication practice, time discipline.',
    description: 'Focused capability modules for the human side of responsible work.',
    tags: ['Leadership', 'Communication', 'Habits'],
  },
];

const quotes = [
  {
    title: 'Learning With Ground',
    quote: 'Valsii makes learning feel grounded: every idea has a field, a product, and a person it can serve.',
    author: 'Orientation Participant',
    role: 'SkillNet cohort',
    image: images.training,
    tags: ['Learning', 'Field clarity', 'SkillNet'],
  },
  {
    title: 'Ethical Growth Model',
    quote: 'The model respects both sides of growth: capability for people and dignity for producers.',
    author: 'Field Partner',
    role: 'Farm-to-Home network',
    image: images.harvest,
    position: 'center 58%',
    tags: ['Farm-to-Home', 'Trust', 'Producers'],
  },
  {
    title: 'A System For Usefulness',
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
        eyebrow="Building Sustainable Systems"
        title="Skills for Responsible Field Growth"
        text="Valsii connects structured capability training with ethical product execution, giving people a clearer path from learning to responsible real-world participation."
      />
      <MarqueeTicker />
      <StatsBlock stats={stats} />
      <MinimalCards eyebrow="Core systems" title="Training, products, and field execution in one practical ecosystem." items={editorialCards} />
      <EditorialProcess eyebrow="Journey" title="From orientation to measurable field growth." items={journey} />
      <MinimalCards
        eyebrow="Training areas"
        title="Human capabilities that make field work clearer and more responsible."
        items={skillAreas.map((item) => ({
          title: item.title,
          kicker: 'Skill area',
          image: item.image,
          what: item.text,
          description: item.text,
          how: 'It creates a practical inner rhythm for learning, service, and consistent field execution.',
          features: 'Guided practice, simple rituals, applied reflection, progress reviews.',
          tags: ['Skill area', 'Practice', 'Growth'],
        }))}
      />
      <EditorialQuotes items={quotes} />
      <CTASection
        title="Start With a Clear Orientation"
        text="Understand the SkillNet and Farm-to-Home systems first, then decide the next step with no pressure and no forced commitment."
        image={images.landscape}
        cta={['Access Training Portal', 'https://training.zoho.com']}
      />
    </>
  );
}
