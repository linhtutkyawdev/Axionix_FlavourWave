"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useQuery } from "@tanstack/react-query";
import {
  DollarSign,
  Inspect,
  Loader2,
  Shirt,
  ShoppingCart,
  Star,
} from "lucide-react";
import Image from "next/image";
import ProductCard from "./product-card";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductsGrid = () => {
  const { data: products, status } = useQuery({
    queryKey: ["products", "all"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        return Promise.reject(new Error("Could not fetch products"));
      }
      return res.json() as Promise<Product[]>;
    },
  });

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
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  my-4 mx-4 md:mx-10 lg:mx-14 xl:mx-12">
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
          : products.map((product) => (
              <ProductCard
                key={product.id}
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
