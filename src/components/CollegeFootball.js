import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import NebPickEm from "./NebraskaPickEm";

export const NebContext = createContext();

const CollegeFootball = () => {
  const [myData, setmyData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [pick, setPick] = useState({});

  //   https://sportsdata.io/developers/api-documentation/ncaa-football#/sports-data

  const handleClick = (val) => {
    setPick({
      username: "Charlie",
      winner: val.target.value,
      spread: val.target.name,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/cfb/pickem", pick)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    <NebContext.Provider value={{ myData, isLoading, handleClick }}>
      <h1>This is cfb pickem app</h1>
      <button onClick={handleSubmit}>Submit Picks</button>
      <NebPickEm />
    </NebContext.Provider>
  );
};

export default CollegeFootball;
