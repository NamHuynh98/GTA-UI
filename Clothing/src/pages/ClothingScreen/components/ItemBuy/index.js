import React, { useState } from "react";
import "./itemBuy.scss";
import { ReactComponent as Delete } from "../../../../assets/icons/delete.svg";
import { convertMoneyNumberToString } from "../../../../constants/utils";

const ItemBuy = ({
  dataItem,
  onChange = () => {},
  onDeleteItem = () => {},
}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="item-buy-container">
      <div className="wrapper-img">
        <img src={dataItem.image} alt="thumbnail" />
      </div>
      <div className="wrapper-info">
        <div className="info">
          <div className="name">{dataItem.name}</div>
          <div className="price">
            ${convertMoneyNumberToString(dataItem.price * quantity)}
          </div>
        </div>
        <div className="wrapper-action">
          <div
            className="btn sub"
            onClick={() => {
              if (quantity - 1 > 0) {
                onChange({ quantity: quantity - 1, item: dataItem });
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
              onChange({ quantity: quantity + 1, item: dataItem });
              setQuantity((q) => q + 1);
            }}
          >
            +
          </div>
          <div className="btn delete" onClick={() => onDeleteItem(dataItem)}>
            <Delete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBuy;
