import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dogbreed-api.q9.com.br",
  timeout: 1000,
});
