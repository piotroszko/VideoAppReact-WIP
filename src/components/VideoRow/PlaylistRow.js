import React, { useState } from "react";

const PlaylistRow = ({ data, videoID, videoAdd, videoRemove }) => {
  const [added, setAdded] = useState(data.videoIDs.includes(videoID));
  const handleClick = () => {
    if (added) {
      videoRemove(data._id, videoID);
      setAdded(!added);
    } else {
      videoAdd(data._id, videoID);
      setAdded(!added);
    }
  };
  return (
    <p
      className={`${
        added ? "bg-gray-500 hover:bg-gray-700" : "hover:bg-gray-500"
      } mt-1 mx-2 px-1 text-center text-white  border-2 border-gray-200 rounded-md cursor-pointer overflow-hidden`}
      onClick={() => handleClick()}
    >
      {data.name.substring(0, 15) + (data.name.length > 15 ? "..." : "")}
    </p>
  );
};

export default PlaylistRow;
