import VideoCard from './../../../../components/VideoCard/VideoCard';
import React, { useState, useRef} from "react";

const  RecommendedVideos = () => {
    const refBar = useRef(null);

    const onScroll = (e) => {
        if(e.deltaY < 0) {
            refBar.current.scrollBy(100, 0);
        }else 
        {
            refBar.current.scrollBy(-100, 0);
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
        <div className=" mt-2 bg-white h-70 w-full">
            <div className="border-4 border-gray-500 rounded-b-xl h-60 w-full flex flex-row overflow-hidden"
            onWheel={onScroll} onMouseEnter={disableScroll} onMouseLeave={enableScroll} ref={refBar}
            >
                <div>  </div>
                <div className="h-60 w-50 ">
                    <VideoCard></VideoCard>
                </div>
                <div className="h-60 w-80 ">
                    <VideoCard></VideoCard>
                </div>
                <div className="h-60 w-80 ">
                    <VideoCard></VideoCard>
                </div>
                <div className="h-60 w-80 ">
                    <VideoCard></VideoCard>
                </div>
                <div className="h-60 w-80 ">
                    <VideoCard></VideoCard>
                </div>
                <div className="h-60 w-80 ">
                    <VideoCard></VideoCard>
                </div>
                <div className="h-60 w-80 ">
                    <VideoCard></VideoCard>
                </div>
                <div className="h-60 w-80 ">
                    <VideoCard></VideoCard>
                </div>
                <div className="h-60 w-80 ">
                    <VideoCard></VideoCard>
                </div>
                <div className="h-60 w-80 ">
                    <VideoCard></VideoCard>
                </div>
                <div className="h-60 w-80 ">
                    <VideoCard></VideoCard>
                </div>
            </div>
        </div>
    );
}

export default RecommendedVideos;