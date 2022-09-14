const squareClick = (e, square, value) => {
    console.log(value);
    if (e.target.className === square && value.count < value.gameCount) {
      // console.log(`${e.target.className} equals ${square}`);
      value.handleAnswer();
      value.chessGameClick();
      value.handleCount(1);
    } else if (e.target.className === square) {
      // console.log(`${e.target.className} equals ${square}`);
      value.handleAnswer(true);
      value.handleCount(-value.gameCount);
    } else {
      // console.log(`${e.target.className} does not equals ${square}`);
    }
  };
  
  export default squareClick;
  