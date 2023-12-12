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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DollarSign, Inspect, Shirt, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

export interface IProduct {
  id: string;
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
  description,
  image,
  price,
  rating,
  title,
}: IProduct) => {
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
          <Button variant={"primary"}>
            <ShoppingCart />
            Add to Cart
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button size={"sm"}>
                <Inspect /> View Detail
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <Image
                  src={image}
                  alt={title}
                  width={100}
                  height={50}
                  className="w-[200px] h-[200px] m-auto object-cover"
                />
                <DialogDescription className="text-slate-800">
                  {description}
                </DialogDescription>
              </DialogHeader>
              <div>
                <h3 className="flex items-center">
                  <DollarSign className="w-5 h-5" />
                  {price}
                </h3>
                <h3 className="flex items-center">
                  <Shirt />
                  {category}
                </h3>
                <h3 className="flex items-center">
                  <Star /> {rating.rate}
                </h3>
                <Button variant={"primary"} className="mt-4">
                  <ShoppingCart />
                  Add to Cart
                </Button>
              </div>
            </DialogContent>
          </Dialog>
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
