// import React, { useContext, useState, useRef } from "react";
// import AnswerContext from "../context/AnswerContext";
// import SquareContext from "../context/SquareContext";
// import RandomSquareGenerator from "../logic/RandomSquareGenerator";

// const GamePlay = () => {
//   const value = useContext(AnswerContext);
//   // const squareValue = useContext(SquareContext)

//   const [square, setSquare] = useState("");
//   const [count, setCount] = useState(0);
//   const startTime = useRef(null);

//   const chessGameClick = () => {
//     const row = RandomSquareGenerator();
//     setSquare(row);
//     if (count === 0) {
//       startTime.current = Date.now();
//     }
//     count === 0 ? setCount(count + 1) : setCount(0);
//     console.log(startTime);
//   };

//   return (
//     <SquareContext.Provider value={square}>
//       <div>
//         <button className="gameButton" onClick={chessGameClick}>
//           {count === 0 ? "start" : "stop"}
//         </button>
//         <div>{count === 0 ? "" : square}</div>
//         <div>{value.totalTime === 0 ? "" : value.totalTime}</div>
//       </div>
//     </SquareContext.Provider>
//   );
// };

// export default GamePlay;
