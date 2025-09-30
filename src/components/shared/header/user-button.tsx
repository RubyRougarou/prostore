import { signOutUser } from "@/lib/actions/user.actions";
// import { middleware as auth } from "@/middleware";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserButton = async () => {
  const session = await auth();

  if (!session) {
    return (
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
    );
  }

  const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? "😊";

  return (
    <div className={"flex gap-2 items-center"}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant={"ghost"}
              className={
                "relative w-8 h-8 rounded-full ml-2 flex items-center justify-center bg-ruby text-white hover:text-white hover:bg-hoverRuby"
              }
            >
              {firstInitial}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"w-56"} align={"end"} forceMount={true}>
          <DropdownMenuLabel className={"font-normal"}>
            <div className="flex flex-col space-y-1">
              <div className="text-sm font-medium leading-none">
                {session.user?.name}
              </div>
              <div className="text-sm text-muted-foreground leading-none">
                {session.user?.email}
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className={"p-0 mb-1"}>
            <form action={signOutUser} className={"w-full"}>
              <Button
                className={
                  "w-full py-4 px-2 h-4 justify-start hover:bg-hoverRuby hover:text-white"
                }
                variant={"ghost"}
              >
                Sign out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
