import React from "react";
import { Link } from "react-router-dom";
import VideoPage from "../../../videoPage/VideoPage";
import Moment from "react-moment";

const VideoLabel = ({ data }) => {
  return (
    <div className="flex flex-row gap-6 justify-between mx-auto w-11/12 h-24 bg-gray-300 rounded-md">
      <img
        className={`block ml-4 mt-2 my-auto h-20 w-20 rounded-2xl`}
        src={data?.id ? "http://localhost:4000/info/thumbnails/" + data.id + ".png" : ""}
        alt=""
      />
      <div className="flex flex-col gap-1 pt-3">
        <p className="text-medium text-left hover:underline font-bold">
          <Link to={"/video/" + data?.id} component={<VideoPage />} className="">
            {data.name}
          </Link>
        </p>
        <p className="text-left text-sm"> Wyświetleń: {data.views}</p>
        <p className="text-left text-sm">
          {" "}
          <Moment format="HH:mm DD-MM-YYYY">{data.createdAt}</Moment>
        </p>
      </div>
      <div className="flex flex-col gap-3 ml-4 pt-3 text-left">
        <p className="text-green-700 text-lg font-bold">{data.likes} likeów</p>
        <p className="text-red-700 text-lg font-bold">{data.dislikes} dislików</p>
      </div>
      <div className="flex flex-row gap-3 items-center justify-end ml-6 mr-4 w-1/3 h-full">
        <button className="text-bold w-30 my-auto p-3 h-1/2 hover:text-gray-200 text-lg bg-gray-200 hover:bg-gray-600 rounded-lg">
          Edycja
        </button>
        <button className="text-bold w-30 my-auto p-3 h-1/2 hover:text-gray-200 text-lg bg-gray-200 hover:bg-red-700 rounded-lg">
          Usuń
        </button>
      </div>
    </div>
  );
};

export default VideoLabel;
