import { SearchX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full flex justify-center items-center flex-col ">
      <h2 className="text-3xl md:text-5xl">Page Not Found</h2>
      <SearchX className="w-[50px] h-[50px]" />
      <Link className="mt-4 underline" href="/">
        Return Home
      </Link>
    </div>
  );
}
