import type {
  ContactInfo,
  CourseItem,
  EducationItem,
  ExperienceItem,
  LanguageItem,
  NavLink,
  ProjectItem,
  SocialLink,
  TechItem,
} from '../types/portfolio'

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Training', href: '#training' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
] as const satisfies readonly NavLink[]

export const contactInfo = {
  email: 'roaaelhabiby6@gmail.com',
  phone: '1014440281',
  github: 'https://github.com/roaaahmedmohamed',
  linkedin: 'https://www.linkedin.com/in/roaaahmed6',
} as const satisfies ContactInfo

export const experienceItems = [
  {
    role: 'Frontend Intern',
    organization: 'Elevvo Pathways',
    period: '07/2025 - 08/2025',
    detail:
      'Developed reusable responsive React components, used modern JavaScript, and integrated REST APIs into frontend features.',
  },
  {
    role: 'Full-Stack Web Intern',
    organization: 'NTI & ITI',
    period: '06/2025 - 07/2025',
    detail:
      'Completed MEAN Stack training and built responsive web components while practicing full-stack web development fundamentals.',
  },
] as const satisfies readonly ExperienceItem[]

export const projectItems = [
  {
    title: 'FreshCart E-commerce Platform',
    type: 'Next.js E-commerce',
    summary:
      'Responsive storefront with product browsing, cart, wishlist, checkout, payment options, React Hook Form, Zod, and optimized Next.js images.',
    accent: 'Next.js • React • TypeScript',
    repoHref: 'https://github.com/roaaahmedmohamed/FreshCart-E-Commerce.git',
    liveHref: 'https://fresh-cart-e-commerce-kxsv2y1i5-roaa-ahmeds-projects.vercel.app/',
  },
  {
    title: 'Social Media Platform',
    type: 'React Social App',
    summary:
      'Responsive social platform with authentication, protected routes, posts, comments, profile management, image upload, TanStack Query, and Context API.',
    accent: 'React • Vite • Tailwind CSS',
    repoHref: 'https://github.com/roaaahmedmohamed/Social-App.git',
  },
  {
    title: 'Job Application Tracker',
    type: 'React Productivity App',
    summary:
      'Job search workflow app with localStorage persistence, JSON import/export, Context API state, dynamic routes, and reusable Tailwind components.',
    accent: 'React • Context API • Tailwind CSS',
    repoHref: 'https://github.com/roaaahmedmohamed/Job-Application-Tracker.git',
    liveHref: 'https://job-application-tracker-iygmboz3f-roaa-ahmeds-projects.vercel.app/',
  },
  {
    title: 'Fictional Freelance Admin Dashboard',
    type: 'React Dashboard',
    summary:
      'Responsive admin dashboard with Chart.js data visualization, sidebar navigation, mock real-time UI updates, and status management components.',
    accent: 'React • Chart.js • Tailwind CSS',
    repoHref: 'https://github.com/roaaahmedmohamed/Fictional-Freelance-Client.git',
    liveHref: 'https://fictional-freelance-client-39csw82lp-roaa-ahmeds-projects.vercel.app/',
  },
] as const satisfies readonly ProjectItem[]

export const socialLinks = [
  { label: 'GitHub', href: contactInfo.github },
  { label: 'LinkedIn', href: contactInfo.linkedin },
  { label: 'Email', href: `mailto:${contactInfo.email}` },
] as const satisfies readonly SocialLink[]

export const educationItems = [
  {
    title: 'B.Sc. in Computer Science',
    place: 'Capital University, formerly Helwan University',
    period: '09/2022 - 06/2026',
  },
] as const satisfies readonly EducationItem[]

export const courseItems = [
  {
    title: 'Frontend Development Track',
    provider: 'Route Academy',
    period: '07/2025 - 02/2026',
    detail:
      'Intensive React and Next.js training focused on responsive apps, component-based development, state management, and practical UI implementation.',
  },
  {
    title: 'Web Development Fundamentals',
    provider: 'IBM',
    period: '12/2025',
    detail:
      'Core web development fundamentals including HTML, CSS, JavaScript, and modern web concepts.',
  },
] as const satisfies readonly CourseItem[]

export const languageItems = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Very Good' },
] as const satisfies readonly LanguageItem[]

export const techStack = [
  {
    label: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    className: 'tech-html',
  },
  {
    label: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    className: 'tech-css',
  },
  {
    label: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    className: 'tech-js',
  },
  {
    label: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    className: 'tech-ts',
  },
  {
    label: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    className: 'tech-bootstrap',
  },
  {
    label: 'Tailwind',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    className: 'tech-tailwind',
  },
  {
    label: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    className: 'tech-github',
  },
  {
    label: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    className: 'tech-react',
  },
  {
    label: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    className: 'tech-next',
  },
] as const satisfies readonly TechItem[]
