import type { SkillDomain } from "../../types";

export const skillDomains: SkillDomain[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: "🟨", level: "Expert" },
      { name: "TypeScript", icon: "🔷", level: "Expert" },
      { name: "Python", icon: "🐍", level: "Advanced" },
      { name: "HL7", icon: "🏥", level: "Advanced" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "⚛️", level: "Expert" },
      { name: "React Native", icon: "📱", level: "Expert" },
      { name: "Next.js", icon: "▲", level: "Expert" },
      { name: "React Hooks", icon: "🎣", level: "Expert" },
      { name: "Redux & Redux Toolkit", icon: "🔄", level: "Expert" },
      { name: "Vue.js", icon: "💚", level: "Advanced" },
      { name: "HTML5", icon: "🌐", level: "Expert" },
      { name: "CSS3", icon: "🎨", level: "Expert" },
      { name: "Bootstrap 5", icon: "🅱️", level: "Advanced" },
      { name: "Material-UI", icon: "🎯", level: "Advanced" },
      { name: "React-Bootstrap", icon: "📋", level: "Advanced" },
      { name: "TailwindCSS", icon: "💨", level: "Advanced" },
      { name: "Formik", icon: "📝", level: "Advanced" },
      { name: "Storybook", icon: "📚", level: "Intermediate" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: "🟢", level: "Expert" },
      { name: "Express.js", icon: "🚀", level: "Expert" },
      { name: "Microservices", icon: "🔗", level: "Advanced" },
      { name: "REST APIs", icon: "🌐", level: "Expert" },
      { name: "GraphQL", icon: "📊", level: "Advanced" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "🐘", level: "Advanced" },
      { name: "MariaDB", icon: "🗃️", level: "Advanced" },
      { name: "MongoDB", icon: "🍃", level: "Advanced" },
      { name: "SQL", icon: "📊", level: "Expert" },
    ],
  },
  {
    title: "DevOps & CI/CD",
    skills: [
      { name: "Docker", icon: "🐳", level: "Advanced" },
      { name: "GitHub Actions", icon: "⚙️", level: "Advanced" },
      { name: "AWS Amplify Cognito", icon: "☁️", level: "Advanced" },
      { name: "Google Cloud Platform", icon: "🌩️", level: "Advanced" },
      { name: "Jira", icon: "📋", level: "Advanced" },
      { name: "Twilio", icon: "📞", level: "Intermediate" },
    ],
  },
  {
    title: "Software IDEs & Tools",
    skills: [
      { name: "DataGrip", icon: "🗄️", level: "Advanced" },
      { name: "MySQL Workbench", icon: "🔧", level: "Advanced" },
      { name: "VS Code", icon: "💻", level: "Expert" },
      { name: "Mirth", icon: "🔄", level: "Advanced" },
      { name: "Postman", icon: "📮", level: "Expert" },
    ],
  },
  {
    title: "Version Control & Tools",
    skills: [
      { name: "Git", icon: "📚", level: "Expert" },
      { name: "BitBucket", icon: "🪣", level: "Advanced" },
      { name: "GitHub", icon: "🐱", level: "Expert" },
      { name: "GitLab", icon: "🦊", level: "Advanced" },
    ],
  },
  {
    title: "Testing & Quality Assurance",
    skills: [
      { name: "Jest", icon: "🃏", level: "Advanced" },
      { name: "React Testing Library", icon: "🧪", level: "Advanced" },
    ],
  },
  {
    title: "Robot Hardware",
    skills: [
      { name: "NAO", icon: "🤖", level: "Advanced" },
      { name: "Pepper", icon: "🤖", level: "Intermediate" },
      { name: "Pioneer 3-AT", icon: "🚗", level: "Intermediate" },
      { name: "Arduino", icon: "🔌", level: "Advanced" },
    ],
  },
];

// Core technologies array for use in About section
export const coreSkills = [
  "React.js",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "GraphQL",
  "Next.js",
  "Express.js",
  "Git",
];
