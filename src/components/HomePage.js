import React from "react";
import Login from "./Login";
import Header from './Header'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const naviagte = useNavigate();

  const handleClick = () => {
    naviagte("/userPage");
  };
  return (
    <div>
      <Header />
      <Login />
      <button onClick={handleClick}>Register</button>
    </div>
  );
};

export default HomePage;
