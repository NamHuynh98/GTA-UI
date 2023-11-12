import React, { useEffect, useRef } from "react";
import "./menuSelector.scss";
import { ReactComponent as UsedIcon } from "../../assets/icons/use-icon.svg";
import { ReactComponent as GiftIcon } from "../../assets/icons/gift-icon.svg";
import { ReactComponent as SplitIcon } from "../../assets/icons/split-icon.svg";

const MenuSelector = ({
  show,
  positionMenu,
  setPositionMenu,
  onSelectUsed = () => {},
  onSelectSplit = () => {},
  onSelectGift = () => {},
}) => {
  const refPopup = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) =>
      refPopup.current &&
      !refPopup.current.contains(event.target) &&
      setPositionMenu(null);

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refPopup]);

  return (
    <div
      ref={refPopup}
      className={`menu-selector ${show && "show"}`}
      id="menu-selector-container"
      style={{
        top: `${(positionMenu || { y: 0 }).y + 10}px`,
        left: `${(positionMenu || { x: 0 }).x + 10}px`,
      }}
    >
      <div
        className="option"
        onClick={() => {
          onSelectUsed();
          setPositionMenu(null);
        }}
      >
        <UsedIcon />
        Sử dụng vật phẩm
      </div>
      <div
        className="option"
        onClick={() => {
          onSelectSplit();
          setPositionMenu(null);
        }}
      >
        <SplitIcon />
        Tách ra
      </div>
      <div
        className="option"
        onClick={() => {
          onSelectGift();
          setPositionMenu(null);
        }}
      >
        <GiftIcon />
        Cho người khác
      </div>
    </div>
  );
};

export default MenuSelector;
