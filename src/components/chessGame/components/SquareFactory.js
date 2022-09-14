import React, { useContext } from "react";
import square from "../../images/box.png";
import styled from "styled-components";
import SquareContext from "../context/SquareContext";
import AnswerContext from "../context/AnswerContext";
import squareClick from "../logic/SquareClick";

const StyledSquare = styled.div`
  border: 3px solid black;
  display: flex;
`;

const rowArray = ["8", "7", "6", "5", "4", "3", "2", "1"];

const SquareFactory = (className, number) => {
  const whichSquare = useContext(SquareContext);
  const value = useContext(AnswerContext);

  const handleClick = (e) => {
    squareClick(e, whichSquare, value);
  };

  return (
    <div className={className}>
      {rowArray.map((row) => {
        let x = "";
        if (rowArray.indexOf(row) % 2 === 1 && number % 2 === 1) {
          x = "light";
        } else if (rowArray.indexOf(row) % 2 === 1 && number % 2 === 0) {
          x = "dark";
        } else if (rowArray.indexOf(row) % 2 === 0 && number % 2 === 1) {
          x = "dark";
        } else if (rowArray.indexOf(row) % 2 === 0 && number % 2 === 0) {
          x = "light";
        }
        return (
          <StyledSquare className={[className, row, x]} onClick={handleClick}>
            <img
              src={square}
              alt="chess square"
              className={[className + row]}
            />
          </StyledSquare>
        );
      })}
    </div>
  );
};

export default SquareFactory;
