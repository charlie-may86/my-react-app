import React, { useContext } from "react";
import { NebContext } from "./CollegeFootball";

import "../../src/styles.scss";

const SubmitPicks = () => {
  const { pick, handleSubmit } = useContext(NebContext);

  return (
    <div>
      <div className="submitPicks">
        <div className="pick">
          <div>Game</div>
          <div>{"-"}</div>
        </div>
        <div className="pick">
          <div>Winner</div>
          <div>{pick.winner ? pick.winner : "-"}</div>
        </div>
        <div className="pick">
          <div>Point Spread</div>
          <div>{pick.spread ? pick.spread : "-"}</div>
        </div>
      </div>
      <button className="submitPicksButton" onClick={handleSubmit}>
        Submit Pick
      </button>
    </div>
  );
};

export default SubmitPicks;
