import React, { useState, useEffect } from "react";
import axios from "axios";

const CollegeFootball = () => {
  const [myData, setmyData] = useState({});

  //   https://sportsdata.io/developers/api-documentation/ncaa-football#/sports-data

  useEffect(() => {
    axios.get("http://localhost:9000/api/cfb").then((res) => {
      setmyData(
        res.data.filter((x) => x.HomeTeam === "NEBR" || x.AwayTeam === "NEBR")
      );
    });
  }, []);

  return (
    <div>
      <h1>This is cfb pickem app</h1>
    </div>
  );
};

export default CollegeFootball;
