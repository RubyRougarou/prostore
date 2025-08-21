import { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { middleware as auth } from "@/middleware";
import { APP_NAME } from "@/lib/constants";
import SignUpForm from "@/app/(auth)/sign-up/sign-up-form";

export const metadata: Metadata = {
  title: "Sign up",
};

const SignUpPage = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }

  return (
    <div className={"w-full max-w-md mx-auto"}>
      <Card>
        <CardHeader className={"space-y-4"}>
          <Link href={"/"} className={"flex-center"}>
            <Image
              src={"/images/logo.svg"}
              alt={APP_NAME}
              width={170}
              height={170}
              priority={true}
            />
          </Link>
          <CardTitle className={"text-center font-bold text-2xl"}>
            Create Account
          </CardTitle>
          <CardDescription className={"text-center text-md"}>
            Create an account by filling the form below
          </CardDescription>
        </CardHeader>
        <CardContent className={"space-y-4"}>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
