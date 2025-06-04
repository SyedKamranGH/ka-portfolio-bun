import type { ProjectDetail, ProjectData } from "../../types";

export const PROJECTS: ProjectData = {
  personal: [
    {
      id: 1,
      name: "Portfolio Website",
      summary:
        "A modern responsive portfolio website built with React, TypeScript, and Material-UI to showcase my projects and skills.",
      image: "https://example.com/portfolio-screenshot.jpg",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "Material-UI", icon: "🎨" },
      ],
      githubUrl: "https://github.com/username/portfolio",
      liveUrl: "https://myportfolio.example.com",
    },
    {
      id: 2,
      name: "E-commerce App",
      summary:
        "Full-stack e-commerce application with product listings, cart functionality, and user authentication.",
      image: "https://example.com/ecommerce-screenshot.jpg",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "MongoDB", icon: "🍃" },
      ],
      githubUrl: "https://github.com/username/ecommerce-app",
      demoUrl: "https://ecommerce-demo.example.com",
    },
    {
      id: 3,
      name: "Task Management Tool",
      summary:
        "A productivity application for managing tasks with drag-and-drop functionality and team collaboration features.",
      image: "https://example.com/taskapp-screenshot.jpg",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Redux", icon: "📦" },
        { name: "Firebase", icon: "🔥" },
      ],
      githubUrl: "https://github.com/username/task-manager",
    },
  ],
  company: [
    {
      id: "comp-1",
      name: "Enterprise Dashboard",
      summary:
        "Analytics dashboard for business metrics with real-time data visualization and reporting tools.",
      image: "https://example.com/dashboard-screenshot.jpg",
      skills: [
        { name: "Angular", icon: "🅰️" },
        { name: "TypeScript", icon: "📘" },
        { name: "D3.js", icon: "📊" },
      ],
      liveUrl: "https://dashboard.company.com",
    },
    {
      id: "comp-2",
      name: "Customer Portal",
      summary:
        "Client-facing portal with account management, support ticketing, and billing information.",
      image: "https://example.com/portal-screenshot.jpg",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "GraphQL", icon: "🔷" },
        { name: "AWS", icon: "☁️" },
      ],
      demoUrl: "https://demo-portal.company.com",
    },
    {
      id: "comp-3",
      name: "Internal CMS",
      summary:
        "Content management system for marketing teams to manage website content and campaigns.",
      image: "https://example.com/cms-screenshot.jpg",
      skills: [
        { name: "Vue.js", icon: "🟩" },
        { name: "Python", icon: "🐍" },
        { name: "PostgreSQL", icon: "🐘" },
      ],
    },
  ],
};

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
