import { DarkmodeContext } from "../../../utils/DarkmodeProvider";
import React, { useState, useContext } from "react";
import CommentLabel from "./components/CommentLabel";

const Comments = () => {
  const darkmode = useContext(DarkmodeContext);
  return (
    <div className="pt-16 w-full">
      <div className="flex flex-col w-3/4 ml-8 ">
        <div className="w-full flex flex-row justify-start pr-16 mt-10">
          <div className="flex flex-row items-center justify-center h-10">
            <svg
              className="mr-1 mt-2"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3
                    10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                stroke={darkmode.isDarkmode ? "#d9dbde" : "#4B5563"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21L15 15"
                stroke={darkmode.isDarkmode ? "#d9dbde" : "#4B5563"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="h-10">
              <input
                type="text"
                className="bg-gray-300 mt-2 mr-2 p-1 rounded-md my-auto"
                placeholder="Wyszukaj"></input>
            </div>
          </div>
          <div className="h-full flex flex-col justify-center items-center ml-6">
            <div className="relative mt-3">
              <input type="checkbox" id="sortbox" className="hidden absolute" />
              <label
                for="sortbox"
                className="flex items-center space-x-1 cursor-pointer focus:bg-gray-500 select-none">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7Z"
                    fill={darkmode.isDarkmode ? "#d9dbde" : "#4B5563"}
                  />
                  <path
                    d="M4 12C4 11.4477 4.44772 11 5 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H5C4.44772 13 4 12.5523 4 12Z"
                    fill={darkmode.isDarkmode ? "#d9dbde" : "#4B5563"}
                  />
                  <path
                    d="M5 16C4.44772 16 4 16.4477 4 17C4 17.5523 4.44772 18 5 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H5Z"
                    fill={darkmode.isDarkmode ? "#d9dbde" : "#4B5563"}
                  />
                </svg>
                <span className="text-medium dark:text-gray-200">
                  SORTUJ WEDŁUG
                </span>
              </label>
              <div
                id="sortboxmenu"
                className="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-50">
                <ul className="block text-right text-gray-900 z-50">
                  <li>
                    <button className="block w-full px-3 py-2 hover:bg-gray-200 z-50">
                      Najpopularniejsze
                    </button>
                  </li>
                  <li>
                    <button className="block w-full px-3 py-2 hover:bg-gray-200 z-50">
                      Od najnowszych
                    </button>
                  </li>
                  <li>
                    <button className="block w-full px-3 py-2 hover:bg-gray-200 z-50">
                      Od najstarszych
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-2 flex flex-col gap-2 pt-2">
          <CommentLabel></CommentLabel>
          <CommentLabel></CommentLabel>
        </div>
      </div>
    </div>
  );
};

export default Comments;
