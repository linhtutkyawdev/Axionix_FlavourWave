"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { IProduct } from "./product-card";
import { Search } from "lucide-react";
import Image from "next/image";

interface SearchProductProps {
  products?: IProduct[];
}

export function SearchProduct({ products }: SearchProductProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button variant={"outline"} onClick={() => setOpen(true)}>
          <p className="text-sm text-muted-foreground flex items-center">
            <Search className="w-5 h-5 mr-1" /> Click to search products / Press{" "}
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>J
            </kbd>
          </p>
        </Button>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No products found.</CommandEmpty>
          {products?.map((product) => (
            <CommandItem key={product.id}>
              <div className="flex items-center gap-x-2">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="w-[60px] h-[60px] rounded-full"
                />
                {product.title}
              </div>
            </CommandItem>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
