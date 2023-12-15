"use client";
import { Button } from "@/components/ui/button";
import useShoppingCartStore from "@/hook/use-shopping-cart-store";
import { Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const thankImageArray = [
  "/thank-you.png",
  "/thank-you-1.png",
  "/thank-you-2.png",
];

const CheckoutSuccessPage = () => {
  const router = useRouter();
  const { onRest } = useShoppingCartStore();
  const [redirectTimer, setRedirectTimer] = useState(3); // Initial countdown value

  function handleClick() {
    onRest();
    router.push("/");
  }

  useEffect(() => {
    const countdown = setTimeout(() => {
      if (redirectTimer > 0) {
        setRedirectTimer(redirectTimer - 1); // Decrement the timer
      } else {
        handleClick(); // Call handleClick function after countdown
      }
    }, 1000); // Update every second

    return () => clearTimeout(countdown); // Clean up the timer on component unmount
  }, [redirectTimer]); // Re-run effect when redirectTimer changes

  return (
    <div className="my-9">
      <div className=" flex items-center justify-center flex-col">
        <h1 className="text-emerald-500 flex items-center gap-x-1 text-lg md:text-xl lg:text-2xl font-bold mb-4">
          <Check /> Successfully take your pre-order
        </h1>
        <Button variant={"secondary"} onClick={handleClick}>
          Back to home page (or) redirect in {redirectTimer} seconds
        </Button>

        <div className="relative w-[380px] h-[300px]">
          <Image
            src={
              thankImageArray[
                Math.floor(Math.random() * thankImageArray.length)
              ]
            }
            alt="thank you image"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
