import { CTASection, ContentCards, FeatureCards, HeroSection, ImageSection, ProcessRail, StatsBlock } from '../components/PremiumSections';
import { images, skillAreas, solutions } from '../data/siteContent';

const stats = [
  { value: '500+', label: 'Trained Professionals' },
  { value: '100+', label: 'Partner Farmers' },
  { value: '24/7', label: 'Dedicated Support' },
];

const problems = [
  { title: 'Skills Without Purpose', text: 'Training disconnected from real-world income opportunities', icon: 'XCircle', tone: 'negative' },
  { title: 'Youth at Crossroads', text: 'Unclear pathways from learning to sustainable employment', icon: 'XCircle', tone: 'negative' },
  { title: 'Farmers Undervalued', text: 'Broken supply chains cutting farmer margins and dignity', icon: 'XCircle', tone: 'negative' },
];

const journey = [
  { title: 'Orientation & Vision', text: 'Clear direction and structured guidance for your journey' },
  { title: 'SkillNet Training', text: 'Comprehensive practical program to build capability' },
  { title: 'Field Execution', text: 'Hands-on real-world experience and application' },
  { title: 'Distribution Work', text: 'Sales and supply chain participation for income' },
  { title: 'Performance Growth', text: 'Advancement based on measurable results' },
];

export default function Home() {
  return (
    <>
      <HeroSection
        eyebrow="Building Sustainable Systems"
        title="Skills That Create Real Income"
        text="Valsii integrates practical skill development with ethical product distribution, creating transparent pathways from training to sustainable income for farmers and professionals."
        image={images.hero}
        imagePosition="center 56%"
        primary={['Join Training Program', 'https://training.zoho.com']}
        secondary={['Get Oriented Today', '/contact']}
      />
      <StatsBlock stats={stats} />
      <ContentCards
        eyebrow="Challenges"
        title="The Challenges We Solve"
        items={problems}
      />
      <ImageSection
        eyebrow="Farm to Flourish"
        title="From training to sustainable income."
        text="Structured solutions. Real impact. No shortcuts. Valsii connects capability-building with product-backed field activity so growth has a practical place to happen."
        image={images.training}
        imageAlt="Professionals in a structured training session"
      />
      <FeatureCards eyebrow="Core systems" title="Our Two Integrated Systems" items={solutions} />
      <ProcessRail eyebrow="Journey" title="Your Journey With Valsii" items={journey} />
      <FeatureCards eyebrow="Training areas" title="Core Skill Areas" items={skillAreas} />
      <CTASection
        title="Ready to Build Real Capabilities?"
        text="Join a community of professionals and farmers building sustainable income systems. Practical execution. Real results. No shortcuts."
        image={images.landscape}
        cta={['Access Training Portal', 'https://training.zoho.com']}
      />
    </>
  );
}
