"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";
import ProductCard, { IProduct } from "./product-card";

interface ProductsGridProps {
  products?: IProduct[];
  status: "error" | "success" | "pending";
}

const ProductsGrid = ({ products, status }: ProductsGridProps) => {
  if (status === "error") {
    return <div>Could not fetch products</div>;
  }

  return (
    <>
      {status === "pending" && (
        <Button className="z-30 fixed top-16 left-[50%] translate-y-[-50%]">
          <Loader2 className="animate-spin" />
        </Button>
      )}
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  my-4 mx-4 md:mx-10 lg:mx-9 xl:mx-20">
        {status === "pending"
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((s) => (
              <div
                key={s}
                className="bg-background cursor-pointer relative m-auto sm:m-0 w-[320px] sm:w-full h-[420px] sm:max-h-[470px]"
              >
                <Skeleton className="w-full h-1/2" />
                <div className="px-3">
                  <Skeleton className="w-[50px] h-1" />
                  <Skeleton className="w-full h-32" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-9 rounded-md px-3 w-20" />
                    <Skeleton className="h-9 rounded-md px-3 w-20" />
                  </div>
                </div>
              </div>
            ))
          : products?.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                category={product.category}
                description={product.description}
                image={product.image}
                price={product.price}
                rating={product.rating}
                title={product.title}
              />
            ))}
      </div>
    </>
  );
};

export default ProductsGrid;
