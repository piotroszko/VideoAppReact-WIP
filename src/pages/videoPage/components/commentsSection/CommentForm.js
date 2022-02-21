import { t } from "i18next";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

import "./Comment.css";
import { useAuth } from "../../../../utils";
import { useUser } from "../../../../utils";
import LoginPage from "../../../loginPage/LoginPage";
import urls from "./../../../../api/auth-ep";
const CommentForm = (props) => {
  const { user } = useUser();
  const { mutate } = useSWRConfig();
  const axiosInstance = axios.create();

  const [title, setTitle] = useState("");
  const [commentText, setCommentText] = useState("");

  const [isFormVis, setIsFormVis] = useState(false);

  const auth = useAuth();

  const handleSendComment = (e) => {
    e.preventDefault();
    axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
    axiosInstance
      .post(urls.addCom + props.videoID + urls.aplicationTag, {
        title,
        content: commentText,
      })
      .then((data) => {
        mutate(urls.allComVideo + props.videoID + urls.aplicationTag);
        setIsFormVis(false);
      })
      .catch((error) => {});
  };
  const { data, error } = useSWR(urls.avatar + user?.id, (url) =>
    axios.get(url).then((res) => {
      return urls.basicUrl + res.data;
    })
  );
  return (
    <>
      {!auth.isLogin ? (
        <div className="pb-4 pt-4 w-full dark:bg-gray-800 bg-white">
          <div className="mx-auto pb-4 pt-4 px-6 w-max bg-gray-500 border-2 rounded-lg">
            <Link to="/login" component={<LoginPage />}>
              <p className="h-full text-gray-200 hover:underline whitespace-normal font-bold">
                {t("comLogin")}
              </p>
            </Link>
          </div>
        </div>
      ) : (
        <div
          className={` ${
            isFormVis ? "pt-10" : "pt-1"
          } bg-white dark:bg-gray-800 w-full flex flex-col`}
        >
          <div
            className={`${
              isFormVis ? "gap-2 sm:gap-10" : "gap-2"
            } w-full flex justify-center scaley1 shadow-sm pb-3 `}
          >
            <img
              alt=""
              className={` ${
                isFormVis ? "scale-full" : "scale-half"
              } animateScale2 w-24 h-24 block rounded-3xl self-start`}
              src={data}
            />
            <div className="flex w-1/2 sm:w-1/3">
              <button
                onClick={() => setIsFormVis(true)}
                className={` ${
                  isFormVis ? "scaley-0 hidden" : "scaley-full"
                } select-none whitespace-nowrap shadow-md p-2 h-1/2 self-center dark:bg-gray-700`}
              >
                {" "}
                <p className="mx-4 dark:text-gray-200"> {t("writeComment")} </p>{" "}
              </button>
              <form
                className={` ${
                  isFormVis ? "flex scaley-full  w-full" : "scaley-0 hidden w-0"
                } flex-col animateScale8`}
              >
                <input
                  className="mx-auto p-2 w-full text-lg shadow-md"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={t("comTitle")}
                  type="text"
                  name="title"
                />
                <textarea
                  className="mt-1 mx-auto p-2 w-full shadow-md"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder={t("comContent")}
                  type="text"
                  name="commentText"
                  required
                />
                <div className="flex select-none">
                  <button
                    onClick={() => setIsFormVis(false)}
                    className="ml-0 mr-auto mt-2 p-1 dark:text-gray-200 text-xs font-bold dark:bg-gray-600 shadow-md sm:text-base"
                    type="submit"
                  >
                    {t("cancel")}
                  </button>
                  <button
                    className="ml-auto mr-0 mt-2 p-1 dark:text-gray-200 text-xs font-bold dark:bg-gray-600 shadow-md sm:text-base"
                    type="submit"
                    onClick={(e) => handleSendComment(e)}
                  >
                    {t("comAdd")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommentForm;
