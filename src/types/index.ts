export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface Experience {
  id: string;
  jobRole: string;
  company: string;
  duration: string;
  startDate: string;
  endDate: string | "Present";
  summary: string;
  responsibilities: string[];
  skills: string[];
  technologies: string[];
  projects?: ProjectDetail[];
  keyHighlights: string[];
  location?: string;
}

export interface Education {
  id: string;
  university: string;
  degree: string;
  year: string;
  description?: string;
  grade?: string;
  location?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface SkillDomain {
  title: string;
  skills: Skill[];
}

export interface ProjectDetail {
  id: string;
  name: string;
  summary: string;
  description?: string;
  skills: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  technologies: string[];
  type: "personal" | "company";
  featured?: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  profileImage: string;
  welcomeMessage: string;
  aboutMe: string;
  achievements: string[];
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  language: string;
  languages_url: string;
  topics: string[];
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
}

export interface ThemeMode {
  mode: "light" | "dark";
  toggleTheme: () => void;
}
