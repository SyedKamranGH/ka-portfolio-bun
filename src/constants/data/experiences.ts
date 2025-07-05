import type { Experience } from "../../types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    jobRole: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2023 - Present",
    startDate: "2023-01-01",
    endDate: "Present",
    summary:
      "Leading frontend development team, architecting scalable React applications with modern technologies.",
    responsibilities: [
      "Lead frontend development team of 5 developers",
      "Architect and implement complex React applications",
      "Code review and mentoring junior developers",
      "Collaborate with UX/UI designers and backend teams",
      "Optimize application performance and user experience",
    ],
    skills: ["React", "TypeScript", "Redux", "Material-UI", "Jest"],
    technologies: ["React 18", "TypeScript", "Vite", "Docker", "AWS"],
    keyHighlights: [
      "Reduced application load time by 40%",
      "Implemented micro-frontend architecture",
      "Led successful migration from JavaScript to TypeScript",
    ],
    location: "Remote",
  },
  {
    id: "exp-2",
    jobRole: "Frontend Developer",
    company: "Digital Agency LLC",
    duration: "Jun 2021 - Dec 2022",
    startDate: "2021-06-01",
    endDate: "2022-12-31",
    summary:
      "Developed responsive web applications using React and modern JavaScript frameworks.",
    responsibilities: [
      "Develop responsive web applications",
      "Implement pixel-perfect UI designs",
      "Integrate RESTful APIs",
      "Write unit and integration tests",
      "Participate in agile development process",
    ],
    skills: ["React", "JavaScript", "SCSS", "Redux", "Webpack"],
    technologies: ["React 17", "JavaScript ES6+", "Sass", "Node.js", "MongoDB"],
    keyHighlights: [
      "Delivered 15+ client projects on time",
      "Improved code quality with 90% test coverage",
      "Mentored 2 junior developers",
    ],
    location: "New York, NY",
  },
  {
    id: "exp-3",
    jobRole: "Junior Web Developer",
    company: "StartUp Hub",
    duration: "Aug 2020 - May 2021",
    startDate: "2020-08-01",
    endDate: "2021-05-31",
    summary:
      "Built interactive web applications and gained expertise in modern web development practices.",
    responsibilities: [
      "Build interactive web applications",
      "Fix bugs and implement new features",
      "Collaborate with design team",
      "Learn and implement best practices",
      "Participate in code reviews",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Git"],
    technologies: ["React 16", "JavaScript", "CSS3", "Git", "GitHub"],
    keyHighlights: [
      "Successfully completed 10+ projects",
      "Quick learner with strong problem-solving skills",
      "Contributed to open-source projects",
    ],
    location: "San Francisco, CA",
  },
];

