import React, { useState, useContext } from "react";
import AnswerContext from "../context/AnswerContext";
import axios from "axios";

const SubmitTime = () => {
  const answer = useContext(AnswerContext);

  const [newTime, setNewTime] = useState({
    username: "",
    time: answer.totalTime,
    game_length: answer.gameCount,
  });

  const handleIntials = (e) => {
    setNewTime({
      ...newTime,
      [e.target.name]: e.target.value,
    });
  };

  const submitTime = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/chess", newTime)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    answer.setTotalTime(0)
  };

  return (
    <div className="timeForm">
      <form onSubmit={submitTime}>
        <label htmlFor="intials">Initials</label>
        <input
          type="text"
          name="username"
          value={newTime.username}
          onChange={handleIntials}
          maxLength="3"
          className="intialsInput"
        />
        <label htmlFor="time">Time</label>
        <input type="float" name="time" value={newTime.time} readOnly />
        <button className="submitScore">Submit</button>
      </form>
    </div>
  );
};

export default SubmitTime;
