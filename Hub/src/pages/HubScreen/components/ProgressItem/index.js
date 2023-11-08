import React from "react";
import "./progressItem.scss";

const ProgressItem = ({ percent = 10, color, icon }) => {
  return (
    <div className="progress-item-container">
      <div className="circle">
        <div className="wave"></div>
        <img src={icon} alt="icon" />
      </div>
      <div className="percent">{percent}%</div>
    </div>
  );
};

export default ProgressItem;
