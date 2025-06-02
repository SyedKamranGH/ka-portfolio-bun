import type { Experience } from "../../types";

export const experiences: Experience[] = [
  {
    id: "1",
    jobRole: "Senior Frontend Developer",
    company: "Tech Solutions Inc",
    duration: "Jan 2023 - Present",
    startDate: "2023-01",
    endDate: "Present",
    summary:
      "Leading frontend development team and architecting scalable React applications",
    responsibilities: [
      "Lead frontend development team of 5 developers",
      "Architect and implement scalable React applications",
      "Mentor junior developers and conduct code reviews",
      "Collaborate with UX/UI designers and backend teams",
    ],
    technologies: ["React", "TypeScript", "Next.js", "GraphQL", "Material-UI"],
    projects: ["E-commerce Platform", "Admin Dashboard", "Mobile App"],
    keyHighlights: [
      "Improved application performance by 40%",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Led migration from JavaScript to TypeScript",
    ],
  },
  {
    id: "2",
    jobRole: "Frontend Developer",
    company: "Digital Agency Ltd",
    duration: "Jun 2021 - Dec 2022",
    startDate: "2021-06",
    endDate: "2022-12",
    summary:
      "Developed responsive web applications and improved user experience",
    responsibilities: [
      "Developed responsive web applications using React",
      "Collaborated with design team to implement pixel-perfect UI",
      "Optimized applications for maximum speed and scalability",
      "Integrated RESTful APIs and third-party services",
    ],
    technologies: ["React", "JavaScript", "SASS", "Redux", "Bootstrap"],
    projects: ["Corporate Website", "Portfolio Sites", "Landing Pages"],
    keyHighlights: [
      "Delivered 15+ projects on time",
      "Improved website loading speed by 35%",
      "Implemented responsive design principles",
    ],
  },
];
