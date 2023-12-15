import { PreOrderHistoryType } from "@/app/(my-orders)/(routes)/my-orders/page";
import { cn } from "@/lib/utils";
import { Check, Clock } from "lucide-react";
import React from "react";
import { Skeleton } from "../ui/skeleton";

interface OrderListItemProps {
  order: PreOrderHistoryType;
  status: "error" | "success" | "pending";
}

const OrderListItem = ({ order, status }: OrderListItemProps) => {
  return (
    <div className={cn("my-3 border rounded-md px-3 py-2 pl-7 relative")}>
      {status === "success" && (
        <div
          className={cn(
            " absolute left-0 top-0 rounded-tl-md rounded-bl-md  w-1.5 h-full",
            order.status === "success" && "bg-emerald-300",
            order.status === "pending" && "bg-yellow-300"
          )}
        ></div>
      )}
      <div className="flex justify-between items-center my-3">
        {status === "pending" ? (
          <Skeleton className="w-[50px] h-[10px]" />
        ) : (
          <h2
            className={cn(
              "flex items-center gap-x-1 text-lg md:text-xl font-bold",
              order.status === "success" && "text-emerald-400",
              order.status === "pending" && "text-yellow-500"
            )}
          >
            {order.status === "pending" && <Clock className="w-5 h-5" />}{" "}
            {order.status === "success" && <Check className="w-5 h-5" />}{" "}
            {order.status}
          </h2>
        )}
        {status === "pending" ? (
          <Skeleton className="w-[50px] h-[10px]" />
        ) : (
          <h2 className="text-muted-foreground font-bold">
            Order code: {order.order_id}
          </h2>
        )}
      </div>
      <div className="flex justify-between items-center my-3">
        {status === "pending" ? (
          <div>
            <Skeleton className="w-[50px] h-[10px]" />
          </div>
        ) : (
          <div>
            <h2 className="text-muted-foreground font-bold">
              Total Quantity: {order.order_quantity}
            </h2>
          </div>
        )}

        {status === "pending" ? (
          <div>
            <Skeleton className="w-[50px] h-[10px]" />
          </div>
        ) : (
          <div>
            <h2 className="text-muted-foreground font-bold">
              Pre-order Date: {order.preorder_date}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderListItem;
