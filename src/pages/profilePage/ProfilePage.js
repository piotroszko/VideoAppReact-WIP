import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import { t } from "i18next";

import Comments from "./subPages/Comments";
import Videos from "./subPages/Videos";
import "./ProfilePage.css";
import { useUser, useAvatar } from "../../utils";
import urls from "./../../api/auth-ep";
import ChannelPage from "./../channelPage/ChannelPage";

const ProfilePage = () => {
  const { user } = useUser();
  const { data } = useAvatar(user?.id);
  useEffect(() => {
    document.title = `Profile - VideoAPP`;
  }, []);
  return (
    <div className="flex flex-row mt-16 pt-2 w-full h-full sm:mt-16 md:mt-16 lg:mt-0 lg:pt-0">
      <div className="fixed top-16 flex flex-auto flex-col w-1/6 min-w-min h-full dark:text-gray-200 bg-gray-300 dark:bg-gray-800 border-r-2 border-gray-700">
        <img alt="" className="block mt-8 mx-auto w-2/3 rounded-2xl" src={data} />
        <p className="mt-2 font-bold">{t("profileYourAcc")}</p>
        <Link to={"/channel/" + user?.id} component={<ChannelPage />}>
          <p className="mt-2 hover:underline">{user?.name}</p>
        </Link>

        <Link to="/profile/" component={<ProfilePage />}>
          <p className="btn-profile-nav mt-2 border-t-2"> {t("profileAccount")} </p>
        </Link>
        <Link to="/profile/videos" component={<Videos />}>
          <p className="btn-profile-nav">{t("profileVideos")} </p>
        </Link>
        <Link to="/profile/comments" component={<Comments />}>
          <p className="btn-profile-nav"> {t("profileMyComments")}</p>
        </Link>
        <Link to="/profile/statistics" component={<Comments />}>
          <p className="btn-profile-nav"> {t("profileStatistics")} </p>
        </Link>
        <div className="flex flex-col justify-end pb-16 w-auto h-full"></div>
      </div>
      <div className="ml-auto w-5/6 h-full dark:bg-gray-800 bg-white overflow-visible">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
