import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { t } from "i18next";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

import ChannelPage from "../../../channelPage/ChannelPage";
import "./VideoPageInfo.css";
import { useUser } from "../../../../utils";
const VideoPageInfo = (props) => {
  const { user } = useUser();
  const { mutate } = useSWRConfig();
  const axiosInstance = axios.create();

  const { data, error } = useSWR(
    props.data
      ? "http://localhost:4000/api/v1/video/like/" + props.data.id + "?application=api-jwt"
      : "",
    (url) => {
      if (localStorage.getItem("token") !== null) {
        axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
        return axiosInstance.get(url).then((res) => {
          if (res.data.likeStatus === "like") {
            setLiked(true);
            setDisliked(false);
          } else if (res.data.likeStatus === "dislike") {
            setLiked(false);
            setDisliked(true);
          } else {
            setLiked(false);
            setDisliked(false);
          }
          return res.data;
        });
      }
    }
  );

  const [isInfo, setIsInfo] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeHover, setLikeHover] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [dislikeHover, setDislikeHover] = useState(false);

  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isDislikeActive, setIsDislikeActive] = useState(false);
  useEffect(() => {
    if (liked) {
      setIsLikeActive(true);
    } else {
      if (likeHover) {
        setIsLikeActive(true);
      } else {
        setIsLikeActive(false);
      }
    }
  }, [liked, likeHover]);
  useEffect(() => {
    if (disliked) {
      setIsDislikeActive(true);
    } else {
      if (dislikeHover) {
        setIsDislikeActive(true);
      } else {
        setIsDislikeActive(false);
      }
    }
  }, [disliked, dislikeHover]);
  const onLikeClick = () => {
    if (localStorage.getItem("token") !== null) {
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      if (liked) {
        axiosInstance
          .post(
            "http://localhost:4000/api/v1/video/unlike/" + props.data.id + "?application=api-jwt"
          )
          .then((data) => {
            mutate(
              "http://localhost:4000/api/v1/video/like/" + props.data.id + "?application=api-jwt"
            );
            mutate("http://localhost:4000/api/v1/video/v/" + props.data.id);
          });
      } else {
        axiosInstance
          .post("http://localhost:4000/api/v1/video/like/" + props.data.id + "?application=api-jwt")
          .then((data) => {
            mutate(
              "http://localhost:4000/api/v1/video/like/" + props.data.id + "?application=api-jwt"
            );
            mutate("http://localhost:4000/api/v1/video/v/" + props.data.id);
          });
      }
    }
  };
  const onDislikeClick = () => {
    if (localStorage.getItem("token") !== null) {
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      if (disliked) {
        axiosInstance
          .post(
            "http://localhost:4000/api/v1/video/unlike/" + props.data.id + "?application=api-jwt"
          )
          .then((data) => {
            mutate(
              "http://localhost:4000/api/v1/video/like/" + props.data.id + "?application=api-jwt"
            );
            mutate("http://localhost:4000/api/v1/video/v/" + props.data.id);
          });
      } else {
        axiosInstance
          .post(
            "http://localhost:4000/api/v1/video/dislike/" + props.data.id + "?application=api-jwt"
          )
          .then((data) => {
            mutate(
              "http://localhost:4000/api/v1/video/like/" + props.data.id + "?application=api-jwt"
            );
            mutate("http://localhost:4000/api/v1/video/v/" + props.data.id);
          });
      }
    }
  };

  return (
    <>
      <div className="flex gap-4 items-center mt-16 h-16 text-gray-300 lg:gap-10 lg:mb-0 lg:mt-0 lg:pt-0">
        <div className="relative justify-self-start mt-6 w-1/3 h-full sm:w-1/3">
          <p className="text-medium my-auto p-1 font-bold md:absolute md:right-1/4 lg:ml-auto">
            {props?.data?.name}
          </p>
        </div>
        <div className="flex pr-2 py-2 w-1/3 h-4/5 sm:w-1/3">
          <div
            onMouseEnter={() => {
              setLikeHover(true);
            }}
            onMouseLeave={() => {
              setLikeHover(false);
            }}
            onClick={() => onLikeClick()}
            className={`${
              isLikeActive ? "likeActive" : "likeUnactive"
            } center backGroundSize2X w-1/2 h-full text-center text-base font-semibold bg-gradient-to-l border-gray-400 rounded-l-md from-green-600 to-green-400 via-green-500 cursor-pointer select-none transition-all duration-500`}
          >
            <p className="mt-1 text-xs font-bold sm:text-sm md:text-base">
              {props.data ? props.data.likes : "0"}
            </p>
          </div>
          <div
            onMouseEnter={() => setDislikeHover(true)}
            onMouseLeave={() => setDislikeHover(false)}
            onClick={() => onDislikeClick()}
            className={`text-medium
            ${isDislikeActive ? "dislikeActive" : "dislikeUnactive"}
            center  w-1/2 h-full backGroundSize2X text-center bg-gradient-to-r rounded-r-md from-red-300 to-red-800 via-red-500 cursor-pointer select-none transition-all duration-500`}
          >
            <p className="mt-1 text-xs font-bold sm:text-sm md:text-base">
              {props.data ? props.data.dislikes : "0"}
            </p>
          </div>
        </div>
        <div className="relative justify-self-start mt-7 w-1/3 h-full sm:w-1/3">
          <div className="flex flex-col h-full">
            <Link to={"/channel/" + props?.data?.userID} component={<ChannelPage />}>
              <p className="text-medium h-1/2 hover:underline font-bold">
                {props?.data?.channelName}
              </p>
            </Link>
            <div className="h-1/4 text-xs">
              <p className="cursor-pointer" onClick={() => setIsInfo(!isInfo)}>
                {isInfo ? t("hideDesc") : t("showDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isInfo ? "" : "hidden"} h-20 flex flex-row text-gray-200`}>
        <div className="pl-4 w-1/2 text-xs">{props?.data?.description}</div>
        <div className="flex flex-row w-1/2">
          Statystyki
          <div></div>
        </div>
      </div>
    </>
  );
};

export default VideoPageInfo;
