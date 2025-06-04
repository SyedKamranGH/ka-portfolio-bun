import { useState, useEffect } from "react";
import type { Project } from "../types/index";
import { githubService } from "../services/github";

interface UseGitHubProjectsReturn {
  projects: Project[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useGitHubProjects = (): UseGitHubProjectsReturn => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);

      const repos = await githubService.getUserRepositories();

      // Transform GitHub repos to Project format
      const transformedProjects: Project[] = repos.map((repo) => ({
        id: repo.id.toString(),
        name: repo.name,
        summary: repo.description || "No description available",
        githubUrl: repo.html_url,
        liveUrl: repo.homepage || undefined,
        image: undefined, // GitHub API doesn't provide project images
        skills:
          repo.topics?.map((topic) => ({
            name: topic,
            icon: "",
          })) || [],
        type: "personal" as const,
      }));

      setProjects(transformedProjects);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch GitHub projects"
      );
      console.error("Error fetching GitHub projects:", err);
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    projects,
    loading,
    error,
    refetch,
  };
};
