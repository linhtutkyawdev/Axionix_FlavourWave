import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign-in FlavorWave",
  description: "Sign-in page for user",
};

const SignInLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default SignInLayout;
