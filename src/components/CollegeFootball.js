import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import NebPickEm from "./NebraskaPickEm";

export const NebContext = createContext();

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
    <NebContext.Provider value={myData}>
      <h1>This is cfb pickem app</h1>
      <NebPickEm />
    </NebContext.Provider>
  );
};

export default CollegeFootball;
