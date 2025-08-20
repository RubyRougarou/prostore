// export { auth as middleware } from "@/lib/auth";

import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import { NextRequest } from "next/server";

export const { auth: middleware } = NextAuth(authConfig);

// const { auth } = NextAuth(authConfig);
// export default auth(async function middleware(req: NextRequest) {
//   // console.log("cookies: ---------->", req.cookies);
//   const session = await auth();
//   console.log("--------->", session);
// });
