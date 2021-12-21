import VideoGrid from "../../components/VideoGrid/VideoGrid";
import React, { useEffect } from 'react'

function VideoList() {
    useEffect(() => {
      document.title = `VideoAPP`
    }, [])
    return (
        <VideoGrid></VideoGrid>
    );
  }
export default VideoList;