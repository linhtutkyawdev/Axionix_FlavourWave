"use client";

import ProductsDetailsHeader from "@/components/products-detail/products-details-header";
import ProductDetailsHero from "@/components/products-detail/products-details-hero";
import { IProduct } from "@/components/products/product-card";
import ProductsGrid from "@/components/products/product-grid";
import { useQuery } from "@tanstack/react-query";

import React from "react";
import { APIProduct } from "../page";
import { getProducts } from "@/services/product.service";

interface ProductIdPage {
  params: {
    productId: string;
  };
}

const PRODUCT_IMAGE_API_URL = "https://flavourwave.up.railway.app";

const ProductIdPage = ({ params }: ProductIdPage) => {
  // fetch from api-endpoint for specific product
  const { data: product, status: statusForHero } = useQuery({
    queryKey: ["product", params.productId],
    queryFn: async () => {
      const products: APIProduct[] = await getProducts();

      return products
        .map((p) => ({
          id: p.id,
          title: p.name,
          price: p.unit_price * p.quantity_per_box,
          description: p.description,
          image: PRODUCT_IMAGE_API_URL + "/" + p.image_url,
        }))
        .filter((p) => p.id === parseInt(params.productId, 10)) as IProduct[];
    },
  });

  // random products data
  const { data: products, status: statusForPopular } = useQuery({
    queryKey: ["products", "similar"],
    queryFn: async () => {
      const products: APIProduct[] = await getProducts();

      const transformedProducts = products.map((p) => ({
        id: p.id,
        title: p.name,
        price: p.unit_price * p.quantity_per_box,
        description: p.description,
        image: PRODUCT_IMAGE_API_URL + "/" + p.image_url,
      })) as IProduct[];

      // Shuffle the products array
      const shuffledProducts = [...transformedProducts].sort(
        () => Math.random() - 0.5
      );

      // Get the first 4 products from the shuffled array
      const randomProducts = shuffledProducts.slice(0, 4);

      return randomProducts;
    },
  });

  return (
    <div>
      <ProductsDetailsHeader name={product?.[0]?.title} />

      <ProductDetailsHero product={product?.[0]} status={statusForHero} />

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
