"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { Bug } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-full flex justify-center items-center flex-col  gap-4">
      <h2 className="text-3xl md:text-5xl">Something went wrong!</h2>
      <Bug className="w-[50px] h-[50px] text-red-500" />
      <Button size={"lg"} className="text-xl" onClick={() => reset()}>
        Try again
      </Button>
      <Link className="mt-4 underline" href={"/"}>
        Back To Home Page
      </Link>
    </div>
  );
}
