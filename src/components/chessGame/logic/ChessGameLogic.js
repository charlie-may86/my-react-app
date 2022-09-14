import randomSquareGenerator from "./randomSquareGenerator";

const chessGameLogic = () => {
  const square = randomSquareGenerator();
  return square;
};

export default chessGameLogic;