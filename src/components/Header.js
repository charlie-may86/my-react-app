import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="headerName">
        <h1>Charlie May</h1>
      </div>
      <div className="headerNav">
        <a href="http://localhost:3000/Resume">CV</a>
        <a href="http://localhost:3000/Resume">Chess Game</a>
        <a href="http://localhost:3000/cfb_pick_em">CFB Pickem</a>
      </div>
    </header>
  );
};

export default Header;
