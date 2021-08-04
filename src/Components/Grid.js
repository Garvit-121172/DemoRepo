import React from 'react'
import { useState } from 'react';
import Bomb from './Bomb';
import Cell from './Cell';
import GameOver from './GameOver';
function Grid({scorefn,sz}) {
    var r=[-1,-1,-1,0,0,1,1,1];
    var c=[-1,0,1,-1,1,-1,0,1];
    function isSafe(x,y){
    if(x>-1&&x<sz&&y>-1&&y<sz)
    return true;
    else
    return false;
    }
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
                    neighbour:n,
                    bombed:pts===-1?true:false,
                    flaged:false,
                    val:"",
                    x:i,
                    y:j
                })
            }
            grid1.push(subar);
        }
        return grid1;
    }
    const [grid, setgrid] = useState(generteateGrid(sz));
    const [GameOver, setGameOver] = useState(false)
    const rightclickfn=(e,x,y)=>{
            e.preventDefault();
            const newGrid=JSON.parse(JSON.stringify(grid));
            newGrid[x][y].flaged=true;
            setgrid(newGrid);
    }
    const revealcell=(i,j)=>{
        var sc=0;
        console.log("revealing "+i+" "+j);
        const newGrid=JSON.parse(JSON.stringify(grid));
        if(newGrid[i][j].clicked===true||GameOver)
        return;
        newGrid[i][j].clicked=true;
        if(newGrid[i][j].bombed){
            console.log("bomb aaya at "+i+" "+j);
            newGrid[i][j].clicked=true;
            newGrid[i][j].val=<Bomb/>;
            alert("bomb");
            for(let x=0;x<sz;x++){
                for(let y=0;y<sz;y++){
                    if(newGrid[x][y].bombed){
                        newGrid[x][y].clicked=true;
                        newGrid[x][y].val=<Bomb/>;

                    }
                }
            }
            setgrid(newGrid);
            setGameOver(true);

        }
        else{
           if(newGrid[i][j].pts===0){
              let stack=[];
              stack.push(newGrid[i][j]);
              while(stack.length>0){
                  let t=stack.pop();
                  t.clicked=true;
                  if(t.pts!==0)
                  t.val=t.pts;
                  for(var x=0;x<8;x++){
                    if(isSafe(t.x+r[x],t.y+c[x])){
                        if(!newGrid[t.x+r[x]][t.y+c[x]].clicked){
                            if(newGrid[t.x+r[x]][t.y+c[x]].pts==0){
                                stack.push(newGrid[t.x+r[x]][t.y+c[x]]);
                            }
                            else if(newGrid[t.x+r[x]][t.y+c[x]].pts!==-1){
                                console.log((newGrid[t.x+r[x]][t.y+c[x]]));
                                sc+=newGrid[t.x+r[x]][t.y+c[x]].pts
                                newGrid[t.x+r[x]][t.y+c[x]].clicked=true;
                                if(newGrid[t.x+r[x]][t.y+c[x]].pts!==0)
                                newGrid[t.x+r[x]][t.y+c[x]].val=newGrid[t.x+r[x]][t.y+c[x]].pts;
                            }
                      }
                    }  
              }
            }
            scorefn(sc);   
            setgrid(newGrid); 
            let flag=false;
            for(let x=0;x<sz;x++){
                for(let y=0;y<sz;y++){
                    if(!newGrid[x][y].clicked&&!newGrid[x][y].bombed)
                    {flag=true;break;}
                }
            }
            
            setGameOver(!flag);
            //check_GAME_WIN?:trav nd check if no if unselectd===mines,nonmines=0 
        }else{
            newGrid[i][j].val=newGrid[i][j].pts;
            newGrid[i][j].val=newGrid[i][j].pts;
            scorefn(grid[i][j].pts);   
            let flag=false;
            for(let x=0;x<sz;x++){
                for(let y=0;y<sz;y++){
                    if(!newGrid[x][y].clicked&&!newGrid[x][y].bombed)
                    {flag=true;break;}
                }
            }
            
            setGameOver(!flag);
            //check_game_WIN?:trav nd check if no if unselectd===mines,,nonmines=0 
        }
        }
        setgrid(newGrid);
    }
    return  (
        <div>
        {GameOver?"Game-Over":"IN-Progrss"}
      {/* <Timer /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* {gameOver && <Modal restartGame={restartGame} />} */}
        {grid.map((singleRow, index1) => {
          return (
            <div style={{ display: "flex" }} key={index1}>
              {singleRow.map((singleBlock, index2) => {
                return (
                  <Cell
                    revealcell={revealcell}
                    details={singleBlock}
                    rightclickfn={rightclickfn}
                    key={index2}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
    )
}

export default Grid
