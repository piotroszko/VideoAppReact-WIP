import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { t } from "i18next";

import VideoPage from "../../../videoPage/VideoPage";
import urls from "./../../../../api/auth-ep";
import EditVideo from "./../EditVideo";

const VideoLabel = ({ data }) => {
  return (
    <div className="flex flex-row gap-6 justify-between mx-auto w-11/12 h-24 bg-gray-300 rounded-md">
      {data?.publicity !== "hidden" ? (
        <img
          className={`block ml-4 mt-2 my-auto h-20 w-20 rounded-2xl`}
          src={urls.thumbnails + data.id + ".png"}
          alt=""
        />
      ) : (
        <div className="flex flex-col justify-center ml-4 mt-2 my-auto w-20 h-20 text-6xl bg-gray-400 rounded-2xl">
          <div className="text-gray-300"> X </div>
        </div>
      )}
      <div className="flex flex-col gap-1 pt-3">
        <p className="text-medium text-left hover:underline font-bold">
          <Link to={"/video/" + data?.id} component={<VideoPage />} className="">
            {data.name}
          </Link>
        </p>
        <p className="text-left text-sm">
          {t("views")}: {data.views}
        </p>
        <p className="text-left text-sm">
          {" "}
          <Moment format="HH:mm DD-MM-YYYY">{data.createdAt}</Moment>
        </p>
      </div>
      <div className="flex flex-col gap-3 ml-4 pt-3 text-left">
        <p className="text-green-700 text-lg font-bold">
          {data.likes} {t("likes")}
        </p>
        <p className="text-red-700 text-lg font-bold">
          {data.dislikes} {t("dislikes")}
        </p>
      </div>
      <div className="flex flex-row gap-3 items-center justify-end ml-6 mr-4 w-1/3 h-full">
        <Link to={"/profile/edit/" + data?.id} component={<EditVideo />} className="">
          <button className="text-bold w-30 my-auto p-3 h-1/2 hover:text-gray-200 text-lg bg-gray-200 hover:bg-gray-600 rounded-lg">
            {t("edit")}
          </button>
        </Link>
        <button className="text-bold w-30 my-auto p-3 h-1/2 hover:text-gray-200 text-lg bg-gray-200 hover:bg-red-700 rounded-lg">
          {t("delete")}
        </button>
      </div>
    </div>
  );
};

export default VideoLabel;
