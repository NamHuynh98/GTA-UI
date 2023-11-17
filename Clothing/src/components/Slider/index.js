import React from "react";
import "./slider.scss";

const Slider = ({
  defaultValue = 0,
  minValue = 0,
  maxValue = 200,
  onChange = () => {},
}) => {
  return (
    <div className="slider">
      <input
        step={1}
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
