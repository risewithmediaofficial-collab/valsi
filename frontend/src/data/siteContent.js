const valsiiImage = (name) => new URL(`../VALSI IMAGES/${name}`, import.meta.url).href;

export const images = {
  hero: valsiiImage('FARMING.png'),
  origin: valsiiImage('VALSII IN VILLAGE DISCUSSION.png'),
  learning: valsiiImage('TEACHING IN VALSII.png'),
  crops: valsiiImage('VEGGIES , GRAINS , ETC.png'),
  landscape: valsiiImage('EMPOWERING FARMERS.png'),
  farmer: valsiiImage('FARMER MAN.png'),
  greenhouse: valsiiImage('YOUNGSTERS RESEARCH FARMS.png'),
  soil: valsiiImage('TEACHING ABOUT FARM.png'),
  harvest: valsiiImage('FARMER-FAMILY.png'),
  contact: valsiiImage('VALSII - DELIVERY.png'),
  study: valsiiImage('VALSII IT TECH.png'),
  fieldHands: valsiiImage('GUIDING YOUNGSTERS.png'),
  training: valsiiImage('TEACHING IN VALSII.png'),
  orientation: valsiiImage('YOUNG MAN DISCUSSION.png'),
  supply: valsiiImage('SUPPLY CHAIN DISCUSSION.png'),
  grain: valsiiImage('GRAINS.png'),
  rice: valsiiImage('RICE.png'),
  oils: valsiiImage('OILS.png'),
  spices: valsiiImage('SPICES.png'),
  vegetables: valsiiImage('VEGGIES.png'),
  essentials: valsiiImage('VEGGIES , GRAINS , ETC.png'),
  delivery: valsiiImage('DOOR DELIVERY.png'),
  teamwork: valsiiImage('VALSII YOUNGSTERSS.png'),
};

export const solutions = [
  {
    title: 'SkillNet Mastery',
    icon: 'BookOpen',
    image: images.training,
    position: 'center',
    text: 'Step-by-step skill training focused on clear thinking, work discipline, and preparation for real work.',
  },
  {
    title: 'Farm-to-Home',
    icon: 'Sprout',
    image: images.delivery,
    position: 'center 58%',
    text: 'Direct sourcing from farmers with clear pricing, quality checks, and honest supply.',
  },
  {
    title: 'How Systems Connect',
    icon: 'Route',
    image: images.supply,
    position: 'center 48%',
    text: 'Skills prepare people. Products create real work. Together, they support steady growth.',
  },
];

export const skillAreas = [
  {
    title: 'Mental Clarity',
    icon: 'Brain',
    image: images.study,
    text: 'Mindset training for focus and steady performance.',
  },
  {
    title: 'Leadership',
    icon: 'Users',
    image: images.teamwork,
    text: 'Self-leadership and confidence.',
  },
  {
    title: 'Communication',
    icon: 'MessageCircle',
    image: images.learning,
    text: 'Confident and respectful communication.',
  },
  {
    title: 'Productivity',
    icon: 'Clock3',
    image: images.orientation,
    text: 'Time management and work discipline.',
  },
];

export const productCategories = [
  {
    title: 'Rice & Grains',
    icon: 'Wheat',
    image: images.rice,
    text: 'Basmati Rice, Sona Masoori, Brown Rice, Millets.',
  },
  {
    title: 'Cooking Oils',
    icon: 'Droplets',
    image: images.oils,
    text: 'Sunflower Oil, Groundnut Oil, Coconut Oil, Mustard Oil.',
  },
  {
    title: 'Vegetables & Farm Produce',
    icon: 'Sprout',
    image: images.vegetables,
    text: 'Seasonal Vegetables, Leafy Greens, Root Vegetables, Local Produce.',
  },
  {
    title: 'Home Essentials',
    icon: 'PackageCheck',
    image: images.spices,
    text: 'Pulses, Spices, Flour, Basic Groceries.',
  },
];

export const articles = [
  {
    title: 'Why skills need practical use',
    category: 'Training',
    image: images.training,
    read: '6 min',
    excerpt: 'Skills become useful when they are connected to field practice, discipline, and honest work.',
  },
  {
    title: 'Clear product systems build trust',
    category: 'Supply',
    image: images.supply,
    position: 'center 58%',
    read: '5 min',
    excerpt: 'Direct sourcing, clear pricing, and trained handling help farmers and households trust the process.',
  },
];

export const caseStudies = [
  {
    title: 'Learning circles for first-generation growers',
    image: images.fieldHands,
    position: 'center 48%',
    text: 'A practical learning model helped growers record field patterns and improve weekly decisions.',
  },
];

