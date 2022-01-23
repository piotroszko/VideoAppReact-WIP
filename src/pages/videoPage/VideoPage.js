import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoPageInfo from "./components/videoPageInfo/VideoPageInfo";
import React, { useEffect } from "react";
import CommentsSection from "./components/commentsSection/CommentsSection";
import CommentForm from "./components/commentsSection/CommentForm";
import RecommendedVideos from "./components/recommendedVideos/RecommendedVideos";

const VideoPage = (props) => {
  useEffect(() => {
    document.title = `Tytuł filmu`;
  }, []);
  return (
    <div className="pt-16">
      <div className="bg-black">
        <VideoPageInfo></VideoPageInfo>
        <VideoPlayer></VideoPlayer>
        <RecommendedVideos />
        <CommentForm />
        <CommentsSection />
      </div>
    </div>
  );
};

export default VideoPage;
