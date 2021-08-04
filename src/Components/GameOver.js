import React, { useState, useEffect } from "react";
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';

export default function GameOver({ reset,sz }) {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 1000);
  }, []);
  return (
    <div
      style={{
        opacity: render ? 1 : 0,
        height: "100%",
        width: "100%",
        position: "absolute",
        background: "rgba(0,0,0,0.3)",
      }}
    >
      <div id={sz==4?"gameOverImage1":"gameOverImage"}></div>
      <div className="tryAgain" onClick={() => reset()}>
      <FlipCameraAndroidIcon fontSize={"large"}/>
      </div>
    </div>
  );
}