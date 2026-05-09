import { CTASection, ContentCards, HeroSection, ImageSection, ProcessRail, QuotePanel } from '../components/PremiumSections';
import { images } from '../data/siteContent';

const systems = [
  {
    title: 'SkillNet Mastery',
    text: 'People training program. Step-by-step skill training that builds work discipline, clear thinking, and preparation for real work.',
    icon: 'BookOpen',
    items: ['Skill development through simple lessons', 'Clear thinking and work discipline', 'Leadership and communication training', 'Preparation for field work'],
    link: ['Explore This Program', '/skillnet-mastery'],
  },
  {
    title: 'Farm-to-Home',
    text: 'Product supply program. Essential products move from farmers to households through clear pricing and trained field work.',
    icon: 'Sprout',
    items: ['Daily-use product handling', 'Direct farmer-to-consumer supply', 'Clear pricing', 'Field practice and customer interaction'],
    link: ['Explore This Program', '/farm-to-home'],
  },
];

const flow = [
  { title: 'Skill Development', text: 'Training in SkillNet Mastery' },
  { title: 'Skill Building', text: 'Clear thinking and work skills' },
  { title: 'Program Introduction', text: 'Understanding the Farm-to-Home process' },
  { title: 'Product Handling', text: 'Field work with real products' },
  { title: 'Regular Activity', text: 'Income, experience, and trust' },
];

const comparison = [
  { title: 'Skills alone need practical use', text: 'One-program limitation', icon: 'XCircle', tone: 'negative' },
  { title: 'Products need trained people', text: 'One-program limitation', icon: 'XCircle', tone: 'negative' },
  { title: 'Only theory is not enough', text: 'One-program limitation', icon: 'XCircle', tone: 'negative' },
  { title: 'Skills prepare people for real work', text: 'Benefit of the combined model', icon: 'CheckCircle2' },
  { title: 'Products create regular field activity', text: 'Benefit of the combined model', icon: 'CheckCircle2' },
  { title: 'Practical learning supports steady growth', text: 'Benefit of the combined model', icon: 'CheckCircle2' },
];

export default function CoreSystems() {
  return (
    <>
      <HeroSection
        eyebrow="Connected Program Model"
        title="How Our Two Systems Work Together"
        text="Skills prepare people. Products create real work. Together, they support steady growth."
        image={images.supply}
        primary={['Contact for Introduction', '/contact']}
        secondary={['View Training Portal', 'https://training.zoho.com']}
      />
      <ContentCards eyebrow="Two programs, one purpose" title="Two Programs, One Purpose" items={systems} columns="two" warm variant="spotlight" />
      <ProcessRail eyebrow="How Programs Connect" title="Training builds skills. Products create regular practice." items={flow} />
      <ImageSection
        eyebrow="How it works"
        title="Skills to products, training to regular work."
        text="Each program has a clear role, and together they support people, farmers, and households."
        image={images.training}
        imageAlt="Skill training session connected to product work"
      />
      <ContentCards eyebrow="Why two programs?" title="Each program alone is incomplete." items={comparison} variant="bento" />
      <QuotePanel
        quote="Skills need practical use. Product work needs trained people."
        byline="Valsii Working Principle"
      />
      <CTASection
        title="Ready to Experience Both Systems?"
        text="Start with SkillNet Mastery training and then understand Farm-to-Home work with clear guidance."
        image={images.landscape}
        cta={['Contact for Introduction', '/contact']}
      />
    </>
  );
}
