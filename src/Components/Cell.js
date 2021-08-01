import React, { useState } from 'react'
function Cell({points,changefn}) {
    const [clicked, setclicked] = useState(false);
    const [bomb, setbomb] = useState(points==-1?true:false);
    const [pts, setpts] = useState(points);
    const [val,setval]= useState("");
    var clickedfn=()=>{
        setclicked(true);
        if(bomb){
            alert("u pressed bomb game over now + travers Breadth wise in grid to unveil all bombs");

        }
        else{
            setval(pts);
           changefn(pts);
        }
    }
    return (
        <>
            <button onClick={clickedfn} className={clicked?bomb?"bomb":"point":"notclicked"}>{val}</button>
          
        </>
    )
}

export default Cell
