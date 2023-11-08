import React from "react";
import "./key.scss";

const Key = ({ keyValue, margin = null }) => {
  return (
    <span className={`key-container`} style={{ margin: margin }}>
      {keyValue}
    </span>
  );
};

export default Key;
