import { Flower } from "lucide-react";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-2xl mb-4 font-semibold flex items-center">
        Welcome from {<Flower className="text-yellow-500" />}{" "}
        <span className="text-yellow-500">Flavor</span>
        <span className="text-emerald-500">Wave</span>
      </h1>
      {children}
    </div>
  );
};

export default AuthLayout;
