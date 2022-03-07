import React, { useState } from "react";
import { t } from "i18next";

import VideoRow from "../VideoRow/VideoRow";
import SmallSearchBar from "../SmallSearchBar/SmallSearchBar";

const VideoGrid = (props) => {
  const videos = props.videos;
  const isHistoryOrToWatch = props.history || props.toWatch ? true : false;
  const [textSearch, setTextSearch] = useState("");
  const [filterString, setFilterString] = useState("");
  return (
    <div className="flex flex-col">
      {props.sortBar ? (
        <SmallSearchBar
          key={
            props.history
              ? "history"
              : props.toWatch
              ? "toWatch"
              : props.playlist
              ? props.playlist._id
              : Math.random()
          }
          inputPlaceholder={"Wyszukaj"}
          onFilterChange={(f) => setFilterString(f)}
          onInputChange={(text) => setTextSearch(text)}
        ></SmallSearchBar>
      ) : null}
      <div className="flex flex-col gap-4 pt-5 sm:pt-4">
        {videos &&
          videos
            .filter((f) => {
              if (isHistoryOrToWatch) return f.video?.name?.includes(textSearch);
              else return f?.name?.includes(textSearch);
            })
            .sort((a, b) => {
              if (!isHistoryOrToWatch) {
                if (filterString === t("mostPopular")) {
                  return b.views - a.views;
                } else if (filterString === t("newest")) {
                  return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                } else if (filterString === t("oldest")) {
                  return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                } else {
                  return 0;
                }
              } else {
                if (filterString === t("mostPopular")) {
                  return b.video.views - a.video.views;
                } else if (filterString === t("newest")) {
                  if (props.toWatch)
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                  else if (props.toWatch)
                    return new Date(b.watchedAt).getTime() - new Date(a.watchedAt).getTime();
                } else if (filterString === t("oldest")) {
                  if (props.toWatch)
                    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                  else if (props.toWatch)
                    return new Date(a.watchedAt).getTime() - new Date(b.watchedAt).getTime();
                } else {
                  return 0;
                }
              }
            })
            .map((video) => (
              <VideoRow
                history={props.history ? true : false}
                toWatch={props.toWatch ? true : false}
                playlist={props.playlist}
                video={video}
                key={video.id}
              />
            ))}
      </div>
    </div>
  );
};

export default VideoGrid;
