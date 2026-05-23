const valsiiImage = (name) => new URL(`../VALSI IMAGES/${name}`, import.meta.url).href;

const phoneDigits = '919876543210';
const email = 'hello@valsii.com';

const whatsappLink = (message) =>
  `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;

export const images = {
  learning: valsiiImage('TEACHING IN VALSII.png'),
  team: valsiiImage('VALSII YOUNGSTERSS.png'),
  founder: valsiiImage('YOUNG MAN DISCUSSION.png'),
  startup: valsiiImage('VALSII IT TECH.png'),
  fieldGuidance: valsiiImage('GUIDING YOUNGSTERS.png'),
  supply: valsiiImage('SUPPLY CHAIN DISCUSSION.png'),
  farming: valsiiImage('FARMING.png'),
  family: valsiiImage('FARMER-FAMILY.png'),
  farmer: valsiiImage('FARMER MAN.png'),
  farmTraining: valsiiImage('TEACHING ABOUT FARM.png'),
  delivery: valsiiImage('DOOR DELIVERY.png'),
  produce: valsiiImage('VEGGIES , GRAINS , ETC.png'),
  vegetables: valsiiImage('VEGGIES.png'),
  rice: valsiiImage('RICE.png'),
  oils: valsiiImage('OILS.png'),
  grains: valsiiImage('GRAINS.png'),
  spices: valsiiImage('SPICES.png'),
  landscape: valsiiImage('EMPOWERING FARMERS.png'),
  research: valsiiImage('YOUNGSTERS RESEARCH FARMS.png'),
  village: valsiiImage('VALSII IN VILLAGE DISCUSSION.png'),
  contact: valsiiImage('VALSII - DELIVERY.png'),
};

export const siteConfig = {
  companyName: 'Valsii LLP',
  flagshipBrand: 'SkillNet Mastery',
  futureBrand: 'Valsii Farm-to-Home',
  domain: 'https://www.valsii.com',
  email,
  phone: '+91 98765 43210',
  phoneDigits,
  founderName: 'Ganeshan Mohan',
  founderTitle: 'Founder & CEO',
  founderLocation: 'Krishnagiri, Tamil Nadu',
  whatsappGeneralUrl: whatsappLink('Hello Valsii, I want to know more about your ecosystem.'),
  whatsappSkillNetUrl: whatsappLink('Hello Valsii, I want to join SkillNet Mastery.'),
  whatsappFarmUrl: whatsappLink('Hello Valsii, I want to know more about Farm-to-Home.'),
  whatsappAdminUrl: whatsappLink('Hello Valsii, I want to discuss website leads or admin operations.'),
};

export const routeMeta = {
  '/': {
    title: 'Valsii LLP | Premium Leadership and Healthy Living Ecosystem',
    description:
      'Valsii LLP presents SkillNet Mastery for youth leadership and self-development, with Farm-to-Home as its future healthy living ecosystem.',
    keywords:
      'Valsii LLP, SkillNet Mastery, Farm-to-Home, leadership training, self development, healthy living, premium ecosystem',
  },
  '/about': {
    title: 'About Valsii LLP | Vision, Founder, and Ecosystem Strategy',
    description:
      'Learn how Valsii LLP is building a premium ecosystem company with SkillNet Mastery as its active flagship and Farm-to-Home as its expansion brand.',
    keywords:
      'about Valsii, Valsii founder, SkillNet Mastery vision, ecosystem company, premium brand strategy',
  },
  '/core-systems': {
    title: 'Valsii Core Systems | How SkillNet Mastery and Farm-to-Home Connect',
    description:
      'See how Valsii connects leadership development, student growth, healthy sourcing, and future ecosystem expansion through two distinct brand systems.',
    keywords:
      'Valsii core systems, SkillNet and Farm-to-Home, brand architecture, leadership and healthy living',
  },
  '/skillnet-mastery': {
    title: 'SkillNet Mastery | Leadership, Communication, and Self-Development',
    description:
      'SkillNet Mastery helps students build confidence, clarity, communication, leadership, and future readiness through premium growth programs.',
    keywords:
      'SkillNet Mastery, leadership training, student confidence, communication skills, self development, youth transformation',
  },
  '/farm-to-home': {
    title: 'Valsii Farm-to-Home | Fresh, Healthy, Trusted',
    description:
      'Valsii Farm-to-Home is a future healthy living brand focused on direct farm sourcing, trusted delivery, and natural food systems.',
    keywords:
      'farm to home, Valsii FTH, organic sourcing, natural foods, healthy family brand, direct farm delivery',
  },
  '/contact': {
    title: 'Contact Valsii LLP | SkillNet Mastery and Farm-to-Home',
    description:
      'Reach Valsii LLP for SkillNet Mastery admissions, Farm-to-Home inquiries, and partnership conversations through WhatsApp, phone, or email.',
    keywords:
      'contact Valsii, SkillNet contact, Farm-to-Home contact, WhatsApp Valsii, Valsii phone',
  },
  '/admin': {
    title: 'Valsii Admin Workspace | Website and Lead Operations Preview',
    description:
      'A lightweight admin workspace preview for managing Valsii website operations, brand content priorities, lead channels, and SEO readiness.',
    keywords:
      'Valsii admin, website admin panel, lead dashboard, content operations, SEO workspace',
  },
};

export const homepage = {
  hero: {
    eyebrow: 'Valsii LLP',
    heading: 'Future-focused growth, shaped to last.',
    subheading:
      'SkillNet Mastery leads with leadership and self-development. Farm-to-Home carries the vision into healthier everyday living.',
    description:
      'From personal growth to trusted living, Valsii is creating connected journeys guided by clarity, care, and long-term intent.',
    backgroundImage: images.startup,
    backgroundPosition: 'center 34%',
    theme: 'skillnet',
    badges: ['Leadership journeys', 'Healthier living', 'Built for the long term'],
    stats: [
      { label: 'Parent brand', value: 'Valsii LLP' },
      { label: 'Live flagship', value: 'SkillNet Mastery' },
      { label: 'Expansion brand', value: 'Farm-to-Home' },
    ],
    buttons: [
      { label: 'Explore SkillNet', to: '/skillnet-mastery', variant: 'primary' },
      { label: 'View Ecosystem', to: '/core-systems', variant: 'secondary' },
    ],
  },
  overviewBento: {
    eyebrow: 'Ecosystem Overview',
    heading: 'One evolving vision. More than one way forward.',
    text:
      'Leadership, healthier living, and future growth come together through a brand built to move with people over time.',
    featured: {
      label: 'Shared vision',
      title: 'One company, with room for distinct journeys.',
      text:
        'Each Valsii platform is shaped to feel complete on its own while remaining connected through one steady, evolving vision.',
      pills: ['Leadership', 'Healthier living', 'Long-term growth'],
      image: images.team,
      imagePosition: 'center 36%',
    },
    items: [
      {
        title: 'Clear direction',
        text: 'A calmer, sharper experience that keeps the focus on what truly matters.',
        icon: 'Sparkles',
      },
      {
        title: 'Distinct paths',
        text: 'SkillNet and Farm-to-Home speak to different moments in life without losing their connection.',
        icon: 'Layers3',
      },
      {
        title: 'Built to evolve',
        text: 'New ideas can grow naturally without losing the soul of the brand.',
        icon: 'TrendingUp',
        value: '02',
      },
      {
        title: 'Care in every detail',
        text: 'From words to motion to interaction, everything is shaped to feel warm, composed, and deliberate.',
        icon: 'ShieldCheck',
      },
    ],
  },
  philosophy: {
    eyebrow: 'Our Perspective',
    heading: 'Growth is strongest when it feels clear, calm, and human.',
    content:
      'Valsii is built around experiences that feel composed rather than loud, warm rather than transactional, and modern without losing emotional depth.',
    image: images.founder,
    imagePosition: 'center 24%',
    bullets: [
      'Clarity over clutter',
      'Distinct journeys connected by one vision',
      'A quieter, more enduring approach to modern growth',
    ],
    buttons: [
      { label: 'About Valsii', to: '/about', variant: 'secondary' },
      { label: 'See Core Systems', to: '/core-systems', variant: 'primary' },
    ],
  },
  brands: {
    eyebrow: 'Platform Experiences',
    heading: 'Distinct journeys connected by one vision.',
    text: 'Each platform carries its own emotional world while staying part of something larger.',
    items: [
      {
        eyebrow: 'Today',
        title: 'SkillNet Mastery',
        text: 'Leadership, confidence, and self-development for students who want more from their future.',
        icon: 'Users',
        image: images.learning,
        imagePosition: 'center 34%',
        items: ['Confidence and mindset growth', 'Communication and leadership training', 'Community-based transformation'],
        link: { label: 'Enter SkillNet', to: '/skillnet-mastery' },
      },
      {
        eyebrow: 'Next chapter',
        title: 'Farm-to-Home',
        text: 'A warmer path into trusted sourcing, healthier routines, and everyday living.',
        icon: 'Sprout',
        image: images.family,
        imagePosition: 'center 40%',
        items: ['Direct farm sourcing', 'Healthy lifestyle positioning', 'Separate brand-ready experience'],
        link: { label: 'Explore FTH', href: '/farm-to-home', newTab: true },
      },
    ],
  },
  ecosystemFlow: {
    eyebrow: 'Ecosystem Logic',
    heading: 'Learn. Lead. Live well.',
    text: 'The journey begins with personal growth and opens into a broader way of living.',
    items: [
      {
        label: '01',
        title: 'Develop Inner Power',
        text: 'Start with SkillNet Mastery to build confidence, clarity, communication, and personal leadership.',
      },
      {
        label: '02',
        title: 'Grow Through Community',
        text: 'Grow with a community shaped by confidence, support, and shared momentum.',
      },
      {
        label: '03',
        title: 'Expand Into Healthy Living',
        text: 'Step into Farm-to-Home as the story continues through trusted food, family wellness, and natural sourcing.',
      },
    ],
  },
  quote: {
    text: 'The strongest brands do more than look modern. They make growth feel clear, calm, and worth stepping into.',
    byline: 'Valsii',
  },
  finalCta: {
    heading: 'Begin with what moves you forward.',
    description:
      'SkillNet Mastery leads the journey today, while Farm-to-Home continues the story in a different rhythm.',
    buttons: [
      { label: 'Join SkillNet', href: siteConfig.whatsappSkillNetUrl, external: true, variant: 'primary' },
      { label: 'Contact Valsii', to: '/contact', variant: 'secondary' },
    ],
  },
};

export const skillNetMastery = {
  hero: {
    eyebrow: 'SkillNet Mastery',
    heading: 'Build Your Inner Power. Create Your Future.',
    subheading: 'Leadership. Communication. Self-development. Opportunity.',
    description:
      'A premium leadership and self-development platform that helps students move from fear and confusion into clarity, confidence, and future readiness.',
    backgroundImage: images.team,
    backgroundPosition: 'center 32%',
    theme: 'skillnet',
    badges: ['Cinematic learning feel', 'Offline + online learning', 'Growth-focused student community'],
    stats: [
      { label: 'Program rhythm', value: '15-day intensives' },
      { label: 'Core pillars', value: 'Mindset, leadership, clarity' },
      { label: 'Focus', value: 'Transformation over theory' },
    ],
    buttons: [
      { label: 'Join SkillNet', href: siteConfig.whatsappSkillNetUrl, external: true, variant: 'primary' },
      { label: 'Watch Intro', to: '/about', variant: 'secondary' },
    ],
  },
  trust: {
    eyebrow: 'SkillNet Experience',
    heading: 'A stronger path for the next generation.',
    highlights: [
      { title: 'Leadership Training', icon: 'Users' },
      { title: 'Offline + Online Learning', icon: 'BookOpen' },
      { title: 'Student Community', icon: 'Users2' },
      { title: 'Growth Ecosystem', icon: 'TrendingUp' },
      { title: 'Personal Transformation', icon: 'Sparkles' },
    ],
  },
  problem: {
    eyebrow: 'Why It Matters',
    heading: "Today's youth need more than degrees.",
    content:
      'Many students know they should be capable of more, but daily life still feels blocked by pressure, uncertainty, and low self-belief.',
    challenges: [
      'Overthinking',
      'Fear',
      'Lack of confidence',
      'Communication struggles',
      'Career confusion',
      'No clear direction',
    ],
    solution:
      'SkillNet Mastery helps students build confidence, leadership, communication, and growth mindset for the future.',
  },
  solution: {
    eyebrow: 'Platform Pillars',
    heading: 'What is SkillNet Mastery?',
    cards: [
      {
        title: 'Inner Power',
        icon: 'Brain',
        description:
          'Develop confidence, focus, self-belief, emotional clarity, and subconscious activation through guided practice.',
        image: images.startup,
        imagePosition: 'center 34%',
      },
      {
        title: 'Leadership',
        icon: 'Users',
        description:
          'Build speaking confidence, communication skills, teamwork, and people-handling abilities that matter in real life.',
        image: images.learning,
        imagePosition: 'center 34%',
      },
      {
        title: 'Future Opportunity',
        icon: 'TrendingUp',
        description:
          'Grow through business exposure, networking, and opportunity awareness that opens the future with confidence.',
        image: images.fieldGuidance,
        imagePosition: 'center 32%',
      },
    ],
  },
  programs: {
    eyebrow: 'Program Design',
    heading: 'Programs designed for real transformation.',
    items: [
      {
        title: 'Subconscious Mind Power',
        duration: '15 Days',
        icon: 'Brain',
        includes: ['Focus development', 'Confidence building', 'Mindset training', 'Emotional control'],
      },
      {
        title: 'Leadership Skills',
        duration: '15 Days',
        icon: 'Users2',
        includes: ['Communication', 'Stage confidence', 'Leadership development', 'People management'],
      },
      {
        title: 'Time Management',
        duration: 'Compact Module',
        icon: 'Clock3',
        includes: ['Productivity', 'Discipline', 'Daily routine systems', 'Goal clarity'],
      },
    ],
  },
  transformation: {
    eyebrow: 'Transformation Path',
    heading: 'From fear to leadership.',
    changes: [
      { from: 'Fear', to: 'Confidence' },
      { from: 'Confusion', to: 'Clarity' },
      { from: 'Isolation', to: 'Leadership' },
      { from: 'Overthinking', to: 'Action' },
      { from: 'Self-doubt', to: 'Growth mindset' },
    ],
  },
  community: {
    eyebrow: 'Community Layer',
    heading: 'Join the SkillNet community.',
    content:
      'SkillNet Mastery is more than training. It is a growth-focused community where students build leadership, communication, mindset, and future confidence together.',
    image: images.team,
    imagePosition: 'center 34%',
    bullets: ['Peer energy and accountability', 'Leadership exposure in a supportive culture', 'Premium learning environment and brand feel'],
  },
  founder: {
    eyebrow: 'Founder Vision',
    heading: 'Founder vision',
    content:
      'SkillNet Mastery was created to help students develop confidence, clarity, leadership, and future readiness in a fast-changing world. The mission is to build a stronger generation with skills, self-belief, and growth opportunities.',
    founderName: siteConfig.founderName,
    founderTitle: siteConfig.founderTitle,
    founderLocation: siteConfig.founderLocation,
    image: images.founder,
    imagePosition: 'center 24%',
  },
  futureEcosystem: {
    eyebrow: 'Future Expansion',
    heading: 'Where the journey can lead next.',
    content:
      'The Valsii story reaches beyond leadership training, opening into healthier living, trusted products, and wider possibilities over time.',
    buttons: [
      { label: 'Explore FTH', href: '/farm-to-home', newTab: true, variant: 'primary' },
      { label: 'See the Ecosystem', to: '/core-systems', variant: 'secondary' },
    ],
  },
  finalCta: {
    heading: 'Your transformation starts today.',
    description: 'Step into a premium student growth platform built for confidence, leadership, and future clarity.',
    buttons: [
      { label: 'Join Now', href: siteConfig.whatsappSkillNetUrl, external: true, variant: 'primary' },
      { label: 'Contact Us', to: '/contact', variant: 'secondary' },
    ],
  },
};

export const farmToHome = {
  hero: {
    eyebrow: 'Valsii Farm-to-Home',
    heading: 'Fresh from farm to family.',
    subheading: 'Healthy sourcing. Natural living. Premium trust.',
    description:
      'Farm-to-Home brings the Valsii vision into everyday living through trusted sourcing, warmer experiences, and a healthier relationship with food.',
    backgroundImage: images.family,
    backgroundPosition: 'center 40%',
    theme: 'farm',
    badges: ['Natural warmth', 'Trusted sourcing', 'Family-first living'],
    stats: [
      { label: 'Core promise', value: 'Fresh and trusted' },
      { label: 'Experience', value: 'Healthy family-first' },
      { label: 'Direction', value: 'Brand-ready expansion' },
    ],
    buttons: [
      { label: 'Explore Products', to: '/farm-to-home#products', variant: 'primary' },
      { label: 'Contact Us', href: siteConfig.whatsappFarmUrl, external: true, variant: 'secondary' },
    ],
  },
  trust: {
    eyebrow: 'Trust Signals',
    heading: 'A healthier living brand built on trust.',
    highlights: [
      { title: 'Direct Farm Sourcing', icon: 'Wheat' },
      { title: 'Fresh Quality Products', icon: 'BadgeCheck' },
      { title: 'Healthy Lifestyle Support', icon: 'Heart' },
      { title: 'Traditional Food Focus', icon: 'Leaf' },
      { title: 'Trusted Delivery', icon: 'Truck' },
    ],
  },
  promiseBento: {
    eyebrow: 'A Different Rhythm',
    heading: 'Warmer. Lighter. Closer to daily life.',
    text:
      'Farm-to-Home brings a softer, more grounded energy to the wider Valsii story.',
    theme: 'farm',
    featured: {
      label: 'Farm-to-Home',
      title: 'Healthy living, shaped with care.',
      text:
        'The experience balances freshness, trust, and everyday beauty while growing into a serious long-term brand.',
      pills: ['Healthy households', 'Trusted sourcing', 'Natural routines'],
      image: images.landscape,
      imagePosition: 'center 44%',
    },
    items: [
      {
        title: 'Care first',
        text: 'Families should feel honesty, reassurance, and quality in every choice.',
        icon: 'Heart',
      },
      {
        title: 'Natural warmth',
        text: 'Sunlit tones and grounded storytelling create a calmer, more reassuring experience.',
        icon: 'Leaf',
      },
      {
        title: 'More than convenience',
        text: 'This is about daily wellbeing, not just delivery.',
        icon: 'BadgeCheck',
      },
      {
        title: 'Room to grow',
        text: 'Farm-to-Home is being shaped to grow with families over time.',
        icon: 'TrendingUp',
      },
    ],
  },
  products: {
    eyebrow: 'Product Story',
    heading: 'Carefully chosen categories for healthier routines.',
    categories: [
      {
        title: 'Rice',
        icon: 'Wheat',
        description: 'Daily staple varieties selected for freshness, reliability, and family use.',
        image: images.rice,
        imagePosition: 'center 40%',
      },
      {
        title: 'Oils',
        icon: 'Droplets',
        description: 'Traditional and practical oils that support healthy cooking choices.',
        image: images.oils,
        imagePosition: 'center 42%',
      },
      {
        title: 'Vegetables',
        icon: 'Sprout',
        description: 'Seasonal produce sourced with quality and clean handling in mind.',
        image: images.vegetables,
        imagePosition: 'center 38%',
      },
      {
        title: 'Traditional Foods',
        icon: 'PackageCheck',
        description: 'Grains and familiar staples that connect healthy eating with trusted sourcing.',
        image: images.grains,
        imagePosition: 'center 44%',
      },
      {
        title: 'Healthy Essentials',
        icon: 'Heart',
        description: 'Spices and essentials that complete a natural family kitchen.',
        image: images.spices,
        imagePosition: 'center 42%',
      },
    ],
  },
  farmStory: {
    eyebrow: 'Origin Story',
    heading: 'Connected directly with nature.',
    content:
      'Valsii Farm-to-Home focuses on connecting healthy farm products directly with families through trusted sourcing and quality-focused delivery.',
    image: images.farming,
    imagePosition: 'center 40%',
    bullets: ['Stronger producer-to-family trust', 'Care for freshness and handling', 'A lifestyle-led brand direction'],
  },
  healthLifestyle: {
    eyebrow: 'Healthy Living',
    heading: 'More than products.',
    content:
      'Healthy food creates healthier families, stronger lifestyles, and better future generations. Farm-to-Home is designed to support that daily choice.',
    image: images.family,
    imagePosition: 'center 40%',
    benefits: [
      'Healthy family routines',
      'Naturally positioned product storytelling',
      'Direct connection with trusted farm networks',
      'A cleaner premium brand experience',
    ],
  },
  delivery: {
    eyebrow: 'Delivery Experience',
    heading: 'Fresh delivery experience.',
    content: 'Fast and fresh delivery with quality-focused handling, clear communication, and dependable care.',
    reverse: true,
    image: images.delivery,
    imagePosition: 'center 40%',
    benefits: [
      'Freshness-first packaging and handling',
      'Delivery updates through direct contact',
      'Quality checks before dispatch',
      'Experience designed around trust, not speed alone',
    ],
  },
  futureVision: {
    eyebrow: 'Future Vision',
    heading: 'A healthier way forward.',
    content:
      'Farm-to-Home looks ahead to a more thoughtful way of sourcing, sharing, and living well every day.',
    image: images.landscape,
    imagePosition: 'center 44%',
    benefits: [
      'Healthier routines at home',
      'Stories rooted in trust and origin',
      'A more graceful path to better living',
    ],
  },
  finalCta: {
    heading: 'Experience healthier living naturally.',
    description: 'Reach the Valsii team to learn more about sourcing, healthy essentials, and future Farm-to-Home rollout plans.',
    buttons: [
      { label: 'Order Interest', href: siteConfig.whatsappFarmUrl, external: true, variant: 'primary' },
      { label: 'Contact Us', to: '/contact', variant: 'secondary' },
    ],
  },
};

export const aboutPage = {
  intro: {
    eyebrow: 'About Valsii',
    heading: 'A company shaped for what comes next.',
    subheading:
      'Valsii brings together distinct journeys in growth and healthier living through one evolving vision.',
  },
  story: {
    eyebrow: 'The Story',
    heading: 'Why it takes this shape.',
    content:
      'Some experiences ask for ambition and momentum. Others ask for trust and everyday warmth. Valsii was created to hold both with clarity.',
    image: images.village,
    imagePosition: 'center 38%',
    bullets: ['A clear central vision', 'Space for future chapters', 'Consistency across every touchpoint'],
  },
  architecture: {
    eyebrow: 'How It Connects',
    heading: 'One vision. Two distinct expressions.',
    text: 'SkillNet Mastery and Farm-to-Home move differently, but they belong to the same unfolding story.',
    parent: {
      eyebrow: 'At the center',
      title: 'Valsii LLP',
      text: 'The steady center that holds the vision together and gives each journey room to grow.',
      badges: ['Clarity', 'Trust', 'Long-term vision'],
    },
    branches: [
      {
        eyebrow: 'Leading today',
        title: 'SkillNet Mastery',
        text: 'Leadership, communication, mindset, and student transformation under a cinematic growth platform.',
        icon: 'Brain',
        bullets: ['Dark premium tone', 'Transformation-first narrative', 'Confidence and leadership outcomes'],
      },
      {
        eyebrow: 'Evolving next',
        title: 'Farm-to-Home',
        text: 'Healthy living, trusted sourcing, and premium family-first experiences built for warmth and trust.',
        icon: 'Leaf',
        tone: 'warm',
        bullets: ['Warmer natural palette', 'Lifestyle-led trust language', 'Separate brand readiness'],
      },
    ],
    notes: [
      {
        title: 'A steady center',
        text: 'Everything begins from one clear vision that keeps the brand grounded as it grows.',
      },
      {
        title: 'Different energies',
        text: 'Each journey can deepen its own tone without losing the connection to the whole.',
      },
      {
        title: 'Built for the long term',
        text: 'New chapters can arrive over time without breaking the continuity of the story.',
      },
    ],
  },
  philosophy: {
    eyebrow: 'What We Value',
    heading: 'Certain qualities stay constant.',
    text:
      'Across every experience, Valsii returns to the same essentials: clarity, trust, progress, and room to grow.',
    featured: {
      label: 'The thread',
      title: 'A quiet sense of confidence ties everything together.',
      text:
        'The brand is shaped to feel thoughtful, human, and enduring.',
      pills: ['Clarity', 'Transformation', 'Trust', 'Scalability'],
    },
    items: [
      {
        title: 'Clarity',
        text: 'Messages stay simple, deliberate, and easy to trust.',
        icon: 'Sparkles',
      },
      {
        title: 'Transformation',
        text: 'Growth is felt in confidence, self-belief, and steady change over time.',
        icon: 'TrendingUp',
      },
      {
        title: 'Trust',
        text: 'Trust is earned through honesty, care, and consistency.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Scalability',
        text: 'The vision is wide enough to keep unfolding without losing its center.',
        icon: 'Globe',
      },
    ],
  },
  roadmap: {
    eyebrow: 'The Road Ahead',
    heading: 'A vision that opens in stages.',
    text:
      'Each step strengthens the one before it, allowing the brand to grow without losing its clarity.',
    items: [
      {
        label: '01',
        title: 'Strengthen the flagship',
        text: 'SkillNet Mastery continues to lead with confidence, clarity, and personal growth.',
      },
      {
        label: '02',
        title: 'Shape the lifestyle journey',
        text: 'Farm-to-Home grows into its own warmer identity, rooted in trust and everyday living.',
      },
      {
        label: '03',
        title: 'Open to what is next',
        text: 'Future ideas can arrive naturally, guided by the same clarity, care, and sense of purpose.',
      },
    ],
  },
  founderQuote: {
    text: 'The mission is to build a stronger generation with skills, self-belief, healthy systems, and growth opportunities.',
    byline: `${siteConfig.founderName}, ${siteConfig.founderTitle}`,
  },
  founder: {
    eyebrow: 'Founder View',
    heading: 'Founder vision',
    content:
      'Valsii began with a belief that people deserve growth experiences and everyday essentials delivered with more care, more clarity, and more respect.',
    founderName: siteConfig.founderName,
    founderTitle: siteConfig.founderTitle,
    founderLocation: siteConfig.founderLocation,
    image: images.founder,
    imagePosition: 'center 24%',
  },
};

export const coreSystemsPage = {
  hero: {
    eyebrow: 'Core Systems',
    heading: 'Distinct journeys. One evolving vision.',
    subheading:
      'Leadership, healthier living, and future growth remain connected without losing their individuality.',
    description:
      'SkillNet Mastery leads the public experience today, while Farm-to-Home continues to grow in its own warmer rhythm.',
    backgroundImage: images.supply,
    backgroundPosition: 'center 34%',
    theme: 'corporate',
    stats: [
      { label: 'Parent brand', value: 'Valsii LLP' },
      { label: 'Distinct systems', value: '2' },
      { label: 'Shared vision', value: 'One story' },
    ],
    buttons: [
      { label: 'Explore SkillNet', to: '/skillnet-mastery', variant: 'primary' },
      { label: 'Explore FTH', href: '/farm-to-home', newTab: true, variant: 'secondary' },
    ],
  },
  visualArchitecture: {
    eyebrow: 'How It Connects',
    heading: 'Each journey moves differently, but the vision stays whole.',
    text:
      'What begins in personal growth can open into healthier living, trusted products, and future platforms with the same sense of clarity.',
    parent: {
      eyebrow: 'At the center',
      title: 'Valsii LLP',
      text: 'The quiet center that holds the vision together and keeps each journey aligned.',
      badges: ['Clarity', 'Trust', 'Long horizon'],
    },
    branches: [
      {
        eyebrow: 'Leading today',
        title: 'SkillNet Mastery',
        text: 'The active flagship for leadership, communication, self-belief, and future readiness.',
        icon: 'Brain',
        bullets: ['Cinematic dark presentation', 'Student-growth narrative', 'Transformation-first outcomes'],
      },
      {
        eyebrow: 'Growing next',
        title: 'Farm-to-Home',
        text: 'The future healthy living branch for trusted sourcing, family warmth, and natural daily routines.',
        icon: 'Leaf',
        tone: 'warm',
        bullets: ['Warmer natural palette', 'Household trust positioning', 'Consumer-brand expansion path'],
      },
    ],
    notes: [
      {
        title: 'A clear center',
        text: 'One vision keeps the story coherent even as each journey grows in its own direction.',
      },
      {
        title: 'Different energies',
        text: 'Leadership and healthier living ask for different moods, different rhythms, and different forms of trust.',
      },
      {
        title: 'Room to grow',
        text: 'Future chapters can arrive naturally without diluting what already feels strong.',
      },
    ],
  },
  systems: {
    eyebrow: 'Platform Character',
    heading: 'Each journey carries its own energy.',
    text:
      'The strength of the brand comes from letting each experience speak in its own tone.',
    items: [
      {
        title: 'SkillNet Mastery',
        text: 'SkillNet Mastery moves with momentum, confidence, and personal change.',
        icon: 'Brain',
        items: ['Cinematic tone', 'Youthful ambition', 'Transformation-led story'],
      },
      {
        title: 'Farm-to-Home',
        text: 'Farm-to-Home moves with warmth, ease, and family trust.',
        icon: 'Leaf',
        items: ['Warmer palette', 'Fresh, grounded atmosphere', 'Healthy living focus'],
      },
    ],
  },
  experienceModel: {
    eyebrow: 'What Holds It Together',
    heading: 'Different journeys, shared values.',
    text:
      'The connection is not sameness. It is a common standard of clarity, trust, and care.',
    featured: {
      label: 'One thread',
      title: 'What connects the journeys matters as much as what separates them.',
      text:
        'Each expression can grow in its own direction while staying recognizably part of Valsii.',
      pills: ['Clarity', 'Trust', 'Care'],
    },
    items: [
      {
        title: 'Steady center',
        text: 'A clear vision keeps the brand grounded, even as new paths begin to open.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Distinct voice',
        text: 'Each platform can speak in its own emotional language without losing connection.',
        icon: 'Sparkles',
      },
      {
        title: 'Clear path',
        text: 'People should always know where they are, what they are stepping into, and where to go next.',
        icon: 'Workflow',
      },
      {
        title: 'Room to grow',
        text: 'New chapters can arrive over time without taking away from what already feels complete.',
        icon: 'TrendingUp',
      },
    ],
  },
  flow: {
    eyebrow: 'A Growing Vision',
    heading: 'How the story unfolds.',
    text: 'The sequence matters because it protects clarity, trust, and brand maturity at every stage.',
    items: [
      { label: '01', title: 'Valsii LLP', text: 'The central vision stays steady, giving every journey a clear sense of direction.' },
      { label: '02', title: 'SkillNet Mastery', text: 'The public journey begins through confidence, leadership, and self-development.' },
      { label: '03', title: 'Farm-to-Home', text: 'The story opens further into warmer, healthier, more trusted everyday living.' },
    ],
  },
  comparison: {
    eyebrow: 'What Defines Us',
    heading: 'The difference is in the details.',
    items: [
      { title: 'Clear and modern', text: 'Calm, thoughtful, and built to last.', icon: 'BadgeCheck' },
      { title: 'No tuition-center clutter', text: 'The experience stays composed rather than crowded.', icon: 'XCircle' },
      { title: 'No hype-driven language', text: 'Confidence comes from clarity, not noise.', icon: 'XCircle' },
      { title: 'No bargain-market feel', text: 'Farm-to-Home stays rooted in trust, care, and quality.', icon: 'XCircle' },
    ],
  },
  cta: {
    heading: 'Keep the story focused. Let the future open naturally.',
    description:
      'That balance is what gives Valsii its clarity today and its room to grow tomorrow.',
    buttons: [
      { label: 'Talk to Valsii', href: siteConfig.whatsappGeneralUrl, external: true, variant: 'primary' },
      { label: 'Explore SkillNet', to: '/skillnet-mastery', variant: 'secondary' },
    ],
  },
};

export const contactPage = {
  hero: {
    eyebrow: 'Contact Valsii',
    heading: 'Start the conversation with clarity.',
    subheading:
      'Whether you are exploring SkillNet Mastery, Farm-to-Home, partnerships, or the wider Valsii vision, the right conversation starts here.',
    description:
      'A calm first step into the Valsii world.',
    backgroundImage: images.village,
    backgroundPosition: 'center 38%',
    theme: 'corporate',
    buttons: [
      { label: 'Chat on WhatsApp', href: siteConfig.whatsappGeneralUrl, external: true, variant: 'primary' },
      { label: 'Email Valsii', href: `mailto:${siteConfig.email}`, external: true, variant: 'secondary' },
    ],
  },
  channels: {
    eyebrow: 'Reach Valsii',
    heading: 'Choose the calmest route in.',
    text:
      'From quick questions to more thoughtful conversations, every path is simple, direct, and personal.',
    items: [
      { title: 'WhatsApp', text: 'Fastest for first contact, admissions guidance, and direct follow-up.', icon: 'MessageCircle' },
      { title: 'Email', text: `${siteConfig.email}`, icon: 'Mail' },
      { title: 'Phone', text: `${siteConfig.phone}`, icon: 'Phone' },
      { title: 'Location', text: siteConfig.founderLocation, icon: 'MapPin' },
    ],
  },
  contactProcess: {
    eyebrow: 'What Happens Next',
    heading: 'A simple, pressure-free flow.',
    text:
      'From the first message to the next step, the experience stays clear, personal, and easy to follow.',
    items: [
      { label: '01', title: 'Send Your Interest', text: 'Choose SkillNet, Farm-to-Home, or a general brand conversation.' },
      { label: '02', title: 'Receive Guidance', text: 'Valsii routes you to the right next step with a direct response.' },
      { label: '03', title: 'Move Forward Clearly', text: 'Continue into training, consultation, or product discussion with full clarity.' },
    ],
  },
  faqs: [
    {
      question: 'Is SkillNet Mastery online or offline?',
      answer:
        'SkillNet Mastery is positioned as an offline plus online learning experience, depending on the program and rollout format.',
    },
    {
      question: 'Can I ask about Farm-to-Home before launch?',
      answer:
        'Yes. Farm-to-Home is part of the future ecosystem direction, and you can already contact Valsii to share interest or partnership intent.',
    },
    {
      question: 'Is WhatsApp the fastest way to reach you?',
      answer:
        'Yes. WhatsApp is the quickest route for first contact, while email works well for structured or partnership-oriented requests.',
    },
  ],
};

export const adminPanel = {
  hero: {
    eyebrow: 'Admin Workspace',
    heading: 'Website control panel preview for Valsii.',
    subheading:
      'A front-end admin concept for monitoring brand structure, lead channels, SEO readiness, and content priorities.',
    description:
      'This route acts as a lightweight operations dashboard inside the current React project. It is a UI scaffold, ready to connect to real data later.',
    backgroundImage: images.research,
    theme: 'admin',
    buttons: [
      { label: 'Review Contact Page', to: '/contact', variant: 'primary' },
      { label: 'Message Ops on WhatsApp', href: siteConfig.whatsappAdminUrl, external: true, variant: 'secondary' },
    ],
  },
  stats: [
    { label: 'Public brand routes', value: '6' },
    { label: 'Primary lead channels', value: 'WhatsApp, phone, email' },
    { label: 'SEO layers', value: 'Meta, OG, canonical' },
    { label: 'Ready brand stacks', value: 'SkillNet + FTH' },
  ],
  panels: {
    eyebrow: 'Operations Overview',
    heading: 'Internal priorities that keep the website premium and organized.',
    items: [
      {
        title: 'Lead Routing',
        text: 'Keep SkillNet and Farm-to-Home inquiries distinct while preserving one parent-brand identity.',
        icon: 'Workflow',
        items: ['WhatsApp lead path', 'Contact page entry points', 'Manual response flow'],
      },
      {
        title: 'Brand Governance',
        text: 'Protect the premium tone across dark SkillNet and light Farm-to-Home experiences.',
        icon: 'ShieldCheck',
        items: ['Typography consistency', 'Color discipline', 'Separate brand storytelling'],
      },
      {
        title: 'Content Updates',
        text: 'Track which sections are live today and which remain future-facing.',
        icon: 'MonitorCog',
        items: ['Hero copy updates', 'Program list updates', 'Future FTH rollout notes'],
      },
      {
        title: 'Search Readiness',
        text: 'Maintain route-level metadata and clean titles as the brand grows.',
        icon: 'Globe',
        items: ['Meta descriptions', 'Canonical links', 'Social preview fields'],
      },
    ],
  },
  checklist: {
    eyebrow: 'Launch Checklist',
    heading: 'What this front-end admin concept already covers.',
    items: [
      { title: 'Responsive layouts', text: 'All main routes are designed mobile-first.', icon: 'BadgeCheck' },
      { title: 'WhatsApp integration', text: 'Lead buttons point to dedicated WhatsApp paths.', icon: 'BadgeCheck' },
      { title: 'SEO foundation', text: 'Titles, descriptions, keywords, and canonical tags are route aware.', icon: 'BadgeCheck' },
      { title: 'Admin UI scaffold', text: 'A dashboard route exists for future operational wiring.', icon: 'BadgeCheck' },
    ],
  },
};
