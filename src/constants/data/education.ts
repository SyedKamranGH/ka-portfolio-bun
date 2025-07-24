import type { Education } from "../../types";

export const educationData: Education[] = [
  {
    id: "edu-1",
    university: "National University of Science and Technology, Islamabad",
    degree: "M.S. Robotics and Intelligent Machine Engineering",
    year: "2018 - 2020",
    description:
      "Specialized in robotics, cognitive computing, and intelligent machine engineering with focus on humanoid robots and AI systems.",
    grade: "Distinction",
    location: "Islamabad, Pakistan",
  },
  {
    id: "edu-2",
    university: "COMSATS Institute of Information Technology, Lahore",
    degree: "Bachelor of Science in Computer Science",
    year: "2011 - 2015",
    description:
      "Comprehensive study of computer science fundamentals, software engineering, and web development technologies.",
    grade: "Good Standing",
    location: "Lahore, Pakistan",
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
    { icon: "🔬", delay: 10, duration: 15, x: "60%", y: "40%" },
  ],

  // Particle Effects configuration
  PARTICLES: [
    { delay: 0, duration: 20, size: 4, opacity: 0.6 },
    { delay: 5, duration: 25, size: 6, opacity: 0.4 },
    { delay: 10, duration: 18, size: 3, opacity: 0.8 },
    { delay: 15, duration: 22, size: 5, opacity: 0.5 },
  ],

  // Animation timings
  STAGGER_DELAY: 0.2,
  CARD_ANIMATION_DURATION: 0.6,
  FLOATING_ORB_DURATION: 20,
  ACADEMIC_ICON_SPEED: 0.5,

  // Hover effects
  CARD_HOVER_SCALE: 1.05,
  CARD_HOVER_SHADOW: "0 20px 40px rgba(0,0,0,0.1)",

  // Responsive breakpoints
  MOBILE_BREAKPOINT: 768,
  TABLET_BREAKPOINT: 1024,
};

// Education section constants
export const EDUCATION_CONSTANTS = {
  SECTION_TITLE: "Education & Learning Journey",
  SECTION_SUBTITLE: "Academic foundation and continuous learning",
  EMPTY_STATE_MESSAGE: "No education data available",
  LOADING_MESSAGE: "Loading education information...",
};

// Thesis project data
export const THESIS_PROJECT = {
  title: "NiNA: Interfacing NiHA With NAO (Nina)",
  location: "Islamabad, Pakistan",
  description:
    "Advanced robotics thesis project implementing Nature-inspired Humanoid Cognitive Computing Platform (NiHA) using Quantum Bio-Inspired Cognitive Agent (QuBIC) for social interactions on NAO Robot.",
  keyAchievements: [
    "Implemented Nature-inspired Humanoid Cognitive Computing Platform (NiHA)",
    "Re-implemented sensory-motor memory, visual perceptual associative memory, and procedural memory blocks",
    "Encoded visual perception in NiHA's Knowledge Representation Scheme",
    "Created new version of procedural memory for generating speech and body language actions",
    "Employed Point Cloud Library for 3D mapping and depth mapping",
    "Applied 2D object detection using YOLO v3 on COCO dataset",
  ],
  technologies: [
    "NAO Robot",
    "QuBIC",
    "Point Cloud Library",
    "YOLO v3",
    "OpenCV",
    "Python",
    "Computer Vision",
  ],
};
