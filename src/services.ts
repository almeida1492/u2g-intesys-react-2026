import {
  AuthApi,
  Configuration,
  ProjectApi,
  UserApi,
  type Middleware,
} from "./api";

const addTokenToHeadersMiddleware: Middleware = {
  pre: async (context) => {
    const token = localStorage.getItem("token");
    if (token) {
      context.init.headers = {
        ...context.init.headers,
        Authorization: `Bearer ${token}`,
      };
    }
  },
};

const apiConfig = new Configuration({
  basePath: "http://localhost:8080/api",
  middleware: [addTokenToHeadersMiddleware],
});

export const userApi = new UserApi(apiConfig);

export const authApi = new AuthApi(apiConfig);

export const projectApi = new ProjectApi(apiConfig);
