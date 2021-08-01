import React from 'react'
import { useState } from 'react';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import TimerIcon from '@material-ui/icons/Timer';
import { useTimer } from 'react-timer-hook';
function NavBar({expiryTimestamp,score}) {
    const {
        seconds,
        start,
        restart,
      } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
    return (
        <div className="navbar" >
            <select className="select" >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
            </select>
            <div className="flag-div">
                <GolfCourseIcon className="icon" />
                <p>{score}</p>
            </div>
            <div className="timer-div">
                <TimerIcon className="icon" />
                <h2><span>{seconds}</span></h2>
            </div>
            <button onClick={start} >as </button>
            <button onClick={() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button>
        </div>
    )
}

export default NavBar
