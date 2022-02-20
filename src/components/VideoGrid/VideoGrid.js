import React, { useContext } from "react";

import VideoCard from "../VideoCard/VideoCard";
import { DarkmodeContext } from "../../utils/DarkmodeProvider";
import "./VideoGrid.css";
import SmallSearchBar from "../SmallSearchBar/SmallSearchBar";

const VideoGrid = (props) => {
  const darkmode = useContext(DarkmodeContext);
  return (
    <div className="flex flex-col">
      {props.sortBar ? (
        <>
          <SmallSearchBar
            inputPlaceholder={"Wyszukaj"}
            onFilterChange={(f) => null}
            onInputChange={() => null}
          ></SmallSearchBar>
        </>
      ) : null}
      <div className="grid 2xl:grid-cols-5 pt-5 sm:grid-cols-2 sm:pt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {props.videos && props.videos.map((video) => <VideoCard data={video} key={video.id} />)}
      </div>
    </div>
  );
};

export default VideoGrid;
