import React, { useContext } from "react";

import { NebContext} from "./CollegeFootball";

const NebPickEm = () => {
  const {myData, isLoading} = useContext(NebContext);
  console.log(myData);
  console.log(isLoading);


  const skedyFactory = () => {
    myData.forEach((x) => {
      return <div>{x.DateTime}</div>;
    });
  };

if(!isLoading) {
    return <div>loading</div>
} else {
    return(
        <div>
            <div>{new Date(myData[0].DateTime).toDateString()}</div>
        </div>
    )
}

  
};

export default NebPickEm;
