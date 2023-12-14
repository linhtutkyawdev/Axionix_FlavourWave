"use client";

import useShoppingCartStore from "@/hook/use-shopping-cart-store";
import { useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import { Button } from "../ui/button";

interface StripeCheckoutProps {
  distance: string;
  handleCheckout: () => void;
}

export default function StripeCheckout({
  distance,
  handleCheckout,
}: StripeCheckoutProps) {
  const stripe = useStripe();
  const { products } = useShoppingCartStore();
  console.log(products);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!stripe) return;

      const { data } = await axios.post("/api/checkout_sessions", {
        products,
      });

      const sessionId = data.id;

      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error(error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Button
        type="submit"
        disabled={distance === "" ? true : false}
        onClick={handleCheckout}
        size={"lg"}
        className="text-base md:text-lg my-4"
      >
        Confirm pre-order
      </Button>
    </form>
  );
}
