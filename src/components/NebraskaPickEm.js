import React, { useContext } from "react";

import { NebContext } from "./CollegeFootball";

const NebPickEm = () => {
  const data = useContext(NebContext);
  console.log(data);
  return (
    <div>
      <div>Game 1</div>
      <div>Game 2</div>
    </div>
  );
};

export default NebPickEm;
