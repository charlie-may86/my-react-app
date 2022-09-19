import React from "react";
import SquareFactory from "./SquareFactoryDebrecated";
import styled from "styled-components";

const StyledBoard = styled.div`
  display: inline-flex;
`;

const rowArray = ["A", "B", "C", "D", "E", "F", "G", "H"];

export default function Board() {
  return (
    <StyledBoard className="board">
      {rowArray.map((className) => {
        return SquareFactory(className, rowArray.indexOf(className));
      })}
    </StyledBoard>
  );
}