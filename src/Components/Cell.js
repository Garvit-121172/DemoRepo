import React, { useState } from 'react'
function Cell({details,scorefn,revealcell,reveal_neigh}) {
    const [clicked, setclicked] = useState(details.clicked);
    const [bomb, setbomb] = useState(details.pts==-1?true:false);
    const [pts, setpts] = useState(details.pts);
    const [val,setval]= useState(details.pts);
    const [flag,setflag]= useState(details.flag);
    var contextHandler=(e)=>{
        e.preventDefault();
        setflag(true);
    }
    var clickedfn=()=>{
        if(details.clicked)
        return;
        revealcell(details.x,details.y)  
    }
    return (
        <>
            <button onContextMenu={contextHandler} onClick={clickedfn} className={clicked?bomb?"bomb":"point":"notclicked"}>{val}</button>
          
        </>
    )
}

export default Cell
