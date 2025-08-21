"use client";

import Link from "next/link";
import { useActionState } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { useFormStatus } from "react-dom";

import { signUpUser } from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const SignUpForm = () => {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    messages: [],
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [name] = data?.messages!?.filter(
    (message: any) => message.source === "name",
  );
  const [email] = data?.messages!?.filter(
    (message: any) => message.source === "email",
  );
  const [password] = data?.messages!?.filter(
    (message: any) => message.source === "password",
  );
  const [confirmPassword] = data?.messages!?.filter(
    (message: any) => message.source === "confirmPassword",
  );

  const SignUpButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button
        className={"w-full bg-ruby hover:bg-hoverRuby"}
        variant={"default"}
        disabled={pending}
      >
        {pending ? "Submitting..." : "Register"}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      {data && !data.success && (
        <div
          className={
            "text-lightRuby text-center bg-gray-300 my-1.5 mx-20 md:mx-16 rounded-full text-lg"
          }
        >
          {data.messages![0]}
        </div>
      )}
      <div className="space-y-6">
        <div>
          <Label htmlFor={"name"}>Name</Label>
          <Input
            id={"name"}
            name={"name"}
            type={"text"}
            required={true}
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "You must enter your name",
              )
            }
            className={
              "focus-visible:ring-hoverRuby focus-visible:border-none mt-1.5 hover:border-2"
            }
          />
          <p className={"text-ruby text-center"}>{name?.message}</p>
        </div>
        <div>
          <Label htmlFor={"email"}>Email</Label>
          <Input
            id={"email"}
            name={"email"}
            type={"email"}
            autoComplete={"email"}
            required={true}
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Enter a valid email address",
              )
            }
            className={
              "focus-visible:ring-hoverRuby focus-visible:border-none mt-1.5 hover:border-2"
            }
          />
          <p className={"text-ruby text-center"}>{email?.message}</p>
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
              "focus-visible:ring-hoverRuby focus-visible:border-none mt-1.5 hover:border-2"
            }
          />
          <p className={"text-ruby text-center"}>{password?.message}</p>
        </div>
        <div>
          <Label htmlFor={"confirmPassword"}>Confirm Password</Label>
          <Input
            id={"confirmPassword"}
            name={"confirmPassword"}
            type={"password"}
            required={true}
            className={
              "focus-visible:ring-hoverRuby focus-visible:border-none mt-1.5 hover:border-2"
            }
          />
          <p className={"text-ruby text-center"}>{confirmPassword?.message}</p>
        </div>
        <div>
          <SignUpButton />
        </div>
        <div className="text-sm text-center text-muted-foreground">
          already have an account?{" "}
          <Link
            href={"/sign-in"}
            target={"_self"}
            className={"link hover:text-ruby hover:underline"}
          >
            Sign in
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
