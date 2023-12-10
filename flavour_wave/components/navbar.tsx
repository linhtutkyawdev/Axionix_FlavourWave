"use client";
import { Flower, LogIn, ShoppingCartIcon, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import ActionTooltip from "./action-tooltip";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useCurrentUser } from "@/hook/use-current-user";
import { Button } from "./ui/button";

const Navbar = () => {
  const currentUser = useCurrentUser();

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
          {currentUser ? (
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-[40px] h-[40px]",
                },
              }}
            />
          ) : (
            <SignInButton>
              <Button className="bg-black text-white">
                <LogIn className="w-5 h-5 mr-1" /> Sign in
              </Button>
            </SignInButton>
          )}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
