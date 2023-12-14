import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://flavourwave.up.railway.app/api/",
});

export default axiosInstance;
