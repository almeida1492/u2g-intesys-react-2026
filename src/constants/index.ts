// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
  },
  PROJECTS: {
    GET_ALL: '/api/projects',
    GET_BY_ID: (id: string) => `/api/projects/${id}`,
    CREATE: '/api/projects',
    UPDATE: (id: string) => `/api/projects/${id}`,
    DELETE: (id: string) => `/api/projects/${id}`,
  },
  TASKS: {
    GET_BY_PROJECT: (projectId: string) => `/api/projects/${projectId}/tasks`,
    CREATE: (projectId: string) => `/api/projects/${projectId}/tasks`,
    UPDATE: (projectId: string, taskId: string) => `/api/projects/${projectId}/tasks/${taskId}`,
    DELETE: (projectId: string, taskId: string) => `/api/projects/${projectId}/tasks/${taskId}`,
  },
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'token',
  USER_PREFERENCES: 'userPreferences',
  THEME: 'theme',
} as const;

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROJECTS: {
    LIST: '/dashboard',
    CREATE: '/dashboard/projects/create',
    UPDATE: (id: string) => `/dashboard/projects/update/${id}`,
    KANBAN: (id: string) => `/dashboard/projects/${id}`,
  },
  SETTINGS: '/dashboard/settings',
  NOT_FOUND: '*',
} as const;
