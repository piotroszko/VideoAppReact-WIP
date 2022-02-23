import axios from "axios";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

import VideoGrid from "../../components/VideoGrid/VideoGrid";
import LoadingDots from "../../components/LoadingDots/LoadingDots";
import urls from "../../api/auth-ep";

const VideoList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    document.title = `VideoAPP`;
    axios.post(urls.videos).then((res) => {
      setData(res.data.videos);
    });
  }, []);
  return (
    <div className="mt-12 pt-16 w-full dark:bg-gray-800 sm:mt-14 md:mt-16 lg:mt-0">
      {typeof data === "undefined" ? <LoadingDots></LoadingDots> : ""}
      <VideoGrid videos={data} className="mx-auto"></VideoGrid>
    </div>
  );
};
export default VideoList;
