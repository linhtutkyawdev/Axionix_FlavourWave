import axiosInstance from "./axiosInstance";

export const getProducts = async () => {
  const result = await axiosInstance.get("/products");
  // const result = await axiosInstance.get("https://fakestoreapi.com/products");

  return result.data;
};

getProducts();
