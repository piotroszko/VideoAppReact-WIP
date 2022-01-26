import React from "react";

const VideoLabel = (props) => {
  return (
    <div className="flex flex-row gap-6 justify-between mx-auto w-11/12 h-24 bg-gray-300 rounded-md">
      <img
        className="block ml-4 mt-2 my-auto w-20 h-20 rounded-2xl"
        src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
        alt=""
      ></img>
      <div className="flex flex-col gap-1 pt-3">
        <p className="text-medium text-left font-bold">Nazwa filmu adad adasd as</p>
        <p className="text-medium text-left"> Wyświetleń: </p>
        <p className="text-medium text-left"> Data publikacji: </p>
      </div>
      <div className="flex flex-col gap-3 ml-4 pt-3 text-left">
        <p className="text-green-700 text-lg font-bold">0 likeów</p>
        <p className="text-red-700 text-lg font-bold">0 dislików</p>
      </div>
      <div className="flex flex-row gap-3 items-center justify-end ml-6 mr-4 w-1/3 h-full">
        <button className="text-bold w-30 my-auto p-3 h-1/2 hover:text-gray-200 text-lg bg-gray-200 hover:bg-gray-600 rounded-lg">
          Edycja wideo
        </button>
        <button className="text-bold w-30 my-auto p-3 h-1/2 hover:text-gray-200 text-lg bg-gray-200 hover:bg-red-700 rounded-lg">
          Usuń wideo
        </button>
      </div>
    </div>
  );
};

export default VideoLabel;
