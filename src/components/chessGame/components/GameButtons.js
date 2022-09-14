import React, { useContext } from "react";
import AnswerContext from "../context/AnswerContext";

const GameButtons = () => {
  const value = useContext(AnswerContext);
  // console.log('this is the game count: ', value.gameCount);

  const gameLengthClick = (val) => {
    value.handleGameCount(val);
  };
  return (
    <div>
      <button onClick={() => gameLengthClick(8)}>8</button>
      <button onClick={() => gameLengthClick(16)}>16</button>
      <button onClick={() => gameLengthClick(32)}>32</button>
    </div>
  );
};

export default GameButtons;