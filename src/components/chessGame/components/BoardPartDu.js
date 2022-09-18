import React, { useContext } from "react";
import SquareContext from "../context/SquareContext";
import AnswerContext from "../context/AnswerContext";
import squareClick from "../logic/SquareClick";

const ChessBoard = () => {
  const horzAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const vertAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

  let board = [];

  const whichSquare = useContext(SquareContext);
  const value = useContext(AnswerContext);

  const handleClick = (e) => {
    
    console.log(e.target.className);
  };

  for (let j = vertAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horzAxis.length; i++) {
      const num = j + i + 2;

      if (num % 2 === 0) {
        board.push(
          <div
            className={`${horzAxis[i]}${vertAxis[j]} black-tile`}
            onClick={handleClick}
            key={`${horzAxis[i]}${vertAxis[j]}`}
          >
            {/* [{horzAxis[i]}
            {vertAxis[j]}] */}
          </div>
        );
      } else {
        board.push(
          <div
            className={`${horzAxis[i]}${vertAxis[j]} white-tile`}
            onClick={handleClick}
            key={`${horzAxis[i]}${vertAxis[j]}`}
          >
            {/* [{horzAxis[i]}
            {vertAxis[j]}] */}
          </div>
        );
      }
    }
  }

  return <div id="chessboard">{board}</div>;
};

export default ChessBoard;
