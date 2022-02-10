import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoPageInfo from "./components/videoPageInfo/VideoPageInfo";
import CommentsSection from "./components/commentsSection/CommentsSection";
import CommentForm from "./components/commentsSection/CommentForm";
import RecommendedVideos from "./components/recommendedVideos/RecommendedVideos";

const VideoPage = (props) => {
  let { id } = useParams();
  useEffect(() => {
    document.title = `Tytuł filmu`;
  }, []);
  return (
    <div className="pt-16">
      <div className="bg-black">
        <VideoPageInfo></VideoPageInfo>
        <VideoPlayer id={id}></VideoPlayer>
        <RecommendedVideos />
        <CommentForm />
        <CommentsSection />
      </div>
    </div>
  );
};

export default VideoPage;
