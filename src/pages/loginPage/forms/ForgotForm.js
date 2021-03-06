import { t } from "i18next";
import React, { useState } from "react";
import axios from "axios";
import urls from "../../../api/auth-ep";

const ForgotForm = ({ isVisable, visabilityCallback }) => {
  const [emailSend, setEmailSend] = useState(false);
  const [email, setEmail] = useState("");
  const sendEmail = () => {
    axios.post(urls.forgotEmail + email.replace(/ /g, "")).then((res) => {
      setEmailSend(true);
    });
  };
  return (
    <div
      className={`${
        isVisable ? "" : "hidden"
      } shadow-lg rounded-md border-2 flex flex-col h-full w-full p-2 text-lg mx-auto max-w-lg dark:bg-gray-600 dark:text-gray-200`}
    >
      <p className="mx-auto my-10 py-2 w-2/3 text-2xl font-bold border-b-2 border-t-2 border-gray-700 sm:w-1/3">
        {" "}
        VideoAPP{" "}
      </p>
      <p className="mx-auto py-2 w-2/3 text-xl font-semibold sm:w-1/3"> {t("resetPassword")} </p>

      <label className="ml-4 text-center">{t("forgotPasswordDesc")}</label>
      <input
        className="placeholder-gray-300 ml-4 mr-auto mt-1 pl-2 py-1 w-4/5 text-left text-black dark:text-gray-200 font-semibold bg-gray-200 dark:bg-gray-700 border-gray-400 focus:border-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 sm:ml-12"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("email")}
      ></input>

      <button
        onClick={() => sendEmail()}
        className="hover:border-6 mt-10 mx-auto w-1/2 dark:text-gray-200 hover:text-white text-lg font-bold bg-gray-200 hover:bg-gray-400 dark:bg-gray-700 border-4 hover:border-gray-400 rounded-md sm:w-1/4"
      >
        {t("send")}
      </button>
      <div
        className={`${
          emailSend ? "opacity-70" : "opacity-0 select-none"
        } whitespace-pre-wrap mt-3 font-bold text-base text-green-600 bg-green-300 border-2 border-green-900 rounded-lg w-full mx-auto p-2 `}
      >
        <p className={``}> {t("emailSend")}</p>
      </div>
      <button
        onClick={() => {
          visabilityCallback();
        }}
        className="hover:border-6 mb-4 ml-auto mr-4 mt-auto w-2/3 dark:text-gray-200 hover:text-white text-lg font-bold bg-gray-200 hover:bg-gray-400 dark:bg-gray-700 border-4 hover:border-gray-400 rounded-md sm:w-1/4"
      >
        {t("back")}
      </button>
    </div>
  );
};

export default ForgotForm;
