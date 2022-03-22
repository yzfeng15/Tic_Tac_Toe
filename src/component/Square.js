import React from "react";

const Square = ({ value, onClick }) => {
  // className used for classify "X" or "O" to shows different label
  const className = value ? `squares ${value}` : `squares`;
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;