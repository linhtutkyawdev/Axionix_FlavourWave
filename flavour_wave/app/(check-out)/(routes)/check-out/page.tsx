"use client";

import CheckOutForm from "@/components/check-out/check-out-form";
import CheckOutItem from "@/components/check-out/check-out-item";
import Map from "@/components/check-out/map";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import useCheckoutStore from "@/hook/use-checkout-store";
import useShoppingCartStore from "@/hook/use-shopping-cart-store";
import { useUser } from "@clerk/nextjs";
import { DollarSign } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CheckOutPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const { products, onQuantityInc, onQuantityDec } = useShoppingCartStore();
  const { address, driverNRC, trackCapacity, trackNumber, dateToPickUp } =
    useCheckoutStore();

  // if (!products.length) {
  //   return router.push("/products");
  // }

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

  function handleCheckout() {
    const checkData = {
      address,
      driverNRC,
      trackCapacity,
      trackNumber,
      dateToPickUp,
      productsId: products.map((product) => product.id),
      customer_id: user?.id,
      totalQuantity,
      totalPrice,
    };

    console.log(checkData);
  }

  return (
    <div className="flex items- justify-center w-full mt-10 px-4 md:px-10 lg:px-9 xl:px-20">
      <div className="bg-neutral-200 p-4 px-6 w-[88%] mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl lg:text-3xl">Pre-order Summary</h2>
        </div>
        <Separator className="mx-auto w-full h-[1.6px] bg-neutral-300 my-5" />
        <ScrollArea className="h-96">
          {products?.length &&
            products?.map((item) => <CheckOutItem key={item.id} item={item} />)}
        </ScrollArea>
        <Separator className="mx-auto w-full h-[1.6px] bg-neutral-300 my-5" />
        <div className="w-full">
          <Map />

          <div>
            <div className="w-full flex items-center gap-x-4">
              <h3 className="text-lg md:text-xl font-semibold">
                User Location:
              </h3>
              <h3 className="text-lg md:text-xl font-semibold">
                {address.userLocation ?? ""}
              </h3>
            </div>
            <div className="w-full flex items-center gap-x-4">
              <h3 className="text-lg md:text-xl font-semibold">Destination:</h3>
              <h3 className="text-lg md:text-xl font-semibold">
                {address.distance ?? "-"}
              </h3>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={isCheck}
                  onClick={() => setIsCheck((prev) => !prev)}
                  id="terms"
                />
                <label
                  htmlFor="terms"
                  className="cursor-pointer text-base md:text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Is Argent (or) Pick yourself!
                </label>
              </div>
            </div>
          </div>

          {isCheck && <CheckOutForm />}

          <Separator className="mx-auto w-full h-[1.6px] bg-neutral-300 my-5" />

          <div className="w-full flex items-center gap-x-4">
            <h3 className="text-lg md:text-xl font-semibold">
              Total Quantity:
            </h3>
            <h3 className="text-lg md:text-xl font-semibold">
              {totalQuantity}
            </h3>
          </div>
          <div className="w-full flex items-center gap-x-4">
            <h3 className="text-lg md:text-xl font-semibold">Total Price:</h3>
            <h3 className="text-lg md:text-xl font-semibold flex items-center gap-1">
              <DollarSign /> {totalPrice}
            </h3>
          </div>
          <Button
            disabled={address.distance === "" ? true : false}
            onClick={handleCheckout}
            size={"lg"}
            className="text-base md:text-lg my-4"
          >
            Confirm pre-order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
