import React, { useEffect, useRef } from "react";
import "./tooltipInventory.scss";

const TooltipInventory = ({
  item,
  positionTooltip,
  show,
  setPositionTooltip,
  onSplit = () => {},
  onUse = () => {},
  onGive = () => {},
}) => {
  const refPopup = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) =>
      refPopup.current &&
      !refPopup.current.contains(event.target) &&
      setPositionTooltip(null);

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refPopup]);
  return (
    <div
      ref={refPopup}
      className={`tooltip-menu ${show && "show"}`}
      id="tooltip-menu-container"
      style={{
        top: `${(positionTooltip || { y: 0 }).y}px`,
        left: `${(positionTooltip || { x: 0 }).x}px`,
      }}
    >
      <div className="content">
        <div className="quantity">{item.quantity}</div>
        <div className="wrapper-img">
          <img src={item.image} alt="thumbnail" />
        </div>
        <div className="wrapper-text">
          <div className="title">
            <span>{item.name}</span>
            <span>{item.weight}KG</span>
          </div>
          <div className="desc">{item.description}</div>
        </div>
      </div>
      <div className="actions">
        <button onClick={onUse}>Use</button>
        <button onClick={onSplit}>Split</button>
        <button onClick={onGive}>Give</button>
      </div>
    </div>
  );
};

export default TooltipInventory;
