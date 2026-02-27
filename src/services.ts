import { Configuration, UserApi } from "./api";

const apiConfig = new Configuration({
  basePath: "http://localhost:8080",
});

export const userApi = new UserApi(apiConfig);
