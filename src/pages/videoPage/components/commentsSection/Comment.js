import React, { useState, useContext } from "react";
import { t } from "i18next";

import "./Comment.css";
import ArrowSvg from "./controls/arrow.svg";
import { DarkmodeContext } from "../../../../utils/DarkmodeProvider";

const Comment = () => {
  const [interactionHover, setInteractionHover] = useState(false);
  const darkmode = useContext(DarkmodeContext);
  const onLikeClick = () => {};
  const onDislikeClick = () => {};
  return (
    <div className="mx-auto px-0 w-full border-b-2 dark:border-gray-800 sm:w-3/4">
      <div className="relative flex items-stretch m-0 dark:bg-gray-700 bg-white">
        <div className="flex-no-shrink relative flex flex-col justify-evenly w-16 select-none sm:w-1/6">
          <div
            className={`${darkmode.isDarkmode ? "DarkfoldLT" : "foldLT"} z-10 mb-auto w-1/2 h-10`}
            onMouseEnter={() => setInteractionHover(true)}
            onMouseLeave={() => setInteractionHover(false)}
          >
            <p className="textLT">+</p>
          </div>
          <div
            className={`${
              interactionHover ? "likeCount" : ""
            }  flex flex-col justify-center w-1/2 h-10 text-left transition-all duration-500 ml-1`}
          >
            <p className="my-auto text-left text-xl font-bold">+10</p>
          </div>
          <div
            className={`${darkmode.isDarkmode ? "DarkfoldLB" : "foldLB"} mt-auto w-1/2 h-10`}
            onMouseEnter={() => setInteractionHover(true)}
            onMouseLeave={() => setInteractionHover(false)}
          >
            <p className="textLB">-</p>
          </div>
        </div>
        <div className="h-max self-stretch w-2/3">
          <div className="pr-6 h-full">
            <h4 className="text-md h-1/5 text-left font-medium md:text-xl">Niezłe wideo</h4>
            <p className="md:text-md h-3/5 text-left text-sm leading-normal">
              Naprawde spoko wideo! Like!
            </p>
            <div className="flex h-1/5 text-right text-xs sm:text-sm">
              <p className="text-left">16:00 20.05.2021</p>
              <p className="ml-auto text-right">{t("comReport")}</p>
            </div>
          </div>
        </div>

        <div className="flex-no-shrink p-1 w-1/6">
          <img
            alt=""
            className="block mx-auto w-auto h-2/5 rounded-3xl sm:h-1/2 lg:w-32 lg:h-32"
            src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          />
          <div className="mb-4 p-0 sm:px-4">
            <h4 className="mx-auto text-center whitespace-normal text-xs font-medium sm:text-sm">
              Nickname add
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
