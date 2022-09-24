import React, { useEffect, useState } from "react";
import axios from "axios";

const TopTen = () => {
  const [topTen, setTopTen] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/chess/white/eight")
      .then((res) => {
        setTopTen(res.data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!isLoading) {
    return <div>loading</div>;
  } else {
    return (
      <div className="topTen">
          <div>All Time Greatest</div>
        {topTen.map((x) => {
          return (
            <div className='topTenRow' key = {x.result_id} >
              <div className='name' >{x.username}</div>
              <div>{x.time}</div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default TopTen;
