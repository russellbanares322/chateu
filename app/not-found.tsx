import Image from "next/image";
import React from "react";
import notFound from "@/components/images/404.svg";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center flex-wrap-reverse justify-center gap-1 md:gap-40 md:min-h-screen w-full">
      <div className="space-y-5">
        <p className="text-7xl font-semibold">Oops!</p>
        <p className="md:max-w-[250px] text-xl text-gray-500">
          We couldn't find the page you're looking for.
        </p>
        <Button>
          <ArrowLeftIcon /> Go Home
        </Button>
      </div>
      <Image
        className="h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
        alt="Page not found"
        src={notFound}
      />
    </div>
  );
}
