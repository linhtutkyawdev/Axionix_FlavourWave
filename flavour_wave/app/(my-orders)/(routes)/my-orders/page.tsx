import OrderListItem from "@/components/my-orders/order-list-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Check, Clock } from "lucide-react";
import React from "react";

export type OrderHistoryType = {
  status: string;
  order_data: Date;
  delivery_data: Date;
  totalPrice: string;
  totalQuantity: number;
};

const orderHistory: OrderHistoryType[] = [
  {
    status: "Pending",
    order_data: new Date(),
    delivery_data: new Date(),
    totalPrice: "4555$",
    totalQuantity: 100,
  },
  {
    status: "Success",
    order_data: new Date(),
    delivery_data: new Date(),
    totalPrice: "4555$",
    totalQuantity: 100,
  },
  {
    status: "Success",
    order_data: new Date(),
    delivery_data: new Date(),
    totalPrice: "4555$",
    totalQuantity: 100,
  },
  {
    status: "Pending",
    order_data: new Date(),
    delivery_data: new Date(),
    totalPrice: "4555$",
    totalQuantity: 100,
  },
  {
    status: "Success",
    order_data: new Date(),
    delivery_data: new Date(),
    totalPrice: "4555$",
    totalQuantity: 100,
  },
];

const MyOrderPage = () => {
  return (
    <div className="w-full">
      <h1 className="text-xl md:text-2xl text-center mt-10 mb-5 font-bold">
        View all your Orders transitions
      </h1>
      <ScrollArea className="h-[600px] flex w-[90%] md:w-[75%] lg:w-[50%] xl:w-[45%] mx-auto">
        {orderHistory.map((order, index) => (
          <OrderListItem key={index} order={order} />
        ))}
      </ScrollArea>
    </div>
  );
};

export default MyOrderPage;
