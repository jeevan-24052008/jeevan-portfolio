export const personalInfo = {
  name: 'Jeevan Kumar Ugandhar',
  shortName: 'Jeevan Kumar',
  role: 'CSE (AI & ML) Student • Developer • Problem Solver',
  email: 'ujeevankumar2008@gmail.com',
  phone: '+91 8374385073',
  github: 'https://github.com/jeevan-24052008',
  linkedin: 'https://www.linkedin.com/in/jeevan-kumar-ugandhar-76b44b29b',
  leetcode: 'https://leetcode.com/u/jeevan_240508',
  resume: '/assets/resume/jeevan_resume.pdf',
  photo: '/assets/profile/about-photo.jpeg',
};

export const stats = [
  { value: '200+', label: 'LeetCode Problems' },
  { value: '5', label: 'Projects' },
  { value: '2nd', label: 'Hackathon Place' },
];

export const capabilities = [
  {
    icon: 'cpu',
    title: 'AI & Machine Learning',
    description:
      'Build practical ML applications and experiment with machine-learning approaches for real-world problems.',
  },
  {
    icon: 'layout',
    title: 'Web Development',
    description:
      'Build responsive interfaces and full-stack applications with modern frontend and backend technologies.',
  },
  {
    icon: 'server',
    title: 'API & Backend Development',
    description:
      'Work with Node.js, Express, FastAPI and external APIs to build data-driven applications.',
  },
  {
    icon: 'code',
    title: 'Problem Solving',
    description:
      'Develop problem-solving skills through Data Structures & Algorithms practice and LeetCode.',
  },
];

