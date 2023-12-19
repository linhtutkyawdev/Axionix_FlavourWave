"use client";

import { format } from "date-fns";

import { Button } from "@/components/ui/button";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import useCheckoutStore from "@/hook/use-checkout-store";

const CheckOutForm = () => {
  const [date, setDate] = useState<Date>();
  const { onUpdateState } = useCheckoutStore();
  return (
    <form className="space-y-8 mt-2 ">
      <div>
        <label htmlFor="driverNRC">Drive NRC.</label>
        <input
          id="driverNRC"
          onChange={(e) => onUpdateState({ driverNRC: e.target.value })}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          )}
          placeholder="e.g 12/KATANA(N)987540"
        />
      </div>
      <div>
        <label htmlFor="truckNumber">truck No.</label>
        <input
          id="truckNumber"
          onChange={(e) => onUpdateState({ truckNumber: e.target.value })}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          )}
          placeholder="e.g 12/MM/241"
        />
      </div>
      <div>
        <label htmlFor="capacity">Capacity</label>
        <input
          id="capacity"
          onChange={(e) => onUpdateState({ truckCapacity: e.target.value })}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          )}
          placeholder="e.g 100"
        />
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn("w-[240px] pl-3 text-left font-normal")}
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d);
              onUpdateState({ dateToPickUp: d });
            }}
            disabled={(date) =>
              date < new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </form>
  );
};

export default CheckOutForm;
