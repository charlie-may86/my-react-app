import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import NebPickEm from "./NebraskaPickEm";

export const NebContext = createContext();



const CollegeFootball = () => {
  const [myData, setmyData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [pick, setPick] = useState('This is not a pick')

  //   https://sportsdata.io/developers/api-documentation/ncaa-football#/sports-data

  const handleClick = (val) => {
    setPick(val.target.value)
  }
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/cfb")
      .then((res) => {
        setmyData(
          res.data.filter((x) => x.HomeTeam === "NEBR" || x.AwayTeam === "NEBR")
        );
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <NebContext.Provider value={{myData, isLoading, handleClick}}>
      <h1>This is cfb pickem app</h1>
      <NebPickEm />
    </NebContext.Provider>
  );
};

export default CollegeFootball;
