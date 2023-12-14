"use client";

import React from "react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import Image from "next/image";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import { Badge } from "../ui/badge";
import useShoppingCartStore, {
  ShoppingCartItem as ShoppingCartType,
} from "@/hook/use-shopping-cart-store";
import usePreventHydration from "@/hook/use-prevent-hydration";

interface ShoppingCartItemProps {
  item: ShoppingCartType;
  setIsOpen: (open: boolean) => void;
}

const ShoppingCartItem = ({ item, setIsOpen }: ShoppingCartItemProps) => {
  usePreventHydration();

  const { products, onQuantityInc, onQuantityDec } = useShoppingCartStore();

  return (
    <DropdownMenuItem
      key={item.id}
      className="flex flex-col justify-start items-start border-b border-b-neutral-300 last:border-b-0"
    >
      <div className="flex items-center gap-4 mb-2">
        <img
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
  );
};

export default ShoppingCartItem;
