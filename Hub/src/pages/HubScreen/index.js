import React from "react";
import "./hubScreen.scss";
import ProgressItem from "./components/ProgressItem/index";
import run from "../../assets/icons/run.svg";

const HubScreen = () => {
  return (
    <div className="hub-container">
      <div className="wrapper-progress-items">
        <ProgressItem icon={run} percent={50} color="rgba(232, 232, 232, 1)" />
      </div>
    </div>
  );
};

export default HubScreen;
