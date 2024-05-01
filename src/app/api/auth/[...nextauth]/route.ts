import { NextAuthConfig } from "@/utils/NextAuthConfig";
import NextAuth from "next-auth/next";

const handler = NextAuth(NextAuthConfig);

export const GET = handler;
export const POST = handler;
