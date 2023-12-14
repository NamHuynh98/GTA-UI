import React from "react";

import "./character.scss";

const Character = () => {
  return (
    <div className="character-container">
      <div className="left-container">
        <div className="title">
          <div className="label">CHARACTER CREATOR</div>
          <div className="sub-title">
            Small description about inventory are there in few cutie words for
            everyone.
          </div>
        </div>
        <div className="side-bar"></div>
      </div>
      <div className="center-container">
        <div className="actions">
          <button>Save character</button>
          <button>Randomize character</button>
        </div>
      </div>
      <div className="right-container"></div>
    </div>
  );
};

export default Character;
