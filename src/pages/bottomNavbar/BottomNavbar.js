import React, { useState, useRef} from "react";
import './BottomNavbar.css';

const BottomNavbar = () => {
    const refPlaylists = useRef(null);
    const onScroll = (e) => {
        if(e.deltaY < 0) {
            refPlaylists.current.scrollBy(100, 0);
        }else 
        {
            refPlaylists.current.scrollBy(-100, 0);
        }
    }
    const enableScroll = () => {
        document.removeEventListener('wheel', preventDefault, false)
    }
    const disableScroll = () => {
        document.addEventListener('wheel', preventDefault, {
          passive: false,
        })
    }
    function preventDefault(e) {
        e = e || window.event
        if (e.preventDefault) {
          e.preventDefault()
        }
        e.returnValue = false
    }
    return ( 
        <div className="fixed bottom-0 left-0 w-full text-center z-50 ">
            <div onWheel={onScroll} onMouseEnter={disableScroll}
            onMouseLeave={enableScroll} className="flex pl-4 pr-4 ml-auto mr-auto lg:w-1/2 md:w-2/3 w-10/12 h-14 bg-white rounded-t-3xl border-solid border-gray-500 border-t-4 border-r-2 border-l-2 relative">
                <div className="flex whitespace-nowrap overflow-y-hidden overflow-x-hidden" ref={refPlaylists}>
                    <button className="btn-history btn-special-underline">
                        <p className="text-btn-navbar">HISTORIA</p>
                    </button>
                    <button className="btn-toWatch btn-special-underline">
                        <p className="text-btn-navbar">DO OBEJRZENIA</p>
                    </button>
                    <button className="btn-playlist">
                        <p className="text-btn-navbar">PLAYLISTA 1</p>
                    </button>
                    <button className="btn-playlist">
                        <p className="text-btn-navbar">PLAYLISTA 2</p>
                    </button>
                    <button className="btn-playlist">
                        <p className="text-btn-navbar">PLAYLISTA 3</p>
                    </button>
                    <button className="btn-playlist">
                        <p className="text-btn-navbar">PLAYLISTA 4</p>
                    </button>
                    <button className="btn-playlist">
                        <p className="text-btn-navbar">PLAYLISTA 5</p>
                    </button>
                    <button className="btn-playlist">
                        <p className="text-btn-navbar">PLAYLISTA 6</p>
                    </button>
                    <button className="btn-playlist">
                        <p className="text-btn-navbar">PLAYLISTA 7</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BottomNavbar;