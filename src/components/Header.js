import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>Charlie May</h1>
      <div className="header_nav">
        <nav>
          <ul>
            <li>
              <a href="http://localhost:3000/Resume">CV</a>
            </li>
            <li>
              <a href="http://localhost:3000/Resume">Chess Game</a>
            </li>
            <li>
              <a href="http://localhost:3000/cfb_pick_em">CFB Pickem</a>
            </li>
          </ul>
        </nav>
        <a href="http://localhost:3000/Resume" class="aboutMe">
          <span />
          About Me
        </a>
      </div>
    </header>
  );
};

export default Header;
