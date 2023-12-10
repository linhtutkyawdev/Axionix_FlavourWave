import React from "react";
import type { Metadata } from "next";

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
  return <main>{children}</main>;
};

export default ProductsLayout;
