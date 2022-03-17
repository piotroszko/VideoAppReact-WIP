import React, { useContext } from "react";
import { Link } from "react-router-dom";

import DesktopCategories from "./components/DesktopCategories/DesktopCategories";
import LoginButton from "./components/LoginButton/LoginButton";
import MainLayout from "./../mainLayout/MainLayout";
import { DarkmodeContext } from "../../utils/DarkmodeProvider";

import SearchBar from "./components/DesktopSearchBar/SearchBar";
import DarkmodeLangButton from "./components/DarkmodeLangButton/DarkmodeLangButton";

const DesktopNav = () => {
  const darkmode = useContext(DarkmodeContext);
  return (
    <div className="relative hidden px-8 border-b border-gray-100 lg:block">
      <div className="2xl:container flex items-center justify-between 2xl:mx-auto w-full">
        <div className="relative flex items-center justify-start pt-1 w-full space-x-4">
          <Link to="/" component={<MainLayout />}>
            <svg
              className="cursor-pointer animate-logo"
              width={50}
              height={32}
              viewBox="0 0 50 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 17.0551C0.0324314 25.2688 6.59422 32 14.6551 32C22.7359 32 29.3097 25.2959 29.3097
                    17.0551V14.9453C29.3097 11.5521 32.017 8.79118 35.3444 8.79118C38.6722 8.79118 41.3791
                    11.5521 41.3791 14.9453C41.3791 15.9163 42.1511 16.7037 43.1032 16.7037H48.2758C49.2284
                    16.7037 50 15.9163 50 14.9453C50 6.70457 43.4261 0 35.3449 0C27.2641 0 20.6898 6.70457
                    20.6898 14.9453V17.0551C20.6898 20.4489 17.9825 23.2088 14.6556 23.2088C11.3282 23.2088 8.62094
                    20.4489 8.62094 17.0551C8.62094 16.0842 7.84888 15.2968 6.89675 15.2968H1.72419C0.772061 15.2973 0 16.0842 0 17.0551Z"
                fill={darkmode.isDarkmode ? "#d9dbde" : "#1F2937"}
              />
            </svg>
          </Link>
          <SearchBar darkmode={darkmode}></SearchBar>
        </div>
        <DesktopCategories />
        <div className="flex flex-row w-full">
          <DarkmodeLangButton />
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
