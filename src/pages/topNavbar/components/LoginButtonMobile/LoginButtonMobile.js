import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDetectClickOutside } from "react-detect-click-outside";
import { toast } from "react-toastify";

import LoginPage from "../../../loginPage/LoginPage";
import { useAuth, useUser, useAvatar } from "../../../../utils";
import { t } from "i18next";
import ProfilePage from "../../../profilePage/ProfilePage";

const LoginButtonMobile = ({ closeNav }) => {
  const ref = useDetectClickOutside({
    onTriggered: () => setIsDropdownOpen(false),
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const auth = useAuth();
  const { user } = useUser();
  const { data } = useAvatar(user?.id);
  return (
    <div className="relative flex items-center justify-end py-3 w-auto space-x-6">
      <div className={`${auth.isLogin ? "hidden" : ""} `}>
        <Link onClick={() => closeNav()} to="/login" component={<LoginPage />}>
          <button className="p-3 dark:text-gray-200 text-gray-600 hover:text-gray-700 focus:text-white text-xs font-medium leading-3 hover:bg-blue-50 focus:bg-gray-700 border-2 dark:border-gray-300 rounded focus:outline-none">
            {t("logIn")}
          </button>
        </Link>
      </div>
      <div
        className={`${
          auth.isLogin ? "" : "hidden"
        } border-2 dark:text-gray-200 border-gray-100 shadow-md rounded-md relative z-30 ml-0`}
        ref={ref}
        style={{ marginLeft: "0" }}
      >
        <div
          className="flex flex-row p-2 cursor-pointer"
          onClick={isDropdownOpen ? () => setIsDropdownOpen(false) : () => setIsDropdownOpen(true)}
        >
          <p className="my-auto text-base italic sm:text-lg"> {user?.name}</p>
          <img alt={""} className="block ml-auto w-1/5 h-1/5 rounded-xl" src={data} />
        </div>
        <div
          className={`${
            isDropdownOpen ? "" : "hidden"
          } absolute top-full mt-2 left-0 z-20 bg-gray-100 rounded-md w-full pt-2 pb-4 flex flex-col gap-1 select-none`}
        >
          <Link
            to={"/profile"}
            component={<ProfilePage />}
            onClick={() => {
              closeNav();
              setIsDropdownOpen(false);
            }}
          >
            <p className="mx-2 dark:text-gray-800 hover:text-white bg-gray-200 hover:bg-gray-400 border-2 border-gray-100 rounded-md cursor-pointer">
              {t("account")}
            </p>
          </Link>
          <p
            onClick={() => {
              closeNav();
              auth.logout();
              toast.info(t("notificationLoggedout"));
            }}
            className="mx-2 dark:text-gray-800 hover:text-white bg-red-200 hover:bg-red-400 border-2 border-gray-100 rounded-md cursor-pointer"
          >
            {t("logOut")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginButtonMobile;
