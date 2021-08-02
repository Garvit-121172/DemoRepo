import React from 'react'
import { useState } from 'react';
import Cell from './Cell';
function Grid({scorefn,sz}) {
    const generteateGrid=(size)=>{
        const grid1=[];
        for(var i=0;i<size;i++){
            let subar=[];
            for(var j=0;j<size;j++){
                var pts=Math.floor(Math.random()*5-1);
                var n=[];
                for(var k=i-1;k<i+2;k++){
                    for(var l=j-1;l<j+2;l++)
                    if(k>=0 && k<size && l>=0 && l<size && !(k===i&&l===j))
                    n.push({k,l});
                }
                subar.push({
                    pts:pts,
                    clicked:false,
                    val:"",
                    neighbour:n,
                    bombed:pts===-1?true:false,
                    flaged:false,
                    x:i,
                    y:j
                })
            }
            grid1.push(subar);
        }
        return grid1;
    }
    const [grid, setgrid] = useState(generteateGrid(sz));
    function reveal_neigh(xyz){
        const newGrid=JSON.parse(JSON.stringify(grid));
        xyz.forEach(pair => {
            var x=pair.k;
            var y=pair.l;
            if(!newGrid[x][y].clicked){
                revealcell(x,y);
                setgrid(newGrid);
            }       
        });
    }
    function revealcell(i,j){
        console.log("revealing "+i+" "+j);
        const newGrid=JSON.parse(JSON.stringify(grid));
        if(newGrid[i][j].clicked)
        return;
        newGrid[i][j].clicked=true;
        setgrid(newGrid);
        if(newGrid[i][j].bombed){
            console.log("bomb aaya at "+i+" "+j);
        }
        else{
           if(newGrid[i][j].pts===0){
            reveal_neigh(newGrid[i][j].neighbour);
           }else{
            newGrid[i][j].val=newGrid[i][j].pts;
            scorefn(grid[i][j].pts);   
           }
        }
        setgrid(newGrid);
    }
    return  (
        <div className="grid" >
            {
                grid.map((row,k) => (
                    row.map((cell,k)=>(
                    <Cell details={cell} scorefn={scorefn} revealcell={revealcell} reveal_neigh={reveal_neigh}/>
                    ))

                ))
            }
        </div>
    )
}

export default Grid