export const farmToHomeTimeline = [
  {
    title: 'Source from Verified Farmers',
    icon: 'Wheat',
    description: 'We identify and partner with farmers who follow sustainable practices.',
    image: images.farmer,
    details: {
      title: 'Verification Process',
      points: [
        'Field assessment and practice review',
        'Soil health and farming method evaluation',
        'Building direct relationships with farmer communities',
        'Understanding seasonal harvest patterns',
      ],
    },
    tags: ['Sourcing', 'Trust', 'Direct Connection'],
  },
  {
    title: 'Quality Check & Documentation',
    icon: 'PackageCheck',
    description: 'Every batch undergoes careful quality inspection before processing.',
    image: images.crops,
    details: {
      title: 'Quality Standards',
      points: [
        'Visual inspection for freshness and quality',
        'Documentation of source and harvest date',
        'Testing for cleanliness and safety',
        'Recording of handling practices',
      ],
    },
    tags: ['Quality', 'Safety', 'Transparency'],
  },
  {
    title: 'Clear Pricing Setup',
    icon: 'DollarSign',
    description: 'Prices are set with fairness to farmers and clarity for customers.',
    image: images.supply,
    details: {
      title: 'Pricing Structure',
      points: [
        'Fair compensation to farmers',
        'Transparent cost breakdown',
        'Minimal middleman margins',
        'No hidden charges or pressure pricing',
      ],
    },
    tags: ['Pricing', 'Transparency', 'Fair Trade'],
  },
  {
    title: 'Trained Handlers Prepare Products',
    icon: 'Users',
    description: 'SkillNet Mastery trained individuals prepare and package products.',
    image: images.fieldHands,
    details: {
      title: 'Preparation Standards',
      points: [
        'Cleaning and sorting by trained hands',
        'Proper packaging for freshness',
        'Quality verification at each step',
        'Attention to detail and cleanliness',
      ],
    },
    tags: ['Skill', 'Care', 'Discipline'],
  },
  {
    title: 'Delivery to Your Home',
    icon: 'Route',
    description: 'Direct delivery ensures freshness and gives customers direct feedback.',
    image: images.delivery,
    details: {
      title: 'Delivery Process',
      points: [
        'Scheduled deliveries to customer homes',
        'Fresh products at consistent quality',
        'Direct communication with customers',
        'Opportunity for feedback and questions',
      ],
    },
    tags: ['Delivery', 'Fresh', 'Direct'],
  },
  {
    title: 'Build Repeat Relationships',
    icon: 'Sprout',
    description: 'Trust and reliability create consistent demand and steady business.',
    image: images.harvest,
    details: {
      title: 'Long-term Benefits',
      points: [
        'Regular customers appreciate consistent quality',
        'Predictable demand helps farmers plan',
        'Trained people get steady work',
        'System becomes more stable over time',
      ],
    },
    tags: ['Relationship', 'Trust', 'Growth'],
  },
];

export const trainingWorkflowTimeline = [
  {
    title: 'Program Introduction',
    icon: 'BookOpen',
    description: 'Understand what SkillNet Mastery is and how it works.',
    image: images.learning,
    details: {
      title: 'What You\'ll Learn',
      points: [
        'Overview of the SkillNet Mastery program',
        'Connection between skills and real work',
        'Expectations and commitment required',
        'How practical training supports growth',
      ],
    },
    tags: ['Foundation', 'Orientation', 'Clarity'],
  },
  {
    title: 'Mental Clarity Training',
    icon: 'Brain',
    description: 'Develop focus, discipline, and clear thinking for consistent work.',
    image: images.study,
    details: {
      title: 'Mental Foundation',
      points: [
        'Techniques for focus and concentration',
        'Building work discipline habits',
        'Developing clear thinking patterns',
        'Managing distractions and challenges',
      ],
    },
    tags: ['Mindset', 'Foundation', 'Focus'],
  },
  {
    title: 'Leadership & Self-Development',
    icon: 'Users',
    description: 'Build confidence and self-leadership for honest work.',
    image: images.orientation,
    details: {
      title: 'Personal Growth',
      points: [
        'Understanding personal strengths',
        'Building confidence through small wins',
        'Developing leadership in daily tasks',
        'Preparing for responsibility',
      ],
    },
    tags: ['Leadership', 'Confidence', 'Growth'],
  },
  {
    title: 'Communication Skills',
    icon: 'MessageCircle',
    description: 'Learn to communicate clearly and respectfully with others.',
    image: images.soil,
    details: {
      title: 'Communication Techniques',
      points: [
        'Clear and honest communication',
        'Listening and understanding others',
        'Explaining ideas and products',
        'Building trust through words',
      ],
    },
    tags: ['Communication', 'Connection', 'Trust'],
  },
  {
    title: 'Work Discipline & Time Management',
    icon: 'Clock3',
    description: 'Master the discipline and organization needed for reliable work.',
    image: images.training,
    details: {
      title: 'Work Excellence',
      points: [
        'Time management and prioritization',
        'Maintaining consistent performance',
        'Following procedures with care',
        'Accountability and responsibility',
      ],
    },
    tags: ['Discipline', 'Reliability', 'Excellence'],
  },
  {
    title: 'Field Work & Practice',
    icon: 'Sprout',
    description: 'Apply skills in real work situations with guidance and feedback.',
    image: images.greenhouse,
    details: {
      title: 'Practical Application',
      points: [
        'Supervised field assignments',
        'Real product handling experience',
        'Customer interaction practice',
        'Regular feedback and improvement',
      ],
    },
    tags: ['Practice', 'Experience', 'Application'],
  },
  {
    title: 'Certification & Opportunity',
    icon: 'CheckCircle2',
    description: 'Earn certification and access to Farm-to-Home work opportunities.',
    image: images.teamwork,
    details: {
      title: 'Next Steps',
      points: [
        'Official SkillNet Mastery certification',
        'Qualification for product handling roles',
        'Access to regular work opportunities',
        'Continued growth and advancement',
      ],
    },
    tags: ['Certification', 'Opportunity', 'Career'],
  },
];

