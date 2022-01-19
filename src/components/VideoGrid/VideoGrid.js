import React, { useState } from "react";
import VideoCard from "../VideoCard/VideoCard";

const  VideoGrid = () => {
    return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 pt-5 sm:pt-0">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
    </div>
    );
}

export default VideoGrid;