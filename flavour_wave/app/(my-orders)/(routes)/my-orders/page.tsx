"use client";

import OrderListItem from "@/components/my-orders/order-list-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import useShoppingCartStore from "@/hook/use-shopping-cart-store";
import { getOrderForAuthUser } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export type PreOrderHistoryType = {
  cancel_reason: null;
  capacity: number;
  created_at: Date;
  customer_id: string;
  date: Date;
  delivered_quantity: number;
  driver_nrc: string;
  id: number;
  is_urgent: boolean;
  location: string;
  order_id: string;
  order_quantity: number;
  preorder_date: string;
  status: string;
  truck_number: string;
  updated_at: Date;
};

const MyOrderPage = () => {
  const { customer_id } = useShoppingCartStore();
  // fetch from api-endpoint for all products

  const { data: preOrders, status } = useQuery({
    queryKey: ["preOrders"],
    queryFn: async () => {
      const preOrder = await getOrderForAuthUser(customer_id);

      return preOrder.orders.data.map((p: PreOrderHistoryType) => ({
        cancel_reason: p.cancel_reason,
        capacity: p.capacity,
        created_at: p.created_at,
        customer_id: p.customer_id,
        date: p.date,
        delivered_quantity: p.delivered_quantity,
        driver_nrc: p.driver_nrc,
        id: p.id,
        is_urgent: p.is_urgent,
        location: p.location,
        order_id: p.order_id,
        order_quantity: p.order_quantity,
        preorder_date: p.preorder_date,
        status: p.status,
        truck_number: p.truck_number,
        updated_at: p.updated_at,
      })) as PreOrderHistoryType[];
    },
    refetchInterval: 1000,
  });

  return (
    <div className="w-full">
      <h1 className="text-xl md:text-2xl text-center mt-10 mb-5 font-bold">
        View all your Orders transitions
      </h1>

      {!preOrders?.length && (
        <h3 className="text-xl md:text-2xl text-center mt-10 mb-5 font-bold">
          There is no pre-order yet!
        </h3>
      )}
      <ScrollArea className="h-[600px] flex w-[90%] md:w-[75%] lg:w-[50%] xl:w-[45%] mx-auto">
        {preOrders?.map((order, index) => (
          <OrderListItem key={index} order={order} status={status} />
        ))}
      </ScrollArea>
    </div>
  );
};

export default MyOrderPage;
