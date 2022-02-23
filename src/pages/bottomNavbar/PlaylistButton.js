import React from "react";

const PlaylistButton = ({ data }) => {
  return (
    <button className="btn-playlist">
      <p className="text-btn-bottom">{data.name}</p>
    </button>
  );
};

export default PlaylistButton;
