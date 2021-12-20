import './VideoCard.css';
import ReactFreezeframe from 'react-freezeframe';
import React, { useState } from "react";
import {Link } from "react-router-dom";

import GifBunny from './placeholders/bunny.gif';
import Bunny from './placeholders/bunnyimg.png';
import addSvg from './placeholders/addToWatch.svg';
import VideoPage from '../../pages/videoPage/VideoPage';


const  VideoCard = () => {
    const [mouseOnVideo, setMouseOnVideo] = useState(false);
    const [mouseOnAdd, setMouseOnAdd] = useState(false);
    const MouseOver = (target) => {
        if (target === "video")
            setMouseOnVideo(true);
        else if (target === "toWatch")
            setMouseOnAdd(true);
    }
    const MouseOut = (target) => {
        if (target === "video")
            setMouseOnVideo(false);
        else if (target === "toWatch")
            setMouseOnAdd(false);
    }
    return (
    <div className="p-8 max-w-6xl min-w-2xl flex-1 relative">
        <Link to="/video/2" component={<VideoPage />}>
            <div className="max-w-6xl min-w-2xl relative order-1 cursor-pointer" onMouseEnter={() => MouseOver("video")} onMouseLeave={() => MouseOut("video")}>
                <div className="absolute z-20 right-3 top-3 bg-gray-400 w-8 h-8 addToWatch" onMouseEnter={() => MouseOver("toWatch")} onMouseLeave={() => MouseOut("toWatch")}>
                    <img src={addSvg} alt="add" className="w-6 h-6 m-auto mt-1"></img>
                </div>
                <div className={`${mouseOnAdd ? "" : "hidden"} absolute z-20 right-14 top-3 bg-gray-600 text-gray-200 rounded-lg p-1`}>
                    <p> Do obejrzenia </p>
                </div>
                <img className={`${mouseOnVideo ? "z-0" : "z-10"} absolute object-cover w-full`}  src={Bunny} alt=""/>
                <ReactFreezeframe className={`${mouseOnVideo ? "z-10" : "z-0"} absolute`} src={GifBunny} />
            </div>
        </Link>
        <div className="flex ">
            <Link to="/video/2" component={<VideoPage />}>
                <p className="text-left font-semibold text-md w-2/3 cursor-pointer "> Video na temat królików</p>
            </Link>
            <p className="w-1/3 text-right text-sm italic"> 2 lata</p>
        </div>
        <div className="flex h-8 mt-1">
            <p className="text-left w-1/2 text-sm text whitespace-nowrap"> Wyswietlenia: 20k</p>
            <p className="text-right w-1/2 text-sm "> Nazwa kanału</p>
        </div>
    </div>
    );
}

export default VideoCard;