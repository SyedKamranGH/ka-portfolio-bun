import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";

interface ApiResponse<T = any> {
  data: T;
  status: number;
  message?: string;
}

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.github.com",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.axiosInstance.interceptors.request.use(
      (config) => {
        // Add GitHub token for GitHub API requests
        const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
        if (githubToken && config.baseURL?.includes("github.com")) {
          config.headers.Authorization = `Bearer ${githubToken}`;
        } else {
          // Add auth token if available for other APIs
          const token = localStorage.getItem("authToken");
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error) => {
        // Handle common errors
        if (error.response?.status === 401) {
          // Handle unauthorized access
          localStorage.removeItem("authToken");
          // Redirect to login or refresh token
        }

        // Handle GitHub API rate limit specifically
        if (
          error.response?.status === 403 &&
          error.response?.data?.message?.includes("rate limit")
        ) {
          console.error(
            "GitHub API rate limit exceeded. Please check your token configuration."
          );
        }

        return Promise.reject(error);
      }
    );
  }

  public async get<T>(url: string, params?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.axiosInstance.get<T>(url, { params });
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  public async post<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.axiosInstance.post<T>(url, data);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  public async put<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.axiosInstance.put<T>(url, data);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  public async delete<T>(url: string): Promise<ApiResponse<T>> {
    try {
      const response = await this.axiosInstance.delete<T>(url);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): Error {
    if (error.response) {
      // Server responded with error status
      const message = error.response.data?.message || error.response.statusText;

      // Provide more helpful error messages for GitHub API rate limiting
      if (error.response.status === 403 && message?.includes("rate limit")) {
        return new Error(
          `GitHub API rate limit exceeded. Please check your VITE_GITHUB_TOKEN configuration. ${message}`
        );
      }

      return new Error(`API Error: ${message} (${error.response.status})`);
    } else if (error.request) {
      // Request was made but no response received
      return new Error("Network Error: No response from server");
    } else {
      // Something else happened
      return new Error(`Request Error: ${error.message}`);
    }
  }
}

export const apiService = new ApiService();
