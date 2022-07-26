import React, { useState, useEffect } from "react";
import axios from "axios";

const CollegeFootball = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("http://localhost:9000/api/cfb").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <h1>This is cfb pickem app</h1>
    </div>
  );
};

export default CollegeFootball;
