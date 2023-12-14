import { cn } from "@/lib/utils";
import { Facebook, Flower, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-yellow-400 dark:bg-neutral-800 py-10">
      <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4  w-full px-8 sm:px-16  md:px-20 gap-8 ">
        <div className="flex flex-col items-start">
          <Link
            href={"/"}
            className="group flex items-center gap-x-1 text-2xl md:text-3xl font-semibold"
          >
            <div className=" w-[80px] h-[80px] relative">
              <Image src={"/main_logo.png"} alt="logo" fill />
            </div>
            {/* <Flower className="group-hover:animate-spin" /> */}
            <p>
              <span className="dark:text-yellow-500">Flavor</span>
              <span className="text-emerald-500">Wave</span>
            </p>
          </Link>
          Savor Exquisite Flavors! Indulge in Culinary Delights and Refreshing
          Beverages.
          <div className="flex items-center gap-2 mt-3">
            <Facebook className="w-8 h-8 transition-all fill-blue-600 cursor-pointer" />
            <Twitter className="w-8 h-8 transition-all fill-sky-600 cursor-pointer" />
            <Instagram className="w-8 h-8 transition-all fill-rose-500 cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold">Pages</h3>
          <div className="flex flex-col items-start ">
            <Link
              href={"/"}
              className={cn("transition-all hover:text-emerald-500 text-lg")}
            >
              Home
            </Link>
            <Link
              href={"/products"}
              className={cn("transition-all hover:text-emerald-500 text-lg")}
            >
              Products
            </Link>
            <Link
              href={"/my-orders"}
              className={cn("transition-all hover:text-emerald-500 text-lg")}
            >
              My orders
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold">Company</h3>
          <div className="flex flex-col items-start ">
            <Link
              href={"/"}
              className={cn("transition-all hover:text-emerald-500 text-lg")}
            >
              Terms and Conditions
            </Link>
            <Link
              href={"/products"}
              className={cn("transition-all hover:text-emerald-500 text-lg")}
            >
              Privacy and Policy
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold">Get in Touch</h3>
          <ul className="flex flex-col items-start ">
            <li className="cursor-pointer text-lg">Phone: +979 769812537</li>
            <li className="cursor-pointer text-lg">
              Email: flavorwave@contact.info.com
            </li>
            <li className="cursor-pointer text-lg">Address: Yangon</li>
          </ul>
        </div>
      </div>
      <div className="mt-16">
        <p className="text-center text-xl md:text-2xl ">
          Copyright ©{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
          })}{" "}
          Foodhut.
        </p>
        <p className="text-center text-lg md:text-xl ">
          Created and published with 💙 by Axionix
        </p>
      </div>
    </footer>
  );
};

export default Footer;
