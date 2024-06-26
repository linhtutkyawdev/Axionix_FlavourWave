"use client";

import Banner from "@/components/home/banner";
import HeroSection from "@/components/home/hero";
import ScrollVelocity from "@/components/home/scroll-velocity";
import { IProduct } from "@/components/products/product-card";
import ProductsGrid from "@/components/products/product-grid";
import { IUser, initialSetup } from "@/lib/initial-setup";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { APIProduct } from "../(products)/(routes)/products/page";
import { getProducts } from "@/services/product.service";
import { useEffect } from "react";
import useShoppingCartStore from "@/hook/use-shopping-cart-store";
import axiosInstance from "@/services/axiosInstance";
const PRODUCT_IMAGE_API_URL = "https://flavourwave.up.railway.app";

export default function Home() {
  const { user } = useUser();

  const { onAddCustomerId, customer_id } = useShoppingCartStore();

  useEffect(() => {
    (async () => {
      if (user) {
        await initialSetup({
          customer_id: user?.id as string,
          email: user?.emailAddresses[0].emailAddress as string,
          imageUrl: user?.imageUrl as string,
          name: user?.lastName
            ? `${user.firstName} ${user.lastName}`
            : (user?.firstName as string),
          password: "password_FlavourWave",
        });
        onAddCustomerId(user.id);
      }
    })();
  }, [user]);

  // useEffect(() => {
  //   (async () => {
  //     if (user) {
  //       console.log(
  //         await axiosInstance.post("customer/create", {
  //           customer_id: "user_2ZXjSFs5bpLmnp9HDqr2bLSdc7z",
  //           email: "linhtutkyaw.dev@gmail.com",
  //           image_url:
  //             "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yWlhqU0Y3bEZ1M0RmMjVCUUZTZ1hzdGx3NVoifQ",
  //           name: "Lin Htut Kyaw",
  //           password: "password_FlavourWave",
  //         })
  //       );
  //     }
  //   })();
  // }, [user]);

  // fetch from api-endpoint for all products
  const { data: products, status } = useQuery({
    queryKey: ["product", "all"],
    queryFn: async () => {
      const products: APIProduct[] = await getProducts();

      return products.map((p) => ({
        id: p.id,
        title: p.name,
        price: p.unit_price * p.quantity_per_box,
        description: p.description,
        image: PRODUCT_IMAGE_API_URL + "/" + p.image_url,
      })) as IProduct[];
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
          Delicious <span className="text-emerald-600">taste</span>
        </h2>
        <HeroSection />
      </div>

      {/* popular products */}
      <div className="my-24">
        <h2 className="text-center text-3xl md:text-4xl mb-8 font-bold ">
          Our Popular <span className="text-emerald-600">Products</span>
        </h2>
        <ProductsGrid
          products={products?.slice(0, 4)}
          status={status}
          showLoading={false}
          skeletonNumber={4}
        />
      </div>
    </main>
  );
}
