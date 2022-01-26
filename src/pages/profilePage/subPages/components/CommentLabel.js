import React from "react";

const CommentLabel = () => {
  return (
    <div className="flex flex-col mx-auto p-2 w-11/12 h-auto bg-gray-300 rounded-md">
      <div className="flex flex-row gap-8 p-2 w-full bg-gray-400 rounded-md">
        <img
          className="block ml-4 mt-2 my-auto w-12 h-12 rounded-2xl"
          src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          alt=""
        ></img>
        <p className="my-auto text-lg font-bold"> Nazwa filmu </p>
        <p className="my-auto underline text-lg font-bold cursor-text">Nazwa kanału</p>
        <button className="ml-auto px-2 hover:text-gray-200 text-gray-800 text-lg italic bg-gray-300 hover:bg-gray-700">
          Przejdź do filmu
        </button>
      </div>
      <div className="flex flex-col gap-3 ml-auto mt-2 w-2/3">
        <div className="flex flex-row justify-evenly p-2 bg-gray-400 rounded-md">
          <div className="flex flex-col w-1/5">
            <p className="text-sm"> Data napisania komentarza: </p>
            <p className="italic"> 02.02.2022 </p>
          </div>
          <div className="flex flex-col w-3/5">
            <p className="text-lg font-bold"> Tytuł komentarza </p>
            <p className="italic"> Treść komentarza </p>
          </div>
          <div className="flex flex-col ml-auto w-1/5 text-left font-bold">
            <p className="text-green-800"> 0 likeów </p>
            <p className="text-red-800"> 0 dislikeów </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentLabel;
