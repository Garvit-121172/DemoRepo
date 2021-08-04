import React from "react";
import Timer from "./Timer";

export default function NavBar({ gameover, setTime,stage }) {
    let w="";
    if(stage==4)
    w="160px";
    if(stage==8)
    w="320px";
    if(stage==12)
    w="480px";
    return (
    <div
      style={{
        width:w,
        background: "#4a752c",
        padding: "10px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <span role="img" aria-label="flag" style={{ paddingBottom: 10 }}>
        🚩
      </span>
      <Timer gameover={gameover}   />
    </div>
  );
}