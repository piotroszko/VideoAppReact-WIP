import React, { useState, useEffect, useRef, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { t } from "i18next";
import { useLocation } from "react-router-dom";

import "./ListsPage.css";
import { usePlaylists } from "./../../utils";
import VideoList from "./../../components/VideoList/VideoList";
import urls from "./../../api/auth-ep";

export let refreshDataContext = createContext();

const ListsPage = () => {
  const location = useLocation();
  const axiosInstance = axios.create();
  const flexBox = useRef(null);
  let { section, playlist } = useParams();
  const { data } = usePlaylists();

  const [currentSection, setCurrentSection] = useState(section ? section : "history");
  const [currentPlaylist, setCurrentPlaylist] = useState(playlist ? playlist : "");
  const [refresh, setRefresh] = useState(false);
  const [scrollbarVisible, setScrollbarVisible] = useState(false);

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    if (section === "history") {
      setCurrentSection("history");
      setCurrentPlaylist("");
    } else if (section === "toWatch") {
      setCurrentSection("toWatch");
      setCurrentPlaylist("");
    } else if (section === "playlist") {
      if (playlist) {
        setCurrentSection("playlist");
        setCurrentPlaylist(playlist);
      }
    }
  }, [location.pathname]);
  useEffect(() => {
    axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
    if (currentSection === "history") {
      if (localStorage.getItem("token") !== null) {
        axiosInstance
          .get(urls.getHistory)
          .then((res) => {
            if (res) {
              setVideos(res.data);
            }
          })
          .catch((err) => {});
      }
    } else if (currentSection === "toWatch") {
      if (localStorage.getItem("token") !== null) {
        axiosInstance
          .get(urls.getToWatch)
          .then((res) => {
            if (res) {
              setVideos(res.data);
            }
          })
          .catch((err) => {});
      }
    } else if (currentSection === "playlist") {
      if (currentPlaylist === "") {
        setCurrentSection("toWatch");
      } else {
        if (localStorage.getItem("token") !== null) {
          axiosInstance
            .get(urls.getPlaylist + currentPlaylist + "/" + urls.aplicationTag)
            .then((res) => {
              if (res) {
                setVideos(res.data);
              }
            })
            .catch((err) => {});
        }
      }
    }
  }, [currentSection, currentPlaylist, refresh]);
  useEffect(() => {
    document.title = t("listsPageTitle");
    window.addEventListener("resize", updateSize);
  }, []);

  const updateSize = () => {
    if (flexBox?.current?.scrollWidth > flexBox?.current?.clientWidth) {
      setScrollbarVisible(true);
    } else {
      setScrollbarVisible(false);
    }
  };

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
              onClick={() => {
                if (currentSection !== "history") {
                  setVideos([]);
                  setCurrentSection("history");
                  setCurrentPlaylist("");
                  location.pathname = "/history";
                }
              }}
              className={`${
                currentSection === "history" ? "border-l-4 border-r-4 border-gray-600" : ""
              } mx-2 p-2 font-bold bg-gray-400 rounded-lg`}
            >
              {t("videosHistory")}
            </button>
          </div>
          <div className="py-1 border-b-2 hover:border-gray-600 border-transparent">
            <button
              onClick={() => {
                if (currentSection !== "toWatch") {
                  setVideos([]);
                  setCurrentSection("toWatch");
                  setCurrentPlaylist("");
                }
              }}
              className={`${
                currentSection === "toWatch" ? "border-l-4 border-r-4 border-gray-600" : ""
              } mx-2 p-2 font-bold bg-gray-400 rounded-lg`}
            >
              {t("watchlist")}
            </button>
          </div>
          <div className="border-r-2 border-gray-500"></div>
          {data
            ? data.playlists.map((p) => (
                <div className="py-1 border-b-2 hover:border-gray-600 border-transparent">
                  <button
                    onClick={() => {
                      if (currentSection !== "playlist" || currentPlaylist !== p._id.toString()) {
                        setVideos([]);
                        setCurrentSection("playlist");
                        setCurrentPlaylist(p._id);
                      }
                    }}
                    className={`${
                      currentSection === "playlists" || currentPlaylist === p._id.toString()
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
      <div className="mt-1 mx-auto w-full max-w-full min-h-full bg-gray-100 dark:bg-gray-600 rounded-md md:w-2/3">
        <refreshDataContext.Provider value={{ refresh, setRefresh }}>
          {currentSection === "history" && videos ? (
            <VideoList sortBar videos={videos} history></VideoList>
          ) : (
            ""
          )}
          {currentSection === "toWatch" && videos ? (
            <VideoList sortBar videos={videos} toWatch></VideoList>
          ) : (
            ""
          )}
          {currentSection === "playlist" && videos ? (
            <VideoList sortBar videos={videos} playlist={currentPlaylist}></VideoList>
          ) : (
            ""
          )}
        </refreshDataContext.Provider>
      </div>
    </div>
  );
};

export default ListsPage;
