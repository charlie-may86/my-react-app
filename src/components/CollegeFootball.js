import React, { useEffect } from "react";
import axios from "axios";

const CollegeFootball = () => {
  //   const [data, setData] = useState({});

  useEffect(() => {
    axios.get("http://localhost:9000/api/cfb").then((res) => {
      console.log(res);
    });
  }, []);

  const clickSignUp = () => {
    console.log("I clicked signup");
  };

  return (
    <div>
      <h1>This is the college football app</h1>
      <button onClick={clickSignUp}>sign up</button>
    </div>
  );
};

export default CollegeFootball;
