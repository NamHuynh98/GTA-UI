import React, { useState } from "react";
import "./itemProduct.scss";
import TooltipInventory from "../../../../components/TooltipInventory/index";

const ItemProduct = ({ dataProduct, isDragging = false }) => {
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
      <div className="item-product-container" onClick={onClick}>
        {dataProduct && (
          <>
            <div className="quantity">{dataProduct.quantity}</div>
            <div className="weight">{dataProduct.weight} KG</div>
            <img src={dataProduct.image} alt="thumbnail" />
            <div className="name">{dataProduct.name}</div>
            <div className={`level level-${dataProduct.level}`}></div>
          </>
        )}
      </div>
      {dataProduct && (
        <TooltipInventory
          show={positionTooltip && !isDragging}
          setPositionTooltip={setPositionTooltip}
          item={dataProduct}
          positionTooltip={positionTooltip}
        />
      )}
    </>
  );
};

export default ItemProduct;
