import React, { useContext, useState } from "react";
import AnswerContext from "../context/AnswerContext";

const GameButtons = () => {
  const value = useContext(AnswerContext);
  // console.log('this is the game count: ', value.gameCount);

  // const [totalTime, setTotalTime] = useState(value.totalTime)

  console.log(value.totalTime);

  const gameLengthClick = (val) => {
    value.handleGameCount(val);
  };
  return (
    <div>
      <button onClick={() => gameLengthClick(8)}>8</button>
      <button onClick={() => gameLengthClick(16)}>16</button>
      <div>{value.totalTime === 0 ? "" : value.totalTime}</div>
    </div>
  );
};

export default GameButtons;
