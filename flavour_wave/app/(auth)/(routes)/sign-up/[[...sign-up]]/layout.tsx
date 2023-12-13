import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign-up FlavorWave",
  description: "Sign-up page for user",
};

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default SignUpLayout;
