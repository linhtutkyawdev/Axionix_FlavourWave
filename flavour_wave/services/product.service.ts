import { CreatePreOrderType } from "@/app/(check-out)/(routes)/check-out/page";
import axiosInstance from "./axiosInstance";

export const getProducts = async () => {
  // const result = await axiosInstance.get("/products");
  const result = await axiosInstance.get("http://127.0.0.1:8000/api/products");

  return result.data;
};

export const createPreOrder = async (preOrder: CreatePreOrderType) => {
  const result = await axiosInstance.post(
    "http://127.0.0.1:8000/api/preorders/create",
    preOrder
  );
  return result.data;
};

export const getOrderForAuthUser = async (customer_id?: string) => {
  const result = await axiosInstance.get(
    `http://127.0.0.1:8000/api/customers/${customer_id}/preorders`
  );

  return result.data;
};
