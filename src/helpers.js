//squares arg is the current board state
export function calculateWinner(squares) {
    //look-up array : contains all the winning moves (8 winning combinations)
    const lines = [
        [0,1,2], //0
        [3,4,5], //1 etc.....
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6] //7
    ];
    for (let i= 0; i < lines.length; i++) {
        const[a,b,c] = lines[i]; // es6 destructuring each winning move in loop
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { // if these match we know we have a winning row the Value will be either X or O
            return squares[a];
        }
    }
    return null; //else null
}


//test array to test logic
const squares = [
    null, null, null,
    'X','X', 'O',
    null, null, null
];
// returns null
console.log(calculateWinner(squares));