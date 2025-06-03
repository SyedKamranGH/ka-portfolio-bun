import { apiService } from "./api";
import type { GitHubRepo, GitHubUser } from "../types";

export class GitHubService {
  private readonly username: string;

  constructor() {
    this.username = process.env.REACT_APP_GITHUB_USERNAME || "";
  }

  public async getUserProfile(): Promise<GitHubUser> {
    try {
      const response = await apiService.get<GitHubUser>(
        `/users/${this.username}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching GitHub user profile:", error);
      throw error;
    }
  }

  public async getUserRepositories(): Promise<GitHubRepo[]> {
    try {
      const response = await apiService.get<GitHubRepo[]>(
        `/users/${this.username}/repos`,
        {
          sort: "updated",
          direction: "desc",
          per_page: 50,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching GitHub repositories:", error);
      throw error;
    }
  }

  public async getRepositoryDetails(repoName: string): Promise<GitHubRepo> {
    try {
      const response = await apiService.get<GitHubRepo>(
        `/repos/${this.username}/${repoName}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching repository details:", error);
      throw error;
    }
  }

  public async getRepositoryLanguages(
    repoName: string
  ): Promise<Record<string, number>> {
    try {
      const response = await apiService.get<Record<string, number>>(
        `/repos/${this.username}/${repoName}/languages`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching repository languages:", error);
      throw error;
    }
  }
}

export const githubService = new GitHubService();
