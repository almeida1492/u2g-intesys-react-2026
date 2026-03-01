export type ApiResponse<T> = {
  data: T;
  token?: string;
  message?: string;
};

export type ApiError = {
  message: string;
  status?: number;
};

export type Project = {
  id: string;
  name: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  members: string[];
  tasks: string[];
};