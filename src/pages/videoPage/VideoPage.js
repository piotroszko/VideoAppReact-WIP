import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoPageInfo from "./components/videoPageInfo/VideoPageInfo";
import CommentsSection from "./components/commentsSection/CommentsSection";
import RecommendedVideos from "./components/recommendedVideos/RecommendedVideos";

const VideoPage = () => {
  let { id } = useParams();
  const { data, error } = useSWR("http://localhost:4000/api/v1/video/v/" + id, (url) =>
    axios.get(url).then((res) => {
      document.title = res.data.name;
      return res.data;
    })
  );
  useEffect(() => {
    axios.post("http://localhost:4000/api/v1/video/viewed/" + id);
  }, []);
  return (
    <div className="pt-16">
      <div className="bg-black">
        <VideoPageInfo data={data}></VideoPageInfo>
        <VideoPlayer id={id}></VideoPlayer>
        <RecommendedVideos />
        <CommentsSection videoID={id} />
      </div>
    </div>
  );
};

export default VideoPage;
