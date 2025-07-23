import type { Project, ProjectType } from "../../../../../types/index";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface ProjectCardProps {
  project: Project;
  type: ProjectType;
}

export interface ProjectsGridProps {
  projects: Project[];
  type: ProjectType;
  loading?: boolean;
  error?: string | null;
}

export interface ProjectsWithPaginationProps {
  projects: Project[];
  type: ProjectType;
  loading?: boolean;
  error?: string | null;
}

export interface TabConfig {
  id: number;
  label: string;
  content: React.ReactNode;
}

export interface UseProjectTabsReturn {
  activeTab: number;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  tabsConfig: TabConfig[];
  githubProjects: Project[];
  loading: boolean;
  error: string | null;
}

// Re-export types from main types file
export type { Project, ProjectType };
