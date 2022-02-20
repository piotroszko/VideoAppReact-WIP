import React from "react";
const LoadingDots = () => {
  return (
    <div className="flex gap-4 items-center justify-center p-5 bg-transparent rounded-full">
      <div className="p-2 w-5 h-5 bg-gray-400 rounded-full animate-pulse"></div>
      <div className="p-2 w-5 h-5 bg-gray-400 rounded-full animate-pulse delay-500"></div>
      <div className="p-2 w-5 h-5 bg-gray-400 rounded-full animate-pulse delay-1000"></div>
    </div>
  );
};

export default LoadingDots;
