import React from "react";
import "./key.scss";

const Key = ({
  keyValue,
  type = "fill", // fill, clear
  margin = null,
}) => {
  return (
    <span className={`key-container ${type}`} style={{ margin: margin }}>
      {keyValue}
    </span>
  );
};

export default Key;
