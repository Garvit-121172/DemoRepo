import React, { useState } from 'react'
function Cell({details,revealcell,rightclickfn}) {
    return (
        <>
            <button onContextMenu={(e)=>rightclickfn(e,details.x,details.y)} onClick={()=>revealcell(details.x,details.y)} className={details.clicked?details.bomb?"bomb":"point":"notclicked"}>{details.pts}</button>
          
        </>
    )
}

export default Cell
