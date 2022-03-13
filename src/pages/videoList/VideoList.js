import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

import VideoGrid from "../../components/VideoGrid/VideoGrid";
import LoadingDots from "../../components/LoadingDots/LoadingDots";
import urls from "../../api/auth-ep";

const VideoList = () => {
  let { param } = useParams();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (location.pathname === "/new") {
      setLoading(true);
      document.title = `New videos - VideoAPP`;
      axios
        .post(urls.videos, {
          filter: "date",
          page: 0,
        })
        .then((res) => {
          setLoading(false);
          setData(res.data.videos);
        });
    } else if (location.pathname === "/top") {
      setLoading(true);
      document.title = `Top videos - VideoAPP`;
      axios
        .post(urls.videos, {
          filter: "views",
          page: 0,
        })
        .then((res) => {
          setLoading(false);
          setData(res.data.videos);
        });
    } else if (location.pathname === "/discover") {
      setLoading(true);
      document.title = `Discover videos - VideoAPP`;
      axios
        .post(urls.videos, {
          filter: "name",
          page: 0,
        })
        .then((res) => {
          setLoading(false);
          setData(res.data.videos);
        });
    } else if (location.pathname.includes("search/")) {
      setLoading(true);
      document.title = `${param} - VideoAPP`;
      console.log(param);
      axios
        .post(urls.videos, {
          name: param,
          filter: "name",
          page: 0,
        })
        .then((res) => {
          setLoading(false);
          setData(res.data.videos);
        });
    } else {
      setLoading(true);
      document.title = `VideoAPP`;
      axios.post(urls.videos).then((res) => {
        setLoading(false);
        setData(res.data.videos);
      });
    }
  }, [location.pathname]);
  return (
    <div className="mt-12 pt-16 w-full dark:bg-gray-800 sm:mt-14 md:mt-16 lg:mt-0">
      {location.pathname.includes("search/") ? (
        <div className="flex flex-row mx-auto w-max text-lg lg:mt-6">
          {" "}
          <div className="dark:text-gray-200"> Wyszukiwane hasło: </div>{" "}
          <div className="ml-2 dark:text-gray-200 font-bold">{param}</div>
        </div>
      ) : (
        ""
      )}
      {loading ? <LoadingDots></LoadingDots> : ""}
      {typeof data === "undefined" && !loading ? (
        <div className="dark:text-gray-200 text-lg font-bold"> Nie odnaleziono filmów </div>
      ) : (
        ""
      )}
      <VideoGrid videos={data} className="mx-auto"></VideoGrid>
    </div>
  );
};
export default VideoList;
