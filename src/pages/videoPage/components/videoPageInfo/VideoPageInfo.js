const VideoPageInfo = () => {
  return (
    <div className="flex lg:gap-10 mt-16 lg:mt-0 lg:mb-0 lg:pt-0 text-gray-300 h-12 gap-4 items-center">
      <div className="justify-self-start w-1/2 sm:w-1/3 relative h-full">
        <p className="text-2xl font-bold lg:ml-auto my-auto md:absolute md:right-1/4 p-1 whitespace-nowrap">
          Tytuł filmu jakiś
        </p>
      </div>
      <div className="w-1/2 sm:w-1/3 flex h-full pr-2 py-2">
        <div
          className="bg-green-500 w-1/2 text-lg font-semibold center h-full select-none cursor-pointer
                 text-center border-gray-400 hover:border-green-200 hover:bg-green-600 hover:text-green-400 border-2 rounded-l-md">
          <p className="">10 020</p>
        </div>
        <div
          className="bg-red-600 w-1/2 text-lg font-semibold center h-full select-none cursor-pointer
                 text-center border-gray-400 hover:border-red-400 hover:bg-red-800 border-2 hover:text-red-400 rounded-r-md">
          <p className="">10 020</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPageInfo;
