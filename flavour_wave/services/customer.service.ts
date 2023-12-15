import axiosInstance from "./axiosInstance";

export const creatCustomer = async () => {
  const result = await axiosInstance.post("/customer/create", {});
  // const result = await axiosInstance.get("https://fakestoreapi.com/products");

  return result.data;
};
