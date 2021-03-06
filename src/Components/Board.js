import React from 'react';
import Square from './Square';

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    display: 'grid',
    gridTemplate: 'repeat(3,1fr) / repeat(3,1fr)'  //look up CSS grid
}
// line 16 when we map this in React WE MUST USE A "key" prop
const Board = ({squares, onClick}) => (
    <div style={style}>     
        {squares.map((square, i) => {
            return <Square key={i} value={square} onClick={() => onClick(i)} />
        })}
        
    </div>
)
export default Board;

/*
        Refractored
        <Square value="1" onClick={() => onClick("dummy value")} />
        <Square value="2" onClick={() => onClick("dummy value")} />
        <Square value="3" onClick={() => onClick("dummy value")} />
        <Square value="4" onClick={() => onClick("dummy value")} />
        <Square value="5" onClick={() => onClick("dummy value")} />
        <Square value="6" onClick={() => onClick("dummy value")} />
        <Square value="7" onClick={() => onClick("dummy value")} />
        <Square value="8" onClick={() => onClick("dummy value")} />
        <Square value="9" onClick={() => onClick("dummy value")} />*/