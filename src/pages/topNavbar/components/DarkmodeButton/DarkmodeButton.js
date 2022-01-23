import React, { useState, useContext } from "react";
import { DarkmodeContext } from "../../../../utils/DarkmodeProvider";
import "./DarkmodeButton.css";

const DarkmodeButton = () => {
  const themeMode = useContext(DarkmodeContext);
  
  const theme = () => {
    document.documentElement.classList.toggle("dark");
    themeMode.changeMode();
  };
  return (
    <button
      title="Toggle Theme"
      onClick={() => theme()}
      className={`${
        themeMode.isDarkmode
          ? "focus:ring-blue-600 bg-gray-600"
          : "focus:ring-blue-700 bg-gray-300"
      } w-12 h-6 rounded-full p-1 relative transition-colors duration-500 
        my-auto ml-auto mr-3 ease-infocus:outline-none focus:border-transparent`}>
      <div
        id="toggle"
        className={`${
          themeMode.isDarkmode ? " ml-auto" : ""
        } rounded-full w-4 h-4 bg-white pointer-events-none 
                transition-all duration-300 ease-out`}></div>
    </button>
  );
};

export default DarkmodeButton;
