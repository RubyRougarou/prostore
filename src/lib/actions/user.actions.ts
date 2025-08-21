"use server";

import { isRedirectError } from "next/dist/client/components/redirect-error";

import { signIn, signOut } from "@/auth";
import { hashSync } from "bcrypt-ts-edge";
import { z } from "zod";

import { signInSchema, signUpSchema } from "@/lib/validators";
import { prisma } from "../../../db/prisma";
import { formatError } from "@/lib/utils";

// Sign in user with credentials
export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData,
) {
  try {
    const user = signInSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", user);

    return { success: true, message: ["Signed in successfully"] };
  } catch (e: any) {
    if (e instanceof z.ZodError) {
      const messages = e.issues.map((err) => {
        return { source: err.path[0], message: err.message };
      });
    }
    if (isRedirectError(e)) {
      throw e;
    }

    return { success: false, messages: formatError(e) };
  }
}

// Sign user out
export async function signOutUser() {
  await signOut();
}

// Sign up user
export async function signUpUser(prevState: unknown, formData: FormData) {
  let msg;
  try {
    const user = signUpSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    let plainPassword = user.password;

    user.password = hashSync(user.password, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    await signIn("credentials", {
      email: user.email,
      password: plainPassword,
    });

    plainPassword = "";

    return { success: true, message: ["User registered successfully"] };
  } catch (error: any) {
    // await formatError(error);
    if (error instanceof z.ZodError) {
      const messages = error.issues.map((e) => {
        return { source: e.path[0], message: e.message };
      });
      msg = messages;
    }
    if (isRedirectError(error)) {
      throw error;
    }

    return {
      success: false,
      messages: formatError(error),
    };
  }
}
