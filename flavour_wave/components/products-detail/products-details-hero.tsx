"use client";

import Image from "next/image";
import { IProduct } from "../products/product-card";
import { Button } from "../ui/button";
import {
  DollarSign,
  Minus,
  Plus,
  ShoppingCartIcon,
  Star,
  StarHalf,
} from "lucide-react";
import useShoppingCartStore, {
  ShoppingCartItem,
} from "@/hook/use-shopping-cart-store";
import { toast } from "../ui/use-toast";
import { Badge } from "../ui/badge";

interface ProductDetailsHeroProps {
  product?: IProduct;
  status: "error" | "success" | "pending";
}

const ProductDetailsHero = ({ product, status }: ProductDetailsHeroProps) => {
  const { onQuantityDec, onQuantityInc, onAddItem, products } =
    useShoppingCartStore();

  function onClickAddToShoppingCart(item: ShoppingCartItem) {
    onAddItem(item);
    toast({
      description: "Successfully added new item to shopping cart",
    });
  }

  function checkItemAlreadyInShoppingCart(id: number) {
    return products?.some((item) => item.id === id);
  }

  const uniqueQuantity = products.filter((p) => p.id === product?.id)[0]
    ?.quantity;

  return (
    <div>
      <div className="mt-8 flex flex-col md:flex-row gap-y-6 md:gap-y-0 items-start justify-between w-[100%] px-8 sm:px-16 md:px-24 lg:px-40 xl:px-48">
        <div className="w-full md:w-[30%] flex items-center justify-center pb-10 md:pb-0 h-[580px] bg-red-300">
          <Image
            src={product?.image as string}
            alt={product?.title as string}
            width={100}
            height={100}
            className="h-full w-full"
          />
        </div>
        <div className="w-full md:w-[60%] flex justify-start items-start flex-col">
          <h2 className="text-emerald-500 text-2xl md:text-3xl lg:text-4xl font-semibold">
            {product?.title}
          </h2>
          <h3 className="flex items-center text-xl md:text-2xl lg:text-3xl">
            <DollarSign /> {product?.price}
          </h3>
          <div className="flex items-center gap-x-1">
            <div className="flex">
              <Star className="fill-yellow-500 text-yellow-500" />
              <Star className="fill-yellow-500 text-yellow-500" />
              <Star className="fill-yellow-500 text-yellow-500" />
              <Star className="fill-yellow-500 text-yellow-500" />
              <StarHalf className="fill-yellow-500 text-yellow-500" />
            </div>
            <h3> {product?.rating.rate}</h3>
          </div>
          <div>
            <h3>Reviewed by {product?.rating.count} people</h3>
          </div>
          <p className="line-clamp-2">{product?.description}</p>
          <div>
            <div className=" flex items-center gap-4">
              <Button
                size={"icon"}
                onClick={(e) => {
                  e.stopPropagation();

                  if (!checkItemAlreadyInShoppingCart(product?.id as number)) {
                    onClickAddToShoppingCart({
                      id: product?.id as number,
                      image: product?.image as string,
                      price: product?.price as number,
                      quantity: 1,
                      title: product?.title as string,
                    });
                    return;
                  }

                  onQuantityInc(product?.id as number);
                }}
              >
                <Plus />
              </Button>
              <Badge>{uniqueQuantity ? uniqueQuantity : 0}</Badge>
              <Button
                disabled={uniqueQuantity ? false : true}
                size={"icon"}
                variant={"destructive"}
                onClick={(e) => {
                  e.stopPropagation();
                  onQuantityDec(product?.id as number);
                }}
              >
                <Minus />
              </Button>
            </div>

            <Button
              disabled={
                checkItemAlreadyInShoppingCart(product?.id as number)
                  ? true
                  : false
              }
              variant={"primary"}
              onClick={() =>
                onClickAddToShoppingCart({
                  id: product?.id as number,
                  image: product?.image as string,
                  price: product?.price as number,
                  quantity: 1,
                  title: product?.title as string,
                })
              }
            >
              <ShoppingCartIcon />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsHero;
