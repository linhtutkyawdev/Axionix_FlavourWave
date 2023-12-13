"use client";

import { useQuery } from "@tanstack/react-query";
import ProductsGrid from "@/components/products/product-grid";
import React from "react";
import { IProduct } from "@/components/products/product-card";
import { SearchProduct } from "@/components/products/search-product";
import { getProducts } from "@/services/product.service";

type AddTitle<Obj> = Obj extends { title: string }
  ? Omit<Obj, "title"> & { name: string }
  : Obj;
type APIProduct = AddTitle<IProduct>;

const Products = () => {
  // fetch from api-endpoint
  const { data: products, status } = useQuery({
    queryKey: ["products", "all"],
    queryFn: async () => {
      const products = await getProducts();
      return products.map((p: APIProduct) => ({
        ...p,
        title: p.name,
        // name: undefined,
      })) as IProduct[];
    },
  });

  return (
    <div className="my-16">
      <div className="my-5 mb-10">
        <SearchProduct status={status} products={products} />
      </div>

      <ProductsGrid products={products} status={status} showLoading={true} />
    </div>
  );
};

export default Products;
