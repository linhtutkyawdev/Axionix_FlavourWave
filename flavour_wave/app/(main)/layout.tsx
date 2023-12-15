import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar
        className="z-10 bg-yellow-400 dark:bg-neutral-800   "
        linkClassName="bg-yellow-500  rounded-lg"
        linkHoverClassName="hover:bg-yellow-500/50"
      />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