// Animation constants for Experience section
export const EXPERIENCE_ANIMATION_CONFIG = {
  // Background animation positioning
  ANIMATION_START_TOP: "25%",

  // Tech Icons configuration
  TECH_ICONS: [
    { icon: "⚛️", delay: 0, duration: 12, x: "10%", y: "15%" },
    { icon: "🔷", delay: 2, duration: 10, x: "85%", y: "10%" },
    { icon: "⚡", delay: 4, duration: 14, x: "20%", y: "25%" },
    { icon: "🚀", delay: 6, duration: 11, x: "75%", y: "30%" },
    { icon: "💻", delay: 8, duration: 9, x: "5%", y: "45%" },
    { icon: "🎯", delay: 10, duration: 13, x: "90%", y: "40%" },
    { icon: "📱", delay: 12, duration: 15, x: "15%", y: "65%" },
    { icon: "⚙️", delay: 14, duration: 8, x: "80%", y: "70%" },
    { icon: "🌐", delay: 16, duration: 12, x: "30%", y: "80%" },
    { icon: "🔧", delay: 18, duration: 10, x: "65%", y: "85%" },
    { icon: "📊", delay: 20, duration: 11, x: "45%", y: "15%" },
    { icon: "💡", delay: 22, duration: 13, x: "55%", y: "55%" },
    { icon: "🎨", delay: 24, duration: 9, x: "25%", y: "40%" },
    { icon: "📈", delay: 26, duration: 14, x: "70%", y: "20%" },
    { icon: "🔥", delay: 28, duration: 12, x: "35%", y: "90%" },
  ],

  // Code Snippets configuration
  CODE_SNIPPETS: [
    { text: "const experience = {}", delay: 1, x: "18%", y: "22%" },
    { text: "<React.FC>", delay: 3, x: "78%", y: "18%" },
    { text: "TypeScript", delay: 5, x: "8%", y: "58%" },
    { text: "Next.js", delay: 7, x: "82%", y: "68%" },
    { text: "interface Props", delay: 9, x: "22%", y: "78%" },
    { text: "useState()", delay: 11, x: "72%", y: "42%" },
    { text: "useEffect()", delay: 13, x: "12%", y: "38%" },
    { text: "async/await", delay: 15, x: "88%", y: "52%" },
    { text: "export default", delay: 17, x: "32%", y: "12%" },
    { text: "import React", delay: 19, x: "58%", y: "28%" },
    { text: "const [state]", delay: 21, x: "38%", y: "48%" },
    { text: "=> {}", delay: 23, x: "68%", y: "62%" },
    { text: "npm install", delay: 25, x: "28%", y: "92%" },
    { text: "git commit", delay: 27, x: "78%", y: "88%" },
    { text: "className=", delay: 29, x: "48%", y: "8%" },
    { text: "return (", delay: 31, x: "88%", y: "32%" },
    { text: "props.children", delay: 33, x: "18%", y: "72%" },
    { text: "styled-components", delay: 35, x: "62%", y: "78%" },
  ],

  // Floating Particles configuration
  FLOATING_PARTICLES: [
    { size: 8, delay: 0, x: "28%", y: "28%" },
    { size: 12, delay: 2, x: "68%", y: "32%" },
    { size: 6, delay: 4, x: "18%", y: "52%" },
    { size: 14, delay: 6, x: "78%", y: "62%" },
    { size: 7, delay: 8, x: "32%", y: "72%" },
    { size: 10, delay: 10, x: "58%", y: "22%" },
    { size: 9, delay: 12, x: "8%", y: "68%" },
    { size: 11, delay: 14, x: "82%", y: "42%" },
    { size: 5, delay: 16, x: "42%", y: "82%" },
    { size: 13, delay: 18, x: "92%", y: "28%" },
    { size: 8, delay: 20, x: "52%", y: "38%" },
    { size: 6, delay: 22, x: "12%", y: "82%" },
    { size: 10, delay: 24, x: "72%", y: "18%" },
    { size: 9, delay: 26, x: "38%", y: "58%" },
    { size: 7, delay: 28, x: "88%", y: "72%" },
    { size: 11, delay: 30, x: "22%", y: "48%" },
    { size: 12, delay: 32, x: "62%", y: "88%" },
    { size: 8, delay: 34, x: "48%", y: "12%" },
    { size: 6, delay: 36, x: "78%", y: "48%" },
    { size: 14, delay: 38, x: "8%", y: "28%" },
  ],

  // Geometric Shapes configuration
  GEOMETRIC_SHAPES: [
    {
      type: "circle" as const,
      size: 60,
      position: { top: "10%", right: "10%" },
      animation: { rotate: [0, 360], scale: [1, 1.2, 1], duration: 15 },
    },
    {
      type: "square" as const,
      size: 40,
      position: { bottom: "15%", left: "8%" },
      animation: { rotate: [360, 0], scale: [1, 0.8, 1], duration: 12 },
    },
    {
      type: "roundedSquare" as const,
      size: 50,
      position: { top: "70%", right: "25%" },
      animation: { rotate: [0, -360], scale: [1, 1.3, 1], duration: 18 },
    },
    {
      type: "gradientCircle" as const,
      size: 35,
      position: { top: "30%", left: "25%" },
      animation: { rotate: [180, -180], scale: [0.8, 1.1, 0.8], duration: 14 },
    },
  ],

  // Animated Lines configuration
  ANIMATED_LINES: [
    {
      position: { top: "20%", left: "20%" },
      svg: { width: 200, height: 100 },
      path: "M 0 50 Q 100 0 200 50",
      strokeWidth: 3,
      duration: 4,
      delay: 0,
    },
    {
      position: { top: "60%", right: "15%" },
      svg: { width: 150, height: 80 },
      path: "M 0 40 Q 75 0 150 40",
      strokeWidth: 3,
      duration: 5,
      delay: 2,
    },
    {
      position: { top: "40%", left: "60%" },
      svg: { width: 120, height: 60 },
      path: "M 0 30 Q 60 60 120 30",
      strokeWidth: 2,
      duration: 6,
      delay: 1,
    },
  ],
};
