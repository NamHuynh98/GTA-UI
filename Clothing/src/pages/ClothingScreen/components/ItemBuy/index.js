import React, { useState } from "react";
import "./itemBuy.scss";
import { ReactComponent as Delete } from "../../../../assets/icons/delete.svg";

const ItemBuy = (
  { dataItem, priceItem = () => {} },
  onDeleteIem = () => {}
) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="item-buy-container">
      <div className="wrapper-img">
        <img src={dataItem.image} alt="thumbnail" />
      </div>
      <div className="wrapper-info">
        <div className="info">
          <div className="name">{dataItem.name}</div>
          <div className="price">${dataItem.price * quantity}</div>
        </div>
        <div className="wrapper-action">
          <div
            className="btn sub"
            onClick={() => {
              if (quantity - 1 > 1) {
                priceItem((quantity - 1) * dataItem.price);
                setQuantity((q) => q - 1);
              }
            }}
          >
            -
          </div>
          <div className="index-text">{quantity}</div>
          <div
            className="btn plus"
            onClick={() => {
              priceItem((quantity + 1) * dataItem.price);
              setQuantity((q) => q + 1);
            }}
          >
            +
          </div>
          <div className="btn delete" onClick={() => onDeleteIem()}>
            <Delete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBuy;
