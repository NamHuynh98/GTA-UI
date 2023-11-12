import React from "react";
import "./Inventory.scss";
import { ReactComponent as Armor } from "../../assets/icons/armor.svg";
import { ReactComponent as Backpack } from "../../assets/icons/backpack.svg";
import { ReactComponent as Bracelet } from "../../assets/icons/bracelet.svg";
import { ReactComponent as Cap } from "../../assets/icons/cap.svg";
import { ReactComponent as Earrings } from "../../assets/icons/earrings.svg";
import { ReactComponent as Glove } from "../../assets/icons/glove.svg";
import { ReactComponent as Mask } from "../../assets/icons/mask.svg";
import { ReactComponent as Pet } from "../../assets/icons/pet.svg";
import { ReactComponent as Player } from "../../assets/icons/player.svg";
import { ReactComponent as Ring } from "../../assets/icons/ring.svg";
import { ReactComponent as Shirt } from "../../assets/icons/shirt.svg";
import { ReactComponent as Shoe } from "../../assets/icons/shoe.svg";
import { ReactComponent as Trousers } from "../../assets/icons/trousers.svg";
import { ReactComponent as Watch } from "../../assets/icons/watch.svg";
import { ReactComponent as Weapons } from "../../assets/icons/weapons.svg";
import { ReactComponent as Wing } from "../../assets/icons/wing.svg";
import ItemProduct from "./components/ItemProduct";
import {
  listItemUsed,
  ItemsOnBag,
  ItemsOutSide,
  ItemsOnSlots,
} from "../../constants/constants";

const TYPE_SLOT = {
  BRACELET: "bracelet",
  ARMOR: "armor",
  BACKPACK: "backpack",
  CAP: "cap",
  EARRING: "earring",
  GLOVE: "glove",
  MARK: "mark",
  PET: "pet",
  RING: "ring",
  SHIRT: "shirt",
  SHOE: "shoe",
  WATCH: "watch",
  WEAPON: "weapon",
  WING: "wing",
  TROUSER: "trouser",
};

