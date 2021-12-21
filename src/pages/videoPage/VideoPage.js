import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoPageInfo from "./components/videoPageInfo/VideoPageInfo";
import React, { useEffect } from 'react'

const  VideoPage = (props) => {
    useEffect(() => {
        document.title = `Tytuł filmu`
    }, [])
    return (
        <div className="">
            <div className="bg-black">
                <VideoPageInfo></VideoPageInfo>
                <VideoPlayer></VideoPlayer>
            </div>
            
        </div>
    );
}

export default VideoPage;