import React from "react";
import { Link } from "react-router-dom";
import { t } from "i18next";

import LoginButtonMobile from "./../LoginButtonMobile/LoginButtonMobile";
import { useAuth } from "../../../../utils";
import VideoList from "../../../videoList/VideoList";
import SubsPage from "../../../subscribersPage/SubsPage";

const MobileCategories = ({ showNav, closeNav }) => {
  const auth = useAuth();
  return (
    <div
      id="nav"
      className={`${
        showNav ? "left-1/4" : "-translate-x-full left-0"
      } transform ease-in-out fixed top-16 z-50
                transition duration-500 w-1/2 h-1/2 `}
    >
      <div className="flex flex-col items-start justify-between ml-auto mr-auto pb-4 px-2 h-full dark:bg-gray-500 bg-white rounded-b-lg sm:w-full md:px-4">
        <div className="jusitfy-start flex flex-col items-start ml-auto mr-auto w-full">
          <Link
            onClick={() => closeNav()}
            to="/top"
            component={<VideoList />}
            className="btn-navbar-full border-t-2 dark:border-gray-200"
          >
            <p className="text-btn-navbar2">{t("topVideos")}</p>
          </Link>
          <Link
            onClick={() => closeNav()}
            to="/new"
            component={<VideoList />}
            className="btn-navbar-full dark:border-gray-200"
          >
            <p className="text-btn-navbar2">{t("newVideos")}</p>
          </Link>
          <Link
            onClick={() => closeNav()}
            to="/discover"
            component={<VideoList />}
            className="btn-navbar-full dark:border-gray-200"
          >
            <p className="text-btn-navbar2">{t("discoverVideos")}</p>
          </Link>
          <Link
            onClick={() => closeNav()}
            to="/subs"
            component={<SubsPage />}
            className={`${auth.isLogin ? "" : "hidden"} btn-navbar-full dark:border-gray-200`}
          >
            <p className="text-btn-navbar2">{t("subscribedChannels")}</p>
          </Link>
        </div>
        <LoginButtonMobile closeNav={() => closeNav()} />
      </div>
    </div>
  );
};

export default MobileCategories;
