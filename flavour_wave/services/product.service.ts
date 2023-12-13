import axiosInstance from "./axiosInstance";

export const getProducts = async () => {
  const result = await axiosInstance.get("/products");
  return result.data.products;
};

getProducts();
