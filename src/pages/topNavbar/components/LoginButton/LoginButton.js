import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginPage from "../../../loginPage/LoginPage";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useAuth, useUser } from "../../../../utils";

const LoginButton = () => {
  const ref = useDetectClickOutside({
    onTriggered: () => setIsDropdownOpen(false),
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const auth = useAuth();
  const { user } = useUser();
  return (
    <div className="relative flex items-center justify-end py-3 w-auto space-x-6">
      <div className={`${auth.isLogin ? "hidden" : ""} `}>
        <Link to="/login" component={<LoginPage />}>
          <button className="p-3 dark:text-gray-200 text-gray-600 hover:text-gray-700 focus:text-white text-xs font-medium leading-3 hover:bg-blue-50 focus:bg-gray-700 border-2 dark:border-gray-300 rounded focus:outline-none">
            Zaloguj
          </button>
        </Link>
      </div>
      <div
        className={`${
          auth.isLogin ? "" : "hidden"
        } border-2 dark:text-gray-200 border-gray-100 shadow-md rounded-md relative z-30`}
        ref={ref}
      >
        <div
          className="flex flex-row gap-4 p-2 cursor-pointer"
          onClick={isDropdownOpen ? () => setIsDropdownOpen(false) : () => setIsDropdownOpen(true)}
        >
          <p className="text-md my-auto italic"> {user?.name}</p>
          <img
            alt=""
            className="block mx-auto w-auto h-2/5 rounded-xl sm:h-1/2 lg:w-8 lg:h-8"
            src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          />
        </div>
        <div
          className={`${
            isDropdownOpen ? "" : "hidden"
          } absolute top-full mt-2 left-0 z-20 bg-gray-100 rounded-md w-full pt-2 pb-4 flex flex-col gap-1 select-none`}
        >
          <p className="mx-2 dark:text-gray-800 hover:text-white bg-gray-200 hover:bg-gray-400 border-2 border-gray-100 rounded-md cursor-pointer">
            Konto
          </p>
          <p
            onClick={auth.logout}
            className="mx-2 dark:text-gray-800 hover:text-white bg-red-200 hover:bg-red-400 border-2 border-gray-100 rounded-md cursor-pointer"
          >
            Wyloguj
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginButton;
