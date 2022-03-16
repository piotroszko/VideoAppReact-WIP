import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { t } from "i18next";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoPageInfo from "./components/videoPageInfo/VideoPageInfo";
import CommentsSection from "./components/commentsSection/CommentsSection";
import RecommendedVideos from "./components/recommendedVideos/RecommendedVideos";
import urls from "./../../api/auth-ep";

const VideoPage = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [lastID, setLastID] = useState("");
  const { data } = useSWR(urls.videoInfo + id, (url) =>
    axios.get(url).then((res) => {
      document.title = res.data.name;
      if (!res.data.mediaAvaiable) {
        setTimeout(() => navigate("/profile/videos/", { replace: true }), 100);
        toast.error(t("videoNotAviable"));
      } else {
        return res.data;
      }
    })
  );
  useEffect(() => {
    if (lastID !== id) axios.post(urls.viewedVideo + id);
    if (localStorage.getItem("token") !== null && lastID !== id) {
      setLastID(id);
      const axiosInstance = axios.create();
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      axiosInstance.post(urls.addToHistory + id + "/" + urls.aplicationTag);
    }
  });
  return (
    <div className="pt-16">
      <div className="bg-black">
        {data ? (
          <>
            <VideoPageInfo data={data}></VideoPageInfo>
            <VideoPlayer id={id}></VideoPlayer>
            <RecommendedVideos videoID={id} />
            <CommentsSection videoID={id} />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default VideoPage;
