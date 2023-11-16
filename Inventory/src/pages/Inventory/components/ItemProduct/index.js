import React, { useState } from "react";
import "./itemProduct.scss";
import TooltipInventory from "../../../../components/TooltipInventory/index";

const ItemProduct = ({
  dataProduct,
  isItemUsed = false,
  iconHint = null,
  isActive = false,
  onSplit = () => {},
  onUse = () => {},
  onGive = () => {},
}) => {
  const [positionTooltip, setPositionTooltip] = useState();

  const onClick = (e) => {
    const { clientX, clientY } = e || {};
    const menu = document.getElementById("tooltip-menu-container");
    if (!menu) return;
    setPositionTooltip({
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
      {isItemUsed ? (
        <button
          className={`item-product-container_used ${isActive && "active"} ${
            dataProduct && `level-${dataProduct.level}`
          }`}
          onClick={onClick}
          onDoubleClick={() => onUse()}
        >
          {dataProduct ? <img src={dataProduct.image} alt="item" /> : iconHint}
        </button>
      ) : (
        <button
          className="item-product-container"
          onClick={onClick}
          onDoubleClick={() => onUse()}
        >
          {dataProduct && (
            <>
              <div className="quantity">{dataProduct.quantity}</div>
              <div className="weight">{dataProduct.weight} KG</div>
              <img src={dataProduct.image} alt="thumbnail" />
              <div className="name">{dataProduct.name}</div>
              <div className={`level level-${dataProduct.level}`}></div>
            </>
          )}
        </button>
      )}
      {dataProduct && (
        <TooltipInventory
          onUse={onUse}
          onGive={onGive}
          onSplit={onSplit}
          show={positionTooltip}
          setPositionTooltip={setPositionTooltip}
          item={dataProduct}
          positionTooltip={positionTooltip}
        />
      )}
    </>
  );
};

export default ItemProduct;