export const skillCategories = [
  {
    name: 'Languages',
    skills: ['C', 'C++', 'Python', 'Java', 'JavaScript'],
  },
  {
    name: 'Frontend',
    skills: ['HTML5', 'CSS3', 'React', 'Vite'],
  },
  {
    name: 'Backend & APIs',
    skills: ['Node.js', 'Express', 'FastAPI', 'API Integration'],
  },
  {
    name: 'AI / ML',
    skills: ['Machine Learning', 'Logistic Regression', 'Gemini / LLM Integration'],
  },
  {
    name: 'Core CS',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Computer Networks'],
  },
  {
    name: 'Database',
    skills: ['MongoDB'],
  },
  {
    name: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel'],
  },
  {
    name: 'Visualization & Reporting',
    skills: ['Chart.js', 'PDFKit'],
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  images: string[];
  featured?: boolean;
  highlights?: string[];
}

export const featuredProjects: Project[] = [
  {
    id: 'gohealthy-ai',
    title: 'GoHealthy AI',
    subtitle: 'Preventive Health Risk Estimation',
    description:
      'GoHealthy AI is a preventive-health machine-learning platform that estimates risk related to diabetes, heart history, and hypertension history from self-entered lifestyle and health information.',
    technologies: ['Python', 'Machine Learning', 'Logistic Regression', 'FastAPI', 'React', 'Vite'],
    github: 'https://github.com/jeevan-24052008/GoHealthy-AI',
    live: 'https://go-healthy-new.vercel.app/',
    images: [
      '/assets/projects/gohealthy-ai/GH1.png',
      '/assets/projects/gohealthy-ai/GH2.png',
      '/assets/projects/gohealthy-ai/GH3.png',
    ],
    featured: true,
    highlights: [
      'Uses Logistic Regression',
      'Validated preprocessing',
      'Held-out evaluation',
      'Produces risk estimates',
      'Identifies influential factors',
      'Saved ML models integrated with FastAPI backend',
      'React/Vite frontend communicates with backend API',
    ],
  },
  {
    id: 'aerocast-ai',
    title: 'AeroCast AI',
    subtitle: 'Enterprise Weather Intelligence & Reporting Platform',
    description:
      'AeroCast AI is a full-stack weather intelligence and reporting platform that combines real-time meteorological observations, hourly and 7-day forecasting, AI-powered weather synthesis, interactive analytics, multi-city comparison, and PDF reporting.',
    technologies: [
      'Node.js',
      'Express',
      'Weather APIs',
      'Gemini 1.5 Flash',
      'Chart.js',
      'PDFKit',
    ],
    github: 'https://github.com/jeevan-24052008/AeroCast-AI',
    live: 'https://weather-report-ai.vercel.app',
    images: [
      '/assets/projects/aerocast-ai/WA1.png',
      '/assets/projects/aerocast-ai/WA2.png',
      '/assets/projects/aerocast-ai/WA3.png',
    ],
    featured: true,
    highlights: [
      'Real-time weather observations',
      '24-hour hourly forecasting',
      '7-day forecasting',
      'AI weather synthesis',
      'Interactive AI weather assistant',
      'Multi-city comparison',
      'Interactive Chart.js visualizations',
      'Vector PDF reports',
      'OpenWeatherMap integration',
      'Open-Meteo fallback',
      'Gemini integration',
      'Deterministic meteorological rules',
      'Dynamic dark/light themes',
    ],
  },
];

export const evolutionStages = [
  {
    stage: 'Stage 1',
    title: 'Weather Report Generator',
    technologies: ['Node.js', 'Weather API', 'PDF Generation'],
    description:
      'Started with retrieving weather data and transforming it into structured information for automated downloadable PDF reports.',
    github: 'https://github.com/jeevan-24052008/weather-report-generator',
    live: 'https://weather-report-generator.onrender.com',
    images: [
      '/assets/projects/weather-report-generator/WRPG1.png',
      '/assets/projects/weather-report-generator/WRPG2.png',
      '/assets/projects/weather-report-generator/WRPG3.png',
    ],
  },
  {
    stage: 'Stage 2',
    title: 'Weather Information System',
    technologies: ['Node.js', 'Weather API', 'API Integration'],
    description:
      'Expanded into a backend-focused weather application for retrieving and processing live weather information through API integration.',
    github: 'https://github.com/jeevan-24052008/weather-report-node',
    live: 'https://weather-report-node.onrender.com',
    images: [
      '/assets/projects/weather-information-system/WRN1.png',
      '/assets/projects/weather-information-system/WRN2.png',
    ],
  },
  {
    stage: 'Stage 3',
    title: 'AeroCast AI',
    technologies: [
      'Node.js',
      'Express',
      'Weather APIs',
      'Gemini 1.5 Flash',
      'Chart.js',
      'PDFKit',
    ],
    description:
      'Evolved into a complete weather intelligence platform with forecasting, AI synthesis, analytics, multi-city comparison, interactive visualization, PDF reporting, and an AI assistant.',
    github: 'https://github.com/jeevan-24052008/AeroCast-AI',
    live: 'https://weather-report-ai.vercel.app',
    images: [
      '/assets/projects/aerocast-ai/WA1.png',
      '/assets/projects/aerocast-ai/WA2.png',
      '/assets/projects/aerocast-ai/WA3.png',
    ],
  },
];

export const portfolioProject: Project = {
  id: 'portfolio',
  title: 'Personal Portfolio Website',
  description:
    'Responsive personal portfolio showcasing technical skills, projects, academic work, achievements, and development progression.',
  technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
  github: 'https://github.com/jeevan-24052008/personal-portfolio',
  images: [],
};

export const achievements = [
  {
    title: 'Future Coders Mega Expo – Junior Hackathon',
    description: 'Secured 2nd Place in a sustainability-focused challenge.',
  },
  {
    title: 'AI for Sustainability Hackathon 2026',
    description: 'Qualified for Round 2 with a sustainability-focused AI solution.',
  },
  {
    title: 'LeetCode',
    description: '200+ problems solved.',
  },
];

export const certifications = [
  {
    title: 'CS50x – Introduction to Computer Science',
    issuer: 'Harvard University',
  },
  {
    title: 'CS50P – Introduction to Programming with Python',
    issuer: 'Harvard University',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
  },
  {
    title: 'Cisco Python Essentials 1 & 2',
    issuer: 'Cisco',
  },
  {
    title: 'Deloitte Cyber Job Simulation',
    issuer: 'Deloitte',
  },
  {
    title: 'MongoDB Basics for Students',
    issuer: 'MongoDB',
  },
  {
    title: 'RAG Apps',
    issuer: 'MongoDB',
  },
  {
    title: 'AI Agents',
    issuer: 'MongoDB',
  },
  {
    title: 'Vector Search',
    issuer: 'MongoDB',
  },
];

export const education = {
  institution: 'Chennai Institute of Technology',
  degree: 'B.E. CSE (AI & ML)',
  expected: 'Expected 2029',
  cgpa: '8.12 / 10',
  location: 'Chennai, Tamil Nadu',
};

export const research = {
  title: 'Continual Machine Learning Research',
  description:
    'Ongoing research focused on continual learning approaches and preparation of a research paper.',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];
