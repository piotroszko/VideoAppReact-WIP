import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import "./ListsPage.css";
import { usePlaylists } from "./../../utils";
import VideoGrid from "./../../components/VideoGrid/VideoGrid";

const ListsPage = () => {
  const flexBox = useRef(null);
  let { section, playlist } = useParams();
  const { data } = usePlaylists();

  const [currentSection, setCurrentSection] = useState(section ? section : "history");
  const [currentPlaylist, setCurrentPlaylist] = useState(playlist ? playlist : "");
  const [scrollbarVisible, setScrollbarVisible] = useState(false);
  useEffect(() => {
    if (currentSection === "history") {
    } else if (currentPlaylist === "toWatch") {
    } else if (currentPlaylist === "playlist") {
      if (currentPlaylist === "") {
        setCurrentSection("toWatch");
      }
    }
  }, [currentSection, currentPlaylist]);
  useEffect(() => {
    window.addEventListener("resize", updateSize);
  }, []);
  const updateSize = () => {
    if (flexBox.current.scrollWidth > flexBox.current.clientWidth) {
      setScrollbarVisible(true);
    } else {
      setScrollbarVisible(false);
    }
  };
  const handleClickTab = (section, playlistID) => {};

  return (
    <div className="flex flex-col mt-12 pt-8 w-full dark:bg-gray-800 sm:mt-10 md:mt-16 md:pt-2 lg:mt-0 lg:pt-20">
      <div className="flex flex-row mx-auto px-2 py-1 w-full whitespace-nowrap bg-gray-200 dark:bg-gray-700 rounded-lg overflow-x-hidden md:w-3/4">
        <div
          ref={flexBox}
          className={` ${
            scrollbarVisible ? "pb-1" : ""
          } scrollBar flex flex-row rounded-md overflow-x-auto`}
        >
          <div className="py-1 border-b-2 hover:border-gray-600 border-transparent">
            <button
              onClick={() => setCurrentSection("history")}
              className={`${
                currentSection === "history" ? "border-l-4 border-r-4 border-gray-600" : ""
              } mx-2 p-2 font-bold bg-gray-400 rounded-lg`}
            >
              {" "}
              HISTORIA{" "}
            </button>
          </div>
          <div className="py-1 border-b-2 hover:border-gray-600 border-transparent">
            <button
              onClick={() => setCurrentSection("toWatch")}
              className={`${
                currentSection === "toWatch" ? "border-l-4 border-r-4 border-gray-600" : ""
              } mx-2 p-2 font-bold bg-gray-400 rounded-lg`}
            >
              {" "}
              DO OBEJRZENIA{" "}
            </button>
          </div>
          <div className="border-r-2 border-gray-500"></div>
          {data
            ? data.playlists.map((p) => (
                <div className="py-1 border-b-2 hover:border-gray-600 border-transparent">
                  <button
                    onClick={() => {
                      setCurrentSection("playlists");
                      setCurrentPlaylist(p._id);
                    }}
                    className={`${
                      currentSection === "playlists" && currentPlaylist === p._id
                        ? "border-l-4 border-r-4 border-gray-600"
                        : ""
                    } mx-2 p-2 font-bold bg-gray-400 rounded-lg`}
                  >
                    {p.name}
                  </button>
                </div>
              ))
            : ""}
        </div>
      </div>
      <div className="mt-1 mx-auto w-full max-w-full h-32 min-h-full bg-gray-100 dark:bg-gray-600 rounded-md md:w-11/12">
        <VideoGrid sortBar={true}></VideoGrid>
      </div>
    </div>
  );
};

export default ListsPage;
