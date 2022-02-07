import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SubsPage from "../../../subscribersPage/SubsPage";
import { useAuth } from "../../../../utils";

const DesktopCategories = () => {
  const { t } = useTranslation();
  const auth = useAuth();
  return (
    <div className="flex items-center justify-center w-full space-x-4">
      <button className="btn-navbar">
        <p className="text-btn-navbar">{t("topVideos")}</p>
      </button>
      <button className="btn-navbar">
        <p className="text-btn-navbar">{t("newVideos")}</p>
      </button>
      <button className="btn-navbar">
        <p className="text-btn-navbar">{t("discoverVideos")}</p>
      </button>
      <Link to="/subs" component={<SubsPage />}>
        <button className={`${auth.isLogin ? "" : "hidden"} btn-navbar`}>
          <p className="text-btn-navbar">{t("subscribedChannels")}</p>
        </button>
      </Link>
    </div>
  );
};

export default DesktopCategories;
