import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import MainLayout from "./../mainLayout/MainLayout";
import DarkmodeButton from "./components/DarkmodeButton/DarkmodeButton";
import { DarkmodeContext } from "../../utils/DarkmodeProvider";
import MobileCategories from "./components/MobileCategories/MobileCategories";
import MobileSearchBar from "./components/MobileSearchBar/MobileSearchBar";

const MobileNav = () => {
  const darkmode = useContext(DarkmodeContext);

  const [showNav, setShowNav] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <div className="h-full lg:hidden">
      <div
        className={`py-4 px-4 z-50 h-auto fixed top-0 md:px-6 w-full flex justify-between items-center bg-white dark:bg-gray-500 border-b border-gray-100`}
      >
        <div
          id="searchItems"
          className={`${search ? "hidden" : ""} w-full flex justify-between items-center `}
        >
          <Link to="/" component={<MainLayout />} onClick={() => setShowNav(false)}>
            <button>
              <svg
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
                    20.6898 14.9453V17.0551C20.6898 20.4489 17.9825 23.2088 14.6556 23.2088C11.3282
                    23.2088 8.62094 20.4489 8.62094 17.0551C8.62094 16.0842 7.84888 15.2968 6.89675
                    15.2968H1.72419C0.772061 15.2973 0 16.0842 0 17.0551Z"
                  fill={darkmode.isDarkmode ? "#d9dbde" : "#4B5563"}
                />
              </svg>
            </button>
          </Link>
          <div className="jusitfy-end flex items-center space-x-10">
            <div
              id="navSearchandAvatar"
              className={`${showNav ? "hidden" : ""} flex jusitfy-end items-center space-x-10`}
            >
              <button
                onClick={() => setSearch(true)}
                className="focus:outline-none"
                aria-label="search"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3
                        10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                    stroke={darkmode.isDarkmode ? "#d9dbde" : "#4B5563"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L15 15"
                    stroke={darkmode.isDarkmode ? "#d9dbde" : "#4B5563"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <DarkmodeButton />
            <button
              onClick={() => setShowNav(!showNav)}
              className="focus:outline-none"
              aria-label="toggler"
            >
              <svg
                id="navClose"
                className={`${showNav ? "hidden " : ""}`}
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 7.5H20.25"
                  stroke={darkmode.isDarkmode ? "#d9dbde" : "#4B5563"}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                />
                <path
                  d="M3.75 12H20.25"
                  stroke={darkmode.isDarkmode ? "#d9dbde" : "#4B5563"}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                />
                <path
                  d="M3.75 16.5H20.25"
                  stroke={darkmode.isDarkmode ? "#d9dbde" : "#4B5563"}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                />
              </svg>
              <svg
                id="navOpen"
                className={`${showNav ? "" : "hidden"}`}
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke={darkmode.isDarkmode ? "#d9dbde" : "#4B5563"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke={darkmode.isDarkmode ? "#d9dbde" : "#4B5563"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <MobileSearchBar search={search} closeSearch={() => setSearch(false)}></MobileSearchBar>
      </div>

      <MobileCategories showNav={showNav} closeNav={() => setShowNav(false)}></MobileCategories>
    </div>
  );
};

export default MobileNav;
