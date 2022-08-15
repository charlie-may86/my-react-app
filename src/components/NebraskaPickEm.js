import React, { useContext } from "react";

import { NebContext } from "./CollegeFootball";

import "../../src/styles.scss";

const NebPickEm = () => {
  const { myData, isLoading } = useContext(NebContext);
  console.log(myData);
  console.log(isLoading);

  const skedyFactory = () => {
    return (
      <div className="schedule">
        <h2>Nebraska Cornhuskers Schedule 2022</h2>
        <h3>Regular Season</h3>
        <div className="heading">
          <div>date</div>
          <div>opponent</div>
          <div>time</div>
          <div>Point Spread</div>
          <div>Pick em'!</div>
        </div>
        {myData.map((x) => {
          return (
            <div className="gameWeek">
              <div className="date">
                {new Date(x.Day).toDateString().slice(0, 10)}
              </div>
              <div>
                {x.AwayTeam === "NEBR"
                  ? `@ ${x.HomeTeamName}`
                  : `vs ${x.AwayTeamName}`}
              </div>
              <div>
                {x.DateTime
                  ? new Date(x.DateTime).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "TBD"}
              </div>
              {/* <div>{x.OverUnder ? x.OverUnder : "Available Game Week"}</div> */}
              <div>{x.PointSpread ? x.PointSpread : "Available Game Week"}</div>
              <div className='buttonDiv'>
                <button class="pickEm">{x.AwayTeam.slice(0, 4)}</button>{" "}
                <button className="pickEm">{x.HomeTeam.slice(0, 4)}</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  if (!isLoading) {
    return <div>loading</div>;
  } else {
    return (
      <div>
        <div>{skedyFactory()}</div>
      </div>
    );
  }
};

export default NebPickEm;
