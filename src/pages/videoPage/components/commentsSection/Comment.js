import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useSWRConfig } from "swr";
import { t } from "i18next";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { toast } from "react-toastify";

import "./Comment.css";
import { DarkmodeContext } from "../../../../utils/DarkmodeProvider";
import ChannelPage from "../../../channelPage/ChannelPage";
import { useUser, useAvatar } from "../../../../utils";
import urls from "../../../../api/auth-ep";

const Comment = (props) => {
  const { user } = useUser();
  const { mutate } = useSWRConfig();
  const axiosInstance = axios.create();

  const [liked, setLiked] = useState(false);
  const [likeHover, setLikeHover] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [dislikeHover, setDislikeHover] = useState(false);

  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isDislikeActive, setIsDislikeActive] = useState(false);
  const darkmode = useContext(DarkmodeContext);
  const onLikeClick = () => {
    if (localStorage.getItem("token") !== null) {
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      if (liked) {
        axiosInstance.post(urls.unlikeCom + props.data.id + urls.aplicationTag).then((data) => {
          changeLikeStatus(data);
          mutate(urls.allComVideo + props.data.videoID + urls.aplicationTag);
        });
      } else {
        axiosInstance.post(urls.likeCom + props.data.id + urls.aplicationTag).then((data) => {
          toast.info(t("notificationLikedCom"));
          changeLikeStatus(data);
          mutate(urls.allComVideo + props.data.videoID + urls.aplicationTag);
        });
      }
    } else {
      toast.info(t("notificationErrorLogin"));
    }
  };
  const onDislikeClick = () => {
    if (localStorage.getItem("token") !== null) {
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      if (disliked) {
        axiosInstance.post(urls.unlikeCom + props.data.id + urls.aplicationTag).then((data) => {
          changeLikeStatus(data);
          mutate(urls.allComVideo + props.data.videoID + urls.aplicationTag);
        });
      } else {
        axiosInstance.post(urls.dislikeCom + props.data.id + urls.aplicationTag).then((data) => {
          toast.info(t("notificationDislikedCom"));
          changeLikeStatus(data);
          mutate(urls.allComVideo + props.data.videoID + urls.aplicationTag);
        });
      }
    } else {
      toast.info(t("notificationErrorLogin"));
    }
  };
  const changeLikeStatus = (data) => {
    if (data.data.likeStatus === "none") {
      setLiked(false);
      setDisliked(false);
    } else if (data.data.likeStatus === "like") {
      setLiked(true);
      setDisliked(false);
    } else if (data.data.likeStatus === "dislike") {
      setLiked(false);
      setDisliked(true);
    }
  };
  const handleDelete = () => {
    if (localStorage.getItem("token") !== null) {
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      axiosInstance.delete(urls.deleteCom + props.data.id + urls.aplicationTag).then((data) => {
        toast.info(t("notificationDeletedCom"));
        mutate(urls.allComVideo + props.data.videoID + urls.aplicationTag);
      });
    } else {
      toast.info(t("notificationErrorLogin"));
    }
  };
  useEffect(() => {
    if (props?.data?.likeStatus === "like") {
      setLiked(true);
      setDisliked(false);
    } else if (props?.data?.likeStatus === "dislike") {
      setDisliked(true);
      setLiked(false);
    }
  }, [props.data.likeStatus]);
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

  const { data } = useAvatar(props.data.userID);
  return (
    <div className="cutCorners mx-auto px-0 w-full dark:border-gray-800 sm:w-3/4">
      <div className="relative flex items-stretch m-0 bg-gray-300 dark:bg-gray-700 rounded-xl">
        <div className="flex-no-shrink relative flex flex-col justify-evenly w-16 select-none sm:w-1/6">
          <div
            className={`${
              darkmode.isDarkmode ? "DarkfoldLT" : "foldLT"
            } z-10 mb-auto w-1/2 h-10 cursor-pointer ${
              isLikeActive ? "foldLTActive" : "foldLTUnactive"
            } `}
            onMouseEnter={() => {
              setLikeHover(true);
            }}
            onMouseLeave={() => {
              setLikeHover(false);
            }}
            onClick={() => onLikeClick()}
          >
            <p className={`textLT ${isLikeActive ? "textLTActive" : ""}`}>+</p>
          </div>
          <div
            className={`${
              likeHover || dislikeHover ? "likeCount" : ""
            }  flex flex-col justify-center w-1/2 h-10 text-left transition-all duration-500 ml-1`}
          >
            <p className="my-auto text-left text-xl font-bold">
              {props?.data?.likes - props?.data?.dislikes}
            </p>
          </div>
          <div
            className={`${
              darkmode.isDarkmode ? "DarkfoldLB" : "foldLB"
            } mt-auto w-1/2 h-10 cursor-pointer ${
              isDislikeActive ? "foldLBActive" : "foldLBUnactive"
            }`}
            onMouseEnter={() => setDislikeHover(true)}
            onMouseLeave={() => setDislikeHover(false)}
            onClick={() => onDislikeClick()}
          >
            <p className={`textLB ${isDislikeActive ? "textLBActive" : ""}`}>-</p>
          </div>
        </div>
        <div className="h-max self-stretch pt-2 w-2/3">
          <div className="pr-6 h-full">
            <h4 className="text-md h-1/5 text-left font-medium md:text-xl">{props?.data?.title}</h4>
            <p className="md:text-md h-3/5 text-left text-sm leading-normal">
              {props?.data?.content}
            </p>
            <div className="flex h-1/5 text-right text-xs sm:text-sm">
              <p className="text-left">
                <Moment format="HH:mm DD-MM-YYYY">{props?.data?.createdAt}</Moment>
              </p>
              {user?.id === props?.data?.userID ? (
                <p
                  className="ml-auto text-right text-red-800 font-bold cursor-pointer"
                  onClick={() => handleDelete()}
                >
                  {t("comDelete")}
                </p>
              ) : (
                <p className="ml-auto text-right">{t("comReport")}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex-no-shrink p-1 pt-3 w-1/6">
          <Link to={"/channel/" + props?.data?.userID} component={<ChannelPage />}>
            <img
              alt=""
              className="block mx-auto w-auto h-2/5 rounded-3xl sm:h-1/2 lg:w-32 lg:h-32"
              src={data}
            />
          </Link>
          <div className="my-1 p-0 sm:px-4">
            <Link to={"/channel/" + props?.data?.userID} component={<ChannelPage />}>
              <h4 className="dark:hover:bg-gray-600 mx-auto px-2 py-1 w-min text-center whitespace-normal text-xs font-medium hover:bg-gray-300 rounded-xl sm:text-sm">
                {props?.data?.userName}
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