export const logisticsTimeline = [
  {
    title: 'Order Placement',
    icon: 'BookOpen',
    description: 'Customers place orders through our simple and clear ordering system.',
    details: {
      title: 'How to Order',
      points: [
        'Browse available products and farmers',
        'Select quantities and preferences',
        'Choose delivery date and location',
        'Transparent pricing shown upfront',
      ],
    },
    tags: ['Ordering', 'Transparency', 'Easy'],
  },
  {
    title: 'Farmer Confirmation',
    icon: 'CheckCircle2',
    description: 'Verified farmers confirm product availability and readiness.',
    details: {
      title: 'Farmer Process',
      points: [
        'Farmers review order requirements',
        'Confirm harvest readiness',
        'Plan pickup and delivery timing',
        'Ensure quality standards are met',
      ],
    },
    tags: ['Coordination', 'Planning', 'Farming'],
  },
  {
    title: 'Product Preparation',
    icon: 'PackageCheck',
    description: 'Trained handlers prepare products with care and attention.',
    image: images.crops,
    details: {
      title: 'Preparation Steps',
      points: [
        'Careful sorting and cleaning',
        'Quality verification',
        'Proper packaging for safety',
        'Freshness and hygiene checks',
      ],
    },
    tags: ['Preparation', 'Quality', 'Care'],
  },
  {
    title: 'Route Optimization',
    icon: 'Route',
    description: 'Logistics team plans efficient delivery routes and schedules.',
    details: {
      title: 'Logistics Planning',
      points: [
        'Route optimization for speed',
        'Temperature and freshness control',
        'Delivery time confirmation',
        'Coordination with multiple households',
      ],
    },
    tags: ['Logistics', 'Efficiency', 'Planning'],
  },
  {
    title: 'Quality Verification',
    icon: 'CheckCircle2',
    description: 'Final inspection ensures products meet all standards before delivery.',
    details: {
      title: 'Pre-Delivery Checks',
      points: [
        'Final quality inspection',
        'Temperature maintenance verification',
        'Packaging integrity check',
        'Documentation and tracking',
      ],
    },
    tags: ['Quality', 'Verification', 'Standards'],
  },
  {
    title: 'Delivery to Home',
    icon: 'Route',
    description: 'Trained delivery personnel bring fresh products directly to customers.',
    image: images.delivery,
    details: {
      title: 'Delivery Experience',
      points: [
        'Scheduled and reliable delivery',
        'Professional and courteous service',
        'Direct customer interaction',
        'Feedback collection and follow-up',
      ],
    },
    tags: ['Delivery', 'Service', 'Care'],
  },
  {
    title: 'Customer Feedback & Improvement',
    icon: 'MessageCircle',
    description: 'We collect feedback to continuously improve quality and service.',
    details: {
      title: 'Continuous Improvement',
      points: [
        'Customer satisfaction surveys',
        'Quality feedback loops',
        'Service improvement tracking',
        'Building better relationships',
      ],
    },
    tags: ['Feedback', 'Improvement', 'Service'],
  },
];
