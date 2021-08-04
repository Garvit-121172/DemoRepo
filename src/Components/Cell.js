import React, { useState } from 'react'
import Bomb from './Bomb'
import {mineColor} from "./MineColor"
function Cell({details,revealcell,rightclickfn}) {
    const cellStyle={
        background: details.clicked?details.pts === -1? mineColor(): bombChexPattern(details.x, details.y)
      : chexPattern(details.x, details.y),
    color: numColorCode(details.val),
  };
    return (
        <div onContextMenu={(e)=>rightclickfn(e,details.x,details.y)} onClick={()=>revealcell(details.x,details.y)} style={cellStyle} className="cellStyle">
        {!details.clicked && details.flaged ? (
          "🚩"
        ) : details.clicked && details.val !== 0 ? (
          details.pts === -1 ? (
            <Bomb />
          ) : (
            details.val
          )
        ) : (
          ""
        )}
          
        </div>
    )
}

export default Cell
const bombChexPattern = (x, y) => {
    if (x % 2 === 0 && y % 2 === 0) {
      return "#e5c29f";
    } else if (x % 2 === 0 && y % 2 !== 0) {
      return "#d7b899";
    } else if (x % 2 !== 0 && y % 2 === 0) {
      return "#d7b899";
    } else {
      return "#e5c29f";
    }
  };
  
  const chexPattern = (x, y) => {
    if (x % 2 === 0 && y % 2 === 0) {
      return "#aad751";
    } else if (x % 2 === 0 && y % 2 !== 0) {
      return "#a2d249";
    } else if (x % 2 !== 0 && y % 2 === 0) {
      return "#a2d249";
    } else {
      return "#aad751";
    }
  };
  
  const numColorCode = (num) => {
    if (num === 1) {
      return "#1976d2";
    } else if (num === 2) {
      return "#388d3c";
    } else if (num === 3) {
      return "#d33030";
    } else if (num === 4) {
      return "#7c21a2";
    } else if (num === 5) {
      return "#1976d2";
    } else if (num === 6) {
      return "#1976d2";
    } else {
      return "white";
    }
  };
