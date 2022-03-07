import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SubsPage from "../../../subscribersPage/SubsPage";
import { useAuth } from "../../../../utils";
import VideoList from "../../../videoList/VideoList";

const DesktopCategories = () => {
  const { t } = useTranslation();
  const auth = useAuth();
  return (
    <div className="flex items-center justify-center w-full space-x-4">
      <Link to="/top" component={<VideoList />}>
        <button className="btn-navbar">
          <p className="text-btn-navbar">{t("topVideos")}</p>
        </button>
      </Link>
      <Link to="/new" component={<VideoList />}>
        <button className="btn-navbar">
          <p className="text-btn-navbar">{t("newVideos")}</p>
        </button>
      </Link>
      <Link to="/discover" component={<VideoList />}>
        <button className="btn-navbar">
          <p className="text-btn-navbar">{t("discoverVideos")}</p>
        </button>
      </Link>
      <Link to="/subs" component={<SubsPage />}>
        <button className={`${auth.isLogin ? "" : "hidden"} btn-navbar`}>
          <p className="text-btn-navbar">{t("subscribedChannels")}</p>
        </button>
      </Link>
    </div>
  );
};

export default DesktopCategories;
