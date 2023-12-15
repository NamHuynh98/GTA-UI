import React, { useState } from "react";
import "./itemTemplate.scss";
import Slider from "../Slider";

export const TYPE_ACTION = {
  BUTTONS: "buttons",
  SLIDER: "slider",
  COLORS: "colors",
};

// listButtons: type DOMButton[]
// listColors: type string[] - string hex color

export default function ItemTemplate({
  title,
  subTitle,
  type,
  listButtons = [],
  listColors = [],
  minValue = 0,
  maxValue = 100,
  valueSlider = 0,
  onChange = () => {},
  onSelectedColor = () => {},
}) {
  const [colorSelected, setColorSelected] = useState(null);
  const renderContent = (typeRender) => {
    switch (typeRender) {
      case TYPE_ACTION.BUTTONS:
        return listButtons;
      case TYPE_ACTION.COLORS:
        return (
          <div className="wrapper-colors">
            {listColors.map((color, index) => (
              <div
                key={index}
                className={`color ${
                  colorSelected && colorSelected.index === index ? "active" : ""
                }`}
                onClick={() => {
                  setColorSelected({ color, index });
                  onSelectedColor({ color, index });
                }}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        );
      case TYPE_ACTION.SLIDER:
        return (
          <Slider
            defaultValue={valueSlider}
            minValue={minValue}
            maxValue={maxValue}
            onChange={onChange}
            className="slider-style"
          />
        );
      default:
        return;
    }
  };

  return (
    <div className="item-template">
      <div className="label">
        <div className="title">{title}</div>
        <div className="sub-title">{subTitle}</div>
      </div>
      <div className="content">{renderContent(type)}</div>
    </div>
  );
}
