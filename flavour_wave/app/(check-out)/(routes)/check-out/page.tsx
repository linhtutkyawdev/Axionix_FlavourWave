"use client";

import CheckOutItem from "@/components/check-out/check-out-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import useShoppingCartStore from "@/hook/use-shopping-cart-store";
import { DollarSign } from "lucide-react";
import { useRouter } from "next/navigation";

const CheckOutPage = () => {
  const router = useRouter();
  const { products, onQuantityInc, onQuantityDec } = useShoppingCartStore();

  if (!products.length) {
    return router.push("/products");
  }

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
    <div className="flex items-start justify-between w-full mt-10">
      <div>
        <h2>Pre-order Summary</h2>
      </div>
      <div className="bg-neutral-200 p-4 px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl lg:text-3xl">Pre-order Summary</h2>
          {/* <h3 className="flex items-center text-xl md:text-2xl font-semibold">
            <DollarSign className="w-4 h-4" />
            {totalPrice}
          </h3> */}
        </div>
        <Separator className="mx-auto w-full h-[1.6px] bg-neutral-300 my-5" />
        <ScrollArea className="h-96">
          {products?.length &&
            products?.map((item) => <CheckOutItem key={item.id} item={item} />)}
        </ScrollArea>
        <Separator className="mx-auto w-full h-[1.6px] bg-neutral-300 my-5" />
        <div className="w-full">
          <div className="w-full flex items-center justify-between">
            <h3 className="text-lg md:text-xl font-semibold">
              Total Quantity:
            </h3>
            <h3 className="text-lg md:text-xl font-semibold">
              {totalQuantity}
            </h3>
          </div>
          <div className="w-full flex items-center justify-between">
            <h3 className="text-lg md:text-xl font-semibold">Total Price:</h3>
            <h3 className="text-lg md:text-xl font-semibold flex items-center gap-1">
              <DollarSign /> {totalPrice}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
