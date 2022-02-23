import React, { useState } from "react";
import { t } from "i18next";

import VideoCard from "../VideoCard/VideoCard";
import "./VideoGrid.css";
import SmallSearchBar from "../SmallSearchBar/SmallSearchBar";

const VideoGrid = (props) => {
  const [textSearch, setTextSearch] = useState("");
  const [filterString, setFilterString] = useState("");
  return (
    <div className="flex flex-col">
      {props.sortBar ? (
        <>
          <SmallSearchBar
            inputPlaceholder={"Wyszukaj"}
            onFilterChange={(f) => setFilterString(f)}
            onInputChange={(text) => setTextSearch(text)}
          ></SmallSearchBar>
        </>
      ) : null}
      <div className="grid 2xl:grid-cols-5 pt-5 sm:grid-cols-2 sm:pt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {props.videos &&
          props.videos
            .filter((f) => {
              return f.name.includes(textSearch);
            })
            .sort((a, b) => {
              if (filterString === t("mostPopular")) {
                return b.views - a.views;
              } else if (filterString === t("newest")) {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
              } else if (filterString === t("oldest")) {
                return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
              } else {
                return 0;
              }
            })
            .map((video) => <VideoCard data={video} key={video.id} />)}
      </div>
    </div>
  );
};

export default VideoGrid;
