import React from "react";
import { t } from "i18next";

const NonePage = () => {
  return (
    <div className="pt-20">
      <p className="text-red-600 text-lg font-bold">404:</p>
      <p className="text-lg italic">{t("pageNotFound")}</p>
    </div>
  );
};

export default NonePage;
