import type { Project } from "../../types";

export const projects: Project[] = [
  {
    id: "1",
    name: "E-commerce Platform",
    summary: "Full-featured e-commerce platform with payment integration",
    skills: ["React", "Node.js", "MongoDB", "Stripe"],
    type: "company",
    image: "/images/ecommerce.jpg",
  },
  {
    id: "2",
    name: "Task Management App",
    summary: "Collaborative task management application with real-time updates",
    skills: ["React", "TypeScript", "Socket.io", "Express"],
    type: "personal",
    githubLink: "https://github.com/username/task-app",
  },
];
