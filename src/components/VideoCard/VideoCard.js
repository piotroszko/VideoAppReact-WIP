import "./VideoCard.css";
import ReactFreezeframe from "react-freezeframe";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";

import GifBunny from "./placeholders/bunny.gif";
import Bunny from "./placeholders/bunnyimg.png";
import addSvg from "./placeholders/addToWatch.svg";
import dotsSvg from "./placeholders/dots.svg";
import VideoPage from "../../pages/videoPage/VideoPage";
import ChannelPage from "../../pages/channelPage/ChannelPage";

const VideoCard = () => {
  const [mouseOn, setMouseOn] = useState("");

  let navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/video/2", { replace: true });
  };
  return (
    <div className="p-3 videoCard flex-1 relative dark:text-gray-200 mx-auto">
      <div
        className=" relative order-1 cursor-pointer"
        onClick={mouseOn === "video" ? () => handleOnClick() : null}
        onMouseEnter={() => setMouseOn("video")}
        onMouseLeave={() => setMouseOn("")}>
        <div className="flex flex-col absolute z-20 right-1 top-1 gap-1">
          <div
            className=" bg-gray-400 w-8 h-8 addToWatch"
            onMouseEnter={() => setMouseOn("watch")}
            onMouseLeave={() => setMouseOn("video")}>
            <img src={addSvg} alt="add" className="w-6 h-6 m-auto mt-1"></img>
          </div>
          <Popup
            trigger={
              <div
                className=" bg-gray-400 w-8 h-8 addToWatch flex items-center justify-center"
                onMouseEnter={() => setMouseOn("options")}
                onMouseLeave={() => setMouseOn("video")}>
                <img src={dotsSvg} alt="add" className="w-7 h-7"></img>
              </div>
            }
            position="left center"
            closeOnDocumentClick>
            <div className="bg-gray-400 rounded-lg pt-1 pb-3 w-40 flex flex-col">
              <p className="mx-auto text-center text-white font-bold ">
                {" "}
                Dodaj do playlisty:{" "}
              </p>
              <p className="text-center text-white rounded-md border-2 border-gray-200 px-1 mt-1 mx-2 hover:bg-gray-500 cursor-pointer overflow-hidden">
                {" "}
                Playlista 1{" "}
              </p>
            </div>
          </Popup>
        </div>
        <div className="flex flex-col absolute right-12 top-5 z-20 gap-2">
          <div
            className={`${
              mouseOn === "watch" ? "" : "hidden"
            }  bg-gray-600 text-gray-200 rounded-lg p-1`}>
            <p> Do obejrzenia </p>
          </div>
          <div
            className={`${
              mouseOn === "options" ? "" : "hidden"
            }  bg-gray-600 text-gray-200 rounded-lg p-1`}>
            <p> Dodaj do playlisty </p>
          </div>
        </div>

        <img
          className={`${
            mouseOn === "video" ? "z-0" : "z-10"
          } absolute object-cover w-full`}
          src={Bunny}
          alt=""
        />
        <ReactFreezeframe
          className={`${mouseOn === "" ? "z-10" : "z-0"} absolute`}
          src={GifBunny}
        />
      </div>
      <div className="flex ">
        <Link to="/video/2" component={<VideoPage />}>
          <p className="text-left font-semibold text-sm sm:text-md w-2/3 cursor-pointer ">
            {" "}
            Video na temat królików
          </p>
        </Link>
        <p className="w-1/3 text-sm italic ml-auto mr-3 text-right"> 2 lata</p>
      </div>
      <Link to="/channel/test" component={<ChannelPage />}>
        <p className="text-center w-full text-sm whitespace-nowrap hover:underline">
          {" "}
          Nazwa kanału
        </p>
      </Link>
      <p className="text-right w-full text-sm whitespace-nowrap">
        {" "}
        Wyswietlenia: 20k
      </p>
      <div className="flex h-8 mt-1"></div>
    </div>
  );
};

export default VideoCard;
