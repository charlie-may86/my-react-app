import React, { useContext } from "react";

import { NebContext } from "./CollegeFootball";

const NebPickEm = () => {
  const { myData, isLoading } = useContext(NebContext);
  console.log(myData);
  console.log(isLoading);

  const skedyFactory = () => {
    return (
      <>
        {myData.map((x) => {
          return (
            <div>
              <div>{new Date(x.Day).toDateString().slice(0, 10)}</div>
              <div>
                {x.AwayTeam == "NEBR"
                  ? `@ ${x.HomeTeamName}`
                  : `vs ${x.AwayTeamName}`}
              </div>
            </div>
          );
        })}
      </>
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
