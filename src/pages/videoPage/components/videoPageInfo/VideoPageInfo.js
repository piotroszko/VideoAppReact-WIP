import React, { useState } from "react";
const VideoPageInfo = () => {
  const [isInfo, setIsInfo] = useState(false);
  return (
    <>
      <div className="flex gap-4 items-center mt-16 h-16 text-gray-300 lg:gap-10 lg:mb-0 lg:mt-0 lg:pt-0">
        <div className="relative justify-self-start mt-3 w-1/3 h-full sm:w-1/3">
          <p className="text-medium my-auto p-1 font-bold md:absolute md:right-1/4 lg:ml-auto">
            Tytuł filmu jakiś adasda dadad sd a a
          </p>
        </div>
        <div className="flex pr-2 py-2 w-1/3 h-4/5 sm:w-1/3">
          <div className="text-medium center w-1/2 h-full text-center hover:text-green-400 font-semibold bg-green-500 hover:bg-green-600 border-2 border-gray-400 hover:border-green-200 rounded-l-md cursor-pointer select-none">
            <p className="">10 020</p>
          </div>
          <div className="text-medium center w-1/2 h-full text-center hover:text-red-400 font-semibold bg-red-600 hover:bg-red-800 border-2 border-gray-400 hover:border-red-400 rounded-r-md cursor-pointer select-none">
            <p className="">10 020</p>
          </div>
        </div>
        <div className="relative justify-self-start mt-3 w-1/3 h-full sm:w-1/3">
          <div className="flex flex-col h-full">
            <p className="text-medium h-1/2 font-bold">Nazwa kanału</p>
            <div className="h-1/4 text-xs">
              <p className="cursor-pointer" onClick={() => setIsInfo(!isInfo)}>
                {isInfo ? "Mniej info" : "Wiecej info"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isInfo ? "" : "hidden"} h-20 flex flex-row text-gray-200`}>
        <div className="pl-4 w-1/2 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas
          vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
          quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
          similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
          architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!
        </div>
        <div className="flex flex-row w-1/2">
          Statystyki
          <div></div>
        </div>
      </div>
    </>
  );
};

export default VideoPageInfo;
