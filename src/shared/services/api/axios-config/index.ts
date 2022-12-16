import axios from "axios";
import { Environment } from "../../../environment";
import { errorInterceptor } from "./interceptors";
import { responseInterceptor } from "./interceptors/ResponseInterceptor";

const api = axios.create({
  baseURL: Environment.URL_BASE
});

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { api }; 
