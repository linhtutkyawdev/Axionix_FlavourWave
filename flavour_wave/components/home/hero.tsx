import { CupSoda } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="mt-8 flex flex-col md:flex-row gap-y-6 md:gap-y-0 items-start justify-between w-[100%] px-8 sm:px-16 md:px-24 lg:px-40 xl:px-48">
      <div className="w-full md:w-[40%] flex items-center justify-center pb-10 md:pb-0">
        <Image
          src={"/tea-mug.png"}
          alt="banner image"
          width={400}
          height={400}
          className="w-[250px] h-[220px] md:w-[370px] md:h-[280px]"
        />
      </div>
      <div className="w-full md:w-[55%] flex justify-start items-start flex-col">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold mb-2">
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet.
        </h2>
        <p className=" text-lg md:text-xl mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          officiis iure ad neque est nesciunt et aliquam animi accusamus facilis
          distinctio nostrum delectus veniam aspernatur minima, labore provident
          dolore excepturi!
        </p>
        <Button
          variant={"primary"}
          size={"lg"}
          className="transition-all duration-300 text-lg md:text-xl rounded-3xl hover:rounded-xl active:scale-95"
        >
          <CupSoda className="mr-1" /> View our products
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
