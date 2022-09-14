import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  border: 3px black solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Around the Board By Charlie</h1>
      <h2>A Chess Board Memorization Game</h2>
    </StyledHeader>
  );
};

export default Header;