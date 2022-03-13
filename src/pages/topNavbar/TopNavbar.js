import React from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const TopNavbar = () => {
  return (
    <div className="fixed z-50 w-full dark:bg-gray-500 bg-white">
      <DesktopNav></DesktopNav>
      <MobileNav></MobileNav>
    </div>
  );
};

export default TopNavbar;
