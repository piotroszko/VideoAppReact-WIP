import React, { useState, useRef, useContext } from "react";

import "./BottomNavbar.css";
import { DarkmodeContext } from "../../utils/DarkmodeProvider";

const BottomNavbar = () => {
  const [barVisable, setBarVisable] = useState(true);
  const refPlaylists = useRef(null);

  const darkmode = useContext(DarkmodeContext);

  const onScroll = (e) => {
    if (e.deltaY < 0) {
      refPlaylists.current.scrollBy({
        top: 0,
        left: -180,
        behavior: "smooth",
      });
    } else {
      refPlaylists.current.scrollBy({
        top: 0,
        left: 180,
        behavior: "smooth",
      });
    }
  };
  const enableScroll = () => {
    document.removeEventListener("wheel", preventDefault, false);
  };
  const disableScroll = () => {
    document.addEventListener("wheel", preventDefault, {
      passive: false,
    });
  };
  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  }
  return (
    <div className="fixed z-50 bottom-0 left-0 flex justify-between w-full h-10 text-center">
      <div
        className={`h-10 w-1/4 relative ${
          barVisable ? "translate-x-full" : ""
        } transform transition duration-500`}
      >
        <div
          onClick={() => setBarVisable(!barVisable)}
          className="absolute bottom-0 right-0 self-end ml-auto w-8 h-4/6 border-l-2 border-t-2 border-black dark:border-white rounded-tl-3xl cursor-pointer"
        >
          <div
            className={`${barVisable ? "rotate-90" : ""} ${
              darkmode.isDarkmode ? "arrow-left-dark" : "arrow-left"
            }
                    ml-auto mt-2 transform transition duration-500`}
          ></div>
        </div>
      </div>
      <div
        onWheel={onScroll}
        onMouseEnter={disableScroll}
        onMouseLeave={enableScroll}
        className={`${
          barVisable ? "mt-20" : ""
        } mt-0 w-1/2 barAnimation flex pl-4 pr-4 h-10 bg-white dark:bg-gray-800 rounded-t-2xl border-solid border-gray-500 dark:border-gray-300 border-t-4 border-r-2 border-l-2`}
      >
        <div
          className="flex whitespace-nowrap overflow-x-hidden overflow-y-hidden"
          ref={refPlaylists}
        >
          <button className="btn-history btn-special-underline">
            <p className="text-btn-bottom">HISTORIA</p>
          </button>
          <button className="btn-toWatch btn-special-underline">
            <p className="text-btn-bottom">DO OBEJRZENIA</p>
          </button>
          <button className="btn-playlist">
            <p className="text-btn-bottom">PLAYLISTA 1</p>
          </button>
          <button className="btn-playlist">
            <p className="text-btn-bottom">PLAYLISTA 2</p>
          </button>
          <button className="btn-playlist">
            <p className="text-btn-bottom">PLAYLISTA 3</p>
          </button>
          <button className="btn-playlist">
            <p className="text-btn-bottom">PLAYLISTA 4</p>
          </button>
          <button className="btn-playlist">
            <p className="text-btn-bottom">PLAYLISTA 5</p>
          </button>
          <button className="btn-playlist">
            <p className="text-btn-bottom">PLAYLISTA 6</p>
          </button>
          <button className="btn-playlist">
            <p className="text-btn-bottom">PLAYLISTA 7</p>
          </button>
        </div>
      </div>
      <div
        className={`h-10 w-1/4 relative ${
          barVisable ? "-translate-x-full" : ""
        } transform  transition duration-500`}
      >
        <div
          onClick={() => setBarVisable(!barVisable)}
          className="absolute bottom-0 left-0 self-end mr-auto w-8 h-4/6 border-r-2 border-t-2 border-black dark:border-white rounded-tr-3xl cursor-pointer"
        >
          <div
            className={`${barVisable ? "-rotate-90" : ""} ${
              darkmode.isDarkmode ? "arrow-right-dark" : "arrow-right"
            }
                    mr-auto mt-2 transform transition duration-500`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
