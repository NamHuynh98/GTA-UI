import React from "react";
import "./processBar.scss";

const ProcessBar = ({ color, percent = 0, className }) => {
  return (
    <div className={`process-bar-container ${className}`}>
      <div
        className="process-bar-wrapper"
        style={{ backgroundColor: color }}
      ></div>
      <div
        className="process-percent"
        style={{ width: `${percent}%`, backgroundColor: color }}
      ></div>
    </div>
  );
};

export default ProcessBar;
