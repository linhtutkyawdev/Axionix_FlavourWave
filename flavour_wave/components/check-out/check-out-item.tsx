import useShoppingCartStore, {
  ShoppingCartItem,
} from "@/hook/use-shopping-cart-store";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { DollarSign, Minus, Plus, Trash } from "lucide-react";
import { Badge } from "../ui/badge";
import usePreventHydration from "@/hook/use-prevent-hydration";

interface CheckOutItemProps {
  item: ShoppingCartItem;
}

const CheckOutItem = ({ item }: CheckOutItemProps) => {
  usePreventHydration();
  const { onQuantityInc, onQuantityDec, onRemoveItem } = useShoppingCartStore();

  return (
    <div
      key={item.id}
      className=" bg-neutral-300 px-3 py-2 lg:w-[74%] mx-auto flex flex-col md:flex-row justify-start items-start gap-x-3 border-b border-b-neutral-300 last:border-b-0 my-2 rounded-lg"
    >
      <div className="relative w-[200px] h-[150px] flex justify-center items-center gap-4 mb-2">
        <img src={item.image} alt={item.title} fill />
      </div>
      <div className="flex flex-col items-start gap-4 mb-2 w-full">
        <h3 className="line-clamp-1 w-[400px] font-semibold">
          {item.title ?? "This is title"}
        </h3>
        <div className="flex  items-start md:items-center flex-col md:flex-row justify-between w-full">
          <h3 className="flex items-center text-lg md:text-xl font-semibold">
            <DollarSign className="w-4 h-4" />
            {item.price}
          </h3>
          <div className=" flex items-center gap-4 mr-10">
            <Button
              size={"icon"}
              onClick={(e) => {
                e.stopPropagation();
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
                onQuantityDec(item.id);
              }}
            >
              <Minus />
            </Button>
            <Button
              size={"icon"}
              variant={"destructive"}
              onClick={(e) => {
                onRemoveItem(item.id);
              }}
            >
              <Trash />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItem;
