import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../utils";

import ep from "../../../api/auth-ep";
import { t } from "i18next";

const RegistrationForm = ({ isVisable, visabilityCallback }) => {
  let navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [difPass, setDifPass] = useState(false);

  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = () => {
    if (password === rePassword) {
      setDifPass(false);
      setError(null);
      setIsLoading(true);
      axios
        .post(ep.register, {
          name: login,
          email: email,
          password: password,
          application: "api-jwt",
        })
        .then((data) => {
          auth.login(data.data.token);
          setTimeout(() => navigate("/", { replace: true }), 500);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    } else {
      setDifPass(true);
    }
  };
  const checkPasswords = () => {
    if (password !== rePassword) {
      setDifPass(true);
    } else {
      setDifPass(false);
    }
  };
  return (
    <div
      className={`${
        isVisable ? "" : "hidden"
      } shadow-lg rounded-md border-2 flex flex-col h-full w-full p-2 text-lg mx-auto max-w-lg dark:text-gray-200 dark:bg-gray-600`}
    >
      <p className="mx-auto py-2 w-2/3 text-xl font-semibold border-b-2 border-gray-700 uppercase sm:w-1/3">
        {t("register")}
      </p>
      <label className="ml-14 text-left"> {t("giveLogin")} </label>
      <input
        value={login}
        onInput={(e) => setLogin(e.target.value)}
        className="placeholder-gray-300 ml-4 mr-auto mt-1 pl-2 py-1 w-4/5 text-left text-black dark:text-gray-200 font-semibold bg-gray-200 dark:bg-gray-700 border-gray-400 focus:border-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 sm:ml-12"
        type="text"
        placeholder={t("regLogin")}
      ></input>

      <label className="ml-14 mt-4 text-left"> {t("giveEmail")} </label>
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
        onInput={(e) => {
          setPassword(e.target.value);
          setDifPass(false);
        }}
        className={`${
          difPass
            ? "dark:text-gray-200  bg-red-200 dark:bg-red-400 border-red-400 focus:border-red-500 focus:ring-red-500 placeholder-gray-600"
            : "dark:text-gray-200 bg-gray-200 dark:bg-gray-700 border-gray-400 focus:border-gray-500 focus:ring-gray-500 placeholder-gray-300"
        }  ml-4 mr-auto mt-1 pl-2 py-1 w-4/5 text-left text-black font-semibold rounded-sm focus:outline-none focus:ring-2  sm:ml-12`}
        type="password"
        placeholder={t("password")}
      ></input>

      <label className="ml-14 mt-4 text-left"> {t("giveRePassword")}</label>
      <div className="flex flex-col ml-4 mt-1 mx-auto w-4/5 h-20 sm:ml-12">
        <input
          value={rePassword}
          onBlur={() => checkPasswords()}
          onInput={(e) => {
            setRePassword(e.target.value);
            setDifPass(false);
          }}
          className={`${
            difPass
              ? "dark:text-gray-200 bg-red-200 dark:bg-red-400 border-red-400 focus:border-red-500 focus:ring-red-500"
              : "dark:text-gray-200 bg-gray-200 dark:bg-gray-700 border-gray-400 focus:border-gray-500 focus:ring-gray-500"
          } placeholder-gray-300 w-full pl-2 py-1 text-left text-black font-semibold rounded-sm focus:outline-none focus:ring-2`}
          type="password"
          placeholder={t("rePassword")}
        ></input>
        <p
          className={`${
            difPass ? "" : "hidden"
          } h-auto text-red-200 bg-red-800 w-3/5 mx-auto py-1 px-3 mt-0 text-center rounded-b-lg font-bold text-sm`}
        >
          {t("diffrentPasswords")}
        </p>
      </div>

      <button
        onClick={() => handleRegister()}
        className="hover:border-6 mt-2 mx-auto w-4/5 dark:text-gray-200 hover:text-white text-lg font-bold bg-gray-200 hover:bg-gray-400 dark:bg-gray-700 border-4 hover:border-gray-400 rounded-md sm:w-1/2"
      >
        <div className="flex flex-row w-full h-full">
          <div class={`flex items-center justify-center w-1/6`}>
            <div
              class={`${
                isLoading ? "" : "hidden"
              }  w-4 h-4 border-b-2 border-gray-900 rounded-full animate-spin ml-auto`}
            ></div>
          </div>
          <p className="w-2/3">{t("registerIn")}</p>
          <div className="w-1/6"></div>
        </div>
      </button>

      <button
        onClick={() => {
          visabilityCallback();
        }}
        className="hover:border-6 mb-4 ml-auto mr-4 mt-auto w-2/3 dark:text-gray-200 hover:text-white text-lg font-bold bg-gray-200 hover:bg-gray-400 dark:bg-gray-700 border-4 hover:border-gray-400 rounded-md sm:w-1/4"
      >
        {t("logIn")}
      </button>
    </div>
  );
};

export default RegistrationForm;
