import React from "react" 
import Square from "./Square"

const Board = ({ squares, onClick }) => (

    <div className="board">
      {/* Need to include index i for changing ith value in current board */}
      {squares.map((square, i) => (
        <Square value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );

export default Board ;