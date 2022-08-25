import React, { useContext } from "react";
import { NebContext } from "./CollegeFootball";

import "../../src/styles.scss";

const SubmitPicks = () => {
  const { pick, handleSubmit } = useContext(NebContext);
  // refactor this a form
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="game" value="Game" />
          <input
            type="text"
            name="gamePick"
            value={pick.winner ? pick.winner : "-"}
          />
        </div>
        <div>
          <input type="text" name="pick" value="Winner" />
          <input
            type="text"
            name="winner"
            value={pick.spread ? pick.spread : "-"}
          />
        </div>
        <button>Submit Pick</button>
      </form>
    </div>
  );
};

export default SubmitPicks;
