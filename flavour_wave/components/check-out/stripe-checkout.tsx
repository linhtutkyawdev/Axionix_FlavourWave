"use client";

import useShoppingCartStore from "@/hook/use-shopping-cart-store";
import { useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface StripeCheckoutProps {
  distance: string;

  mutate: () => void;
  status: "error" | "idle" | "pending" | "success";
}

export default function StripeCheckout({
  distance,
  mutate,
  status,
}: StripeCheckoutProps) {
  const stripe = useStripe();
  const { products } = useShoppingCartStore();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // try {
    //   if (!stripe) return;
    //   const { data } = await axios.post("/api/checkout_sessions", {
    //     products,
    //   });

    //   const sessionId = data.id;

    //   const { error } = await stripe.redirectToCheckout({
    //     sessionId,
    //   });

    //   if (error) {
    //     console.error(error.message);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <form onSubmit={onSubmit}>
      <Button
        disabled={status === "pending" ? true : false}
        type="submit"
        onClick={() => mutate()}
        size={"lg"}
        className={cn(
          "text-base md:text-lg my-4",
          distance === "" ? "hidden" : "block"
        )}
      >
        {status === "pending" ? (
          <p className="flex items-center gap-1">
            Checking... <Loader2 className="animate-spin w-5 h-5" />
          </p>
        ) : (
          <p>Confirm pre-order</p>
        )}
      </Button>
    </form>
  );
}
