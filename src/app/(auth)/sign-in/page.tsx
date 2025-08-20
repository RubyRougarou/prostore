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
import CredentialsSignInForm from "@/app/(auth)/sign-in/credentials-signin-form";

export const metadata: Metadata = {
  title: "Sign in",
};

const SignInPage = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;

  const session = await auth();
  // console.log("session: ", session);

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
            Sign in
          </CardTitle>
          <CardDescription className={"text-center text-md"}>
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className={"space-y-4"}>
          <CredentialsSignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
