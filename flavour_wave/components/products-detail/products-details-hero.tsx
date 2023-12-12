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
import ProductsDetailsTabs from "./products-details-tabs";

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
      <div className="mt-8 flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-5 items-start justify-between w-[100%] px-8  lg:px-40 xl:px-48">
        <div className="w-[80%] sm:w-[55%] mx-auto md:w-[37%] lg:w-[33%] xl:w-[25%] flex items-center justify-center pb-10 md:pb-0 h-[370px] md:h-[400px] bg-red-500">
          <Image
            src={product?.image as string}
            alt={product?.title as string}
            width={100}
            height={100}
            className="h-full w-full"
          />
        </div>
        <div className="w-full md:w-[60%] flex justify-start items-start flex-col ">
          <h2 className="text-emerald-500 text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
            {product?.title}
          </h2>
          <h3 className="flex items-center text-xl md:text-2xl lg:text-3xl">
            <DollarSign />{" "}
            <span className="text-rose-600 font-bold">{product?.price}</span>
          </h3>
          <div className="flex items-center gap-x-1 mt-4">
            <div className="flex">
              <Star className="fill-yellow-500 text-yellow-500" />
              <Star className="fill-yellow-500 text-yellow-500" />
              <Star className="fill-yellow-500 text-yellow-500" />
              <Star className="fill-yellow-500 text-yellow-500" />
              <StarHalf className="fill-yellow-500 text-yellow-500" />
            </div>
            <h3 className="font-bold"> ({product?.rating.rate})</h3>
          </div>
          <div>
            <h3 className="text-lg font-bold">
              Reviewed by {product?.rating.count} people
            </h3>
          </div>
          <p className="line-clamp-2 my-2 text-slate-700 text-lg  md:text-xl ">
            {product?.description}
          </p>
          <div className="flex items-center justify-between gap-x-24 mt-6">
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
              size={"lg"}
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
              className="text-base sm:text-lg transition-all duration-300 rounded-3xl hover:rounded-xl active:scale-95"
            >
              <ShoppingCartIcon />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <ProductsDetailsTabs description={product?.description} />
    </div>
  );
};

export default ProductDetailsHero;
