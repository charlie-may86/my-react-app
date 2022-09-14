import React, { useState, useRef } from "react";

import Board from "./components/Board";
import Header from "./components/ChessHeader";
import GameButtons from "./components/GameButtons";
import RandomSquareGenerator from "./logic/RandomSquareGenerator";

import SquareContext from "./context/SquareContext";
import AnswerContext from "./context/AnswerContext";

const ChessGame = () => {
  const [square, setSquare] = useState("");
  const [answer, setAnswer] = useState(false);
  const [count, setCount] = useState(0);
  const [gameCount, setGameCount] = useState(8);
  const startTime = useRef(null);
  const [totalTime, setTotalTime] = useState(0);
  // const [startTime, setTime] = useState();

  const chessGameClick = () => {
    const row = RandomSquareGenerator();
    setSquare(row);
    if (count === 0) {
      startTime.current = Date.now();
    }
    count === 0 ? setCount(count + 1) : setCount(0);
    console.log(startTime);
  };

  const handleAnswer = (gameDone) => {
    if (gameDone) {
      console.log("total time: ", (Date.now() - startTime.current) / 1000);
      setTotalTime((Date.now() - startTime.current) / 1000);
    }
    setAnswer(true);
  };

  const handleCount = (i) => {
    setCount(count + i);
  };

  const handleGameCount = (i) => {
    setGameCount(i);
  };

  return (
    <AnswerContext.Provider
      value={{
        answer: answer,
        handleAnswer: handleAnswer,
        chessGameClick: chessGameClick,
        handleCount: handleCount,
        count: count,
        gameCount: gameCount,
        handleGameCount: handleGameCount,
        // totalTime: totalTime,
      }}
    >
      <SquareContext.Provider value={square}>
        <div>
          <Header />
          <div className="gameArea">
            <Board />
            <div>
              <button className="gameButton" onClick={chessGameClick}>
                {count === 0 ? "start" : "stop"}
              </button>
              <div>{count === 0 ? "" : square}</div>
            </div>
            <GameButtons />
          </div>
        </div>
      </SquareContext.Provider>
    </AnswerContext.Provider>
  );
};

export default ChessGame;