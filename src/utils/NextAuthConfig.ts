import { Awaitable, RequestInternal, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const NextAuthConfig = {
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
};
