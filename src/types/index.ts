export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface Navigation {
  id: string;
  label: string;
  // add other properties as needed
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
  icon: string | "";
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface SkillDomain {
  title: string;
  skills: Skill[];
}

export type ProjectType = "personal" | "company";

export interface ProjectDetail {
  id: string | number;
  name: string;
  summary: string;
  description: string;
  skills: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  type: ProjectType;
  featured?: boolean;
}

export interface Project {
  id: string | number;
  name: string;
  summary: string;
  image?: string;
  skills?: Skill[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
}

export interface ProjectData {
  personal: Project[];
  company: Project[];
}
// Removed duplicate ContactInfo interface with conflicting property types

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

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface ThemeMode {
  mode: "light" | "dark";
  toggleTheme: () => void;
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: { username: string; url: string };
  linkedin: { username: string; url: string };
  location: string;
}
