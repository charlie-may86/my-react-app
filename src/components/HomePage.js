import React from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const naviagte = useNavigate();

  const handleClick = () => {
    naviagte("/userPage");
  };
  return (
    <div>
      <h1>This is the Charlie may home page </h1>
      <Login />
      <button onClick={handleClick}>Register</button>
    </div>
  );
};

export default HomePage;
