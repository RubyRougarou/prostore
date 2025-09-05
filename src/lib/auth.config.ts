import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export const authConfig = {
  // pages: {
  //   signIn: "/auth/sign-in",
  //   error: "/auth/sign-in",
  //   signOut: "/",
  // },
  // session: {
  //   strategy: "jwt" as const,
  //   maxAge: 30 * 24 * 60 * 60, // 30 days
  // },
  // secret: process.env.AUTH_SECRET,
  // adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  providers: [],
  callbacks: {
    authorized({ request, auth }: any) {
      // Check for session cookie
      if (!request.cookies.get("sessionCartId")) {
        // Generate new sessionCartId cookie
        const sessionCartId = crypto.randomUUID();

        // Clone the request headers
        const newRequestHeaders = new Headers(request.headers);

        // Create new response and new headers
        const response = NextResponse.next({
          headers: newRequestHeaders,
        });

        // Set newly generated sessionCartId in the response cookies
        response.cookies.set("sessionCartId", sessionCartId);
        return response;
      } else {
        return true;
      }

      // ****************************************************** //
      // // Array of regex patterns of paths we want to protect
      // const protectedPaths = [
      //   /\/shipping-address/,
      //   /\/payment-method/,
      //   /\/place-order/,
      //   /\/profile/,
      //   /\/user\/(.*)/,
      //   /\/order\/(.*)/,
      //   /\/admin/,
      // ];
      //
      // // Get pathname from the req URL object
      // const { pathname } = request.nextUrl;
      // // Check if user is not authenticated and accessing a protected path
      // if (!auth && protectedPaths.some((p) => p.test(pathname))) return false;
      //
      // // Check for session cart cookie
      // if (!request.cookies.get("sessionCartId")) {
      //   // Generate new session cart id cookie
      //   const sessionCartId = crypto.randomUUID();
      //
      //   // Create new response and add the new headers
      //   const response = NextResponse.next({
      //     request: {
      //       headers: new Headers(request.headers),
      //     },
      //   });
      //
      //   // Set newly generated sessionCartId in the response cookies
      //   response.cookies.set("sessionCartId", sessionCartId);
      //
      //   return response;
      // }
      //
      // return true;
    },
  },
} satisfies NextAuthConfig;
