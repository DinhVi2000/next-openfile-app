import Navbar from "@/components/ui/Navbar";
import React from "react";

const MainLayout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
