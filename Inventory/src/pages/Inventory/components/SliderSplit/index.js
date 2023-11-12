import React, { useEffect, useState } from "react";
import "./slideSplit.scss";

const SliderSplit = ({
  min = 0,
  max = 100,
  labelMin,
  labelMax,
  onChange = () => {},
  value = 0,
}) => {
  const [isShowLabel, setIsShowLabel] = useState(true);
  const changeValue = (v) => {
    onChange(Number(v.target.value));
  };

  useEffect(() => {
    setIsShowLabel(value > min && value < max);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-valuetext={value}
      className="split-slider-container"
    >
      {isShowLabel && (
        <output
          className="slider-output"
          style={{ left: `${Math.ceil((value / max) * 100)}%` }}
        >
          {value}
        </output>
      )}
      <input
        type="range"
        onChange={changeValue}
        min={min}
        max={max}
        step={max / 100}
        value={value}
      />
      <progress value={value} min={min} max={max}></progress>

      <div className="label-slider-wrapper">
        {labelMin && <div className="label-left">{labelMin}</div>}
        {labelMax && <div className="label-right">{labelMax}</div>}
      </div>
    </div>
  );
};

export default SliderSplit;
