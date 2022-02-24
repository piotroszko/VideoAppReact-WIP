import ReactFreezeframe from "react-freezeframe";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import Moment from "react-moment";
import { t } from "i18next";
import { toast } from "react-toastify";

import "./VideoCard.css";
import addSvg from "./placeholders/addToWatch.svg";
import dotsSvg from "./placeholders/dots.svg";
import VideoPage from "../../pages/videoPage/VideoPage";
import ChannelPage from "../../pages/channelPage/ChannelPage";
import { usePlaylists } from "../../utils";
import PlaylistRow from "./PlaylistRow";

const VideoCard = (props) => {
  const { data } = usePlaylists();
  const [mouseOn, setMouseOn] = useState("");
  const playlists = usePlaylists();

  let navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/video/" + props?.data?.id, { replace: true });
  };

  return (
    <div className="videoCard animation-button relative flex-1 mx-auto p-3 dark:text-gray-200">
      <div
        className="relative order-1 cursor-pointer"
        onClick={mouseOn === "video" ? () => handleOnClick() : null}
        onMouseEnter={() => setMouseOn("video")}
        onMouseLeave={() => setMouseOn("")}
      >
        <div className="absolute z-20 right-1 top-1 flex flex-col gap-1">
          <div
            className="addToWatch w-8 h-8 bg-gray-400"
            onMouseEnter={() => setMouseOn("watch")}
            onMouseLeave={() => setMouseOn("video")}
          >
            <img src={addSvg} alt="add" className="m-auto mt-1 w-6 h-6"></img>
          </div>
          <Popup
            trigger={
              <div
                className="addToWatch flex items-center justify-center w-8 h-8 bg-gray-400"
                onMouseEnter={() => setMouseOn("options")}
                onMouseLeave={() => setMouseOn("video")}
              >
                <img src={dotsSvg} alt="add" className="w-7 h-7"></img>
              </div>
            }
            position="left center"
            closeOnDocumentClick
          >
            <div className="flex flex-col pb-3 pt-1 w-40 bg-gray-400 rounded-lg">
              <p className="mx-auto text-center text-white font-bold"> {t("toPlaylist")}: </p>
              {data?.playlists
                ? data?.playlists.map((p) => (
                    <PlaylistRow
                      data={p}
                      videoID={props.data.id}
                      key={p._id}
                      videoAdd={(playlistID, videoID) => {
                        toast.info(t("addedToPlaylist"));
                        playlists.addToPlaylist(playlistID, videoID);
                      }}
                      videoRemove={(playlistID, videoID) => {
                        toast.info(t("removedFromPlaylist"));
                        playlists.removeFromPlaylist(playlistID, videoID);
                      }}
                    ></PlaylistRow>
                  ))
                : ""}
            </div>
          </Popup>
        </div>
        <div className="absolute z-20 right-12 top-5 flex flex-col gap-2">
          <div
            className={`${
              mouseOn === "watch" ? "" : "hidden"
            }  bg-gray-600 text-gray-200 rounded-lg p-1`}
          >
            <p> {t("toWatchlist")} </p>
          </div>
          <div
            className={`${
              mouseOn === "options" ? "" : "hidden"
            }  bg-gray-600 text-gray-200 rounded-lg p-1`}
          >
            <p> {t("toPlaylist")} </p>
          </div>
        </div>

        <img
          className={`${mouseOn === "video" ? "z-0" : "z-10"} absolute object-cover w-full`}
          src={
            props?.data?.id ? "http://localhost:4000/info/thumbnails/" + props.data.id + ".png" : ""
          }
          alt=""
        />
        <ReactFreezeframe
          className={`${mouseOn === "" ? "z-10" : "z-0"} absolute `}
          src={
            props?.data?.id ? "http://localhost:4000/info/preview/" + props.data.id + ".gif" : ""
          }
        />
      </div>
      <div className="flex flex-row">
        <Link to={"/video/" + props?.data?.id} component={<VideoPage />} className="w-2/3">
          <p className="sm:text-md text-left text-sm font-semibold cursor-pointer">
            {" "}
            {props?.data?.name ? props.data.name : ""}
          </p>
        </Link>
        <p className="ml-auto mr-3 w-1/3 text-right text-sm italic">
          <Moment toNow ago>
            {props?.data?.createdAt ? props?.data?.createdAt : ""}
          </Moment>
        </p>
      </div>
      <Link to={"/channel/" + props?.data?.userId} component={<ChannelPage />}>
        <p className="w-full text-center hover:underline whitespace-nowrap text-sm">
          {props?.data?.channelName ? props.data.channelName : "Channel"}
        </p>
      </Link>
      <p className="w-full text-right whitespace-nowrap text-sm">
        {" "}
        {t("views")}: {props?.data?.views ? props.data.views : "0"}
      </p>
      <div className="flex mt-1 h-8"></div>
    </div>
  );
};

export default VideoCard;
