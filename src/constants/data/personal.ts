import type { PersonalInfo, ContactInfo } from "../../types";

export const personalInfo: PersonalInfo = {
  name: "John Doe",
  title: "Senior Frontend Developer",
  summary:
    "Passionate frontend developer with 4+ years of experience in building scalable web applications using React, TypeScript, and modern web technologies. Experienced in leading development teams and delivering high-quality solutions.",
  profileImage: "/assets/images/profile.jpg",
  welcomeMessage:
    "Welcome to my portfolio! I'm a passionate developer who loves creating amazing web experiences.",
  aboutMe:
    "I am a dedicated frontend developer with a strong background in React ecosystem and modern web technologies. I have successfully led multiple projects from conception to deployment, focusing on creating user-friendly interfaces and optimizing performance. My experience spans across various industries including e-commerce, healthcare, and fintech.",
  achievements: [
    "Led successful migration of legacy applications to modern React architecture",
    "Improved application performance by 40% through optimization techniques",
    "Mentored 5+ junior developers and contributed to team growth",
    "Delivered 20+ successful projects with 100% client satisfaction",
    "Active contributor to open-source projects with 500+ GitHub stars",
  ],
};

export const contactInfo: ContactInfo = {
  email: process.env.REACT_APP_EMAIL || "john.doe@example.com",
  phone: process.env.REACT_APP_PHONE || "+1 (555) 123-4567",
  github: "https://github.com/johndoe",
  linkedin:
    process.env.REACT_APP_LINKEDIN_URL || "https://linkedin.com/in/johndoe",
  location: "San Francisco, CA",
};
