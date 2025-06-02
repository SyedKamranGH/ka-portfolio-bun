import type { ProjectDetail } from "../../types";

export const personalProjects: ProjectDetail[] = [
  {
    id: "proj-1",
    name: "E-Commerce Platform",
    summary: "Full-stack e-commerce solution with React and Node.js",
    description:
      "A complete e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
    skills: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    technologies: ["React 18", "Express.js", "MongoDB", "Stripe API", "Docker"],
    githubUrl: "https://github.com/username/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    type: "personal",
    featured: true,
  },
  {
    id: "proj-2",
    name: "Task Management App",
    summary: "Collaborative task management application with real-time updates",
    description:
      "A task management app with drag-and-drop functionality, real-time collaboration, and team management features.",
    skills: ["React", "Socket.io", "PostgreSQL", "Redux"],
    technologies: ["React", "Socket.io", "PostgreSQL", "Redux Toolkit"],
    githubUrl: "https://github.com/username/task-manager",
    type: "personal",
    featured: true,
  },
  {
    id: "proj-3",
    name: "Weather Dashboard",
    summary: "Beautiful weather dashboard with location-based forecasts",
    description:
      "Weather dashboard with interactive maps, detailed forecasts, and location-based weather tracking.",
    skills: ["React", "TypeScript", "Charts.js", "Weather API"],
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    githubUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.netlify.app",
    type: "personal",
  },
];

export const companyProjects: ProjectDetail[] = [
  {
    id: "comp-proj-1",
    name: "Enterprise CRM System",
    summary: "Large-scale CRM system for enterprise clients",
    description:
      "Comprehensive CRM system with customer management, sales tracking, analytics dashboard, and reporting features.",
    skills: ["React", "TypeScript", "Material-UI", "Redux", "Chart.js"],
    technologies: [
      "React 18",
      "TypeScript",
      "MUI",
      "Redux Toolkit",
      "Chart.js",
    ],
    type: "company",
    featured: true,
  },
  {
    id: "comp-proj-2",
    name: "Healthcare Management Portal",
    summary: "Patient management system for healthcare providers",
    description:
      "Healthcare management portal with patient records, appointment scheduling, and medical history tracking.",
    skills: ["React", "TypeScript", "FHIR", "Security"],
    technologies: ["React", "TypeScript", "FHIR", "OAuth2", "HIPAA Compliance"],
    type: "company",
  },
  {
    id: "comp-proj-3",
    name: "Financial Dashboard",
    summary: "Real-time financial analytics and reporting dashboard",
    description:
      "Financial dashboard with real-time data visualization, trading analytics, and portfolio management.",
    skills: ["React", "D3.js", "WebSocket", "TypeScript"],
    technologies: ["React", "D3.js", "WebSocket", "TypeScript", "Redis"],
    type: "company",
  },
];
