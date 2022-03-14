import React from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const TopNavbar = () => {
  return (
    <div className="fixed z-50 w-full bg-gray-50 dark:bg-gray-700">
      <DesktopNav></DesktopNav>
      <MobileNav></MobileNav>
    </div>
  );
};

export default TopNavbar;
