import React, { useState } from "react";
import "./itemEquipment.scss";
import { ReactComponent as WeightIcon } from "../../../../assets/icons/weight.svg";
import { ReactComponent as LockIcon } from "../../../../assets/icons/lock.svg";
import MenuSelector from "../../../../components/MenuSelector/index";
import TooltipInventory from "../../../../components/TooltipInventory/index";

const ItemEquipment = ({
  item,
  isLock,
  isWear,
  isMatch = false,
  isDragging = false,
  onSelect = () => {},
  onSelectUsed = () => {},
  onSelectSplit = () => {},
  onSelectGift = () => {},
}) => {
  const [positionTooltip, setPositionTooltip] = useState();
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
        window.innerHeight - clientY - 25 < tooltip.offsetHeight ||
        window.innerHeight - clientY + 25 < tooltip.offsetHeight
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
        onMouseMove={onMouseMove}
        onMouseOut={() => setPositionTooltip(null)}
        onClick={onClick}
        className={`item-equipment-container ${isLock ? "lock" : ""} ${
          isMatch && isWear && "match"
        } ${isWear ? "wear" : ""} ${isWear && item && `level_${item.level}`}`}
      >
        {isLock ? (
          <LockIcon />
        ) : (
          <>
            {item && item.image && <img src={item.image} alt="thumbnail" />}
            {item && item.weight && !isWear && (
              <div className="weight">
                <WeightIcon />
                <span>{item.weight}</span>
              </div>
            )}
            {item && item.quantity && !isWear && (
              <div className="quantity">{item.quantity}</div>
            )}
          </>
        )}
      </div>
      {item && (
        <MenuSelector
          show={positionMenu && !isDragging}
          positionMenu={positionMenu}
          setPositionMenu={setPositionMenu}
          onSelectUsed={onSelectUsed}
          onSelectSplit={onSelectSplit}
          onSelectGift={onSelectGift}
        />
      )}
      {item && (
        <TooltipInventory
          show={positionTooltip && !isMouseDown && !positionMenu && !isDragging}
          item={item}
          positionTooltip={positionTooltip}
        />
      )}
    </>
  );
};

export default ItemEquipment;
