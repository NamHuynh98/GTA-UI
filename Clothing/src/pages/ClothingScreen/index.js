import React, { useEffect, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import { ReactComponent as Card } from "../../assets/icons/card.svg";
import { ReactComponent as Cash } from "../../assets/icons/cash.svg";
import "./clothingScreen.scss";
import Slider from "../../components/Slider/index";
import { equipments } from "../../constants/constants";
import ItemEquipments from "./components/ItemEquipments/index";

const ClothingScreen = () => {
  const [listEquipment, setListEquipment] = useState([]);
  const [tabSelected, setTabSelected] = useState(null);

  useEffect(() => {
    setListEquipment(equipments);
  }, []);

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
            <div className="content-list-items">
              {listEquipment[tabSelected].subItems.map((items, index) => (
                <ItemEquipments items={items} key={index} />
              ))}
            </div>
          )}
        </div>
        <div className="wrapper-right">
          <div className="wrapper-list-item">
            <div className="item-buy">
              <div className="wrapper-img">
                <img src="" alt="thumbnail" />
              </div>
              <div className="wrapper-info">
                <div className="info">
                  <div className="name">Item name</div>
                  <div className="price">$65.361</div>
                </div>
                <div className="wrapper-action">
                  <div className="btn sub">-</div>
                  <div className="index-text">25</div>
                  <div className="btn plus">+</div>
                  <div className="btn delete">
                    <Delete />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="invoice">
            <div className="wrapper-label">
              <div className="title">Total Price</div>
              <div className="price">$65.361.000</div>
            </div>
            <div className="wrapper-btn">
              <div className="btn">
                <Cash />
                Cash
              </div>
              <div className="btn">
                <Card />
                Card
              </div>
            </div>
          </div>
          <div className="control">
            <div className="control-content">
              <span className="label">
                Rotate X-Position
                <div className="wrapper-slider"></div>
                <div className="btn-prev">
                  <Arrow />
                </div>
                <Slider />
                <div className="btn-next">
                  <Arrow />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothingScreen;
