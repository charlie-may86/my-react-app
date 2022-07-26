// import logo from './logo.svg';
// import './App.scss';

import React from "react";
import CollegeFootball from "./components/CollegeFootball";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userPage" element={<CollegeFootball />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
