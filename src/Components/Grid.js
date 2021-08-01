import React from 'react'
import { useState } from 'react';
import Cell from './Cell';
function Grid({changefn}) {
    const generteateGrid=(size)=>{
        const grid1=[];
        for(var i=0;i<size*size;i++){
            grid1.push(Math.floor(Math.random()*5-1));
        }
        return grid1;
    }
    const [grid, setgrid] = useState(generteateGrid(8));
    return (
        <div className="grid" >
            {
                grid.map((cell, i) => (
                    <Cell points={grid[i]} changefn={changefn}/>
                ))
            }
        </div>
    )
}

export default Grid
