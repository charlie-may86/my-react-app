const squareClick = (e, square, value) => {
    console.log(value);
    if (e.target.className.slice(0,2) === square && value.count < value.gameCount) {
      console.log(`${e.target.className.slice(0,2)} equals ${square}`);
      value.handleAnswer();
      value.chessGameClick();
      value.handleCount(1);
    } else if (e.target.className.slice(0,2) === square) {
      console.log(`${e.target.className.slice(0,2)} equals ${square}`);
      value.handleAnswer(true);
      value.handleCount(-value.gameCount);
    } else {
      console.log(`${e.target.className.slice(0,2)} does not equal ${square}`);
    }
  };
  
  export default squareClick;
  