const Inventory = () => {
  const renderSlotPlayer = (type, data) => {
    let iconHint = null;
    switch (type) {
      case TYPE_SLOT.ARMOR:
        iconHint = <Armor />;
        break;
      case TYPE_SLOT.BACKPACK:
        iconHint = <Backpack />;
        break;
      case TYPE_SLOT.BRACELET:
        iconHint = <Bracelet />;
        break;
      case TYPE_SLOT.CAP:
        iconHint = <Cap />;
        break;
      case TYPE_SLOT.EARRING:
        iconHint = <Earrings />;
        break;
      case TYPE_SLOT.GLOVE:
        iconHint = <Glove />;
        break;
      case TYPE_SLOT.MARK:
        iconHint = <Mask />;
        break;
      case TYPE_SLOT.PET:
        iconHint = <Pet />;
        break;
      case TYPE_SLOT.RING:
        iconHint = <Ring />;
        break;
      case TYPE_SLOT.SHIRT:
        iconHint = <Shirt />;
        break;
      case TYPE_SLOT.SHOE:
        iconHint = <Shoe />;
        break;
      case TYPE_SLOT.TROUSER:
        iconHint = <Trousers />;
        break;
      case TYPE_SLOT.WATCH:
        iconHint = <Watch />;
        break;
      case TYPE_SLOT.WEAPON:
        iconHint = <Weapons />;
        break;
      case TYPE_SLOT.WING:
        iconHint = <Wing />;
        break;
      default:
        break;
    }
    return (
      <div className="slot">
        {data ? <img src={data.image} alt="item" /> : iconHint}
      </div>
    );
  };

  const displayProgressBar = (percent) => {
    const cover = Math.ceil(percent / 10);
    return (
      <div className="progress-bar-container">
        {Array.from({ length: cover }).map((_, i) => (
          <div className="progress-item active" key={`active-${i}`}></div>
        ))}
        {Array.from({ length: 10 - cover }).map((_, i) => (
          <div className="progress-item" key={i}></div>
        ))}
      </div>
    );
  };

  return (
    <div className="inventory-container">
      <div className="title-header">INVENTORY</div>
      <div className="flex items-center justify-center">
        <div className="clothing-accessories wrapper-block">
          <div className="header">
            <div className="wrapper-right">
              <div className="title-content">CLOTHING & ACCESSORIES</div>
              <div className="sub-title-content">
                Small description about inventory are there in few cutie words
                for everyone.
              </div>
            </div>
          </div>
          <div className="clothing-accessories_content">
            <Player className="player-shadow" />
            <div className="vertical-slot flex flex-col">
              {renderSlotPlayer(
                TYPE_SLOT.BRACELET,
                listItemUsed[TYPE_SLOT.BRACELET]
              )}
              {renderSlotPlayer(TYPE_SLOT.RING, listItemUsed[TYPE_SLOT.RING])}
              {renderSlotPlayer(TYPE_SLOT.MARK, listItemUsed[TYPE_SLOT.MARK])}
              {renderSlotPlayer(TYPE_SLOT.SHIRT, listItemUsed[TYPE_SLOT.SHIRT])}
              {renderSlotPlayer(
                TYPE_SLOT.EARRING,
                listItemUsed[TYPE_SLOT.EARRING]
              )}
            </div>
            <div className="horizontal-slot flex flex">
              {renderSlotPlayer(TYPE_SLOT.ARMOR, listItemUsed[TYPE_SLOT.ARMOR])}
              {renderSlotPlayer(TYPE_SLOT.WING, listItemUsed[TYPE_SLOT.WING])}
              {renderSlotPlayer(TYPE_SLOT.PET, listItemUsed[TYPE_SLOT.PET])}
              {renderSlotPlayer(
                TYPE_SLOT.WEAPONS,
                listItemUsed[TYPE_SLOT.WEAPON]
              )}
              {renderSlotPlayer(TYPE_SLOT.SHOE, listItemUsed[TYPE_SLOT.SHOE])}
            </div>
            <div className="vertical-slot flex flex-col">
              {renderSlotPlayer(TYPE_SLOT.CAP, listItemUsed[TYPE_SLOT.CAP])}
              {renderSlotPlayer(TYPE_SLOT.WATCH, listItemUsed[TYPE_SLOT.WATCH])}
              {renderSlotPlayer(TYPE_SLOT.GLOVE, listItemUsed[TYPE_SLOT.GLOVE])}
              {renderSlotPlayer(
                TYPE_SLOT.BACKPACK,
                listItemUsed[TYPE_SLOT.BACKPACK]
              )}
              {renderSlotPlayer(
                TYPE_SLOT.TROUSER,
                listItemUsed[TYPE_SLOT.TROUSER]
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="wrapper-block">
            <div className="header">
              <div className="wrapper-right">
                <div className="title-content">YOUR ITEMS</div>
                <div className="sub-title-content">
                  Small description about inventory are there in few cutie words
                  for everyone.
                </div>
              </div>
              <div className="wrapper-left">
                <div className="flex justify-between items-center">
                  <div className="label">Weight</div>
                  <div className="weight">32/128 KG</div>
                </div>
                {displayProgressBar((32 / 128) * 100)}
              </div>
            </div>
            <div className="list-product-content">
              {Array.from({ length: 20 }).map((_, i) => (
                <ItemProduct dataProduct={ItemsOnBag[i]} key={i} />
              ))}
            </div>
          </div>
          <div className="wrapper-block">
            <div className="header">
              <div className="wrapper-right">
                <div className="title-content">SLOTBAR</div>
                <div className="sub-title-content">
                  Small description about inventory are there in few cutie words
                  for everyone.
                </div>
              </div>
            </div>
            <div className="list-product-content">
              {Array.from({ length: 4 }).map((_, i) => (
                <ItemProduct dataProduct={ItemsOnSlots[i]} key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="wrapper-block">
          <div className="header">
            <div className="wrapper-right">
              <div className="title-content">TRUNK</div>
              <div className="sub-title-content">
                Small description about inventory are there in few cutie words
                for everyone.
              </div>
            </div>
            <div className="wrapper-left">
              <div className="flex justify-between items-center">
                <div className="label">Weight</div>
                <div className="weight">32/128 KG</div>
              </div>
              {displayProgressBar((32 / 128) * 100)}
            </div>
          </div>
          <div className="list-product-content">
            {Array.from({ length: 30 }).map((_, i) => (
              <ItemProduct dataProduct={ItemsOutSide[i]} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
