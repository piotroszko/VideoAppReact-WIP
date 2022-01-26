import { useRef, useState, useEffect } from "react";
import "./VideoPlayer.css";

import BackwardSvg from "./controls/backward-5.svg";
import ForwardSvg from "./controls/forward-5.svg";
import PauseSvg from "./controls/pause.svg";
import PlaySvg from "./controls/play.svg";

import VolumeSvg from "./controls/volume.svg";
import MutedSvg from "./controls/muted.svg";

import NextSvg from "./controls/next.svg";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const progressBar = useRef(null);
  const controlsContainer = useRef(null);
  const volumeSlider = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(10);
  useEffect(() => {
    changeVolume(volume);
  }, []);

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
    var valueOfPointClicked =
      (e.clientX - progressBar.current.offsetLeft) / progressBar.current.clientWidth;
    videoRef.current.currentTime = videoTime * valueOfPointClicked;
    setProgress(valueOfPointClicked * 100);
  };

  const changeControlsVisability = (event) => {
    if (event === 1) {
      controlsContainer.current.style.opacity = "1";
    } else if (event === 0) {
      controlsContainer.current.style.opacity = "0";
    }
  };
  const changeVolumeSliderVisability = (event) => {
    if (event === "visible") {
      volumeSlider.current.style.visibility = "visible";
    } else if (event === "hidden") {
      volumeSlider.current.style.visibility = "hidden";
    }
  };
  const changeVolume = (value) => {
    setVolume(value);
    videoRef.current.volume = value / 100;
  };

  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime);
    if (videoRef.current?.currentTime / videoTime === 1 && playing) setPlaying(false);
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 1000);

  return (
    <div
      className="videoContainer relative"
      onMouseEnter={() => changeControlsVisability(1)}
      onMouseLeave={() => changeControlsVisability(0)}
    >
      <video
        id="video1"
        ref={videoRef}
        className="video"
        src="https://static.videezy.com/system/resources/previews/000/004/276/original/20_1_20Dragon_20Coaster_20Part_205.mp4"
      ></video>
      <div
        className="controlsContainer"
        ref={controlsContainer}
        onMouseLeave={() => changeVolumeSliderVisability("hidden")}
      >
        <div className="bg-blackT"></div>

        <div className="videoControls">
          <div className="w-1/3"></div>
          <div className="center-buttons">
            <button
              className="controls-buttons"
              onClick={playing === false ? () => videoHandler("play") : () => videoHandler("pause")}
            >
              <img
                src={playing === false ? PlaySvg : PauseSvg}
                className="control-icon btnHover"
                alt=""
              ></img>
            </button>
            <button className="controls-buttons">
              {" "}
              <img src={NextSvg} className="control-icon btnHover" alt=""></img>{" "}
            </button>
            <button
              className="controls-buttons muteButton flex"
              onMouseEnter={() => changeVolumeSliderVisability("visible")}
              onClick={null}
            >
              <img
                src={muted === false ? VolumeSvg : MutedSvg}
                className="control-icon btnHover"
                alt=""
              ></img>
            </button>
          </div>
          <div className="relative w-1/3">
            <input
              type="range"
              ref={volumeSlider}
              onChange={(event) => changeVolume(event.target.value)}
              className="volumeSlider"
              defaultValue={volume}
            />
          </div>
        </div>
        <div className="timecontrols">
          <p className="controlsTime">
            {Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}
          </p>
          <div
            className="time_progressbarContainer cursor-pointer"
            ref={progressBar}
            onClick={onClickProgress}
          >
            <div style={{ width: `${progress}%` }} className="time_progressBar"></div>
          </div>
          <p className="controlsTime">
            {Math.floor(videoTime / 60) + ":" + ("0" + Math.floor(videoTime % 60)).slice(-2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
