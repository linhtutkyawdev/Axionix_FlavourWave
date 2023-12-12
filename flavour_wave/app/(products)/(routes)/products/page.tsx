"use client";

import { useQuery } from "@tanstack/react-query";
import ProductsGrid from "@/components/products/product-grid";
import React from "react";
import { IProduct } from "@/components/products/product-card";

const Products = () => {
  const { data: products, status } = useQuery({
    queryKey: ["products", "all"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        return Promise.reject(new Error("Could not fetch products"));
      }
      return res.json() as Promise<IProduct[]>;
    },
  });

  return (
    <div>
      <ProductsGrid products={products} status={status} />
    </div>
  );
};

export default Products;
