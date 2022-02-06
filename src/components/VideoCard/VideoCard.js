import ReactFreezeframe from "react-freezeframe";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";

import "./VideoCard.css";
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
              <p className="mx-auto text-center text-white font-bold"> Dodaj do playlisty: </p>
              <p className="mt-1 mx-2 px-1 text-center text-white hover:bg-gray-500 border-2 border-gray-200 rounded-md cursor-pointer overflow-hidden">
                {" "}
                Playlista 1{" "}
              </p>
            </div>
          </Popup>
        </div>
        <div className="absolute z-20 right-12 top-5 flex flex-col gap-2">
          <div
            className={`${
              mouseOn === "watch" ? "" : "hidden"
            }  bg-gray-600 text-gray-200 rounded-lg p-1`}
          >
            <p> Do obejrzenia </p>
          </div>
          <div
            className={`${
              mouseOn === "options" ? "" : "hidden"
            }  bg-gray-600 text-gray-200 rounded-lg p-1`}
          >
            <p> Dodaj do playlisty </p>
          </div>
        </div>

        <img
          className={`${mouseOn === "video" ? "z-0" : "z-10"} absolute object-cover w-full`}
          src={Bunny}
          alt=""
        />
        <ReactFreezeframe
          className={`${mouseOn === "" ? "z-10" : "z-0"} absolute`}
          src={GifBunny}
        />
      </div>
      <div className="flex">
        <Link to="/video/2" component={<VideoPage />}>
          <p className="sm:text-md w-2/3 text-left text-sm font-semibold cursor-pointer">
            {" "}
            Video na temat królików
          </p>
        </Link>
        <p className="ml-auto mr-3 w-1/3 text-right text-sm italic"> 2 lata</p>
      </div>
      <Link to="/channel/test" component={<ChannelPage />}>
        <p className="w-full text-center hover:underline whitespace-nowrap text-sm">
          {" "}
          Nazwa kanału
        </p>
      </Link>
      <p className="w-full text-right whitespace-nowrap text-sm"> Wyswietlenia: 20k</p>
      <div className="flex mt-1 h-8"></div>
    </div>
  );
};

export default VideoCard;
