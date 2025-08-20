import Link from "next/link";
import ModeToggle from "@/components/shared/header/mode-toggle";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserButton from "@/components/shared/header/user-button";

const Menu = () => {
  return (
    <div className={"flex justify-end gap-3"}>
      <nav className="hidden md:flex w-full max-w-xs gap-2">
        <ModeToggle />

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
        {/*
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
        */}
        <UserButton />
      </nav>
      <nav className={"md:hidden"}>
        <Sheet>
          <SheetTrigger className={"align-middle"}>
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className={"flex flex-col items-start p-4 w-1/2"}>
            <SheetTitle className={"text-2xl text-ruby ml-1"}>Menu</SheetTitle>
            <ModeToggle />
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

            {/*
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
            */}
            <UserButton />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
