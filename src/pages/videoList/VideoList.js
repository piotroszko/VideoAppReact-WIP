import axios from "axios";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useLocation } from "react-router-dom";

import VideoGrid from "../../components/VideoGrid/VideoGrid";
import LoadingDots from "../../components/LoadingDots/LoadingDots";
import urls from "../../api/auth-ep";

const VideoList = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (location.pathname.includes("new")) {
      document.title = `New videos - VideoAPP`;
      axios
        .post(urls.videos, {
          filter: "date",
          page: 0,
        })
        .then((res) => {
          setData(res.data.videos);
        });
    } else if (location.pathname.includes("top")) {
      document.title = `Top videos - VideoAPP`;
      axios
        .post(urls.videos, {
          filter: "views",
          page: 0,
        })
        .then((res) => {
          setData(res.data.videos);
        });
    } else if (location.pathname.includes("discover")) {
      document.title = `Discover videos - VideoAPP`;
      axios
        .post(urls.videos, {
          filter: "name",
          page: 0,
        })
        .then((res) => {
          setData(res.data.videos);
        });
    } else {
      document.title = `VideoAPP`;
      axios.post(urls.videos).then((res) => {
        setData(res.data.videos);
      });
    }
  }, [location.pathname]);
  return (
    <div className="mt-12 pt-16 w-full dark:bg-gray-800 sm:mt-14 md:mt-16 lg:mt-0">
      {typeof data === "undefined" ? <LoadingDots></LoadingDots> : ""}
      <VideoGrid videos={data} className="mx-auto"></VideoGrid>
    </div>
  );
};
export default VideoList;
