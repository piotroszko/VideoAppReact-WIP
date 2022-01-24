import React from "react";

const CommentLabel = () => {
  return (
    <div className="w-11/12 bg-gray-300 h-auto mx-auto flex flex-col p-2 rounded-md">
      <div className="bg-gray-400 w-full p-2 flex flex-row gap-8 rounded-md">
        <img
          className="block ml-4 mt-2 my-auto rounded-2xl h-12 w-12"
          src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          alt=""></img>
        <p className="text-lg font-bold my-auto"> Nazwa filmu </p>
        <p className="text-lg font-bold my-auto underline cursor-text">
          Nazwa kanału
        </p>
        <button className="italic text-lg bg-gray-300 text-gray-800 hover:bg-gray-700 hover:text-gray-200 px-2 ml-auto">
          Przejdź do filmu
        </button>
      </div>
      <div className="flex flex-col ml-auto w-2/3 mt-2 gap-3">
        <div className="flex flex-row justify-evenly bg-gray-400 p-2 rounded-md">
          <div className="w-1/5 flex flex-col">
            <p className="text-sm"> Data napisania komentarza: </p>
            <p className="italic"> 02.02.2022 </p>
          </div>
          <div className="flex flex-col w-3/5">
            <p className="text-lg font-bold"> Tytuł komentarza </p>
            <p className="italic"> Treść komentarza </p>
          </div>
          <div className="flex flex-col w-1/5 ml-auto text-left font-bold">
            <p className="text-green-800"> 0 likeów </p>
            <p className="text-red-800"> 0 dislikeów </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentLabel;
