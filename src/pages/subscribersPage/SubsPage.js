import React from "react";

import VideoGrid from "../../components/VideoGrid/VideoGrid";
import ChannelLabel from "./components/ChannelLabel";
import "./SubsPage.css";

const SubsPage = () => {
  document.title = `Nowości w subskrypcjach`;
  return (
    <div className="flex flex-row">
      <div className="fixed top-16 flex flex-auto flex-col w-1/6 min-w-min h-full dark:text-gray-200 bg-gray-300 dark:bg-gray-800">
        <div className="flex flex-col gap-1 mt-1 w-full h-auto">
          <p className="hidden mt-1 text-lg font-bold md:block">Subskrypcje</p>
          <div className="mt-2 italic">
            <p className="hidden md:block">Ilość subskrypcji:</p>{" "}
            <p className="text-lg font-bold">{"20"}</p>
          </div>
        </div>
        <div className="scrollbarSubs scroll-smooth flex flex-col mt-6 border-t-2 border-gray-200 overflow-x-hidden overflow-y-auto">
          <ChannelLabel
            name="Test"
            subs="21341"
            src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          ></ChannelLabel>
          <ChannelLabel
            name="Test"
            subs="21341"
            src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          ></ChannelLabel>
          <ChannelLabel
            name="Test"
            subs="21341"
            src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          ></ChannelLabel>
          <ChannelLabel
            name="Test"
            subs="21341"
            src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          ></ChannelLabel>
          <ChannelLabel
            name="Test"
            subs="21341"
            src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          ></ChannelLabel>
          <ChannelLabel
            name="Test"
            subs="21341"
            src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          ></ChannelLabel>
          <ChannelLabel
            name="Test"
            subs="21341"
            src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          ></ChannelLabel>
          <ChannelLabel
            name="Test"
            subs="21341"
            src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          ></ChannelLabel>
          <ChannelLabel
            name="Test"
            subs="21341"
            src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          ></ChannelLabel>
          <ChannelLabel
            name="Test"
            subs="21341"
            src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          ></ChannelLabel>
        </div>
      </div>
      <div className="ml-auto mt-16 w-5/6 h-full dark:bg-gray-800 bg-white overflow-visible">
        <VideoGrid className="mx-auto"></VideoGrid>
      </div>
    </div>
  );
};

export default SubsPage;
