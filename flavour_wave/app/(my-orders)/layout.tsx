import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Flower } from "lucide-react";

export const metadata: Metadata = {
  title: "My orders",
  description: "Customer orders page to check their pre-order transitions",
  keywords: [
    "FlavorWave",
    "Products",
    "myanmar",
    "food",
    "drink",
    "fruits",
    "Beverages",
  ],
};

const MyOrdersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar
        linkClassName="bg-white dark:bg-yellow-500 rounded-lg"
        linkHoverClassName="hover:bg-white/80 dark:hover:bg-yellow-500/50"
      />
      {children}
      <div className=" flex items-center justify-center my-5 mb-10">
        <h3 className="group text-base md:text-xl lg:text-2xl font-bold flex items-center gap-2 ">
          <Flower className="group-hover:animate-spin" /> Very Thank You For
          Shopping With Us <Flower className="group-hover:animate-spin" />
        </h3>
      </div>
      <Footer />
    </main>
  );
};

export default MyOrdersLayout;
