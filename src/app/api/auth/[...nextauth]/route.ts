import { RequestInternal, Awaitable, User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials", // this is used for displaying on sign in page.
      credentials: {
        username: { label: "Username", placeholder: "Username", type: "text" },
        passowrd: {
          label: "password",
          placeholder: "password",
          type: "password",
        },
      },
      authorize: function (
        credentials: Record<"username" | "passowrd", string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ): Awaitable<User | null> {
        return { id: "saurabh" };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export const GET = handler;
export const POST = handler;
