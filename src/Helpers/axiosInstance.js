import axios from "axios";

const axiosInstance = axios.create() // create a new instance of axios

axiosInstance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL; // set the base url

axiosInstance.defaults.withCredentials = true; // allow cookies to be sent with the request

export default axiosInstance; // export the instance