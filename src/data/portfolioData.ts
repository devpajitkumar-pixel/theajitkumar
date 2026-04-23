import type {
  NavItem,
  ProcessStep,
  Project,
  Service,
  SkillCategory,
} from "@/types/portfolio";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Me", href: "#why-work-with-me" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories: SkillCategory[] = [
  { title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "RTK Query"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Socket.io", "BullMQ"] },
  { title: "Database", items: ["MongoDB", "PostgreSQL", "Redis"] },
  { title: "DevOps", items: ["Docker", "Nginx", "VPS Deployment", "CI/CD"] },
  { title: "Tools", items: ["Git", "GitHub Actions", "Postman", "Excel/PDF Report Generation", "File Management Systems"] },
];

export const projects: Project[] = [
  {
    title: "Power Audit App",
    tagline: "Enterprise System",
    description:
      "A production-grade audit platform designed for complex operational workflows and large-scale data handling.",
    image: "/images/project-power-audit.svg",
    techStack: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Redis"],
    impact: "Reduced manual audit turnaround and improved real-time operational visibility.",
    highlights: ["Complex data models", "Real-time presence", "Business reporting system"],
  },
  {
    title: "File Management System",
    tagline: "Secure Document Platform",
    description:
      "A privacy-first file system with secure access controls and resilient storage architecture for business teams.",
    image: "/images/project-file-management.svg",
    techStack: ["React", "Express.js", "MongoDB", "MinIO", "JWT"],
    impact: "Improved document handling security and streamlined internal file operations.",
    highlights: ["Secure uploads", "MinIO integration", "Privacy-first architecture"],
  },
  {
    title: "Report Generation System",
    tagline: "Automation Engine",
    description:
      "A queue-based reporting engine that processes business data asynchronously and generates export-ready deliverables.",
    image: "/images/project-reporting-system.svg",
    techStack: ["Node.js", "BullMQ", "Redis", "ExcelJS", "PDF generation"],
    impact: "Enabled reliable large-batch reporting without blocking core application workflows.",
    highlights: ["Queue-based processing", "Excel/PDF export", "Scalable background jobs"],
  },
  {
    title: "Marketing Landing Pages",
    tagline: "Performance Marketing",
    description:
      "Conversion-focused landing experiences engineered for speed, trust, and measurable lead generation outcomes.",
    image: "/images/project-marketing-pages.svg",
    techStack: ["Next.js", "Tailwind CSS", "A/B testing", "Analytics"],
    impact: "Delivered high-performance pages optimized for engagement and conversion campaigns.",
    highlights: ["Conversion-focused UX", "Fast load performance", "Business-ready analytics setup"],
  },
];

export const services: Service[] = [
  {
    title: "Full-Stack Development",
    description: "Design and build complete applications from frontend UX to backend architecture.",
  },
  {
    title: "Business Application Systems",
    description: "Develop internal tools and workflows that improve operations and team productivity.",
  },
  {
    title: "Dashboard Systems",
    description: "Build data-heavy dashboards with real-time insights and robust reporting capabilities.",
  },
  {
    title: "API Development",
    description: "Create secure, scalable REST APIs with authentication and production-ready standards.",
  },
  {
    title: "VPS Deployment",
    description: "Deploy and manage applications with Docker, Nginx, and reliable infrastructure practices.",
  },
  {
    title: "Reporting Systems",
    description: "Automate business reporting with queue processing and Excel/PDF document generation.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand Problem",
    description: "Map business goals, users, and operational constraints before writing code.",
  },
  {
    step: "02",
    title: "Design System",
    description: "Define architecture, data flow, and technical decisions aligned with long-term scalability.",
  },
  {
    step: "03",
    title: "Build",
    description: "Implement robust frontend and backend modules with production-level engineering standards.",
  },
  {
    step: "04",
    title: "Deploy",
    description: "Ship reliable releases with proper server setup, performance, and operational safety.",
  },
  {
    step: "05",
    title: "Maintain",
    description: "Monitor, improve, and evolve systems based on real business usage and feedback.",
  },
];
