import React, { useState, useEffect } from "react";
let timeIntervalId;
export default function Timer({ gameover}) {
  let [time, setTime] = useState(0);

  useEffect(() => {
    function incrementTime() {
      setTimeout(() => {
        let newTime = time + 1;
        setTime(newTime);
      }, 1000);
      if(gameover)
      {setTime(0);}
    }
    incrementTime();
  }, [time]);
  return (
    <div style={{ display:"flex",justifyContent:"space-evenly",color: "white" ,fontSize: 20, background: "#4A752" }}>
      <span role="img" aria-label="clock" style={{ margin:"0",padding:"0",paddingTop:"1px"}}>
        ⏰{time}
      </span>
    </div>
  );
}