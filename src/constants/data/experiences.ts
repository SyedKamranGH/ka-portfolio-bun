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
