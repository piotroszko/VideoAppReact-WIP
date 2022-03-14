import React, { useState } from "react";
import { Link } from "react-router-dom";
import { t } from "i18next";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import urls from "../../api/auth-ep";

const PasswordForgotPage = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [errorMissmatch, setErrorMissmatch] = useState(false);
  const handleSendPassword = () => {
    if (password !== repassword) {
      setErrorMissmatch(true);
    } else if (password.length > 8) {
      axios.post(urls.changeForgot + id, { password: password }).then((res) => {
        toast.success(t("passwordChanged"));
        navigate("/login", { replace: true });
      });
    }
  };
  return (
    <div className="grid grid-cols-1 grid-rows-6 h-screen">
      <div className="flex flex-col col-span-1 row-span-1 w-full h-full">
        <Link to="/" className="mb-auto mr-auto">
          <button className="ml-2 mt-2 p-3 hover:text-black text-white text-lg font-bold hover:bg-gray-200 bg-gray-400 hover:border-gray-200 rounded-md">
            {" "}
            {t("back")}{" "}
          </button>
        </Link>
      </div>
      <div className="flip row-span-4 row-start-2 w-full h-full">
        <div className="w-full h-full">
          <div
            className={` shadow-lg rounded-md border-2 flex flex-col h-full w-full p-2 text-lg mx-auto max-w-lg dark:bg-gray-600 dark:text-gray-200`}
          >
            <p className="mx-auto my-10 py-2 w-2/3 text-2xl font-bold border-b-2 border-t-2 border-gray-700 sm:w-1/3">
              {" "}
              VideoAPP{" "}
            </p>
            <p className="mx-auto py-2 w-2/3 text-xl font-semibold sm:w-1/3">
              {" "}
              {t("passwordChange")}{" "}
            </p>

            <input
              className="placeholder-gray-300 ml-4 mr-auto mt-1 pl-2 py-1 w-4/5 text-left text-black dark:text-gray-200 font-semibold bg-gray-200 dark:bg-gray-700 border-gray-400 focus:border-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 sm:ml-12"
              type="password"
              placeholder={t("password")}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMissmatch(false);
              }}
            ></input>
            <input
              className="placeholder-gray-300 ml-4 mr-auto mt-4 pl-2 py-1 w-4/5 text-left text-black dark:text-gray-200 font-semibold bg-gray-200 dark:bg-gray-700 border-gray-400 focus:border-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 sm:ml-12"
              type="password"
              placeholder={t("rePassword")}
              value={repassword}
              onChange={(e) => {
                setRepassword(e.target.value);
                setErrorMissmatch(false);
              }}
            ></input>
            {errorMissmatch ? (
              <p className="mt-2 text-red-600 text-base font-bold"> {t("passMatch")}</p>
            ) : (
              ""
            )}

            <button
              onClick={() => handleSendPassword()}
              className="hover:border-6 mt-10 mx-auto w-1/2 dark:text-gray-200 hover:text-white text-lg font-bold bg-gray-200 hover:bg-gray-400 dark:bg-gray-700 border-4 hover:border-gray-400 rounded-md sm:w-1/2"
            >
              {t("changePassword")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordForgotPage;
