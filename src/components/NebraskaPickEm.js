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
          if (x.DateTime) {
            return (
              <div>{new Date(x.DateTime).toDateString().slice(0, 10)}</div>
            );
          }
          return <div>TBD</div>;
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
