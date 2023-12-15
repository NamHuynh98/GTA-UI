import React from "react";
import "./slider.scss";

const Slider = ({
  defaultValue = 0,
  minValue = 0,
  maxValue = 200,
  onChange = () => {},
  className = null,
}) => {
  return (
    <div className={`slider ${className && className}`}>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={defaultValue}
        onInput={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Slider;
