import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://flavourwave.up.railway.app/api/",
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Content-Type": "application/json",
  // },
});

export default axiosInstance;
