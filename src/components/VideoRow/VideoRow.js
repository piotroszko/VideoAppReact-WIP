import ReactFreezeframe from "react-freezeframe";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import { t } from "i18next";
import { toast } from "react-toastify";

import "./VideoRow.css";
import VideoPage from "../../pages/videoPage/VideoPage";
import ChannelPage from "../../pages/channelPage/ChannelPage";
import { refreshDataContext } from "./../../pages/listsPage/ListsPage";
import urls from "../../api/auth-ep";

const VideoRow = (props) => {
  const axiosInstance = axios.create();

  let { refresh, setRefresh } = useContext(refreshDataContext);

  const [mouseOn, setMouseOn] = useState("");
  const video = props.history || props.toWatch ? props.video.video : props.video;

  const handleDelete = () => {
    axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
    if (props.toWatch) {
      axiosInstance
        .delete(urls.removeFromToWatch + props.video._id + "/" + urls.aplicationTag)
        .then((res) => {
          toast.info(t("removedFromPlaylist"));
          setRefresh(!refresh);
        });
    } else if (props.history) {
      axiosInstance
        .delete(urls.removeFromHistory + props.video._id + urls.aplicationTag)
        .then((res) => {
          toast.info(t("removedFromPlaylist"));
          setRefresh(!refresh);
        });
    } else {
      axiosInstance
        .delete(
          urls.removeFromPlaylist + props.playlist + "/" + video.id + "/" + urls.aplicationTag
        )
        .then((res) => {
          toast.info(t("removedFromPlaylist"));
          setRefresh(!refresh);
        });
    }
  };

  return (
    <div className="flex flex-row w-full">
      <div
        className="relative w-1/3"
        onMouseOut={() => {
          setMouseOn(false);
        }}
        onMouseOver={() => {
          setMouseOn(true);
        }}
      >
        <Link to={"/video/" + video.id} component={<VideoPage />} className="w-2/3">
          <img
            className={`${mouseOn ? "z-0" : "z-10"} absolute object-cover w-full`}
            src={video.id ? "http://localhost:4000/info/thumbnails/" + video.id + ".png" : ""}
            alt=""
          />
          <ReactFreezeframe
            className={`${!mouseOn ? "z-10" : "z-0"} absolute `}
            src={video.id ? "http://localhost:4000/info/preview/" + video.id + ".gif" : ""}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-1 mt-2 pb-2 pl-2 w-1/3 text-left">
        <div>
          <Link to={"/video/" + video.id} component={<VideoPage />} className="w-2/3">
            <p className="sm:text-ld text-left text-base font-semibold cursor-pointer">
              {" "}
              {video.name ? video.name : ""}
            </p>
          </Link>
        </div>
        <div className="mr-auto mt-4">
          <Link to={"/channel/" + video.userId} component={<ChannelPage />}>
            <p className="w-full text-center hover:underline whitespace-nowrap text-sm">
              {video.channelName ? video.channelName : "Channel"}
            </p>
          </Link>
        </div>
        <div className="mr-auto">
          <p className="w-full text-right whitespace-nowrap text-sm">
            {" "}
            {t("views")}: {video.views ? video.views : "0"}
          </p>
        </div>
        <div className="mt-auto">
          <Moment toNow ago>
            {video.createdAt ? video.createdAt : ""}
          </Moment>
        </div>
      </div>
      <div className="pr-4 w-1/3 text-right">
        <div className="ml-auto">
          <button
            onClick={() => handleDelete()}
            className="p-2 w-min text-right text-gray-200 whitespace-nowrap text-sm hover:bg-gray-600 bg-gray-700 rounded-lg"
          >
            {t("delete")}
          </button>
        </div>
        <div className="flex flex-row gap-2 justify-end mt-2 w-full">
          {props.history && (
            <>
              <Moment toNow ago>
                {props.video.watchedAt ? props.video.watchedAt : ""}
              </Moment>
              <p>{t("watchedTimeAgo")}</p>
            </>
          )}
          {props.toWatch && (
            <>
              <p>{t("added")}:</p>
              <Moment toNow ago>
                {props.video.watchedAt ? props.video.watchedAt : ""}
              </Moment>
              <p>{t("ago")}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoRow;
