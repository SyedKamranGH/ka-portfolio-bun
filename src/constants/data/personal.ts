import type { PersonalInfo, ContactInfo } from "../../types";

export const personalInfo: PersonalInfo = {
  name: "Syed Kamran Ahmed",
  title: "Full-Stack Developer",
  summary:
    "Experienced Software Engineer with over 6+ years of expertise in building responsive, user-friendly web and mobile applications using React, Next.js, TypeScript, and React Native. Proven track record of leading cross-functional teams, optimizing performance, and delivering high-quality software solutions. Skilled in modern web technologies, state management, and REST API development using Node.js and Express.js.",
  profileImage: "/assets/images/profile.jpg",
  welcomeMessage:
    "Welcome to my portfolio! I'm a passionate full-stack developer with expertise in React, React Native, and modern web technologies.",
  aboutMe:
    "I am an experienced Software Engineer with over 6+ years of expertise in building responsive, user-friendly web and mobile applications. My extensive experience spans across the healthcare industry, including handling HL7 messages through Mirth and ensuring HIPAA compliance for secure and efficient data exchange. I'm adept at client communication, project structuring, and performance optimization, with a strong focus on delivering scalable and maintainable code. Passionate about leveraging cutting-edge technologies to solve complex problems and drive user engagement.",
  achievements: [
    "Led front-end architecture improvements implementing best practices in modular, flexible and scalable component structures",
    "Improved application performance by 40% through optimization techniques and modern web technologies",
    "Successfully integrated third-party APIs (Prismic, HubSpot) driving substantial user engagement growth",
    "Mentored junior engineers and conducted code reviews, leading knowledge-sharing sessions",
    "Developed HIPAA-compliant solutions ensuring secure and efficient patient data management",
    "Led successful migration of legacy applications to modern React architecture",
    "Built cross-platform mobile applications using React Native with smooth user experiences",
  ],
};

export const contactInfo: ContactInfo = {
  email: import.meta.env.VITE_EMAIL || "syed.kam.ahmed@gmail.com",
  phone: import.meta.env.VITE_PHONE || "+92-332-449-2711",
  github:
    import.meta.env.VITE_GITHUB_URL || "https://github.com/syed-kamran-ahmad",
  linkedin:
    import.meta.env.VITE_LINKEDIN_URL ||
    "https://www.linkedin.com/in/syed-kamran-ahmad-sk3324492711/",
  location: "Lahore, Punjab, Pakistan",
};
