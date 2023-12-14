"use client";

import ProductsDetailsHeader from "@/components/products-detail/products-details-header";
import ProductDetailsHero from "@/components/products-detail/products-details-hero";
import { IProduct } from "@/components/products/product-card";
import ProductsGrid from "@/components/products/product-grid";
import { useQuery } from "@tanstack/react-query";

import React from "react";

interface ProductIdPage {
  params: {
    productId: string;
  };
}

const ProductIdPage = ({ params }: ProductIdPage) => {
  // fetch from api-endpoint
  const { data: product, status: statusForHero } = useQuery({
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

  const { data: products, status: statusForPopular } = useQuery({
    queryKey: ["products", 3],
    queryFn: async () => {
      const res = await fetch(`https://fakestoreapi.com/products?limit=4`);
      if (!res.ok) {
        return Promise.reject(new Error("Could not fetch products"));
      }
      return res.json() as Promise<IProduct[]>;
    },
  });

  return (
    <div>
      <ProductsDetailsHeader name={product?.title} />

      <ProductDetailsHero product={product} status={statusForHero} />

      <div className="my-24">
        <h2 className="text-center text-lg  md:text-2xl lg:text-3xl mb-8 font-bold ">
          Similar <span className="text-emerald-600">Products</span>
        </h2>
        <ProductsGrid
          products={products}
          status={statusForPopular}
          showLoading={false}
          skeletonNumber={4}
        />
      </div>
    </div>
  );
};

export default ProductIdPage;
