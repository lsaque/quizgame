import axios from "axios";
import { BASE_URL } from "../utils/constants/api.constants";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  }, 
  function (error) {
    let res = error.response;
    console.error('Looks like there was a problem. Status Code: ' + res.status);
    return Promise.reject(error);
  }
);

export default axiosClient;