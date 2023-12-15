import React, { useState } from "react";
import ItemTemplate, { TYPE_ACTION } from "../ItemTemplate/index";
import male from "../../../assets/images/male.png";
import female from "../../../assets/images/female.png";
import item from "../../../assets/images/item.png";

const TYPE_PARENT = {
  DAD: "dad",
  MOTHER: "mother",
};

export default function DNATab() {
  const [colors, setColors] = useState([
    "#454545",
    "#FF4003",
    "#577CFF",
    "#B5FF57",
    "#FFB257",
    "#E757FF",
    "#57E1FF",
    "#FF5757",
    "#FFF",
  ]);
  const [sliderValue, setSliderValue] = useState(0);
  const [colorSelected, setColorSelected] = useState(null);
  const [sexSelected, setSexSelected] = useState(null);
  const [parent, setParent] = useState(null);
  const [parentModelSelected, setParentModelSelected] = useState(null);
  return (
    <>
      <ItemTemplate
        type={TYPE_ACTION.BUTTONS}
        title="SEX SELECTION"
        subTitle="Small description about this thing"
        listButtons={[
          <button
            className={`${sexSelected && sexSelected === "men" && "active"}`}
            onClick={() => {
              setSexSelected("men");
              console.log("sex selected: ", "men");
            }}
          >
            <img src={male} alt="icon" />
            Men
          </button>,
          <button
            className={`${sexSelected && sexSelected === "women" && "active"}`}
            onClick={() => {
              setSexSelected("women");
              console.log("sex selected: ", "women");
            }}
          >
            <img src={female} alt="icon" />
            Woman
          </button>,
        ]}
      />
      <div className="wrapper-tab-action">
        <ItemTemplate
          type={TYPE_ACTION.BUTTONS}
          title="PARENTS SELECTION"
          subTitle="Small description about this thing"
          listButtons={[
            <button
              className={`${parent === TYPE_PARENT.DAD && "active"}`}
              onClick={() => {
                setParent(TYPE_PARENT.DAD);
                console.log(TYPE_PARENT.DAD);
              }}
            >
              Dads
            </button>,
            <button
              className={`${parent === TYPE_PARENT.MOTHER && "active"}`}
              onClick={() => {
                setParent(TYPE_PARENT.MOTHER);
                console.log(TYPE_PARENT.MOTHER);
              }}
            >
              Mothers
            </button>,
          ]}
        />
        <div className="items">
          {parent === TYPE_PARENT.DAD &&
            Array.from({ length: 10 }, (_, i) => (
              <div
                className={`item ${
                  parentModelSelected &&
                  parentModelSelected.index === i &&
                  parentModelSelected.parent === TYPE_PARENT.DAD &&
                  "active"
                }`}
                key={i}
                onClick={() => {
                  setParentModelSelected({ index: i, parent });
                  console.log({ index: i, parent });
                }}
              >
                <img src={item} alt="thumbnail" />
              </div>
            ))}
          {parent === TYPE_PARENT.MOTHER &&
            Array.from({ length: 2 }, (_, i) => (
              <div
                className={`item ${
                  parentModelSelected &&
                  parentModelSelected.index === i &&
                  parentModelSelected.parent === TYPE_PARENT.MOTHER &&
                  "active"
                }`}
                key={i}
                onClick={() => {
                  setParentModelSelected({ index: i, parent });
                  console.log({ index: i, parent });
                }}
              >
                <img src={item} alt="thumbnail" />
              </div>
            ))}
        </div>
      </div>
      <ItemTemplate
        type={TYPE_ACTION.SLIDER}
        title="SIMILARITY TO DAD"
        subTitle="Small description about this thing"
        valueSlider={sliderValue}
        minValue={0}
        maxValue={100}
        onChange={(value) => {
          setSliderValue(value);
          console.log("slider value: ", value);
        }}
      />
      <ItemTemplate
        type={TYPE_ACTION.COLORS}
        title="COLOR PICKER"
        subTitle="Small description about this thing"
        listColors={colors}
        onSelectedColor={(color) => {
          setColorSelected(color);
          console.log("Color selected: ", color);
        }}
      />
    </>
  );
}
