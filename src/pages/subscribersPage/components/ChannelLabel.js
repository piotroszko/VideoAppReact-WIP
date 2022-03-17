import React from "react";

const ChannelLabel = (props) => {
  return (
    <div
      className={`${
        props.current && "border-yellow-800 border-l-2 border-b-2 border-t-2 rounded-md"
      } dark:hover:text-gray-900 flex flex-row pb-1 pt-1 text-black dark:text-gray-200 hover:text-gray-300 hover:bg-gray-500 border-b-2 border-gray-400 shadow-inner cursor-pointer`}
    >
      <div className="hidden order-2 w-full sm:block sm:w-1/3 md:w-1/4">
        <img alt="loading..." src={props.src} className="mx-auto w-10 h-10 rounded-xl"></img>
      </div>
      <div
        className={`relative order-1 text-left w-full sm:w-3/4 text-xs md:text-base px-1 flex flex-col`}
      >
        <p className="mx-auto w-max md:font-bold">
          {props.name ? props.name.substring(0, 20) : "Channel name"}
        </p>
        <p className="hidden mx-auto text-gray-400 text-xs italic md:block">
          {props.subs ? props.subs : "0"}
        </p>
      </div>
    </div>
  );
};

export default ChannelLabel;
