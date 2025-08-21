import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert prisma objects to Js objects
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// Format number with decimal places
export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
}

// Format errors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatError(error: any) {
  if (error.name === "ZodError") {
    // Handle Zod error
    // const fieldErrors = Object.keys(error.errors);
    const messages = error.issues.map((e: any) => {
      return { source: e.path[0], message: e.message };
    });
    return messages;
  } else if (
    // Handle prisma error
    error.name === "PrismaClientKnownRequestError" &&
    error.code === "P2002"
  ) {
    const field = error.meta.target ? error.meta.target[0] : "Field";
    return [`${field.charAt(0).toUpperCase() + field.slice(1)} already exists`];
  } else if (error.type === "CredentialsSignin") {
    return ["Invalid Email or password"];
  } else {
    // Handle other errors
    return typeof error.message === "string"
      ? [error.message]
      : [JSON.stringify(error.message)];
  }
}
