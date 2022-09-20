import React, { useState, useContext } from "react";
import AnswerContext from "../context/AnswerContext";

const SubmitTime = () => {
  const answer = useContext(AnswerContext);

  const [newTime, setNewTime] = useState({
    username: "",
    time: answer.totalTime,
    game_length: answer.gameCount,
  });

  console.log(newTime);
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
          type="text"
          name="username"
          value={newTime.username}
          onChange={handleIntials}
          maxLength="3"
          className='intialsInput'
          
        />
        <label htmlFor="time">Time</label>
        <input type="float" name="time" value={newTime.time} readOnly />
      </form>
      <button className="submitScore">Submit</button>
    </div>
  );
};

export default SubmitTime;
