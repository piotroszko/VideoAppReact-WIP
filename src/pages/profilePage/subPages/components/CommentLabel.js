import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import ChannelPage from "../../../channelPage/ChannelPage";
import VideoPage from "../../../videoPage/VideoPage";
import urls from "./../../../../api/auth-ep";

const CommentLabel = ({ data }) => {
  return (
    <div className="flex flex-col mx-auto p-2 w-11/12 h-auto bg-gray-300 rounded-md">
      <div className="flex flex-row gap-8 p-2 w-full bg-gray-400 rounded-md">
        <img
          className={`block ml-4 mt-2 my-auto w-12 h-12 rounded-2xl`}
          src={data?.id ? urls.thumbnails + data.id + ".png" : ""}
          alt=""
        />
        <p className="my-auto text-lg font-bold"> {data?.name} </p>

        <p className="my-auto underline text-lg font-bold cursor-pointer">
          <Link to={"/channel/" + data?.userId} component={<ChannelPage />}>
            {data?.channelName}
          </Link>
        </p>
        <Link
          to={"/video/" + data?.id}
          component={<VideoPage />}
          className="ml-auto px-2 text-center hover:text-gray-200 text-gray-800 text-lg italic bg-gray-300 hover:bg-gray-700"
        >
          <p className="">Przejdź do filmu</p>
        </Link>
      </div>
      {data
        ? data.comments.map((c, index) => (
            <div className="flex flex-col gap-3 ml-auto mt-2 w-2/3" key={index}>
              <div className="flex flex-row justify-evenly p-2 bg-gray-400 rounded-md">
                <div className="flex flex-col w-1/5">
                  <p className="text-sm"> Napisany: </p>
                  <p className="italic"> 02.02.2022 </p>
                </div>
                <div className="flex flex-col w-3/5">
                  <p className="text-lg font-bold"> {c?.title} </p>
                  <p className="italic"> {c?.content} </p>
                </div>
                <div className="flex flex-col ml-auto w-1/5 text-left font-bold">
                  <p className="text-green-800"> {c?.likes} like </p>
                  <p className="text-red-800"> {c?.dislikes} dislike </p>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default CommentLabel;
