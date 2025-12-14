// --- Data & Types ---
export interface ExperienceItem {
  date: string;
  role: string;
  company: string;
  points: string[];
  stack: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string;
  type: 'code' | 'design';
  link: string;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    date: 'SEPT2025 — NOW',
    role: 'Backend Intern',
    company: 'Fonix Technologies',
    points: [
      'Exploring Node.js and Express.js ecosystem, understanding backend architecture and server-side logic.'
    ],
    stack: ['Node.js', 'Express.js']
  },
  {
    date: 'JUNE2025 — JULY2025',
    role: 'Software Developer Intern',
    company: 'Compitcom Digital Solutions Pvt. Ltd.',
    points: [
      'Built a complete slot booking system with real-time updates, Razorpay integration, and email notifications using Next.js and Firebase.',
      'Created dynamic, responsive websites with a focus on clean UI, SEO, and performance using Next.js, Tailwind CSS, and HTML.',
      'Worked with Shopify app development using Remix and integrated monitoring tools like Prometheus, Grafana, and Loki for better system reliability.'
    ],
    stack: ['Next.js', 'React', 'Firebase']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Inheritance - Online Course Selling',
    description: 'Online Course selling website which support live streaming + ai features',
    stack: 'Nextjs - Nodejs - Python - Typescript - Prisma - Postgres',
    type: 'code',
    link: '#'
  },
];

export const TECH_STACK = [
  "REACT", "NODE.JS", "TYPESCRIPT", "NEXT.JS", "AWS", 
  "DOCKER", "POSTGRES", "PYTHON", "REACT", "NODE.JS", 
  "TYPESCRIPT", "NEXT.JS", "AWS", "DOCKER", "POSTGRES", "PYTHON"
];
