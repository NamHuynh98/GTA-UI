import React from "react";
import "./tips.scss";

const Tips = ({ title, description }) => {
  return (
    <div className="tips-container">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default Tips;
