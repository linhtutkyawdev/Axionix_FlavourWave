import { OrderHistoryType } from "@/app/(my-orders)/(routes)/my-orders/page";
import { cn } from "@/lib/utils";
import { Check, Clock } from "lucide-react";
import React from "react";

interface OrderListItemProps {
  order: OrderHistoryType;
}

const OrderListItem = ({ order }: OrderListItemProps) => {
  return (
    <div className={cn("my-3 border rounded-md px-3 py-2 pl-7 relative")}>
      <div
        className={cn(
          " absolute left-0 top-0 rounded-tl-md rounded-bl-md  w-1.5 h-full",
          order.status === "Success" && "bg-emerald-300",
          order.status === "Pending" && "bg-yellow-300"
        )}
      ></div>
      <div>
        <h2
          className={cn(
            "flex items-center gap-x-1 text-lg md:text-xl font-bold",
            order.status === "Success" && "text-emerald-400",
            order.status === "Pending" && "text-yellow-500"
          )}
        >
          {order.status === "Pending" && <Clock className="w-5 h-5" />}{" "}
          {order.status === "Success" && <Check className="w-5 h-5" />}{" "}
          {order.status}
        </h2>
      </div>
      <div className="flex justify-between items-center my-3">
        <div>
          <h2 className="text-muted-foreground font-bold">
            Total price: {order.totalPrice}
          </h2>
          <h2 className="text-muted-foreground font-bold">
            Total Quantity: {order.totalQuantity}
          </h2>
        </div>
        <div>
          <h2 className="text-muted-foreground font-bold">
            Pre-order Date:{" "}
            {order.order_data.toLocaleDateString("en-US", {
              day: "2-digit",
              month: "2-digit",
              year: "2-digit",
            })}
          </h2>
          <h2 className="text-muted-foreground font-bold">
            {order.status === "Success" ? "Delivered Date:" : " Delivery Date:"}{" "}
            {order.delivery_data.toLocaleDateString("en-US", {
              day: "2-digit",
              month: "2-digit",
              year: "2-digit",
            })}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OrderListItem;
