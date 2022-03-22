import React, { useState } from "react";
import Board from "./component/Board";

const App = () => {
  // Squares shows the current state of board
  const [squares, setSquares] = useState(Array(9).fill(null));
  // determine the next player is "X" or "O"
  const [nextX, setNextX] = useState(true);
  const xO = nextX ? "X" : "O";
  // Check winner status, initialize to be null
  const winner = checkWinner(squares);

  const handleClick = (i) => {
    if (winner || squares[i]) return;
    // Change ith value in board and store
    const newSquares = [...squares];
    newSquares[i] = xO;
    setSquares(newSquares);
    setNextX(!nextX);
  };

  function checkWinner(squares) {
    // Iterate through the possible win condition to check
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div>
      <Board squares={squares} onClick={handleClick} />
      <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
    </div>
  );
};

export default App;