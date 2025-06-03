import axios from "axios";
import type { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import type { ApiResponse } from "../types";

class ApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL || "https://api.github.com",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // Add auth token if available
        const token = localStorage.getItem("auth_token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Handle unauthorized access
          localStorage.removeItem("auth_token");
          // Redirect to login if needed
        }
        return Promise.reject(error);
      }
    );
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.client.get(url, config);
      return {
        data: response.data,
        status: response.status,
        message: "Success",
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.client.post(
        url,
        data,
        config
      );
      return {
        data: response.data,
        status: response.status,
        message: "Success",
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.client.put(
        url,
        data,
        config
      );
      return {
        data: response.data,
        status: response.status,
        message: "Success",
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.client.delete(url, config);
      return {
        data: response.data,
        status: response.status,
        message: "Success",
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.client.patch(
        url,
        data,
        config
      );
      return {
        data: response.data,
        status: response.status,
        message: "Success",
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): Error {
    if (error.response) {
      // Server responded with error status
      const message = error.response.data?.message || "An error occurred";
      return new Error(`${error.response.status}: ${message}`);
    } else if (error.request) {
      // Request was made but no response received
      return new Error("Network error: No response received");
    } else {
      // Something else happened
      return new Error(error.message || "An unexpected error occurred");
    }
  }

  // GitHub API specific methods
  async getGitHubRepos(username: string) {
    return this.get(`/users/${username}/repos?sort=updated&per_page=50`);
  }

  async getGitHubUser(username: string) {
    return this.get(`/users/${username}`);
  }

  async getRepoContents(username: string, repo: string, path: string = "") {
    return this.get(`/repos/${username}/${repo}/contents/${path}`);
  }

  async getRepoLanguages(username: string, repo: string) {
    return this.get(`/repos/${username}/${repo}/languages`);
  }
}

// Export singleton instance
export const apiService = new ApiService();
export default ApiService;
