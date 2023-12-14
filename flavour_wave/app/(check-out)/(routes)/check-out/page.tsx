"use client";

import CheckOutForm from "@/components/check-out/check-out-form";
import CheckOutItem from "@/components/check-out/check-out-item";
import Map from "@/components/check-out/map";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import useCheckoutStore from "@/hook/use-checkout-store";
import usePreventHydration from "@/hook/use-prevent-hydration";
import useShoppingCartStore from "@/hook/use-shopping-cart-store";
import { useUser } from "@clerk/nextjs";
import { DollarSign } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckout from "@/components/check-out/stripe-checkout";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const CheckOutPage = () => {
  usePreventHydration();
  const { user } = useUser();
  const router = useRouter();
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const { products } = useShoppingCartStore();
  const { address, driverNRC, trackCapacity, trackNumber, dateToPickUp } =
    useCheckoutStore();

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
    <div className="flex items- justify-center w-full mt-10 md:px-10 lg:px-9 xl:px-20">
      <div className="bg-neutral-200 dark:bg-neutral-700  p-4 px-6 w-[90%] md:w-[88%] mx-auto">
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
              <h3 className="text-lg md:text-xl font-semibold">Location:</h3>
              <h3 className="text-lg md:text-xl font-semibold">
                {address.userLocation ?? ""}
              </h3>
            </div>
            <div className="w-full flex items-center gap-x-4">
              <h3 className="text-lg md:text-xl font-semibold">
                Delivery Price:
              </h3>
              <h3 className="text-lg md:text-xl font-semibold">
                {`${
                  parseInt(address.distance, 10)
                    ? `${parseInt(address.distance, 10) * 1.5}$`
                    : 0
                }` ?? "-"}
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

          <Elements stripe={stripePromise}>
            <StripeCheckout
              distance={address.distance}
              handleCheckout={handleCheckout}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
