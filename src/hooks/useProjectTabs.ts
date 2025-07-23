import { useState, useMemo } from "react";
import { useGitHubProjects } from "./useGItHubProjects";
import type {
  TabConfig,
  UseProjectTabsReturn,
} from "../pages/Homepage/components/Projects/types";

export const useProjectTabs = (): UseProjectTabsReturn => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { projects: githubProjects, loading, error } = useGitHubProjects();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  // Memoize tabs configuration to prevent unnecessary re-renders
  const tabsConfig = useMemo(
    (): TabConfig[] => [
      {
        id: 0,
        label: "Personal Projects",
        content: null, // Will be populated by the main component
      },
      {
        id: 1,
        label: "Company Projects",
        content: null, // Will be populated by the main component
      },
      // Future tabs can be easily added here
      // {
      //   id: 2,
      //   label: "Open Source",
      //   content: null,
      // },
    ],
    []
  );

  return {
    activeTab,
    handleTabChange,
    tabsConfig,
    githubProjects,
    loading,
    error,
  };
};
