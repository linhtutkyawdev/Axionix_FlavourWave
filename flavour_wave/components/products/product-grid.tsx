"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";
import ProductCard, { IProduct } from "./product-card";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

interface ProductsGridProps {
  products?: IProduct[];
  status: "error" | "success" | "pending";
  showLoading?: boolean;
  skeletonNumber?: number;
}

const ProductsGrid = ({
  products,
  status,
  showLoading,
  skeletonNumber = 10,
}: ProductsGridProps) => {
  if (status === "error") {
    return <div>Could not fetch products</div>;
  }

  let customArr: Array<number> = [];

  for (let i = 0; i < skeletonNumber; i++) {
    if (!customArr.includes(i)) {
      customArr.push(i);
    }
  }

  return (
    <>
      {showLoading && status === "pending" && (
        <Button className="z-30 fixed top-16 left-[50%] translate-y-[-50%]">
          <Loader2 className="animate-spin" />
        </Button>
      )}
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  my-4 mx-4 md:mx-10 lg:mx-9 xl:mx-20">
        {status === "pending"
          ? customArr.map((s) => (
              <div
                key={s}
                className="bg-background cursor-pointer relative m-auto sm:m-0 w-[350px] sm:w-full h-[420px] sm:max-h-[520px] "
              >
                <div className="group overflow-hidden w-full h-1/2 transition-all duration-300">
                  <Skeleton className="w-full h-full object-contain group-hover:scale-105" />
                </div>
                <Separator className="my-3" />
                <div>
                  <div>
                    <Skeleton className="line-clamp-1 font-bold w-[180px] h-[20px]" />
                    <Skeleton className="line-clamp-3 my-2 w-full h-[80px]" />
                  </div>
                </div>
                <div className="px-2 flex justify-between items-center">
                  <Skeleton className="w-[100px] h-[40px]" />
                  <Skeleton className="w-[100px] h-[40px]" />
                </div>
                <Skeleton className="absolute w-5 h-5 top-1 left-1 "></Skeleton>
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
