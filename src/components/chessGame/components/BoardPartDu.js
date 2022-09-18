import React from "react";

const ChessBoard = () => {
  const horzAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const vertAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

  let board = [];

  for (let j = vertAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horzAxis.length; i++) {
      const num = j + i + 2;

      if (num % 2 === 0) {
        board.push(
          <div className="tile black-tile">
            [{horzAxis[i]}
            {vertAxis[j]}]
          </div>
        );
      } else {
        board.push(
          <div className="tile white-tile">
            [{horzAxis[i]}
            {vertAxis[j]}]
          </div>
        );
      }
    }
  }

  return <div id="chessboard">{board}</div>;
};

export default ChessBoard;
