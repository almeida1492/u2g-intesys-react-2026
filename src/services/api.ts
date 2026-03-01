import { API_ENDPOINTS } from '../constants';
import type { ApiResponse, ApiError } from '../types';

class ApiService {
  private baseURL: string;

  constructor(baseURL: string = 'http://localhost:3000') {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const token = localStorage.getItem('token');
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, config);
      
      if (!response.ok) {
        const error: ApiError = await response.json();
        throw new Error(error.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  }

  // Auth methods
  async login(username: string, password: string) {
    return this.request(API_ENDPOINTS.AUTH.LOGIN, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
  }

  async register(userData: any) {
    return this.request(API_ENDPOINTS.AUTH.REGISTER, {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  // Project methods
  async getProjects() {
    return this.request(API_ENDPOINTS.PROJECTS.GET_ALL);
  }

  async getProject(id: string) {
    return this.request(API_ENDPOINTS.PROJECTS.GET_BY_ID(id));
  }

  async createProject(projectData: any) {
    return this.request(API_ENDPOINTS.PROJECTS.CREATE, {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
  }

  async updateProject(id: string, projectData: any) {
    return this.request(API_ENDPOINTS.PROJECTS.UPDATE(id), {
      method: 'PUT',
      body: JSON.stringify(projectData),
    });
  }

  async deleteProject(id: string) {
    return this.request(API_ENDPOINTS.PROJECTS.DELETE(id), {
      method: 'DELETE',
    });
  }

  // Task methods
  async getTasks(projectId: string) {
    return this.request(API_ENDPOINTS.TASKS.GET_BY_PROJECT(projectId));
  }

  async createTask(projectId: string, taskData: any) {
    return this.request(API_ENDPOINTS.TASKS.CREATE(projectId), {
      method: 'POST',
      body: JSON.stringify(taskData),
    });
  }

  async updateTask(projectId: string, taskId: string, taskData: any) {
    return this.request(API_ENDPOINTS.TASKS.UPDATE(projectId, taskId), {
      method: 'PUT',
      body: JSON.stringify(taskData),
    });
  }

  async deleteTask(projectId: string, taskId: string) {
    return this.request(API_ENDPOINTS.TASKS.DELETE(projectId, taskId), {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService();
