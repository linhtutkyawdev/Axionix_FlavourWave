"use client";

import { Flower, LogIn } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "../mode-toggle";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { useCurrentUser } from "@/hook/use-current-user";
import { Button } from "../ui/button";
import MobileToggle from "./mobile-toggle";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import ShoppingCart from "../products/shopping-cart";
import { Skeleton } from "../ui/skeleton";

interface NavbarProps {
  className?: string;
  linkClassName?: string;
  linkHoverClassName?: string;
}

const Navbar = ({
  className,
  linkClassName,
  linkHoverClassName,
}: NavbarProps) => {
  const { user, isLoaded } = useUser();
  const currentUser = useCurrentUser();
  const path = usePathname();

  return (
    <header
      className={cn(
        "bg-yellow-500 opacity-[0.98] py-2.5 px-8 sm:px-16 md:px-24 sticky top-0 z-20",
        className
      )}
    >
      <nav className="flex justify-between items-center">
        <Link href={"/"} className="group flex items-center gap-x-1">
          <Flower className="group-hover:animate-spin" /> Flavor
          <span>Wave</span>
        </Link>
        <div className="flex items-center gap-x-2">
          <div className="hidden items-center gap-x-2  md:flex">
            <Link
              href={"/"}
              className={cn(
                "transition-all px-2 py-1 rounded-xl hover:rounded-lg",
                linkHoverClassName,
                path === "/" && linkClassName
              )}
            >
              Home
            </Link>
            <Link
              href={"/products"}
              className={cn(
                "transition-all px-2 py-1 rounded-xl hover:rounded-lg",
                linkHoverClassName,
                path === "/products" && linkClassName
              )}
            >
              Products
            </Link>
            <Link
              href={"/my-orders"}
              className={cn(
                "transition-all px-2 py-1 rounded-xl hover:rounded-lg",
                linkHoverClassName,
                path === "/my-orders" && linkClassName
              )}
            >
              My orders
            </Link>
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
          <ShoppingCart />

          <ModeToggle />
          <MobileToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
