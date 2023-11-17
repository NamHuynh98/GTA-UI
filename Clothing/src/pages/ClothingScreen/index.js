import React, { useEffect, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as Card } from "../../assets/icons/card.svg";
import { ReactComponent as Cash } from "../../assets/icons/cash.svg";
import "./clothingScreen.scss";
import Slider from "../../components/Slider/index";
import { equipments } from "../../constants/constants";
import ItemEquipments from "./components/ItemEquipments/index";
import ItemBuy from "./components/ItemBuy";
import { convertMoneyNumberToString } from "../../constants/utils";

const ClothingScreen = () => {
  const [listEquipment, setListEquipment] = useState([]);
  const [tabSelected, setTabSelected] = useState(null);
  const [listItemsBuy, setListItemsBuy] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [valueSlider, setValueSlider] = useState(1);

  useEffect(() => {
    setListEquipment(equipments);
  }, []);
  const onChangeQuantityItem = (value) => {
    const { quantity, item } = value || {};

    setListItemsBuy((eqs) => {
      const temp = [...eqs];
      const eqFound = temp.find((e) => e.item.id === item.id);
      if (eqFound) eqFound.quantity = quantity;
      onUpdateTotalPrice(temp);
      return temp;
    });
  };
  const onUpdateTotalPrice = (listE = []) => {
    setTotalPrice(
      listE.reduce((a, b) => {
        if (!isNaN(a)) return a + b.quantity * b.item.price;
        return a.quantity * a.item.price + b.quantity * b.item.price;
      }, 0)
    );
  };
  const onDeleteItem = (item) => {
    setListItemsBuy((eqs) => {
      let temp = [...eqs];
      temp = temp.filter((e) => e.item.id !== item.id);
      onUpdateTotalPrice(temp);
      return temp;
    });
  };

  return (
    <div className="clothing-container">
      <div className="title">
        <div className="logo">CLOTHING</div>
        <div className="sub-title">
          SMALL DESCRIPTION ABOUT MENU ARE THERE IN FEW WORDS JUST THERE FOR OUR
          PLAYERS, ENJOY.
        </div>
      </div>
      <div className="content">
        <div className="wrapper-left">
          <div className="tabs-container">
            {Object.keys(listEquipment).map((key, index) => (
              <div
                className={`tab ${key === tabSelected ? "active" : ""}`}
                key={index}
                onClick={() => setTabSelected(key)}
              >
                <div className="label">{key}</div>
                <img src={listEquipment[key].image} alt="thumbnail" />
              </div>
            ))}
          </div>
          {tabSelected && (
            <div className="content-list-items" key={tabSelected}>
              {listEquipment[tabSelected].subItems.map((items, index) => (
                <ItemEquipments
                  items={items}
                  key={index}
                  onBuy={(equipment) => {
                    const isFoundItem = listItemsBuy.find(
                      (ib) => ib.item.id === equipment.id
                    );
                    if (!isFoundItem) {
                      onUpdateTotalPrice([
                        ...listItemsBuy,
                        { quantity: 1, item: equipment },
                      ]);
                      setListItemsBuy((e) => [
                        ...e,
                        { quantity: 1, item: equipment },
                      ]);
                    }
                  }}
                />
              ))}
            </div>
          )}
        </div>
        {listItemsBuy.length && (
          <div className="wrapper-right">
            <div className="wrapper-list-item">
              {listItemsBuy.map((item, i) => (
                <ItemBuy
                  dataItem={item.item}
                  key={i}
                  onChange={onChangeQuantityItem}
                  onDeleteItem={onDeleteItem}
                />
              ))}
            </div>
            <div className="invoice">
              <div className="wrapper-label">
                <div className="title">Total Price</div>
                <div className="price">
                  ${convertMoneyNumberToString(totalPrice)}
                </div>
              </div>
              <div className="wrapper-btn">
                <div className="btn" onClick={() => console.log("Cash")}>
                  <Cash />
                  Cash
                </div>
                <div className="btn" onClick={() => console.log("Card")}>
                  <Card />
                  Card
                </div>
              </div>
            </div>
            <div className="control">
              <div className="control-content">
                <span className="label">Rotate X-Position</span>
                <div className="wrapper-slider">
                  <div
                    className="btn-prev"
                    onClick={() =>
                      valueSlider > 0 && setValueSlider((v) => v - 1)
                    }
                  >
                    <Arrow />
                  </div>
                  <Slider
                    minValue={1}
                    maxValue={100}
                    defaultValue={valueSlider}
                    onChange={(v) => setValueSlider(Number(v))}
                  />
                  <div
                    className="btn-next"
                    onClick={() =>
                      valueSlider < 100 && setValueSlider((v) => v + 1)
                    }
                  >
                    <Arrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClothingScreen;
