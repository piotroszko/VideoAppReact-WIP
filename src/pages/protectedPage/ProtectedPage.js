import React from "react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import LoginPage from "../loginPage/LoginPage";

const ProtectedPage = () => {
  return (
    <div className="pt-20">
      <p className="text-red-600 text-lg font-bold">404</p>
      <p className="text-lg italic">{t("pageAccesError")}</p>
      <Link to="/login" component={<LoginPage />}>
        <button className="mt-4 p-3 dark:text-gray-200 text-gray-600 hover:text-gray-700 focus:text-white text-xs font-medium leading-3 hover:bg-blue-50 focus:bg-gray-700 border-2 dark:border-gray-300 rounded focus:outline-none">
          {t("logIn")}
        </button>
      </Link>
    </div>
  );
};

export default ProtectedPage;
