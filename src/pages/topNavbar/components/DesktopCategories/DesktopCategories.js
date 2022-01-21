import React from "react";

const DesktopCategories = () => {
  return (
    <div className="flex justify-center items-center w-full space-x-4">
      <button className="btn-navbar">
        <p className="text-btn-navbar">TOP</p>
      </button>
      <button className="btn-navbar">
        <p className="text-btn-navbar">NOWOŚCI</p>
      </button>
      <button className="btn-navbar">
        <p className="text-btn-navbar">HOT</p>
      </button>
      <button className="btn-navbar">
        <p className="text-btn-navbar">ODKRYJ</p>
      </button>
    </div>
  );
};

export default DesktopCategories;
