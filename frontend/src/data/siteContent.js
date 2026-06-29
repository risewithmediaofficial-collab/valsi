const valsiiImage = (name) => new URL(`../VALSI IMAGES/${name}`, import.meta.url).href;

const phoneDigits = '919876543210';
const email = 'hello@valsii.com';
const whatsappLink = (message) =>
  `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;

export const images = {
  learning:     valsiiImage('TEACHING IN VALSII.png'),
  team:         valsiiImage('VALSII YOUNGSTERSS.png'),
  founder:      valsiiImage('YOUNG MAN DISCUSSION.png'),
  startup:      valsiiImage('VALSII IT TECH.png'),
  fieldGuidance:valsiiImage('GUIDING YOUNGSTERS.png'),
  supply:       valsiiImage('SUPPLY CHAIN DISCUSSION.png'),
  farming:      valsiiImage('FARMING.png'),
  family:       valsiiImage('FARMER-FAMILY.png'),
  farmer:       valsiiImage('FARMER MAN.png'),
  farmTraining: valsiiImage('TEACHING ABOUT FARM.png'),
  delivery:     valsiiImage('DOOR DELIVERY.png'),
  produce:      valsiiImage('VEGGIES , GRAINS , ETC.png'),
  vegetables:   valsiiImage('VEGGIES.png'),
  rice:         valsiiImage('RICE.png'),
  oils:         valsiiImage('OILS.png'),
  grains:       valsiiImage('GRAINS.png'),
  spices:       valsiiImage('SPICES.png'),
  landscape:    valsiiImage('EMPOWERING FARMERS.png'),
  research:     valsiiImage('YOUNGSTERS RESEARCH FARMS.png'),
  village:      valsiiImage('VALSII IN VILLAGE DISCUSSION.png'),
  contact:      valsiiImage('VALSII - DELIVERY.png'),
};

export const siteConfig = {
  companyName:        'VALSII LLP',
  domain:             'https://www.valsii.com',
  lmsUrl:             'https://learn.valsii.com',
  email,
  phone:              '+91 98765 43210',
  phoneDigits,
  founderName:        'Ganeshan Mohan',
  founderTitle:       'Founder & CEO',
  founderLocation:    'Krishnagiri, Tamil Nadu',
  whatsappGeneralUrl: whatsappLink('Hello VALSII, I want to know more about your programs.'),
  whatsappJoinUrl:    whatsappLink('Hello VALSII, I want to join Inner Power Training.'),
  whatsappAdminUrl:   whatsappLink('Hello VALSII, I want to discuss website leads or admin operations.'),
};

export const routeMeta = {
  '/': {
    title: 'VALSII LLP | Learn · Grow · Lead',
    description:
      'VALSII LLP empowers individuals through practical learning, confidence, leadership, and life skills. Inspired by the ancient Tamil word "வல்சி" — food for life.',
    keywords: 'VALSII, inner power training, leadership, Tamil, learn grow lead, self development, youth empowerment',
  },
  '/about': {
    title: 'About VALSII LLP | Our Story, Mission & Vision',
    description:
      'Learn about VALSII LLP — inspired by the Tamil word Valsi meaning food for life. Discover our mission, vision, core values, and founder story.',
    keywords: 'about VALSII, VALSII story, VALSII mission, VALSII vision, Ganeshan Mohan, Tamil heritage learning',
  },
  '/programs': {
    title: 'Inner Power Training | VALSII LLP Programs',
    description:
      'Join Inner Power Training by VALSII LLP — unlock confidence, leadership, communication, fear management, and life skills through structured learning tracks.',
    keywords: 'Inner Power Training, VALSII programs, confidence building, leadership development, fear management, life skills',
  },
  '/resources': {
    title: 'Resources | VALSII LLP',
    description:
      'Access learning resources, articles, and tools curated by VALSII LLP to support your personal growth journey.',
    keywords: 'VALSII resources, learning materials, personal growth resources, life skills articles',
  },
  '/events': {
    title: 'Events | VALSII LLP',
    description:
      'Stay updated on VALSII LLP events, workshops, seminars, and Inner Power Training sessions near you.',
    keywords: 'VALSII events, workshops, seminars, Inner Power Training sessions, leadership workshops',
  },
  '/contact': {
    title: 'Contact VALSII LLP | Get in Touch',
    description:
      'Reach VALSII LLP for program inquiries, admissions, and partnership conversations through WhatsApp, phone, or email.',
    keywords: 'contact VALSII, VALSII phone, VALSII email, Inner Power Training contact',
  },
  '/register': {
    title: 'Register | VALSII LLP — Join Inner Power Training',
    description:
      'Register for Inner Power Training at VALSII LLP. Complete your student details, select your course track, and begin your learning journey.',
    keywords: 'VALSII register, join Inner Power Training, enroll VALSII, student registration',
  },
  '/admin': {
    title: 'Admin Panel | VALSII LLP',
    description: 'VALSII LLP internal admin panel for managing registrations, leads, and content operations.',
    keywords: 'VALSII admin, admin panel',
  },
};

/* ─── HOME PAGE ─────────────────────────────────────────────── */
export const homePage = {
  carousel: {
    slides: [
      {
        image: images.learning,
        position: 'center 30%',
        alt: 'Teaching session at VALSII',
      },
      {
        image: images.team,
        position: 'center 32%',
        alt: 'VALSII young learners',
      },
      {
        image: images.fieldGuidance,
        position: 'center 28%',
        alt: 'Guiding the next generation',
      },
    ],
  },
  meaning: {
    tamilWord: 'வல்சி',
    title: 'THE MEANING OF VALSII',
    tagline: 'Inspired by Tamil Heritage, Built for the Future',
    paragraphs: [
      'The name VALSII is inspired by the ancient Tamil word "வல்சி", found in Sangam literature. In Tamil literary tradition, the word "வல்சி" refers to "food for life" or "that which sustains life."',
      'At VALSII, we believe that nourishment is not limited to food alone. Knowledge, skills, confidence, leadership, and values are equally essential for building a meaningful and successful life.',
    ],
    image: images.village,
  },
};

/* ─── ABOUT PAGE ─────────────────────────────────────────────── */
export const aboutPageNew = {
  story: {
    eyebrow: 'Our Story',
    englishText:
      'Every great journey begins with a meaningful purpose. VALSII was established with a vision to create a learning ecosystem where education extends beyond classrooms and empowers individuals for life. We believe that confidence, leadership, practical skills, strong values, and continuous learning are the true foundations of personal and professional success. Inspired by the ancient Tamil word "Valsi," meaning "food for life," VALSII represents our belief that knowledge and life skills are essential nourishment for human growth. This philosophy led to the creation of Inner Power Training, our flagship learning initiative dedicated to helping students and young professionals unlock their potential, strengthen their character, and prepare for a purposeful future. Today, VALSII continues its journey with a commitment to empowering individuals, inspiring lifelong learning, and building a generation of confident, responsible, and value-driven leaders.',
    tamilText:
      'ஒவ்வொரு உயர்ந்த பயணமும் ஒரு அர்த்தமுள்ள நோக்கத்திலிருந்து தொடங்குகிறது. வாழ்க்கைக்கான கல்வி என்பது வகுப்பறைகளில் மட்டும் முடிவடையக் கூடாது என்ற எண்ணத்தில்தான் வல்சி உருவானது. தன்னம்பிக்கை, தலைமைத்துவம் நடைமுறை வாழ்க்கைத் திறன்கள், நல்ல மதிப்புகள் மற்றும் தொடர்ச்சியான கற்றலே தனிநபர் மற்றும் தொழில்முறை வெற்றிக்கான உண்மையான அடித்தளம் என்று நாங்கள் நம்புகிறோம். சங்க இலக்கியங்களில் இடம்பெறும் "வல்சி" என்ற தமிழ்ச் சொல்லின் ஆழமான கருத்திலிருந்து ஊக்கமடைந்து, மனிதர்களின் வளர்ச்சிக்குத் தேவையான உண்மையான ஆற்றலாக அறிவும் வாழ்க்கைத் திறன்களும் அமைகின்றன என்ற நம்பிக்கையை எங்கள் பெயர் பிரதிபலிக்கிறது. அந்த எண்ணத்தின் வெளிப்பாடாக Inner Power Training உருவாக்கப்பட்டது.',
  },
  directives: {
    eyebrow: 'Core Directives',
    heading: 'What We Stand For',
    items: [
      {
        id: 'mission',
        title: 'Our Mission',
        snippet: 'Empowering individuals through practical learning and life skills.',
        english:
          'To empower individuals through practical learning experiences that strengthen confidence, leadership, communication, life skills, and personal growth while preparing them to create a positive impact in society.',
        tamil:
          'நடைமுறை கற்றல் அனுபவங்கள் மூலம் தன்னம்பிக்கை, தலைமைத்துவம் தொடர்புத்திறன், வாழ்க்கைத் திறன்கள் மற்றும் தனிநபர் வளர்ச்சியை மேம்படுத்தி, சமூகத்தில் நேர்மறையான மாற்றத்தை உருவாக்கக்கூடிய நபர்களை உருவாக்குவதே எங்கள் நோக்கமாகும்.',
      },
      {
        id: 'vision',
        title: 'Our Vision',
        snippet: 'A trusted ecosystem that inspires lifelong learning and leadership.',
        english:
          'To become a trusted learning ecosystem that inspires individuals to unlock their potential, lead with integrity, embrace lifelong learning, and contribute to a better future.',
        tamil:
          'ஒவ்வொருவரும் தங்களுடைய முழுமையான திறனை உணர்ந்து, நேர்மையுடன் தலைமைத்துவம் மேற்கொண்டு, வாழ்நாள் முழுவதும் கற்றுக்கொண்டு, சிறந்த எதிர்காலத்தை உருவாக்குவதே எங்கள் பார்வையாகும்.',
      },
      {
        id: 'why',
        title: 'Why VALSII?',
        snippet: 'Knowledge and values — the true nourishment for human growth.',
        english:
          "The name VALSII is inspired by the ancient Tamil word 'Valsii,' meaning 'food for life.' We believe that knowledge, practical skills, confidence, leadership, and values are the true nourishment that empowers individuals to grow, succeed, and lead with purpose.",
        tamil:
          "ஏன் வல்சி? 'வல்சி' என்ற தமிழ்ச் சொல் 'வாழ்க்கைக்கான உணவு' என்ற ஆழமான பொருளை கொண்டுள்ளது. உடலுக்கு உணவு எவ்வளவு அவசியமோ, அதேபோல் அறிவு, திறன், தன்னம்பிக்கை, தலைமைத்துவம் மற்றும் நல்ல மதிப்புகளும் மனித வாழ்வை வளப்படுத்தும் அடிப்படை ஆற்றல்கள் என்று நாங்கள் நம்புகிறோம்.",
      },
    ],
  },
  values: {
    eyebrow: 'Core Values',
    heading: 'The Principles That Guide Us',
    items: [
      {
        number: '01',
        icon: '📚',
        name: 'Continuous Learning',
        desc: 'We believe learning is a lifelong journey that empowers individuals to grow personally and professionally.',
      },
      {
        number: '02',
        icon: '🤝',
        name: 'Integrity',
        desc: 'We act with honesty, responsibility, and transparency in everything we do.',
      },
      {
        number: '03',
        icon: '🌟',
        name: 'Leadership',
        desc: 'We inspire individuals to lead with confidence, purpose, and positive influence.',
      },
      {
        number: '04',
        icon: '🛠️',
        name: 'Practical Learning',
        desc: 'We focus on real-world skills that can be applied in everyday life and future careers.',
      },
      {
        number: '05',
        icon: '🌱',
        name: 'Personal Growth',
        desc: 'We encourage every individual to discover their potential and strive for continuous self-improvement.',
      },
      {
        number: '06',
        icon: '🙏',
        name: 'Respect',
        desc: 'We value every individual, every idea, and every opportunity to learn together.',
      },
      {
        number: '07',
        icon: '💫',
        name: 'Positive Impact',
        desc: 'We are committed to creating meaningful change in individuals, communities, and society.',
      },
    ],
  },
  founder: {
    eyebrow: 'Founder Message',
    quote: 'Every individual has the potential to achieve more than they imagine.',
    message:
      'I believe education should inspire confidence, build character, and prepare individuals for real life—not just examinations. This belief became the foundation of VALSII and our flagship program, Inner Power Training. Our mission is to create meaningful learning experiences that help students and young professionals discover their strengths, develop practical life skills, and become responsible leaders who contribute positively to society. Thank you for being a part of this journey. Together, let us learn, grow, and create a better future.',
    name:  'Ganeshan Mohan',
    title: 'Founder & CEO, VALSII LLP',
    image: images.founder,
  },
};

/* ─── INNER POWER TRAINING ───────────────────────────────────── */
export const innerPowerTraining = {
  hero: {
    title: 'Inner Power Training',
    subtitle: 'Unlock Your Inner Potential',
    image: images.learning,
  },
  intro: {
    eyebrow: 'What is Inner Power Training?',
    heading: 'A Transformative Learning Experience',
    text: 'Inner Power Training is VALSII\'s flagship learning program designed to help students, young professionals, and individuals break through their limitations, build unshakeable confidence, and develop essential life skills. Through structured, practical, and interactive learning modules, participants gain the tools they need to lead themselves and others with clarity, purpose, and resilience.',
  },
  audience: {
    eyebrow: 'Who Can Join?',
    heading: 'This Program is For You',
    items: [
      { label: 'School Students', icon: '🎒' },
      { label: 'College Students', icon: '🎓' },
      { label: 'Job Seekers', icon: '💼' },
      { label: 'Working Professionals', icon: '👔' },
      { label: 'Entrepreneurs', icon: '🚀' },
    ],
  },
  benefits: {
    eyebrow: 'Why Join This Program?',
    heading: 'Transform Every Area of Your Life',
    items: [
      {
        icon: '💪',
        title: 'Build Confidence',
        desc: 'Break through self-doubt and develop unshakeable belief in yourself and your abilities.',
      },
      {
        icon: '🌟',
        title: 'Leadership Skills',
        desc: 'Learn to inspire, guide, and influence others with clarity, empathy, and purpose.',
      },
      {
        icon: '🗣️',
        title: 'Communication Mastery',
        desc: 'Express your ideas clearly, speak with impact, and connect authentically with others.',
      },
      {
        icon: '🧠',
        title: 'Fear Management',
        desc: 'Identify, understand, and overcome your fears to unlock new possibilities in life.',
      },
      {
        icon: '📱',
        title: 'Mobile Addiction Recovery',
        desc: 'Regain control of your attention and time by breaking the cycle of digital dependency.',
      },
      {
        icon: '⏰',
        title: 'Time Management',
        desc: 'Master productivity systems and daily routines that keep you focused on what matters most.',
      },
      {
        icon: '💰',
        title: 'Money Mindset',
        desc: 'Develop a healthy relationship with money, value creation, and financial responsibility.',
      },
    ],
  },
  courses: {
    eyebrow: 'Course Catalogue',
    heading: 'Choose Your Learning Track',
    items: [
      {
        number: '01',
        icon: '🧠',
        title: 'Mindset Training',
        desc: 'Rewire your thought patterns, build a growth mindset, and activate your subconscious potential.',
      },
      {
        number: '02',
        icon: '😨',
        title: 'Fear Management',
        desc: 'Systematic techniques to identify, confront, and permanently overcome fear in all areas of life.',
      },
      {
        number: '03',
        icon: '📱',
        title: 'Mobile Addiction Recovery',
        desc: 'Structured program to break digital addiction habits and reclaim your focus and productivity.',
      },
      {
        number: '04',
        icon: '👥',
        title: 'Leadership Development',
        desc: 'Develop your leadership presence, decision-making, team management, and influence skills.',
      },
      {
        number: '05',
        icon: '⏰',
        title: 'Time Management',
        desc: 'Proven frameworks for prioritization, goal-setting, and building powerful daily habits.',
      },
      {
        number: '06',
        icon: '💰',
        title: 'Money Mindset',
        desc: 'Build a healthy, abundant relationship with money through mindset shifts and practical skills.',
      },
      {
        number: '07',
        icon: '❤️',
        title: 'Emotional Intelligence',
        desc: 'Understand and manage your emotions while building deeper, more meaningful relationships.',
      },
      {
        number: '08',
        icon: '🌱',
        title: 'Personal Growth',
        desc: 'A holistic track covering self-awareness, purpose discovery, habit formation, and life design.',
      },
    ],
  },
  testimonials: {
    eyebrow: 'Student Testimonials',
    heading: 'Real Stories, Real Transformation',
    items: [
      {
        initials: 'A',
        name: 'Ananya S.',
        role: 'College Student, Chennai',
        text: 'Inner Power Training changed the way I see myself. I went from being afraid to speak in public to confidently leading our college cultural team. This program is life-changing!',
        stars: 5,
      },
      {
        initials: 'R',
        name: 'Rajan M.',
        role: 'Job Seeker, Coimbatore',
        text: 'The fear management module helped me face my interview anxiety head-on. Within a month, I cleared two interviews and landed my dream job. Thank you VALSII!',
        stars: 5,
      },
      {
        initials: 'P',
        name: 'Priya K.',
        role: 'School Student, Krishnagiri',
        text: 'I used to waste hours on my phone and couldn\'t focus on studies. The mobile addiction recovery track gave me a clear plan and I\'ve not looked back since.',
        stars: 5,
      },
    ],
    videoLabel: 'Watch Success Stories — Student Transformation Videos',
  },
  faq: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Everything You Need to Know',
    items: [
      {
        category: 'Duration',
        question: 'How long does the Inner Power Training program last?',
        answer:
          'The program duration varies by track. Most modules are 15–30 days of structured learning, with flexible scheduling available for online participants. Intensive formats are also available.',
      },
      {
        category: 'Language',
        question: 'Is the training available in Tamil?',
        answer:
          'Yes! All VALSII programs are available in both English and Tamil. Our trainers are fully bilingual and all course materials are provided in both languages.',
      },
      {
        category: 'Certificate',
        question: 'Will I receive a certificate upon completion?',
        answer:
          'Yes. All participants who successfully complete the program receive a VALSII Inner Power Training completion certificate, which is digitally verifiable.',
      },
      {
        category: 'Eligibility',
        question: 'Who is eligible to join Inner Power Training?',
        answer:
          'The program is open to school students (Grade 8+), college students, job seekers, working professionals, and entrepreneurs. Anyone with a desire to grow is welcome.',
      },
      {
        category: 'Fees',
        question: 'What is the course fee and are there any scholarships?',
        answer:
          'Course fees vary by track. Scholarship options are available for deserving students. Please contact us via WhatsApp or the registration form for detailed fee information.',
      },
      {
        category: 'Support',
        question: 'What kind of support is available during the program?',
        answer:
          'All participants get access to trainer support via our learning platform, dedicated WhatsApp support groups, Q&A sessions, and progress check-ins throughout the program.',
      },
    ],
  },
};

/* ─── CONTACT PAGE (kept from existing structure) ──────────────── */
export const contactData = {
  email: siteConfig.email,
  phone: siteConfig.phone,
  location: siteConfig.founderLocation,
  whatsapp: siteConfig.whatsappGeneralUrl,
};
