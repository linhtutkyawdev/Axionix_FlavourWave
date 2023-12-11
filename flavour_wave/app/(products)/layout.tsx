import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";

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
    </main>
  );
};

export default ProductsLayout;
