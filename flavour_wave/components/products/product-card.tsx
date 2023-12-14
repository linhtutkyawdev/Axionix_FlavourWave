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
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { getData, storeData, updateData } from "@/lib/local-storage";
import usePreventHydration from "@/hook/use-prevent-hydration";

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

const ProductCard = ({ id, description, image, price, title }: IProduct) => {
  usePreventHydration();
  const router = useRouter();
  const { onAddItem, products } = useShoppingCartStore();

  // const data = getData("flavorWave_store") ?? [];

  function onClickAddToShoppingCart(item: ShoppingCartItem) {
    onAddItem(item);
    toast({
      description: "Successfully added new product.",
    });
  }

  function checkItemAlreadyInShoppingCart(id: number) {
    return products?.some((item) => item.id === id);
  }

  return (
    <Card className="bg-background cursor-pointer relative m-auto sm:m-0 w-[350px] sm:w-full h-[420px] sm:max-h-[520px] border border-neutral-500">
      <CardHeader className="group overflow-hidden w-full h-1/2 transition-all duration-300">
        <img
          src={image}
          alt={title}
          width={100}
          height={50}
          className="transition-all duration-300 w-full h-full group-hover:scale-105 object-cover rounded-t-sm"
        />
      </CardHeader>
      <Separator className="mb-3" />
      <CardContent>
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <h2 className="line-clamp-1 font-bold">{title}</h2>
              </TooltipTrigger>
              <TooltipContent>
                <p>{title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <p className="line-clamp-3 my-2">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="px-2 flex justify-between items-center">
        <Button
          disabled={checkItemAlreadyInShoppingCart(id) ? true : false}
          variant={"primary"}
          onClick={() => {
            onClickAddToShoppingCart({
              id,
              image,
              price,
              quantity: 1,
              title,
            });
          }}
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
      </CardFooter>
      <Badge className="absolute top-1 left-1 ">
        <DollarSign className="w-5 h-5" />
        <span className="text-base">{price}</span>
      </Badge>
    </Card>
  );
};

export default ProductCard;
