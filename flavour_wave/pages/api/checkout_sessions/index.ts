// Partial of ./pages/api/checkout_sessions/index.ts

import { ShoppingCartItem } from "@/hook/use-shopping-cart-store";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16", // Set the Stripe API version
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { products } = req.body; // Assuming amount is provided in the request body
    const CURRENCY = "usd"; // Set your currency here
    const checkoutProducts = products as ShoppingCartItem[];

    const lineItems = checkoutProducts.map((p) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: p.title,
            description: `${p.title}'s description.`,
            images: [p.image],
          },
          unit_amount: formatAmountForStripe(p.price),
        },
        quantity: p.quantity,
      };
    });

    try {
      const params: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ["card"],
        line_items: lineItems,
        success_url: `${req.headers.origin}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/check-out?session_id={CHECKOUT_SESSION_ID}`,
        mode: "payment", // Setting the mode to 'payment' for client-side payment handling
      };

      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params);

      res.status(200).json({ id: checkoutSession.id });
    } catch (error: any) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

// Function to format amount for Stripe (multiplying by 100 for cents)
function formatAmountForStripe(amount: number): number {
  return Math.round(amount * 100);
}
