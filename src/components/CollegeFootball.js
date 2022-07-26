import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CollegeFootball = () => {
  //   const [data, setData] = useState({});

  // useEffect(() => {
  //   axios.get("http://localhost:9000/api/cfb").then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  const navigate = useNavigate();



  return (
    <div>
      <h1>This is the college football app</h1>
    </div>
  );
};

export default CollegeFootball;
