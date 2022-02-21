import axios from "axios";
import React, { useEffect } from "react";
import useSWR from "swr";

import VideoGrid from "../../components/VideoGrid/VideoGrid";
import LoadingDots from "../../components/LoadingDots/LoadingDots";
import urls from "../../api/auth-ep";

const VideoList = () => {
  const { data, error } = useSWR(urls.videos, (url) =>
    axios.get(url).then((res) => {
      return res.data.videos;
    })
  );
  useEffect(() => {
    document.title = `VideoAPP`;
  }, []);
  return (
    <div className="mt-12 pt-16 w-full dark:bg-gray-800 sm:mt-14 md:mt-16 lg:mt-0">
      {typeof data === "undefined" ? <LoadingDots></LoadingDots> : ""}
      <VideoGrid videos={data} className="mx-auto"></VideoGrid>
    </div>
  );
};
export default VideoList;
