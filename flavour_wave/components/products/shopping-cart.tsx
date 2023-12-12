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
import {
  CheckCircle,
  DollarSign,
  Minus,
  Plus,
  ShoppingCartIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import useShoppingCartStore from "@/hook/use-shopping-cart-store";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { products, onRest, onQuantityInc, onQuantityDec } =
    useShoppingCartStore();
  const { toast } = useToast();

  // total quantity
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
                  onRest();
                  toast({
                    title: "Successfully Purchased items",
                  });
                  localStorage.removeItem("shoppingCartState");
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
              <DropdownMenuItem
                key={item.id}
                className="flex flex-col justify-start items-start border-b border-b-neutral-300 last:border-b-0"
              >
                <div className="flex items-center gap-4 mb-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="w-[80px] h-[60px]"
                  />
                  <h3>{item.title}</h3>
                </div>
                <div className=" flex items-center gap-4">
                  <Button
                    size={"icon"}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(true);
                      onQuantityInc(item.id);
                    }}
                  >
                    <Plus />
                  </Button>
                  <Badge>{item.quantity}</Badge>
                  <Button
                    size={"icon"}
                    variant={"destructive"}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(true);
                      onQuantityDec(item.id);
                    }}
                  >
                    <Minus />
                  </Button>
                </div>
              </DropdownMenuItem>
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
