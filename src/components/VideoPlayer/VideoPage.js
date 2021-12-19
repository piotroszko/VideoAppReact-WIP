import { useRef, useState, useEffect } from "react";
import './VideoPage.css';

import BackwardSvg from './controls/backward-5.svg';
import ForwardSvg from './controls/forward-5.svg';
import PauseSvg from './controls/pause.svg';
import PlaySvg from './controls/play.svg';

import VolumeSvg from './controls/volume.svg';
import MutedSvg from './controls/muted.svg';

import NextSvg from './controls/next.svg';

const  VideoPlayer = () => {
  const videoRef = useRef(null);
  const progressBar = useRef(null);
  const controlsContainer = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const [muted, setMuted] = useState(false);
  const [lastVolume, setLastVolume] = useState(10);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      var vid = document.getElementById("video1");
      setVideoTime(vid.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const revert = () => {
    videoRef.current.currentTime -= 5;
  };
  const onClickProgress = (e) => {
    var valueOfPointClicked = ((e.clientX - progressBar.current.offsetLeft)/progressBar.current.clientWidth);
    videoRef.current.currentTime = videoTime * valueOfPointClicked;
    setProgress(valueOfPointClicked * 100);
  }
  
  const changeControlsVisability = (event) => {
    if(event === "visible") {
      controlsContainer.current.style.opacity = "1";
    } else if (event === "hidden") {
      controlsContainer.current.style.opacity = "0";
    }
  }

  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime);
    if((videoRef.current?.currentTime / videoTime) === 1 && playing) setPlaying(false);
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 1000);

  return (
        <div className="relative videoContainer" onMouseEnter={() => changeControlsVisability("visible")} onMouseLeave={() => changeControlsVisability("hidden")}>
            <video
            id="video1"
            ref={videoRef}
            className="video"
            src="https://res.cloudinary.com/dssvrf9oz/video/upload/v1635662987/pexels-pavel-danilyuk-5359634_1_gmixla.mp4"
            ></video>
            <div className="controlsContainer" ref={controlsContainer} >
              <div className="bg-blackT"></div>
              
              <div className="videoControls" >
                  <button className="controls-buttons" onClick={playing === false ? () => videoHandler("play") : () => videoHandler("pause")}> 
                    <img src={playing === false ? PlaySvg : PauseSvg}
                    className="control-icon" alt=""></img> 
                  </button>
                  <button className="controls-buttons"> <img src={NextSvg} className="control-icon" alt=""></img> </button>
                  <button className="controls-buttons"> <img src={muted === false ? VolumeSvg : MutedSvg} className="control-icon" alt=""></img> </button>
                  
              </div>
              <div className="timecontrols">
                  <p className="controlsTime">
                      {Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}
                  </p>
                  <div className="time_progressbarContainer cursor-pointer" ref={progressBar} onClick={onClickProgress}>
                      <div style={{ width: `${progress}%` }}  className="time_progressBar">
                      </div>
                  </div>
                  <p className="controlsTime">
                      {Math.floor(videoTime / 60) + ":" + ("0" + Math.floor(videoTime % 60)).slice(-2)}
                  </p>
              </div>
            </div>
        </div>
    );
}

export default VideoPlayer;