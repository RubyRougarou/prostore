import { ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/shared/header/mode-toggle";

const Header = () => {
  return (
    <header className={"w-full border-b"}>
      <div className="wrapper flex-between">
        <div className="felx-start">
          <Link href={"/"} className={"flex-start"}>
            <Image
              src={"/images/logo.svg"}
              alt={`${APP_NAME}'s logo`}
              width={48}
              height={48}
              priority={true}
            />
            <span className={"hidden lg:block font-bold text-2xl ml-3"}>
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className={"space-x-2"}>
          <Button
            variant={"ghost"}
            className={
              "hover:bg-hoverRuby hover:text-white hover:cursor-pointer dark:hover:bg-hoverRuby"
            }
          >
            <Link href={"/cart"} className={"flex-center space-x-1"}>
              <ShoppingCart /> <span>Cart</span>
            </Link>
          </Button>

          <Button
            variant={"default"}
            className={
              "bg-ruby hover:bg-hoverRuby hover:text-black dark:hover:text-white hover:cursor-pointer"
            }
          >
            <Link href={"/sign-in"} className={"flex-center space-x-1"}>
              <UserIcon /> <span>Sign In</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
