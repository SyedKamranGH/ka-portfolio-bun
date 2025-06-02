export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  jobRole: string;
  company: string;
  duration: string;
  startDate: string;
  endDate: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  projects?: string[];
  keyHighlights: string[];
}

export interface Education {
  id: string;
  university: string;
  degree: string;
  year: string;
  description?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level?: number;
}

export interface SkillDomain {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  name: string;
  summary: string;
  skills: string[];
  githubLink?: string;
  image?: string;
  type: "personal" | "company";
}

export interface ContactInfo {
  phone: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  topics: string[];
}
