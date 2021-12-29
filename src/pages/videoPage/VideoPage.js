import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoPageInfo from "./components/videoPageInfo/VideoPageInfo";
import React, { useEffect } from 'react'
import CommentsSection from "./components/commentsSection/CommentsSection";
import CommentForm from "./components/commentsSection/CommentForm";

const  VideoPage = (props) => {
    useEffect(() => {
        document.title = `Tytuł filmu`
    }, [])
    return (
        <div className="">
            <div className="bg-black">
                <VideoPageInfo></VideoPageInfo>
                <VideoPlayer></VideoPlayer>
                <CommentForm/>
                <CommentsSection/>
            </div>
            
        </div>
    );
}

export default VideoPage;