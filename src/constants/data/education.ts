import type { Education } from "../../types";

export const educationData: Education[] = [
  {
    id: "edu-1",
    university: "University of Technology",
    degree: "Bachelor of Science in Computer Science",
    year: "2016 - 2020",
    description:
      "Focused on software engineering, web development, and computer systems.",
    grade: "3.8 GPA",
    location: "California, USA",
  },
  {
    id: "edu-2",
    university: "Code Academy",
    degree: "Full Stack Web Development Bootcamp",
    year: "2020",
    description:
      "Intensive 6-month program covering modern web development technologies.",
    location: "Online",
  },
  {
    id: "edu-3",
    university: "Tech Institute",
    degree: "Certification in React Development",
    year: "2021",
    description:
      "Advanced React concepts, hooks, and modern development practices.",
    location: "Online",
  },
];

// Animation constants for Education section
export const EDUCATION_ANIMATION_CONFIG = {
  // Floating Orbs configuration
  FLOATING_ORBS: [
    { size: 120, color: "primary" as const, delay: 0, x: "10%", y: "20%" },
    { size: 80, color: "secondary" as const, delay: 2, x: "85%", y: "15%" },
    { size: 100, color: "primary" as const, delay: 4, x: "20%", y: "80%" },
    { size: 60, color: "secondary" as const, delay: 6, x: "75%", y: "75%" },
  ],

  // Academic Icons configuration
  ACADEMIC_ICONS: [
    { icon: "🎓", delay: 0, duration: 12, x: "15%", y: "25%" },
    { icon: "📚", delay: 2, duration: 10, x: "80%", y: "20%" },
    { icon: "🏫", delay: 4, duration: 14, x: "25%", y: "70%" },
    { icon: "📖", delay: 6, duration: 11, x: "70%", y: "65%" },
    { icon: "✏️", delay: 8, duration: 13, x: "35%", y: "30%" },
    { icon: "🎯", delay: 10, duration: 9, x: "65%", y: "35%" },
    { icon: "💡", delay: 12, duration: 15, x: "45%", y: "75%" },
    { icon: "🏆", delay: 14, duration: 8, x: "55%", y: "25%" },
  ],

  // Floating Particles configuration
  FLOATING_PARTICLES: [
    { size: 6, delay: 0, x: "20%", y: "40%" },
    { size: 8, delay: 2, x: "60%", y: "45%" },
    { size: 5, delay: 4, x: "30%", y: "60%" },
    { size: 10, delay: 6, x: "70%", y: "50%" },
    { size: 7, delay: 8, x: "40%", y: "30%" },
    { size: 9, delay: 10, x: "80%", y: "60%" },
    { size: 6, delay: 12, x: "50%", y: "80%" },
    { size: 8, delay: 14, x: "25%", y: "50%" },
  ],

  // Geometric Shapes configuration
  GEOMETRIC_SHAPES: [
    {
      type: "circle" as const,
      size: 50,
      position: { top: "15%", right: "15%" },
      animation: { rotate: [0, 360], scale: [1, 1.1, 1], duration: 16 },
    },
    {
      type: "roundedSquare" as const,
      size: 35,
      position: { bottom: "20%", left: "12%" },
      animation: { rotate: [360, 0], scale: [1, 0.9, 1], duration: 14 },
    },
    {
      type: "gradientCircle" as const,
      size: 40,
      position: { top: "65%", right: "20%" },
      animation: { rotate: [0, -360], scale: [0.9, 1.2, 0.9], duration: 18 },
    },
  ],
};
