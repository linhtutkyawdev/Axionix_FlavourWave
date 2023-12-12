"use client";

import ProductsDetailsHeader from "@/components/products-detail/products-details-header";
import ProductDetailsHero from "@/components/products-detail/products-details-hero";
import { IProduct } from "@/components/products/product-card";
import { useQuery } from "@tanstack/react-query";

import React from "react";

interface ProductIdPage {
  params: {
    productId: string;
  };
}

const ProductIdPage = ({ params }: ProductIdPage) => {
  // fetch from api-endpoint
  const { data: product, status } = useQuery({
    queryKey: ["products", params.productId],
    queryFn: async () => {
      const res = await fetch(
        `https://fakestoreapi.com/products/${params.productId}`
      );
      if (!res.ok) {
        return Promise.reject(new Error("Could not fetch products"));
      }
      return res.json() as Promise<IProduct>;
    },
  });

  return (
    <div>
      <ProductsDetailsHeader name={product?.title} />

      <ProductDetailsHero product={product} status={status} />
    </div>
  );
};

export default ProductIdPage;
