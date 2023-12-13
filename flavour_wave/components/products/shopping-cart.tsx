"use client";

import React, { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CheckCircle, DollarSign, ShoppingCartIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import useShoppingCartStore from "@/hook/use-shopping-cart-store";
import { useRouter } from "next/navigation";
import ShoppingCartItem from "./shopping-cart-item";
import { getData } from "@/lib/local-storage";

const ShoppingCart = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { products, onQuantityInc, onQuantityDec } = useShoppingCartStore();

  // const data = getData("flavorWave_store") ?? [];

  const totalQuantity = products.length
    ? products.reduce((acc, curr) => {
        const quantity = curr.quantity;

        acc += quantity;

        return acc;
      }, 0)
    : 0;

  // total quantity price
  const totalPrice = parseFloat(
    String(
      products.length
        ? products.reduce((acc, curr) => {
            const price = curr.price * curr.quantity;
            acc += price;
            return acc;
          }, 0)
        : 0
    )
  ).toFixed(2);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger>
        <div
          className="relative hidden md:block  p-1 bg-black text-white rounded-full"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <ShoppingCartIcon className="w-8 h-8" />
          <Badge className="p-1.5 py-0.5 absolute -top-3">
            {totalQuantity}
          </Badge>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[350px]  sm:w-[400px]">
        <DropdownMenuLabel className="flex justify-between">
          <h3>Shopping Cart</h3>
          <h3 className="flex items-center">
            <DollarSign className="w-4 h-4" />
            {totalPrice}
          </h3>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {totalQuantity > 0 && (
          <>
            <DropdownMenuItem>
              <Button
                className="w-full"
                onClick={() => {
                  router.push("/check-out");
                }}
              >
                <CheckCircle /> Check out
              </Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}

        {products?.length ? (
          <ScrollArea className="w-full h-72 sm:h-96">
            {products?.map((item) => (
              <ShoppingCartItem
                key={item.id}
                item={item}
                setIsOpen={setIsOpen}
              />
            ))}
          </ScrollArea>
        ) : (
          <DropdownMenuItem>No item yet!</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShoppingCart;
