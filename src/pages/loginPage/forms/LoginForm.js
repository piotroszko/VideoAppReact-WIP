import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "../../../utils";

import ep from "../../../api/auth-ep";
import { t } from "i18next";

const LoginForm = ({ isVisable, visabilityCallback, forgotCallback }) => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = () => {
    setError(null);
    setIsLoading(true);
    axios
      .post(ep.login, {
        email: email,
        password: password,
        application: "api-jwt",
      })
      .then((data) => {
        auth.login(data.data.token);
        toast.success(t("notificationLoggedin"));
        setTimeout(() => navigate("/", { replace: true }), 500);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };
  return (
    <div
      className={`${
        isVisable ? "hidden" : ""
      } dark:text-gray-200 dark:bg-gray-600 shadow-lg rounded-md border-2 flex flex-col h-full w-full p-2 text-lg mx-auto max-w-lg`}
    >
      <p className="mx-auto my-10 py-2 w-2/3 text-2xl font-bold border-b-2 border-t-2 border-gray-700 sm:w-1/3">
        {" "}
        VideoAPP{" "}
      </p>
      <p className="mx-auto py-2 w-2/3 text-xl font-semibold uppercase sm:w-1/3"> {t("logIn")} </p>

      <label className="ml-14 text-left"> {t("giveEmail")} </label>
      <input
        value={email}
        onInput={(e) => setEmail(e.target.value)}
        className="placeholder-gray-300 ml-4 mr-auto mt-1 pl-2 py-1 w-4/5 text-left text-black dark:text-gray-200 font-semibold bg-gray-200 dark:bg-gray-700 border-gray-400 focus:border-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 sm:ml-12"
        type="text"
        placeholder={t("emailAddress")}
      ></input>

      <label className="ml-14 mt-10 text-left"> {t("givePassword")} </label>
      <input
        value={password}
        onInput={(e) => setPassword(e.target.value)}
        className="placeholder-gray-300 ml-4 mr-auto mt-1 pl-2 py-1 w-4/5 text-left text-black dark:text-gray-200 font-semibold bg-gray-200 dark:bg-gray-700 border-gray-400 focus:border-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 sm:ml-12"
        type="password"
        placeholder={t("password")}
      ></input>

      <p
        onClick={() => forgotCallback()}
        className="font-italic mt-2 mx-auto hover:underline text-sm cursor-pointer"
      >
        {t("passwordForgot")}
      </p>
      <p
        className={`${
          error == null ? "hidden" : ""
        } h-18 mt-2 mx-auto p-2 w-1/2 text-center text-sm font-bold bg-red-300 rounded-lg`}
      >
        {t("wrongCredentials")}
      </p>
      <button
        onClick={() => handleLogin()}
        className="hover:border-6 mt-3 mx-auto w-1/2 h-9 dark:text-gray-200 hover:text-white text-lg font-bold bg-gray-200 hover:bg-gray-400 dark:bg-gray-700 border-4 hover:border-gray-400 rounded-md sm:w-1/4"
      >
        <div className="flex flex-row w-full h-full">
          <div class={`flex items-center justify-center w-1/6`}>
            <div
              class={`${
                isLoading ? "" : "hidden"
              }  w-4 h-4 border-b-2 border-gray-900 rounded-full animate-spin`}
            ></div>
          </div>
          <p className="w-2/3">{t("logIn")}</p>
          <div className="w-1/6"></div>
        </div>
      </button>

      <button
        onClick={() => visabilityCallback()}
        className="hover:border-6 mb-4 ml-auto mr-4 mt-auto w-2/3 dark:text-gray-200 hover:text-white text-lg font-bold bg-gray-200 hover:bg-gray-400 dark:bg-gray-700 border-4 hover:border-gray-400 rounded-md sm:w-1/4"
      >
        {t("register")}
      </button>
    </div>
  );
};

export default LoginForm;
