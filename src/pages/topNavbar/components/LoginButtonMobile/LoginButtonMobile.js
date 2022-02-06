import React from "react";
import { Link } from "react-router-dom";

import LoginPage from "../../../loginPage/LoginPage";

const LoginButtonMobile = () => {
  return (
    <div className="flex justify-end mt-auto w-full">
      <Link to="/login" component={<LoginPage />}>
        <button className="p-3 w-full text-gray-700 focus:text-white text-xs font-medium leading-3 bg-blue-50 focus:bg-gray-700 rounded focus:outline-none">
          Zaloguj
        </button>
      </Link>
    </div>
  );
};

export default LoginButtonMobile;
