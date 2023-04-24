import Navbar from "@/components/ui/Navbar";
import React from "react";

const MainLayout = ({ children }: any) => {
  return (
    <div className="mt-[72px]">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
