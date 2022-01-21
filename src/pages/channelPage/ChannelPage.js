import React from "react";
import VideoGrid from "../../components/VideoGrid/VideoGrid";

const ChannelPage = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="w-content bg-gray-100 h-32 rounded-xl lg:mt-4 md:mt-18 mt-20 flex items-center justify-center shadow-lg gap-5">
          <p className="text-xl font-bold ml-10 max-w-md">
            Nazwakanadasddd asdd
          </p>{" "}
          {/* Set maximum characters*/}
          <img
            src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
            className="h-20 w-20 rounded-md mr-10"
            alt=""></img>
        </div>
        <div className="w-content h-16 sm:h-32 flex items-center justify-center">
          <button className="mx-4 text-xl bg-red-400 p-3 rounded-lg shadow-red-200 shadow-md font-bold">
            {" "}
            Zasubskrybuj
          </button>
        </div>
      </div>
      <div className="flex items-center flex-row justify-center gap-6 mt-2">
        <div className="hidden sm:visable sm:w-1/5 bg-gray-100 h-20 rounded-xl mt-2 sm:flex items-center justify-center shadow-lg">
          <div>
            <p className="sm:text-xl font-bold">Łącznie wyświetleń:</p>
            <p className="sm:text-xl font-bold"> 0 </p>
          </div>
        </div>
        <div className="w-2/3 sm:w-1/5 bg-red-100 h-20 rounded-xl mt-2 flex items-center justify-center shadow-lg">
          <div>
            <p className="text-xl font-bold">Subskrypcji:</p>
            <p className="text-xl font-bold"> 0 </p>
          </div>
        </div>
        <div className="hidden sm:w-1/5 bg-gray-100 h-20 rounded-xl mt-2 sm:flex items-center justify-center shadow-lg">
          <div>
            <p className="sm:text-xl font-bold">Łacznie polubień:</p>
            <p className="sm:text-xl font-bold"> 0 </p>
          </div>
        </div>
      </div>
      <div className="border-t-4 mt-3">
        <VideoGrid></VideoGrid>
      </div>
    </div>
  );
};

export default ChannelPage;
