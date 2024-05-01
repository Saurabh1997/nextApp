"use-client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

function Appbar() {
  const sessionData = useSession();
  return (
    <div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        Sign In
      </button>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default Appbar;
