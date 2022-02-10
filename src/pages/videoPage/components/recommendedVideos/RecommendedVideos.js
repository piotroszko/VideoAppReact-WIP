import React, { useRef, useState } from "react";

import "./RecommendedVideos.css";
import ScrollSvg from "./icons/scroll.svg";
import VideoCard from "./../../../../components/VideoCard/VideoCard";
import { t } from "i18next";

const RecommendedVideos = () => {
  const refBar = useRef(null);
  const [slideAnim, SetSlideAnim] = useState("");

  const onScroll = (e) => {
    if (e.deltaY < 0) {
      scrollLeft(false);
    } else {
      scrollLeft(true);
    }
  };
  const scrollLeft = (scrollLeft) => {
    if (scrollLeft) {
      refBar.current.scrollBy({
        top: 0,
        left: 300,
        behavior: "smooth",
      });
    } else {
      refBar.current.scrollBy({
        top: 0,
        left: -300,
        behavior: "smooth",
      });
    }
  };
  const enableScroll = () => {
    document.removeEventListener("wheel", preventDefault, false);
  };
  const disableScroll = () => {
    document.addEventListener("wheel", preventDefault, {
      passive: false,
    });
  };
  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  }
  const handleSlideAnim = () => {
    if (slideAnim === "" || slideAnim === "hide") {
      SetSlideAnim("show");
    } else {
      SetSlideAnim("hide");
    }
  };
  return (
    <>
      <div
        className={`${slideAnim === "show" ? "animate-slideBottom" : ""}
        ${slideAnim === "hide" ? "animate-slideTop" : ""}
        ${slideAnim === "" ? "animStartTop" : ""}
        mt-2 w-full h-0 dark:bg-gray-800 bg-white z-0`}
      >
        <div
          className="relative flex flex-row w-full h-64 border-4 border-gray-500 rounded-b-xl overflow-hidden"
          onWheel={onScroll}
          onMouseEnter={disableScroll}
          onMouseLeave={enableScroll}
        >
          <div
            onClick={() => scrollLeft(false)}
            className="absolute z-50 top-1/4 w-14 h-16 bg-gray-300 rounded-r-2xl opacity-75 cursor-pointer"
          >
            {" "}
            <img
              style={{ transform: "rotate(-180deg)" }}
              className="mr-1 mt-2 h-12"
              src={ScrollSvg}
              alt="<-"
            ></img>{" "}
          </div>
          <div
            onClick={() => scrollLeft(true)}
            className="absolute z-50 right-0 top-1/4 w-14 h-16 bg-gray-300 rounded-l-2xl opacity-75 cursor-pointer"
          >
            {" "}
            <img className="ml-2 mt-2 h-12" src={ScrollSvg} alt="<-"></img>{" "}
          </div>
          <div
            className="scroll-smooth flex flex-row pl-8 pr-8 w-full h-60 overflow-hidden"
            ref={refBar}
          >
            <div className="w-50 h-60">
              <VideoCard></VideoCard>
            </div>
            <div className="w-80 h-60">
              <VideoCard></VideoCard>
            </div>
            <div className="w-80 h-60">
              <VideoCard></VideoCard>
            </div>
            <div className="w-80 h-60">
              <VideoCard></VideoCard>
            </div>
            <div className="w-80 h-60">
              <VideoCard></VideoCard>
            </div>
            <div className="w-80 h-60">
              <VideoCard></VideoCard>
            </div>
            <div className="w-80 h-60">
              <VideoCard></VideoCard>
            </div>
            <div className="w-80 h-60">
              <VideoCard></VideoCard>
            </div>
            <div className="w-80 h-60">
              <VideoCard></VideoCard>
            </div>
            <div className="w-80 h-60">
              <VideoCard></VideoCard>
            </div>
            <div className="w-80 h-60">
              <VideoCard></VideoCard>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full dark:bg-gray-800 bg-white">
        <div
          onClick={() => handleSlideAnim()}
          className="h-min mx-auto p-2 w-min dark:bg-gray-200 bg-gray-800 rounded-b-xl cursor-pointer select-none"
        >
          <button className="w-full h-2 text-gray-200 dark:text-gray-800 whitespace-nowrap font-bold">
            <p
              className={`${slideAnim === "show" ? "animate-scaleIn" : ""}
                ${slideAnim === "hide" ? "animate-scaleOut" : ""}
                ${slideAnim === "" ? "scale-0 hidden" : ""} h-0`}
            >
              {t("hide")}
            </p>
            <p
              className={`${slideAnim === "show" ? "animate-scaleOut" : ""}
                ${slideAnim === "hide" ? "animate-scaleIn" : ""}
                ${slideAnim === "" ? "scale-100" : ""} h-0`}
            >
              {t("showRecomendation")}
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default RecommendedVideos;
