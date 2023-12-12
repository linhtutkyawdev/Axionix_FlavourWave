"use client";

import Banner from "@/components/home/banner";
import HeroSection from "@/components/home/hero";
import ScrollVelocity from "@/components/home/scroll-velocity";
import { IProduct } from "@/components/products/product-card";
import ProductsGrid from "@/components/products/product-grid";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data: products, status } = useQuery({
    queryKey: ["products", "limit"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=4");
      if (!res.ok) {
        return Promise.reject(new Error("Could not fetch products"));
      }
      return res.json() as Promise<IProduct[]>;
    },
  });

  return (
    <main>
      {/* main banner that including header */}
      <Banner />

      {/* scroll velocity section to display our products */}
      <div className="my-24">
        <h2 className="text-center text-3xl md:text-4xl mb-8 font-bold ">
          Our delicious <span className="text-emerald-600">Products</span>
        </h2>
        <ScrollVelocity />
      </div>

      {/* hero section */}
      <div className="my-24">
        <h2 className="text-center text-3xl md:text-4xl mb-8 font-bold ">
          Our delicious <span className="text-emerald-600">Products</span>
        </h2>
        <HeroSection />
      </div>

      {/* popular products */}
      <div className="my-24">
        <h2 className="text-center text-3xl md:text-4xl mb-8 font-bold ">
          Our Popular <span className="text-emerald-600">Products</span>
        </h2>
        <ProductsGrid products={products} status={status} />
      </div>
    </main>
  );
}
