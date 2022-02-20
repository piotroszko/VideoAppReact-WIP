import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDetectClickOutside } from "react-detect-click-outside";
import axios from "axios";
import useSWR from "swr";

import LoginPage from "../../../loginPage/LoginPage";
import { useAuth, useUser } from "../../../../utils";
import { t } from "i18next";
import ProfilePage from "../../../profilePage/ProfilePage";

const LoginButton = () => {
  const ref = useDetectClickOutside({
    onTriggered: () => setIsDropdownOpen(false),
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const auth = useAuth();
  const { user } = useUser();
  const { data, error } = useSWR("http://localhost:4000/api/v1/users/avatar/" + user?.id, (url) =>
    axios.get(url).then((res) => {
      return "http://localhost:4000/" + res.data;
    })
  );
  return (
    <div className="relative flex items-center justify-end py-3 w-auto space-x-6">
      <div className={`${auth.isLogin ? "hidden" : ""} `}>
        <Link to="/login" component={<LoginPage />}>
          <button className="p-3 dark:text-gray-200 text-gray-600 hover:text-gray-700 focus:text-white text-xs font-medium leading-3 hover:bg-blue-50 focus:bg-gray-700 border-2 dark:border-gray-300 rounded focus:outline-none">
            {t("logIn")}
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
            alt="http://localhost:4000/defaultAvatar.png"
            className="block mx-auto w-auto h-2/5 rounded-xl sm:h-1/2 lg:w-8 lg:h-8"
            src={data}
          />
        </div>
        <div
          className={`${
            isDropdownOpen ? "" : "hidden"
          } absolute top-full mt-2 left-0 z-20 bg-gray-100 rounded-md w-full pt-2 pb-4 flex flex-col gap-1 select-none`}
        >
          <Link
            to={"/profile"}
            component={<ProfilePage />}
            onClick={() => setIsDropdownOpen(false)}
          >
            <p className="mx-2 dark:text-gray-800 hover:text-white bg-gray-200 hover:bg-gray-400 border-2 border-gray-100 rounded-md cursor-pointer">
              {t("account")}
            </p>
          </Link>
          <p
            onClick={auth.logout}
            className="mx-2 dark:text-gray-800 hover:text-white bg-red-200 hover:bg-red-400 border-2 border-gray-100 rounded-md cursor-pointer"
          >
            {t("logOut")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginButton;
