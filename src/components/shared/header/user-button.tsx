import { signOutUser } from "@/lib/actions/user.actions";
import { middleware as auth } from "@/middleware";
import Link from "next/link";
import { UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return <div></div>;
};

export default UserButton;
