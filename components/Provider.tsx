"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

const Provider = ({ session, children }: any) => {
  return (
    <div>
      <SessionProvider session={session}>{children}</SessionProvider>
    </div>
  );
};

export default Provider;
