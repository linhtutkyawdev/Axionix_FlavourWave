import axiosInstance from "./axiosInstance";

export const getProducts = async () => {
  // const result = await axiosInstance.get("/products");
  const result = await axiosInstance.get("http://127.0.0.1:8000/api/products");

  return result.data;
};

getProducts();
