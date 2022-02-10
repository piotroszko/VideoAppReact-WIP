import axios from "axios";
import React, { useEffect } from "react";
import useSWR from "swr";

import VideoGrid from "../../components/VideoGrid/VideoGrid";

const VideoList = () => {
  const { data, error } = useSWR("http://localhost:4000/api/v1/video/vs/", (url) =>
    axios.get(url).then((res) => {
      return res.data.videos;
    })
  );
  useEffect(() => {
    document.title = `VideoAPP`;
  }, []);
  return (
    <div className="mt-12 pt-16 w-full dark:bg-gray-800 sm:mt-14 md:mt-16 lg:mt-0">
      <VideoGrid videos={data} className="mx-auto"></VideoGrid>
    </div>
  );
};
export default VideoList;
