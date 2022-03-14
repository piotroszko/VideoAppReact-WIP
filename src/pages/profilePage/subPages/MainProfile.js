import React, { useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import axios from "axios";
import { t } from "i18next";

import { useUser, useAvatar } from "../../../utils";
import urls from "./../../../api/auth-ep";

const MainProfile = () => {
  const axiosInstance = axios.create();
  const { mutate } = useSWRConfig();

  const { user } = useUser();
  const { data } = useAvatar(user?.id);
  const [sendEmailLike, setSendEmailLike] = useState(false);
  const [sendEmailNewVideo, setSendEmailNewVideo] = useState(false);

  const [previewAvatar, setPreviewAvatar] = useState();
  const [avatarData, setAvatarData] = useState();
  const [notifAvatar, setNotifAvatar] = useState("");

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    newRepassword: "",
    errorMatch: false,
    errorEmpty: false,
    errorWrong: false,
    success: false,
  });
  useSWR(user?.id ? urls.getUserDetails : "", (url) => {
    axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
    axiosInstance.get(url).then((res) => {
      setSendEmailLike(res.data.sendEmailOnComLike);
      setSendEmailNewVideo(res.data.sendEmailOnNewVideo);
      return res.data;
    });
  });
  const changeNotif = (toChange) => {
    axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
    if (toChange === "newVideo") {
      axiosInstance.post(urls.changeNotif + "emailVideo" + urls.aplicationTag).then((res) => {
        mutate(urls.getUserDetails);
        return res.data;
      });
    } else if (toChange === "comLike") {
      axiosInstance.post(urls.changeNotif + "emailVideo" + urls.aplicationTag).then((res) => {
        mutate(urls.getUserDetails);
        return res.data;
      });
    }
  };
  const handlePasswordChange = () => {
    if (passwords.newPassword !== passwords.newRepassword) {
      setPasswords((prev) => ({
        ...prev,
        errorMatch: true,
        errorEmpty: false,
        errorWrong: false,
        success: false,
      }));
    } else if (
      passwords.newPassword === "" ||
      passwords.oldPassword === "" ||
      passwords.newRepassword === ""
    ) {
      setPasswords((prev) => ({
        ...prev,
        errorEmpty: true,
        errorMatch: false,
        errorWrong: false,
        success: false,
      }));
    } else {
      setPasswords((prev) => ({
        ...prev,
        errorMatch: false,
        errorEmpty: false,
        errorWrong: false,
        success: false,
      }));
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      axiosInstance
        .post(urls.passwordChange, {
          password: passwords.oldPassword,
          newPassword: passwords.newPassword,
        })
        .then((res) => {
          setPasswords((prev) => ({ ...prev, success: true }));
        })
        .catch((err) => {
          setPasswords((prev) => ({ ...prev, errorWrong: true }));
        });
    }
  };
  const handleFileUpload = (e) => {
    setAvatarData(e.target.files[0]);
    setPreviewAvatar(URL.createObjectURL(e.target.files[0]));
  };
  const handleSaveAvatar = () => {
    var formdata = new FormData();
    if (previewAvatar) {
      if (localStorage.getItem("token") !== null) {
        axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
        formdata.append("file", avatarData);
        axiosInstance
          .post(urls.uploadAvatar, formdata)
          .then((res) => {
            setNotifAvatar("changed");
          })
          .catch((err) => {
            setNotifAvatar("error");
          });
      }
    } else {
      setNotifAvatar("nofile");
    }
  };
  return (
    <div className="flex flex-col pt-16 w-full md:flex-row">
      <div className="flex flex-col order-2 w-full h-full dark:text-gray-200 md:order-1 md:w-1/2">
        <div className="flex flex-col w-full text-center">
          <p className="mt-4 text-xl font-bold"> {t("profileYourAcc")} </p>
          <div className="flex flex-row justify-center mt-20 mx-auto w-full">
            <input
              type="checkbox"
              checked={sendEmailNewVideo}
              onChange={() => changeNotif("newVideo")}
              className="my-auto w-5 h-5"
            />
            <label className="ml-1 my-auto w-3/4 h-full text-center text-lg font-bold">
              {t("profileNewVideosNotification")}
            </label>
          </div>

          <div className="flex flex-row justify-center mt-4 mx-auto w-full">
            <input
              type="checkbox"
              checked={sendEmailLike}
              onChange={() => changeNotif("comLike")}
              className="my-auto w-5 h-5"
            />
            <label className="ml-1 my-auto w-3/4 h-full text-center text-lg font-bold">
              {t("profileLikeNotification")}
            </label>
          </div>

          <p className="mt-5 pt-20 text-lg font-bold"> {t("profilePassChange")}</p>
          <div className="w-full">
            {" "}
            <p
              className={`
              ${passwords.success ? "bg-green-400" : ""}
              ${
                (passwords.errorEmpty || passwords.errorMatch || passwords.errorWrong) &&
                !passwords.success
                  ? "bg-red-300"
                  : ""
              }  ${
                passwords.errorEmpty ||
                passwords.errorMatch ||
                passwords.errorWrong ||
                passwords.success
                  ? ""
                  : "hidden"
              } mx-auto px-2 py-1 w-min rounded-md min-w-max text-base font-bold border-2 border-gray-600`}
            >
              {passwords.errorEmpty && t("passEmpty")}
              {passwords.errorMatch && t("passMatch")}
              {passwords.errorWrong && t("passWrong")}
              {passwords.success && t("passSuccess")}
            </p>
          </div>

          <label className="mt-2 text-center"> {t("profileOldPassword")} </label>
          <input
            value={passwords.oldPassword}
            onChange={(e) => setPasswords((prev) => ({ ...prev, oldPassword: e.target.value }))}
            className="placeholder-gray-300 mt-2 mx-auto pl-2 py-1 w-1/2 text-left text-black dark:text-gray-200 font-semibold bg-gray-200 dark:bg-gray-700 border-gray-400 focus:border-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            type="password"
            placeholder={t("profileOldPassword")}
          ></input>

          <label className="mt-10 text-center"> {t("profileNewPassword")}</label>
          <input
            value={passwords.newPassword}
            onChange={(e) => setPasswords((prev) => ({ ...prev, newPassword: e.target.value }))}
            className="placeholder-gray-300 mt-2 mx-auto pl-2 py-1 w-1/2 text-left text-black dark:text-gray-200 font-semibold bg-gray-200 dark:bg-gray-700 border-gray-400 focus:border-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            type="password"
            placeholder={t("profileNewPassword")}
          ></input>
          <label className="mt-2 text-center"> {t("profileReNewPass")} </label>
          <input
            value={passwords.newRepassword}
            onInput={(e) => setPasswords((prev) => ({ ...prev, newRepassword: e.target.value }))}
            className="placeholder-gray-300 mt-2 mx-auto pl-2 py-1 w-1/2 text-left text-black dark:text-gray-200 font-semibold bg-gray-200 dark:bg-gray-700 border-gray-400 focus:border-gray-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            type="password"
            placeholder={t("profileReNewPass")}
          ></input>
          <button
            onClick={() => handlePasswordChange()}
            className="hover:border-6 mt-4 mx-auto w-2/3 dark:text-gray-200 hover:text-white text-lg font-bold bg-gray-200 hover:bg-gray-400 dark:bg-gray-700 border-4 hover:border-gray-400 rounded-md sm:w-1/4"
          >
            {t("profileConfirm")}
          </button>
          <div className="justify-end mt-auto h-full"></div>
        </div>
      </div>
      <div className="flex flex-col pt-4 w-full dark:text-gray-200 md:order-2 md:w-1/2">
        <p className="mb-8 text-lg font-bold"> {t("profileAvatarChange")} </p>

        <p className="font-bold"> {t("profileCurrentAvatar")} </p>
        <img alt="" className="block mt-2 mx-auto w-1/3 rounded-2xl" src={data} />

        <p className="mt-8 font-bold"> {t("profileAvatarSelect")} </p>
        <input
          id="filePicker"
          type="file"
          accept=".png"
          onChange={(e) => handleFileUpload(e)}
          className="mb-4 mt-4 mx-auto"
        ></input>

        <p className={`${!previewAvatar && "hidden"} mt-4 italic`}> {t("profileAvatarPreview")}</p>
        <img
          alt=""
          className="block mt-2 mx-auto w-1/4 rounded-2xl"
          src={previewAvatar && previewAvatar}
        />
        {notifAvatar !== "" ? (
          <div
            className={`${
              notifAvatar === "changed" ? "text-green-600" : "text-red-600"
            } text-lg font-bold`}
          >
            {notifAvatar === "changed" ? t("avatarChanged") : ""}
            {notifAvatar === "error" ? t("avatarError") : ""}
            {notifAvatar === "nofile" ? t("avatarNoFile") : ""}
          </div>
        ) : (
          ""
        )}
        <button
          onClick={() => {
            handleSaveAvatar();
          }}
          className="hover:border-6 mt-6 mx-auto w-2/3 dark:text-gray-200 hover:text-white text-lg font-bold bg-gray-200 hover:bg-gray-400 dark:bg-gray-700 border-4 hover:border-gray-400 rounded-md sm:w-1/4"
        >
          {t("profileAvatarSave")}
        </button>
      </div>
    </div>
  );
};

export default MainProfile;
