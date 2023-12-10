"use client";
import { Flower, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import ActionTooltip from "./action-tooltip";
import usePreventHydration from "@/hook/use-prevent-hydration";

const Navbar = () => {
  return (
    <header className="bg-yellow-400/60 py-2.5 px-8 sm:px-16 md:px-24">
      <nav className="flex justify-between items-center">
        <Link href={"/"} className="flex items-center gap-x-1">
          <Flower /> FlavorWave
        </Link>
        <div className="flex items-center gap-x-2">
          <ActionTooltip label="Shopping Cart">
            <ShoppingCartIcon className="w-10 h-10 p-2 bg-black text-white rounded-full" />
          </ActionTooltip>
          <div className="flex items-center gap-x-2">
            <Link href={"/products"}>Products</Link>
            <Link href={"/products"}>My orders</Link>
          </div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
