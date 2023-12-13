import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Flower } from "lucide-react";

export const metadata: Metadata = {
  title: "Products-FlavorWave",
  description:
    "Products page that show and provide every products that available in FlavourWave",
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

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar
        linkClassName="bg-white rounded-lg"
        linkHoverClassName="hover:bg-white/80"
      />
      {children}
      <div className=" flex items-center justify-center my-5 mb-10">
        <h3 className="group text-2xl font-bold flex items-center gap-2 ">
          <Flower className="group-hover:animate-spin" /> Very Thank You For
          Shopping With Us <Flower className="group-hover:animate-spin" />
        </h3>
      </div>
      <Footer />
    </main>
  );
};

export default ProductsLayout;
