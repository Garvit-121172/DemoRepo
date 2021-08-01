import React from 'react'
import NavBar from './NavBar'
import Grid from './Grid'
import { useState } from 'react'
function Container() {
    const [score, setscore] = useState(0)
    function scorehandler(x){
        setscore(score+x);
    }
    const time = new Date();
    time.setSeconds(time.getSeconds() + 500);
    console.log(scorehandler);
    return (
        <div className="container">
            <NavBar expiryTimestamp={time} score={score} />
            <Grid changefn={scorehandler} />
        </div>
    )
}

export default Container
