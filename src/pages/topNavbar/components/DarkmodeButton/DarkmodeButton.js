import React, { useState } from "react";
import "./DarkmodeButton.css";

const DarkmodeButton = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );
  const theme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <button
      title="Toggle Theme"
      onClick={() => theme()}
      className={`${
        isDark
          ? "focus:ring-blue-600 bg-gray-600"
          : "focus:ring-blue-700 bg-gray-300"
      } w-28 h-6 rounded-full p-1 relative transition-colors duration-500 
                ease-infocus:outline-none focus:border-transparent`}>
      <div
        id="toggle"
        className={`${
          isDark ? " ml-auto" : ""
        } rounded-full w-4 h-4 bg-white pointer-events-none 
                transition-all duration-300 ease-out`}></div>
    </button>
  );
};

export default DarkmodeButton;
