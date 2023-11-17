import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../../../assets/icons/arrow.svg";
import "./itemEquipments.scss";
import { convertMoneyNumberToString } from "../../../../constants/utils";

const ItemEquipments = ({ items = [], onBuy = () => {} }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="item-equipment-container">
      <div className="wrapper-img">
        <img src={items[index].image} alt="thumbnail" />
      </div>
      <div className="text-content">
        <div className="title">{items[index].name}</div>
        <div className="line-wrapper">
          <div className="price">
            ${convertMoneyNumberToString(items[index].price)}
          </div>
          <div className="btn-buy" onClick={() => onBuy(items[index])}>
            Buy
          </div>
          <div className="action-change">
            <div
              className={`btn-prev ${index === 0 && "disabled"}`}
              onClick={() => index > 0 && setIndex((i) => i - 1)}
            >
              <Arrow />
            </div>
            <div className="index">{index + 1}</div>
            <div
              className={`btn-next ${index === items.length - 1 && "disabled"}`}
              onClick={() => index < items.length - 1 && setIndex((i) => i + 1)}
            >
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemEquipments;
