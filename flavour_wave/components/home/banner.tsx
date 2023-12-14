"use client";
import Image from "next/image";
import Navbar from "../navbar/navbar";
import { Button } from "../ui/button";
import { CupSoda, Star, StarHalf } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import TextAnimation from "../animation/text-animation";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  return (
    <>
      <div className="bg-yellow-400 dark:bg-neutral-800 relative w-full h-auto  md:h-[550px]">
        <div className=" pt-20 flex flex-col md:flex-row gap-y-6 md:gap-y-0 items-start justify-between w-[100%] px-8 sm:px-16 md:px-24 lg:px-40 xl:px-48">
          <div className="w-full md:w-[55%] flex justify-start items-start flex-col">
            <div className="sm:text-4xl lg:text-4xl xl:text-5xl font-semibold mb-4">
              <TextAnimation
                content="Savor Exquisite Flavors! Indulge in Culinary Delights and Refreshing Beverages that"
                labels={[
                  "feast for the Senses Awaits",
                  "taste the Good Life!",
                  "enjoy and delicious taste",
                  "best experiences",
                  "hack your life!",
                ]}
                className="sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4"
              />
            </div>
            <Button
              onClick={() => router.push("/products")}
              variant={"primary"}
              size={"lg"}
              className="transition-all duration-300 text-lg md:text-xl rounded-3xl hover:rounded-xl active:scale-95"
            >
              <CupSoda className="mr-1" /> View our products
            </Button>
            <div className="mt-3">
              <h2>Reviews</h2>
              <div className="my-2 flex ">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/134714087?v=4"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex">
                <Star className="fill-yellow-500 text-yellow-500" />
                <Star className="fill-yellow-500 text-yellow-500" />
                <Star className="fill-yellow-500 text-yellow-500" />
                <Star className="fill-yellow-500 text-yellow-500" />
                <StarHalf className="fill-yellow-500 text-yellow-500" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40%] flex items-center justify-center pb-10 md:pb-0">
            <Image
              src={"/lychee.jpg"}
              alt="banner image"
              width={400}
              height={400}
              className="w-[250px] h-[220px] md:w-[370px] md:h-[280px] rounded-xl shadow-md shadow-neutral-700"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
