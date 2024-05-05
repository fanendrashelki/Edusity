import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/college-video-6XtGR-D3.mp4";

const VideoPlayer = ({ playState, setplayState }) => {
  const player = useRef(null);

  const closedPlayer = (e) => {
    if (e.target === player.current) {
      setplayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closedPlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
