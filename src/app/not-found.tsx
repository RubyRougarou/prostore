"use client";

import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className={"flex flex-col items-center justify-center min-h-screen"}>
      <Image
        src={"/images/logo.svg"}
        alt={`${APP_NAME}'s logo`}
        width={98}
        height={98}
        priority={true}
      />
      {/* I added md: before w-1/3 myself, maybe it needs to be changed */}
      <div className={"p-6 md:w-1/3 rounded-lg shadow-md text-center"}>
        <h1 className={"text-3xl font-bold mb-4"}>Not Found! ☹️☹️</h1>
        <p className={"text-destructive"}>
          Could not find the requested page...
        </p>
        <Button
          variant={"outline"}
          className={
            "mt-4 ml-2 border-ruby hover:bg-hoverRuby hover:text-white hover:border-none "
          }
        >
          <Link href={"/"}>Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
