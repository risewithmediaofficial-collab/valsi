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
    heading: 'Premium ecosystems for future-ready growth.',
    subheading:
      'SkillNet Mastery leads with leadership and self-development. Farm-to-Home expands the Valsii ecosystem into healthier living.',
    description:
      'Designed as a calm, cinematic parent brand with one active flagship, one future lifestyle branch, and room for disciplined expansion.',
    backgroundImage: images.startup,
    backgroundPosition: 'center 34%',
    theme: 'skillnet',
    badges: ['Cinematic brand system', 'Leadership + healthy living', 'Expansion-ready architecture'],
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
    heading: 'Designed as a premium ecosystem, not a one-product website.',
    text:
      'Valsii aligns leadership growth, healthier living, and long-horizon expansion through one calm, scalable system.',
    featured: {
      label: 'Operating philosophy',
      title: 'One parent company. Distinct journeys. Shared trust.',
      text:
        'The Valsii architecture allows each platform to stay emotionally specific while preserving one premium standard of clarity, tone, and future readiness.',
      pills: ['Leadership development', 'Healthy living', 'Expansion-ready governance'],
      image: images.team,
      imagePosition: 'center 36%',
    },
    items: [
      {
        title: 'Calm brand logic',
        text: 'No poster-style clutter. Each experience is designed to feel clear, intentional, and elevated.',
        icon: 'Sparkles',
      },
      {
        title: 'Audience-specific paths',
        text: 'SkillNet and Farm-to-Home solve different emotional jobs without diluting each other.',
        icon: 'Layers3',
      },
      {
        title: 'Built to scale',
        text: 'New initiatives can plug into the ecosystem without breaking the parent brand experience.',
        icon: 'TrendingUp',
        value: '02',
      },
      {
        title: 'Trust as infrastructure',
        text: 'Every page, motion choice, and interaction should feel reliable, warm, and premium.',
        icon: 'ShieldCheck',
      },
    ],
  },
  philosophy: {
    eyebrow: 'Brand Philosophy',
    heading: 'A premium ecosystem should feel clear before it feels loud.',
    content:
      'Valsii is intentionally moving away from tuition-center clutter, hype-heavy startup tropes, and grocery-app utility. The goal is a cinematic ecosystem brand with emotional depth, calmer interfaces, and future-facing clarity.',
    image: images.founder,
    imagePosition: 'center 24%',
    bullets: [
      'Premium negative space instead of empty darkness',
      'Distinct tone for each platform without losing one parent-brand identity',
      'Story-led design that feels global, scalable, and calm',
    ],
    buttons: [
      { label: 'About Valsii', to: '/about', variant: 'secondary' },
      { label: 'See Core Systems', to: '/core-systems', variant: 'primary' },
    ],
  },
  brands: {
    eyebrow: 'Platform Experiences',
    heading: 'Two front doors. One premium operating standard.',
    text: 'Each platform serves a different emotional need while protecting the same parent-brand trust.',
    items: [
      {
        eyebrow: 'Active flagship',
        title: 'SkillNet Mastery',
        text: 'Leadership and self-development for students who need more than degrees.',
        icon: 'Users',
        image: images.learning,
        imagePosition: 'center 34%',
        items: ['Confidence and mindset growth', 'Communication and leadership training', 'Community-based transformation'],
        link: { label: 'Enter SkillNet', to: '/skillnet-mastery' },
      },
      {
        eyebrow: 'Lifestyle expansion',
        title: 'Farm-to-Home',
        text: 'A cleaner, healthier, more trusted path from farm networks to family homes.',
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
    text: 'Each layer of the Valsii ecosystem plays a clear role inside one longer-term brand narrative.',
    items: [
      {
        label: '01',
        title: 'Develop Inner Power',
        text: 'Start with SkillNet Mastery to build confidence, clarity, communication, and personal leadership.',
      },
      {
        label: '02',
        title: 'Grow Through Community',
        text: 'Bring people together through a premium student ecosystem centered on transformation and future opportunity.',
      },
      {
        label: '03',
        title: 'Expand Into Healthy Living',
        text: 'Move into Farm-to-Home as the Valsii ecosystem extends into trusted food, family wellness, and natural sourcing.',
      },
    ],
  },
  quote: {
    text: 'Valsii should feel like a premium ecosystem company, not a local institute or commodity storefront.',
    byline: 'Brand Direction',
  },
  finalCta: {
    heading: 'Begin with the flagship brand. Grow with the ecosystem.',
    description:
      'SkillNet Mastery is the front door today, with Farm-to-Home ready to evolve as a separate premium experience.',
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
          'Grow through business exposure, networking, opportunity awareness, and an ecosystem mindset for what comes next.',
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
      'SkillNet Mastery is more than training. It is a growth-focused student ecosystem where individuals learn leadership, communication, mindset, and future opportunity together.',
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
    heading: 'Future ecosystem expansion',
    content:
      'Valsii is building future-focused ecosystem concepts that extend beyond leadership development into healthy living and trusted farm-to-home initiatives.',
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
      'Farm-to-Home is the lifestyle branch of Valsii designed around warmer imagery, family trust, and a cleaner everyday relationship with food.',
    backgroundImage: images.family,
    backgroundPosition: 'center 40%',
    theme: 'farm',
    badges: ['Warmer lifestyle direction', 'Trusted sourcing', 'Premium family-first tone'],
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
    eyebrow: 'Lifestyle Direction',
    heading: 'Designed to feel warm, natural, and premium.',
    text:
      'Farm-to-Home should never feel like a discount marketplace. It should feel like a trusted lifestyle layer inside the Valsii ecosystem.',
    theme: 'farm',
    featured: {
      label: 'Brand tone',
      title: 'Natural warmth with premium discipline.',
      text:
        'The experience should balance sunlight, freshness, and everyday trust while staying polished enough to scale as a serious consumer brand.',
      pills: ['Healthy households', 'Direct farm trust', 'Future-ready brand system'],
      image: images.landscape,
      imagePosition: 'center 44%',
    },
    items: [
      {
        title: 'Human trust first',
        text: 'Families should feel care, honesty, and product confidence before they feel transaction.',
        icon: 'Heart',
      },
      {
        title: 'Warm visual language',
        text: 'Sunlit greens, earthy neutrals, and cleaner imagery help the brand feel healthy and premium.',
        icon: 'Leaf',
      },
      {
        title: 'Lifestyle over marketplace',
        text: 'The promise is not just delivery. It is a better everyday relationship with food and sourcing.',
        icon: 'BadgeCheck',
      },
      {
        title: 'Expansion-ready structure',
        text: 'Farm-to-Home can mature as a separate premium experience without losing its place in the ecosystem.',
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
    heading: 'Building a healthier ecosystem.',
    content:
      'Valsii Farm-to-Home aims to support healthy living through trusted farm connections and natural food systems that can scale into a premium consumer brand.',
    image: images.landscape,
    imagePosition: 'center 44%',
    benefits: [
      'Future-ready lifestyle positioning',
      'Space for trusted sourcing narratives',
      'A calmer premium route into healthy living',
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
    heading: 'A premium ecosystem company in the making.',
    subheading:
      'Valsii LLP is designed to hold distinct brands with different customer experiences while preserving a shared standard of trust, clarity, and future readiness.',
  },
  story: {
    eyebrow: 'Why The Structure Matters',
    heading: 'Why the structure matters.',
    content:
      'The company is being built to hold more than one customer promise without losing clarity. SkillNet needs a transformation-led tone. Farm-to-Home needs family trust. Valsii allows both to grow under one premium governance layer.',
    image: images.village,
    imagePosition: 'center 38%',
    bullets: ['Clear parent and sub-brand hierarchy', 'Scalable architecture for future launches', 'Premium positioning across every touchpoint'],
  },
  architecture: {
    eyebrow: 'Brand Architecture',
    heading: 'One parent brand. Two experience languages.',
    text: 'Valsii operates like a premium umbrella with distinct emotional jobs beneath it.',
    parent: {
      eyebrow: 'Parent Brand',
      title: 'Valsii LLP',
      text: 'The corporate anchor for trust, governance, expansion discipline, and the long-horizon ecosystem vision.',
      badges: ['Brand governance', 'Shared trust', 'Future expansion'],
    },
    branches: [
      {
        eyebrow: 'Active Flagship',
        title: 'SkillNet Mastery',
        text: 'Leadership, communication, mindset, and student transformation under a cinematic growth platform.',
        icon: 'Brain',
        bullets: ['Dark premium tone', 'Transformation-first narrative', 'Confidence and leadership outcomes'],
      },
      {
        eyebrow: 'Lifestyle Expansion',
        title: 'Farm-to-Home',
        text: 'Healthy living, trusted sourcing, and premium family-first experiences built for warmth and trust.',
        icon: 'Leaf',
        tone: 'warm',
        bullets: ['Warmer natural palette', 'Lifestyle-led trust language', 'Separate brand readiness'],
      },
    ],
    notes: [
      {
        title: 'Clear governance',
        text: 'The parent brand protects tone, trust, and expansion discipline across every branch.',
      },
      {
        title: 'Separated journeys',
        text: 'Each platform can deepen its own emotional language without confusing the audience.',
      },
      {
        title: 'Future scalability',
        text: 'New ecosystem ideas can enter without fragmenting the overall brand story.',
      },
    ],
  },
  philosophy: {
    eyebrow: 'Operating Principles',
    heading: 'Four promises shape every Valsii touchpoint.',
    text:
      'The brand should feel composed, premium, and future-facing across education, healthy living, and whatever comes next.',
    featured: {
      label: 'Premium standard',
      title: 'Clarity, trust, transformation, and scalability are the non-negotiables.',
      text:
        'These principles keep the ecosystem calm, emotionally credible, and globally competitive rather than noisy, local, or transactional.',
      pills: ['Clarity', 'Transformation', 'Trust', 'Scalability'],
    },
    items: [
      {
        title: 'Clarity',
        text: 'Every message should feel intentional, simple, and premium rather than noisy or overcrowded.',
        icon: 'Sparkles',
      },
      {
        title: 'Transformation',
        text: 'People should feel growth, self-belief, and progress instead of empty motivation.',
        icon: 'TrendingUp',
      },
      {
        title: 'Trust',
        text: 'Healthy living and student development both rely on brand reliability and honest communication.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Scalability',
        text: 'The company should be able to launch new ecosystem ideas without losing premium coherence.',
        icon: 'Globe',
      },
    ],
  },
  roadmap: {
    eyebrow: 'Ecosystem Roadmap',
    heading: 'How the company matures without losing coherence.',
    text:
      'The expansion path is intentional: build the flagship, separate the lifestyle brand, then scale with shared standards.',
    items: [
      {
        label: '01',
        title: 'Strengthen the flagship',
        text: 'SkillNet Mastery becomes the public growth platform that sets the tone for the ecosystem.',
      },
      {
        label: '02',
        title: 'Separate the lifestyle language',
        text: 'Farm-to-Home develops its own warmer identity without inheriting the visual logic of a training platform.',
      },
      {
        label: '03',
        title: 'Expand the umbrella',
        text: 'Future concepts can launch through Valsii with one shared standard for trust, design, and story.',
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
      'Valsii was created to support a stronger future through confidence-building education and healthy ecosystem thinking. The goal is not to look like a local course center or commodity seller, but to grow as a premium and trusted company with distinct, future-facing brand experiences.',
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
    heading: 'Two distinct systems. One premium ecosystem.',
    subheading:
      'Valsii separates experiences by audience while keeping brand discipline, trust, and future expansion aligned.',
    description:
      'SkillNet Mastery is the main active experience on the Valsii website today. Farm-to-Home is prepared as a separate healthy living brand with its own tone and path.',
    backgroundImage: images.supply,
    backgroundPosition: 'center 34%',
    theme: 'corporate',
    stats: [
      { label: 'Parent brand', value: 'Valsii LLP' },
      { label: 'Distinct systems', value: '2' },
      { label: 'Design logic', value: 'One ecosystem' },
    ],
    buttons: [
      { label: 'Explore SkillNet', to: '/skillnet-mastery', variant: 'primary' },
      { label: 'Explore FTH', href: '/farm-to-home', newTab: true, variant: 'secondary' },
    ],
  },
  visualArchitecture: {
    eyebrow: 'System Visualization',
    heading: 'A premium architecture with clear separation of roles.',
    text:
      'The ecosystem works when governance, storytelling, and customer journeys stay distinct instead of collapsing into one generic brand layer.',
    parent: {
      eyebrow: 'Governance Layer',
      title: 'Valsii LLP',
      text: 'Holds the ecosystem strategy, protects premium tone, and keeps every expansion path structurally clean.',
      badges: ['Trust anchor', 'Brand discipline', 'Scalable umbrella'],
    },
    branches: [
      {
        eyebrow: 'Transformation Layer',
        title: 'SkillNet Mastery',
        text: 'The active flagship for leadership, communication, self-belief, and future readiness.',
        icon: 'Brain',
        bullets: ['Cinematic dark presentation', 'Student-growth narrative', 'Transformation-first outcomes'],
      },
      {
        eyebrow: 'Lifestyle Layer',
        title: 'Farm-to-Home',
        text: 'The future healthy living branch for trusted sourcing, family warmth, and natural daily routines.',
        icon: 'Leaf',
        tone: 'warm',
        bullets: ['Warmer natural palette', 'Household trust positioning', 'Consumer-brand expansion path'],
      },
    ],
    notes: [
      {
        title: 'Governance stays central',
        text: 'The parent brand carries the trust architecture so sub-brands stay free to specialize.',
      },
      {
        title: 'Journeys stay specific',
        text: 'Education and healthy living should not share the same emotional tone or visual language.',
      },
      {
        title: 'Expansion stays clean',
        text: 'Future concepts can join through the umbrella without diluting what is already working.',
      },
    ],
  },
  systems: {
    eyebrow: 'Brand Systems',
    heading: 'Each brand serves a different emotional job.',
    text:
      'The strongest ecosystem brands protect the role of each platform instead of forcing one shared experience everywhere.',
    items: [
      {
        title: 'SkillNet Mastery',
        text: 'Should feel cinematic, aspirational, and transformation-led. Its role is to build confidence, leadership, communication, and growth mindset.',
        icon: 'Brain',
        items: ['Premium dark theme', 'Youth leadership energy', 'Transformation-first content'],
      },
      {
        title: 'Farm-to-Home',
        text: 'Should feel fresh, calm, healthy, and family-trust oriented. Its role is to support a natural lifestyle brand experience.',
        icon: 'Leaf',
        items: ['Cream and green palette', 'Farm freshness and sunlight tone', 'Healthy family positioning'],
      },
    ],
  },
  experienceModel: {
    eyebrow: 'Experience Model',
    heading: 'Each layer has a different responsibility inside the system.',
    text:
      'The ecosystem works when governance, storytelling, and lead routing are intentionally designed rather than blended together.',
    featured: {
      label: 'System discipline',
      title: 'Do not collapse every audience into one visual language.',
      text:
        'Premium ecosystems scale because each layer knows its role: the parent governs, the flagship transforms, and the lifestyle branch nurtures trust in a different emotional register.',
      pills: ['Governance', 'Storytelling', 'Lead flow'],
    },
    items: [
      {
        title: 'Brand governance',
        text: 'Valsii sets the trust, tone discipline, and future expansion rules.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Audience language',
        text: 'SkillNet stays transformation-led while Farm-to-Home stays lifestyle-led.',
        icon: 'Sparkles',
      },
      {
        title: 'Lead routing',
        text: 'Inquiries, actions, and offers stay clear instead of mixing brand promises.',
        icon: 'Workflow',
      },
      {
        title: 'Expansion readiness',
        text: 'New concepts can enter through the parent without diluting the flagship.',
        icon: 'TrendingUp',
      },
    ],
  },
  flow: {
    eyebrow: 'Scalable Logic',
    heading: 'How the ecosystem expands without confusion.',
    text: 'The sequence matters because it protects clarity, trust, and brand maturity at every stage.',
    items: [
      { label: '01', title: 'Parent Brand', text: 'Valsii LLP holds the full ecosystem strategy and corporate trust.' },
      { label: '02', title: 'Flagship Experience', text: 'SkillNet Mastery remains the main active growth platform on the primary website.' },
      { label: '03', title: 'Separate Expansion', text: 'Farm-to-Home opens independently when the healthy living brand is ready to scale.' },
    ],
  },
  comparison: {
    eyebrow: 'Positioning Principles',
    heading: 'What Valsii should and should not feel like.',
    items: [
      { title: 'Premium ecosystem company', text: 'Clear, calm, modern, and trustworthy.', icon: 'BadgeCheck' },
      { title: 'Not a tuition center', text: 'Avoid poster-style layouts and classroom cliches.', icon: 'XCircle' },
      { title: 'Not an MLM website', text: 'Avoid hype-driven claims or pushy growth language.', icon: 'XCircle' },
      { title: 'Not a grocery app', text: 'Farm-to-Home should feel branded and healthy, not transactional or cheap.', icon: 'XCircle' },
    ],
  },
  cta: {
    heading: 'Keep the flagship focused and the future scalable.',
    description:
      'That is the design logic behind the Valsii web structure: one polished parent company, one active public flagship, and one separate expansion path.',
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
      'Ask about SkillNet Mastery, Farm-to-Home, collaborations, or the broader Valsii ecosystem through the channel that suits you best.',
    description:
      'The contact experience should feel calm, premium, and reassuring. No pressure. No clutter. Just a clear route into the right part of the ecosystem.',
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
      'Whether you want admissions guidance, future brand conversations, or partnership dialogue, the website should make the first step feel clear and premium.',
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
      'Every inquiry should move into the right conversation clearly, whether it is for SkillNet, Farm-to-Home, or the broader ecosystem.',
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
