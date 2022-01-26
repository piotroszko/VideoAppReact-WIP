import VideoGrid from "../../components/VideoGrid/VideoGrid";
import React, { useEffect } from "react";

function VideoList() {
  useEffect(() => {
    document.title = `VideoAPP`;
  }, []);
  return (
    <div className="mt-12 pt-16 w-full dark:bg-gray-800 sm:mt-14 md:mt-16 lg:mt-0">
      <VideoGrid className="mx-auto"></VideoGrid>
    </div>
  );
}
export default VideoList;
