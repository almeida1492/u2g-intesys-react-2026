import { Configuration, UserApi, ProjectApi, ColumnApi, CardApi } from "./api";

const authMiddleware = {
  pre: async (context: any) => {
    const token = localStorage.getItem("token");
    if (token) {
      context.init.headers = {
        ...context.init.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return context;
  },
};

const publicConfig = new Configuration({
  basePath: "http://localhost:8080/api",
});

const privateConfig = new Configuration({
  basePath: "http://localhost:8080/api",
  middleware: [authMiddleware],
});

export const userApi = new UserApi(publicConfig);
export const projectApi = new ProjectApi(privateConfig);
export const columnApi = new ColumnApi(privateConfig);
export const cardApi = new CardApi(privateConfig);