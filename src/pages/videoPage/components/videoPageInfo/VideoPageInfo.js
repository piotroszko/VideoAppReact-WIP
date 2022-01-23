import React, {useState} from "react";
const VideoPageInfo = () => {
  const [isInfo, setIsInfo] = useState(false);
  return (
    <>
      <div className="flex lg:gap-10 mt-16 lg:mt-0 lg:mb-0 lg:pt-0 text-gray-300 h-16 gap-4 items-center">
        <div className="justify-self-start w-1/3 sm:w-1/3 relative h-full mt-3">
          <p className="text-medium font-bold lg:ml-auto my-auto md:absolute md:right-1/4 p-1">
            Tytuł filmu jakiś adasda dadad sd a a
          </p>
        </div>
        <div className="w-1/3 sm:w-1/3 flex h-4/5 pr-2 py-2">
          <div
            className="bg-green-500 w-1/2 text-medium font-semibold center h-full select-none cursor-pointer
                  text-center border-gray-400 hover:border-green-200 hover:bg-green-600 hover:text-green-400 border-2 rounded-l-md">
            <p className="">10 020</p>
          </div>
          <div
            className="bg-red-600 w-1/2 text-medium font-semibold center h-full select-none cursor-pointer
                  text-center border-gray-400 hover:border-red-400 hover:bg-red-800 border-2 hover:text-red-400 rounded-r-md">
            <p className="">10 020</p>
          </div>
        </div>
        <div className="justify-self-start w-1/3 sm:w-1/3 relative h-full mt-3">
          <div className="flex flex-col h-full">
            <p className="text-medium font-bold h-1/2">
              Nazwa kanału
            </p>
            <div className="text-xs h-1/4 ">
              <p className="cursor-pointer" onClick={() => setIsInfo(!isInfo)}>{isInfo? "Mniej info" : "Wiecej info"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${ isInfo ? "" : "hidden"} h-20 flex flex-row text-gray-200`}>
        <div className="w-1/2 text-xs pl-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
          obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
          nihil, eveniet aliquid culpa officia aut!
        </div>
        <div className="w-1/2 flex flex-row">
          Statystyki
          <div></div>
        </div>
      </div>
    </>
  );
};

export default VideoPageInfo;
