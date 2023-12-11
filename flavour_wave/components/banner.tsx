"use client";
import Image from "next/image";
import Navbar from "./navbar";
import { Button } from "./ui/button";
import { CupSoda, Star, StarHalf } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Banner = () => {
  return (
    <div className="bg-yellow-400/50 relative w-full h-auto  md:h-[550px]">
      <Navbar
        className="bg-transparent z-10"
        linkClassName="bg-yellow-400 rounded-lg"
        linkHoverClassName="hover:bg-yellow-400/50"
      />

      <div className="mt-8 flex flex-col md:flex-row gap-y-6 md:gap-y-0 items-start justify-between w-[100%] px-8 sm:px-16 md:px-24 lg:px-40 xl:px-48">
        <div className="w-full md:w-[55%] flex justify-start items-start flex-col">
          <h1 className="sm:text-4xl lg:text-4xl xl:text-5xl font-semibold mb-4">
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet.
          </h1>
          <Button variant={"primary"}>
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
                  src="https://github.com/shadcn.png"
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
            src={"/tea-mug.png"}
            alt="banner image"
            width={400}
            height={400}
            className="w-[250px] h-[220px] md:w-[370px] md:h-[280px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
