import useShoppingCartStore, {
  ShoppingCartItem,
} from "@/hook/use-shopping-cart-store";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { DollarSign, Minus, Plus, Trash } from "lucide-react";
import { Badge } from "../ui/badge";

interface CheckOutItemProps {
  item: ShoppingCartItem;
}

const CheckOutItem = ({ item }: CheckOutItemProps) => {
  const { onQuantityInc, onQuantityDec, onRemoveItem } = useShoppingCartStore();

  return (
    <div
      key={item.id}
      className=" w-full flex justify-start items-start gap-x-3 border-b border-b-neutral-300 last:border-b-0 my-2"
    >
      <div className="flex items-center gap-4 mb-2">
        <Image
          src={item.image}
          alt={item.title}
          width={50}
          height={50}
          className="w-[80px] h-[60px]"
        />
      </div>
      <div className="flex flex-col  items-center gap-4 mb-2">
        <h3 className="line-clamp-1 w-[400px] font-semibold">{item.title}</h3>
        <div className="flex items-center justify-between w-full px-5">
          <h3 className="flex items-center text-lg md:text-xl font-semibold">
            <DollarSign className="w-4 h-4" />
            {item.price}
          </h3>
          <div className=" flex items-center gap-4 ">
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
