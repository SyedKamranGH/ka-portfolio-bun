import type { SkillDomain } from "../../types";

export const skillDomains: SkillDomain[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "⚛️", level: "Expert" },
      { name: "TypeScript", icon: "🔷", level: "Advanced" },
      { name: "JavaScript", icon: "🟨", level: "Expert" },
      { name: "HTML5", icon: "🌐", level: "Expert" },
      { name: "CSS3", icon: "🎨", level: "Advanced" },
      { name: "SCSS/Sass", icon: "💅", level: "Advanced" },
      { name: "Material-UI", icon: "🎯", level: "Advanced" },
      { name: "Redux", icon: "🔄", level: "Advanced" },
      { name: "Next.js", icon: "▲", level: "Intermediate" },
      { name: "Vue.js", icon: "💚", level: "Intermediate" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: "🟢", level: "Advanced" },
      { name: "Express.js", icon: "🚀", level: "Advanced" },
      { name: "Python", icon: "🐍", level: "Intermediate" },
      { name: "REST APIs", icon: "🔗", level: "Advanced" },
      { name: "GraphQL", icon: "📊", level: "Intermediate" },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", icon: "🍃", level: "Advanced" },
      { name: "PostgreSQL", icon: "🐘", level: "Intermediate" },
      { name: "Redis", icon: "🔴", level: "Intermediate" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: "📚", level: "Expert" },
      { name: "Docker", icon: "🐳", level: "Advanced" },
      { name: "AWS", icon: "☁️", level: "Intermediate" },
      { name: "Jenkins", icon: "🔧", level: "Intermediate" },
      { name: "Webpack", icon: "📦", level: "Advanced" },
      { name: "Vite", icon: "⚡", level: "Advanced" },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Jest", icon: "🃏", level: "Advanced" },
      { name: "React Testing Library", icon: "🧪", level: "Advanced" },
      { name: "Cypress", icon: "🌲", level: "Intermediate" },
      { name: "Playwright", icon: "🎭", level: "Intermediate" },
    ],
  },
];
