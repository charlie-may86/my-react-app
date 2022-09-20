import React, { useState, useContext } from "react";
import AnswerContext from "../context/AnswerContext";

const SubmitTime = () => {
  const answer = useContext(AnswerContext);

  const [newTime, setNewTime] = useState({
    username: "",
    time: answer.totalTime,
    game_length: "",
  });

  const handleIntials = (e) => {
    setNewTime({
      ...newTime,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="timeForm">
      <form>
        <label htmlFor="intials">Initials</label>
        <input
          type="username"
          name="intials"
          value={newTime.username}
          onChange={handleIntials}
        />
        <label htmlFor="time">Time</label>
        <input type="float" name="time" value={newTime.time} readOnly />
      </form>
      <button className="submitScore">Submit</button>
    </div>
  );
};

export default SubmitTime;
