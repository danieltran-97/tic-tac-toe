import React, {useState} from 'react';
import {calculateWinner} from '../helpers.js'
import Board from './Board';
import Square from './Square.js';

const styles = {
    width: '200 px',
    margin: '20px auto'
}

const Game = () => {
                                    // Initial state is an array with 9 null values
    // const [history, setBoard] = useState((Array(9).fill(null)));
    const [history, setHistory] = useState([(Array(9).fill(null))]);
    const [stepNumber,setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    // Logic here when we click the square it will do some calculations inside of this function
    const handleClick = i => {
        const timeInHistory = history.slice(0,stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current]
        // create copy  of the board state cause we're gonna mutate the state: use spread operator
        // const boardCopy = [...board];
        // If user clicks an occupied square or if game is won, return
        if(winner || squares[i]) return;
        // Put an X or O in the clicked square
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHistory, squares])
        setStepNumber(timeInHistory.length)
        //set board state
        // setBoard(boardCopy);
        //set xIsNext: returns opposite value
        setXisNext(!xIsNext);
    }

    const jumpTo = step => {
        setStepNumber(step);
        setXisNext(step % 2 === 0)
    }

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move#${move}` : 'Go to start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>
                         {destination}
                    </button>
                </li>
            )
        })
    )
    return ( 
        //Wrapped in fragment because cannot have more than one outermost tag
        <>
            {/*props seen in Board component*/}
            <Board squares={history[stepNumber]} onClick={handleClick}/>
            <div style={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    )
};
export default Game;
