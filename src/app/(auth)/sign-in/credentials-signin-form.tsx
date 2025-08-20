"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { signInWithCredentials } from "@/lib/actions/user.actions";
import { useSearchParams } from "next/navigation";

const CredentialsSignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button
        className={"w-full bg-ruby hover:bg-hoverRuby"}
        variant={"default"}
        disabled={pending}
      >
        {pending ? "Signing in..." : "Sign In"}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      {data && !data.success && (
        <div
          className={
            "text-destructive text-center bg-gray-400 my-1.5 mx-24 rounded-full"
          }
        >
          {data.message}
        </div>
      )}
      <div className="space-y-6">
        <div>
          <Label htmlFor={"email"}>Email</Label>
          <Input
            id={"email"}
            name={"email"}
            type={"email"}
            autoComplete={"email"}
            required={true}
            className={
              "focus-visible:ring-hoverRuby focus-visible:border-none mt-1.5"
            }
          />
        </div>
        <div>
          <Label htmlFor={"password"}>Password</Label>
          <Input
            id={"password"}
            name={"password"}
            type={"password"}
            autoComplete={"password"}
            required={true}
            className={
              "focus-visible:ring-hoverRuby focus-visible:border-none mt-1.5"
            }
          />
        </div>
        <div>
          {/*<Button*/}
          {/*  className={"w-full bg-ruby hover:bg-hoverRuby"}*/}
          {/*  variant={"default"}*/}
          {/*>*/}
          {/*  Sing in*/}
          {/*</Button>*/}
          <SignInButton />
        </div>
        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href={"/sign-up"}
            target={"_self"}
            className={"link hover:text-ruby hover:underline"}
          >
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
