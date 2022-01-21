import VideoGrid from "../../components/VideoGrid/VideoGrid";
import React, { useEffect } from 'react'

function VideoList() {
    useEffect(() => {
      document.title = `VideoAPP`
    }, [])
    return (
      <div className="mt-12 sm:mt-14 md:mt-14 lg:mt-0 dark:bg-gray-800 w-full">
        <VideoGrid className="mx-auto"></VideoGrid>
      </div>
    );
  }
export default VideoList;