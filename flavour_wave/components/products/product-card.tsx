"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DollarSign, Inspect, Shirt, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { toast } from "../ui/use-toast";
import useShoppingCartStore, {
  ShoppingCartItem,
} from "@/hook/use-shopping-cart-store";
import { useRouter } from "next/navigation";

export interface IProduct {
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

const ProductCard = ({
  category,
  id,
  description,
  image,
  price,
  rating,
  title,
}: IProduct) => {
  const router = useRouter();
  const { onAddItem, products } = useShoppingCartStore();

  function onClickAddToShoppingCart(item: ShoppingCartItem) {
    onAddItem(item);
    toast({
      description: "Successfully added new item to shopping cart",
    });
  }

  function checkItemAlreadyInShoppingCart(id: number) {
    return products?.some((item) => item.id === id);
  }

  return (
    <div className="bg-background cursor-pointer relative m-auto sm:m-0 w-[350px] sm:w-full h-[420px] sm:max-h-[520px] border border-neutral-500">
      <div className="group overflow-hidden w-full h-1/2 transition-all duration-300">
        <Image
          src={image}
          alt={title}
          width={100}
          height={50}
          className="transition-all duration-300 w-full h-full object-contain group-hover:scale-105 "
        />
      </div>
      <Separator className="my-3" />
      <div className="px-3 ">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <h2 className="line-clamp-2 font-bold">{title}</h2>
            </TooltipTrigger>
            <TooltipContent>
              <p>{title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p className="line-clamp-3 my-2">{description}</p>
        <div className="flex justify-between items-center">
          <Button
            disabled={checkItemAlreadyInShoppingCart(id) ? true : false}
            variant={"primary"}
            onClick={() =>
              onClickAddToShoppingCart({
                id,
                image,
                price,
                quantity: 1,
                title,
              })
            }
          >
            <ShoppingCart />
            Add to Cart
          </Button>
          <Button
            size={"sm"}
            onClick={() => {
              router.push(`/products/${id}`);
            }}
          >
            <Inspect /> View Detail
          </Button>
        </div>
      </div>

      <Badge className="absolute top-1 left-1 ">
        <DollarSign className="w-5 h-5" />
        <span className="text-base">{price}</span>
      </Badge>
    </div>
  );
};

export default ProductCard;
