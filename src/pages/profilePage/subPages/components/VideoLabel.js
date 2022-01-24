import React from "react";

const VideoLabel = (props) => {
  return (
    <div className="w-11/12 bg-gray-300 h-24 mx-auto flex flex-row gap-6 justify-between">
      <img
        className="block ml-4 mt-2 my-auto rounded-2xl h-20 w-20"
        src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
        alt=""></img>
      <div className="flex flex-col gap-1 pt-3">
        <p className="text-medium font-bold text-left">
          Nazwa filmu adad adasd as
        </p>
        <p className="text-medium text-left"> Wyświetleń: </p>
        <p className="text-medium text-left"> Ilość komentarzy: </p>
      </div>
      <div className="flex flex-col gap-3 pt-3 ml-4">
        <p className="text-lg text-green-700 font-bold text-right">
          Ilosc likeów:{" "}
        </p>
        <p className="text-lg text-red-700 font-bold text-right">
          Ilosc dislików:{" "}
        </p>
      </div>
      <div className="h-full flex flex-row items-center justify-end w-1/3 ml-6 gap-3 mr-4">
        <button className="bg-gray-200 rounded-lg hover:text-gray-200 hover:bg-gray-600 p-3 text-bold text-lg h-1/2 my-auto w-30">
          Edycja wideo
        </button>
        <button className="bg-gray-200 rounded-lg hover:text-gray-200 hover:bg-red-700 p-3 text-bold text-lg h-1/2 my-auto w-30">
          Usuń wideo
        </button>
      </div>
    </div>
  );
};

export default VideoLabel;
