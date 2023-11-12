import React, { useState } from "react";
import "./itemOutSide.scss";

import MenuSelector from "../../../../components/MenuSelector/index";
import TooltipInventory from "../../../../components/TooltipInventory/index";

const ItemOutSide = ({
  item,
  onSelectUsed = () => {},
  onSelectSplit = () => {},
  onSelectGift = () => {},
}) => {
  const [positionTooltip, setPositionTooltip] = useState(null);
  const [positionMenu, setPositionMenu] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const onMouseMove = (e) => {
    const { clientX, clientY } = e || {};
    const tooltip = document.getElementById("tooltip-menu-container");
    if (!tooltip) return;
    setPositionTooltip({
      x:
        window.innerWidth - clientX - 20 < tooltip.offsetWidth ||
        window.innerWidth - clientX + 20 < tooltip.offsetWidth
          ? clientX - tooltip.offsetWidth - 15
          : clientX + 15,
      y:
        window.innerHeight - clientY - 20 < tooltip.offsetHeight ||
        window.innerHeight - clientY + 20 < tooltip.offsetHeight
          ? clientY - tooltip.offsetHeight - 15
          : clientY + 15,
    });
  };

  const onClick = (e) => {
    const { clientX, clientY } = e || {};
    const menu = document.getElementById("menu-selector-container");
    if (!menu) return;
    setPositionMenu({
      x:
        window.innerWidth - clientX < menu.offsetWidth
          ? clientX - menu.offsetWidth
          : clientX,
      y:
        window.innerHeight - clientY < menu.offsetHeight
          ? clientY - menu.offsetHeight
          : clientY,
    });
  };

  return (
    <>
      <div
        onMouseDown={() => setIsMouseDown(true)}
        onMouseUp={() => setIsMouseDown(false)}
        className={`item-outside-container`}
        onMouseMove={onMouseMove}
        onMouseOut={() => setPositionTooltip(null)}
        onClick={onClick}
      >
        {item && item.image && <img src={item.image} alt="item" />}
        {item && item.name && <span className="name">{item.name}</span>}
        {item && item.quantity && (
          <span className="quantity">{item.quantity}</span>
        )}
      </div>
      {item && (
        <MenuSelector
          show={positionMenu}
          positionMenu={positionMenu}
          setPositionMenu={setPositionMenu}
          onSelectUsed={onSelectUsed}
          onSelectSplit={onSelectSplit}
          onSelectGift={onSelectGift}
        />
      )}
      {item && (
        <TooltipInventory
          show={positionTooltip && !isMouseDown && !positionMenu}
          item={item}
          positionTooltip={positionTooltip}
        />
      )}
    </>
  );
};

export default ItemOutSide;
