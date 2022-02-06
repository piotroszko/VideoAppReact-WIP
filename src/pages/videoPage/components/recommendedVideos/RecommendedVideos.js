import React, { useRef } from "react";

import ScrollSvg from "./icons/scroll.svg";
import VideoCard from "./../../../../components/VideoCard/VideoCard";

const RecommendedVideos = () => {
  const refBar = useRef(null);

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
  return (
    <div className="mt-2 w-full h-72 dark:bg-gray-800 bg-white">
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
  );
};

export default RecommendedVideos;
