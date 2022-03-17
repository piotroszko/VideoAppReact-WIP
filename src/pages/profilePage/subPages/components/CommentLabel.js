import React from "react";
import { Link } from "react-router-dom";
import { t } from "i18next";
import Moment from "react-moment";

import ChannelPage from "../../../channelPage/ChannelPage";
import VideoPage from "../../../videoPage/VideoPage";
import urls from "./../../../../api/auth-ep";

const CommentLabel = ({ data }) => {
  return (
    <>
      <div className="hidden flex-col mx-auto p-2 w-11/12 h-auto bg-gray-300 dark:bg-gray-800 rounded-md sm:flex">
        <div className="flex flex-row gap-8 p-2 w-full bg-gray-400 dark:bg-gray-700 rounded-md">
          <img
            className={`block ml-4 mt-2 my-auto w-12 h-12 rounded-2xl`}
            src={data?.id ? urls.thumbnails + data.id + ".png" : ""}
            alt=""
          />
          <p className="my-auto dark:text-gray-200 text-lg font-bold"> {data?.name} </p>

          <p className="my-auto dark:text-gray-200 underline text-lg font-bold cursor-pointer">
            <Link to={"/channel/" + data?.userId} component={<ChannelPage />}>
              {data?.channelName}
            </Link>
          </p>
          <Link
            to={"/video/" + data?.id}
            component={<VideoPage />}
            className="dark:hover:bg-gray-500 dark:hover:text-gray-300 ml-auto px-2 text-center hover:text-gray-200 dark:text-gray-200 text-gray-800 text-lg italic bg-gray-300 dark:bg-gray-600 hover:bg-gray-700"
          >
            <p className="">{t("goToVideo")}</p>
          </Link>
        </div>
        {data
          ? data.comments.map((c, index) => (
              <div className="flex flex-col gap-3 ml-auto mt-2 w-2/3" key={index}>
                <div className="flex flex-row justify-evenly p-2 dark:text-gray-200 bg-gray-400 dark:bg-gray-700 rounded-md">
                  <div className="flex flex-col w-1/5">
                    <p className="text-sm"> {t("written")}: </p>
                    <p className="italic">
                      {" "}
                      <Moment format="YYYY/MM/DD">{c.createdAt ? c.createdAt : ""}</Moment>{" "}
                    </p>
                  </div>
                  <div className="flex flex-col w-3/5">
                    <p className="text-lg font-bold"> {c?.title} </p>
                    <p className="italic"> {c?.content} </p>
                  </div>
                  <div className="flex flex-col ml-auto w-1/5 text-left font-bold">
                    <p className="dark:text-green-600 text-green-800">
                      {" "}
                      {c?.likes} {t("likes")}{" "}
                    </p>
                    <p className="dark:text-red-600 text-red-800">
                      {" "}
                      {c?.dislikes} {t("dislikes")}{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
      {/* Mobile version */}
      <div className="flex flex-col mx-auto p-2 w-11/12 h-auto bg-gray-300 dark:bg-gray-800 rounded-md sm:hidden">
        <div className="flex flex-col gap-8 p-2 w-auto bg-gray-400 dark:bg-gray-700 rounded-md">
          <img
            className={`mt-2 my-auto w-28 h-28 rounded-2xl mx-auto`}
            src={data?.id ? urls.thumbnails + data.id + ".png" : ""}
            alt=""
          />
          <p className="mx-auto my-auto w-max dark:text-gray-200 text-lg font-bold">
            {" "}
            {data?.name}{" "}
          </p>

          <p className="my-auto dark:text-gray-200 underline text-lg font-bold cursor-pointer">
            <Link to={"/channel/" + data?.userId} component={<ChannelPage />}>
              {data?.channelName}
            </Link>
          </p>
          <Link
            to={"/video/" + data?.id}
            component={<VideoPage />}
            className="dark:hover:bg-gray-500 dark:hover:text-gray-300 ml-auto px-2 text-center hover:text-gray-200 dark:text-gray-200 text-gray-800 text-lg italic bg-gray-300 dark:bg-gray-600 hover:bg-gray-700"
          >
            <p className="">{t("goToVideo")}</p>
          </Link>
        </div>
        {data
          ? data.comments.map((c, index) => (
              <div className="flex flex-col gap-3 ml-auto mt-2 w-11/12" key={index}>
                <div className="flex flex-row justify-evenly p-2 dark:text-gray-200 bg-gray-400 dark:bg-gray-700 rounded-md">
                  <div className="flex flex-col w-1/5">
                    <p className="text-xs"> {t("written")}: </p>
                    <p className="text-xs italic">
                      {" "}
                      <Moment format="YYYY/MM/DD">{c.createdAt ? c.createdAt : ""}</Moment>{" "}
                    </p>
                  </div>
                  <div className="flex flex-col w-3/5">
                    <p className="text-base font-bold"> {c?.title} </p>
                    <p className="text-xs italic"> {c?.content} </p>
                  </div>
                  <div className="flex flex-col ml-auto w-1/5 text-center text-base font-bold">
                    <p className="dark:text-green-600 text-green-800"> {c?.likes}</p>
                    <p className="dark:text-red-600 text-red-800"> {c?.dislikes}</p>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default CommentLabel;
