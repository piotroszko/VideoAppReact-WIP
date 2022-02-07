import { t } from "i18next";
import "./Comment.css";

import ArrowSvg from "./controls/arrow.svg";

const Comment = () => {
  const onLikeClick = () => {};
  const onDislikeClick = () => {};
  return (
    <div className="mx-auto px-0 w-full border-b-2 dark:border-gray-700 sm:w-3/4">
      <div className="relative flex m-0 dark:bg-gray-700 bg-white">
        <div className="flex-no-shrink p-1 w-1/6">
          <img
            alt=""
            className="block mx-auto w-auto h-2/5 rounded-3xl sm:h-1/2 lg:w-32 lg:h-32"
            src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          />
        </div>
        <div className="flex-no-shrink p-2 w-1/6 sm:w-1/5">
          <div className="mb-4 p-0 sm:px-4">
            <h4 className="ml-1 text-left whitespace-normal text-xs font-medium sm:text-sm">
              Nickname add
            </h4>
          </div>
          <div className="flex px-1">
            <img
              onClick={() => onLikeClick()}
              className="svgGreenFilter ml-0 cursor-pointer select-none"
              width="45"
              src={ArrowSvg}
              alt=""
            />
            <p className="self-center ml-2 text-green-600 text-lg font-semibold cursor-default">
              {" "}
              0{" "}
            </p>
          </div>
          <div className="flex px-1">
            <img
              onClick={() => onDislikeClick()}
              className="svgRedFilter ml-0 cursor-pointer select-none"
              width="45"
              style={{ transform: "rotate(180deg)" }}
              src={ArrowSvg}
              alt=""
            />
            <p className="self-center ml-2 text-red-600 text-lg font-semibold cursor-default">
              {" "}
              0{" "}
            </p>
          </div>
        </div>
        <div className="card-block relative flex-1 w-2/3">
          <div className="p-6">
            <h4 className="text-md mb-3 text-left font-medium md:text-xl">Niezłe wideo</h4>
            <p className="md:text-md text-left text-sm leading-normal">
              Naprawde spoko wideo! Like!
            </p>
            <div className="text-grey flex mt-6 text-right text-xs sm:text-sm">
              <p className="text-left">16:00 20.05.2021</p>
              <p className="ml-auto text-right">{t("comReport")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
