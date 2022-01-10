import VideoCard from './../../../../components/VideoCard/VideoCard';
import React, { useState, useRef} from "react";
import ScrollSvg from "./icons/scroll.svg";

const  RecommendedVideos = () => {
    const refBar = useRef(null);

    const onScroll = (e) => {
        if(e.deltaY < 0) {
            scrollLeft(false);
        }else 
        {
            scrollLeft(true);
        }
    }
    const scrollLeft = (scrollLeft) => {
        if (scrollLeft) {
            refBar.current.scrollBy({
                top: 0,
                left: -300,
                behavior: 'smooth'
              });
        } else {
            refBar.current.scrollBy({
                top: 0,
                left: 300,
                behavior: 'smooth'
              });
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
            <div className="border-4 border-gray-500 rounded-b-xl h-60 w-full flex flex-row overflow-hidden relative"
            onWheel={onScroll} onMouseEnter={disableScroll} onMouseLeave={enableScroll} 
            >
                <div onClick={() => scrollLeft(true)} className="w-14 h-16 absolute top-1/4 bg-gray-300 z-50 opacity-75 rounded-r-2xl cursor-pointer"> <img style={{transform: 'rotate(-180deg)'}} className="h-12 mr-1 mt-2" src={ScrollSvg} alt="<-"></img> </div>
                <div onClick={() => scrollLeft(false)} className="w-14 h-16 absolute top-1/4 right-0 bg-gray-300 z-50 opacity-75 rounded-l-2xl cursor-pointer"> <img className="h-12 ml-2 mt-2" src={ScrollSvg} alt="<-"></img> </div>
                <div className="h-60 w-full flex flex-row overflow-hidden pl-8 pr-8 scroll-smooth" ref={refBar}>
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
        </div>
    );
}

export default RecommendedVideos;