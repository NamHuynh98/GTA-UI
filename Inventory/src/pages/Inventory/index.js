import React, { useEffect, useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import {
  selectItemsUsed,
  selectItemsOnBag,
  selectItemsOnSlots,
  selectItemsOutSide,
  setDataInit,
  TYPE_GROUP,
  updatePosition,
} from "../../features/inventory/inventorySlice";
import { ItemDnDCustom } from "./components/ItemDndCustom/index";
import ModalSplitItem from "./components/ModalSplitItem/index";
import ModalGiveItem from "./components/ModalGiveItem/index";

import {
  listItemUsed,
  ItemsOnBag,
  ItemsOnSlots,
  ItemsOutSide,
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
  const dataItemsUsed = useSelector(selectItemsUsed);
  const dataItemsOnBag = useSelector(selectItemsOnBag);
  const dataItemsOnSlots = useSelector(selectItemsOnSlots);
  const dataItemsOutSide = useSelector(selectItemsOutSide);

  const [itemDrag, setItemDrag] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectWear, setSelectWear] = useState(null);
  const [splitItem, setSplitItem] = useState(null);
  const [giveItem, setGiveItem] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    // on fetch and update data to store
    console.log("On fetch and update data to store");
    dispatch(
      setDataInit({
        itemUsed: listItemUsed,
        itemsOnBag: ItemsOnBag,
        itemsOnSlots: ItemsOnSlots,
        itemsOutSide: ItemsOutSide,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onMouseMove = (ev) => {
    if (isMouseDown) {
      const img = document.getElementById("img-placeholder");
      img.style.left = `${ev.clientX + 10}px`;
      img.style.top = `${ev.clientY + 10}px`;
    }
  };

  const cleanDataMove = () => {
    setIsMouseDown(false);
    const foundElm = document.body.querySelectorAll("#img-placeholder");
    foundElm.forEach((node) => document.body.removeChild(node));
    const nodes = document.querySelectorAll("#item-drag-id");
    nodes.forEach((node) => node.classList.remove("hidden-item"));
    setSelectWear(null);
    setItemDrag(null);
  };

  useEffect(() => {
    document.addEventListener("mouseup", () => cleanDataMove());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDropData = (dropIndex, side) => {
    if (side === TYPE_GROUP.ON_BAG) {
      dispatch(
        updatePosition({
          itemDrag,
          itemDrop: {
            index: dropIndex,
            side,
            item: dataItemsOnBag[dropIndex],
          },
        })
      );
    }
    if (side === TYPE_GROUP.USED) {
      dispatch(
        updatePosition({
          itemDrag,
          itemDrop: {
            index: dropIndex,
            side,
            item: dataItemsUsed[dropIndex],
          },
        })
      );
    }
    if (side === TYPE_GROUP.OUTSIDE) {
      dispatch(
        updatePosition({
          itemDrag,
          itemDrop: {
            index: dropIndex,
            side,
            item: dataItemsOutSide[dropIndex],
          },
        })
      );
    }
    if (side === TYPE_GROUP.ON_SLOT) {
      dispatch(
        updatePosition({
          itemDrag,
          itemDrop: {
            index: dropIndex,
            side,
            item: dataItemsOnSlots[dropIndex],
          },
        })
      );
    }
    setSelectWear(null);
    setItemDrag(null);
  };

  const onUseItem = (itemDrag, itemDrop) => {
    dispatch(
      updatePosition({
        itemDrag,
        itemDrop,
      })
    );
  };

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
      <ItemDnDCustom
        key={`${TYPE_GROUP.USED}_${type}`}
        index={type}
        setIsMouseDown={setIsMouseDown}
        isMouseDown={isMouseDown}
        allowDrag={!!data}
        allowDrop={!!selectWear && type === selectWear.type}
        onDragItem={() => {
          setItemDrag({
            item: data,
            index: type,
            side: TYPE_GROUP.USED,
          });
          setSelectWear(data);
        }}
        onDropItem={(dropIndex) => {
          onDropData(dropIndex, TYPE_GROUP.USED);
        }}
        imgItem={data ? data.image : null}
      >
        <ItemProduct
          dataProduct={data}
          iconHint={iconHint}
          isItemUsed
          isActive={selectWear && type === selectWear.type}
          onSplit={() => setSplitItem(data)}
          onGive={() => setGiveItem(data)}
        />
      </ItemDnDCustom>
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
    <div
      className="inventory-container"
      onMouseMove={onMouseMove}
      onMouseLeave={cleanDataMove}
    >
      <ModalSplitItem
        handleCloseModal={() => setSplitItem(null)}
        showModal={!!splitItem}
        dataItem={splitItem}
        onSplitItem={(value) => {
          console.log("spit thành " + value + " item");
          setSplitItem(null);
        }}
      />
      <ModalGiveItem
        handleCloseModal={() => setGiveItem(null)}
        showModal={!!giveItem}
        dataItem={giveItem}
        onGiveItem={() => {
          console.log("give item");
          setGiveItem(null);
        }}
      />
      <div className="title-header">INVENTORY</div>
      <div className="flex items-start justify-between gap-5">
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
            <div className="flex items-center">
              <div className="vertical-slot flex flex-col">
                {renderSlotPlayer(
                  TYPE_SLOT.BRACELET,
                  dataItemsUsed && dataItemsUsed[TYPE_SLOT.BRACELET]
                )}
                {renderSlotPlayer(
                  TYPE_SLOT.RING,
                  dataItemsUsed && dataItemsUsed[TYPE_SLOT.RING]
                )}
                {renderSlotPlayer(
                  TYPE_SLOT.MARK,
                  dataItemsUsed && dataItemsUsed[TYPE_SLOT.MARK]
                )}
                {renderSlotPlayer(
                  TYPE_SLOT.SHIRT,
                  dataItemsUsed && dataItemsUsed[TYPE_SLOT.SHIRT]
                )}
                {renderSlotPlayer(
                  TYPE_SLOT.EARRING,
                  dataItemsUsed && dataItemsUsed[TYPE_SLOT.EARRING]
                )}
              </div>
              <div className="vertical-slot flex flex-col ml-auto">
                {renderSlotPlayer(
                  TYPE_SLOT.CAP,
                  dataItemsUsed && dataItemsUsed[TYPE_SLOT.CAP]
                )}
                {renderSlotPlayer(
                  TYPE_SLOT.WATCH,
                  dataItemsUsed && dataItemsUsed[TYPE_SLOT.WATCH]
                )}
                {renderSlotPlayer(
                  TYPE_SLOT.GLOVE,
                  dataItemsUsed && dataItemsUsed[TYPE_SLOT.GLOVE]
                )}
                {renderSlotPlayer(
                  TYPE_SLOT.BACKPACK,
                  dataItemsUsed && dataItemsUsed[TYPE_SLOT.BACKPACK]
                )}
                {renderSlotPlayer(
                  TYPE_SLOT.TROUSER,
                  dataItemsUsed && dataItemsUsed[TYPE_SLOT.TROUSER]
                )}
              </div>
            </div>
            <div className="horizontal-slot flex flex">
              {renderSlotPlayer(
                TYPE_SLOT.ARMOR,
                dataItemsUsed && dataItemsUsed[TYPE_SLOT.ARMOR]
              )}
              {renderSlotPlayer(
                TYPE_SLOT.WING,
                dataItemsUsed && dataItemsUsed[TYPE_SLOT.WING]
              )}
              {renderSlotPlayer(
                TYPE_SLOT.PET,
                dataItemsUsed && dataItemsUsed[TYPE_SLOT.PET]
              )}
              {renderSlotPlayer(
                TYPE_SLOT.WEAPON,
                dataItemsUsed && dataItemsUsed[TYPE_SLOT.WEAPON]
              )}
              {renderSlotPlayer(
                TYPE_SLOT.SHOE,
                dataItemsUsed && dataItemsUsed[TYPE_SLOT.SHOE]
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="wrapper-block w-31vw">
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
            <div className="list-product-content m-h-49vh">
              {Array.from({ length: 30 }).map((_, i) => (
                <ItemDnDCustom
                  key={`${TYPE_GROUP.ON_BAG}_${i}`}
                  index={i + 1}
                  setIsMouseDown={setIsMouseDown}
                  isMouseDown={isMouseDown}
                  allowDrag={dataItemsOnBag && !!dataItemsOnBag[i + 1]}
                  allowDrop={
                    !(
                      itemDrag &&
                      itemDrag.side === TYPE_GROUP.USED &&
                      dataItemsOnBag &&
                      !!dataItemsOnBag[i + 1] &&
                      itemDrag.item.type !== dataItemsOnBag[i + 1].type
                    )
                  }
                  onDragItem={() => {
                    setItemDrag({
                      item: dataItemsOnBag[i + 1],
                      index: i + 1,
                      side: TYPE_GROUP.ON_BAG,
                    });
                    setSelectWear(dataItemsOnBag[i + 1]);
                  }}
                  onDropItem={(dropIndex) => {
                    onDropData(dropIndex, TYPE_GROUP.ON_BAG);
                  }}
                  imgItem={
                    dataItemsOnBag && dataItemsOnBag[i + 1]
                      ? dataItemsOnBag[i + 1].image
                      : null
                  }
                >
                  <ItemProduct
                    onUse={() =>
                      onUseItem(
                        {
                          item: dataItemsOnBag[i + 1],
                          index: i + 1,
                          side: TYPE_GROUP.ON_BAG,
                        },
                        {
                          index: dataItemsOnBag[i + 1].type,
                          item: dataItemsUsed[dataItemsOnBag[i + 1].type],
                          side: TYPE_GROUP.USED,
                        }
                      )
                    }
                    onSplit={() => setSplitItem(dataItemsOnBag[i + 1])}
                    onGive={() => setGiveItem(dataItemsOnBag[i + 1])}
                    dataProduct={dataItemsOnBag && dataItemsOnBag[i + 1]}
                    key={i}
                  />
                </ItemDnDCustom>
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
              {Array.from({ length: 5 }).map((_, i) => (
                <ItemDnDCustom
                  key={`${TYPE_GROUP.ON_SLOT}_${i}`}
                  index={i + 1}
                  setIsMouseDown={setIsMouseDown}
                  isMouseDown={isMouseDown}
                  allowDrag={dataItemsOnSlots && !!dataItemsOnSlots[i + 1]}
                  onDragItem={() => {
                    setItemDrag({
                      item: dataItemsOnSlots[i + 1],
                      index: i + 1,
                      side: TYPE_GROUP.ON_SLOT,
                    });
                    setSelectWear(dataItemsOnSlots[i + 1]);
                  }}
                  onDropItem={(dropIndex) => {
                    onDropData(dropIndex, TYPE_GROUP.ON_SLOT);
                  }}
                  imgItem={
                    dataItemsOnSlots && dataItemsOnSlots[i + 1]
                      ? dataItemsOnSlots[i + 1].image
                      : null
                  }
                >
                  <ItemProduct
                    dataProduct={dataItemsOnSlots && dataItemsOnSlots[i + 1]}
                    onUse={() =>
                      onUseItem(
                        {
                          item: dataItemsOnSlots[i + 1],
                          index: i + 1,
                          side: TYPE_GROUP.ON_SLOT,
                        },
                        {
                          index: dataItemsOnSlots[i + 1].type,
                          item: dataItemsUsed[dataItemsOnSlots[i + 1].type],
                          side: TYPE_GROUP.USED,
                        }
                      )
                    }
                    onGive={() => setGiveItem(dataItemsOnSlots[i + 1])}
                    onSplit={() => setSplitItem(dataItemsOnSlots[i + 1])}
                    key={i}
                  />
                </ItemDnDCustom>
              ))}
            </div>
          </div>
        </div>
        <div className="wrapper-block w-31vw">
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
          <div className="list-product-content m-h-70vh">
            {Array.from({ length: 30 }).map((_, i) => (
              <ItemDnDCustom
                key={`${TYPE_GROUP.OUTSIDE}_${i}`}
                index={i + 1}
                setIsMouseDown={setIsMouseDown}
                isMouseDown={isMouseDown}
                allowDrag={dataItemsOutSide && !!dataItemsOutSide[i + 1]}
                onDragItem={() => {
                  setItemDrag({
                    item: dataItemsOutSide[i + 1],
                    index: i + 1,
                    side: TYPE_GROUP.OUTSIDE,
                  });
                  setSelectWear(dataItemsOutSide[i + 1]);
                }}
                onDropItem={(dropIndex) => {
                  onDropData(dropIndex, TYPE_GROUP.OUTSIDE);
                }}
                imgItem={
                  dataItemsOutSide && dataItemsOutSide[i + 1]
                    ? dataItemsOutSide[i + 1].image
                    : null
                }
              >
                <ItemProduct
                  dataProduct={dataItemsOutSide && dataItemsOutSide[i + 1]}
                  onUse={() =>
                    onUseItem(
                      {
                        item: dataItemsOutSide[i + 1],
                        index: i + 1,
                        side: TYPE_GROUP.OUTSIDE,
                      },
                      {
                        index: dataItemsOutSide[i + 1].type,
                        item: dataItemsUsed[dataItemsOutSide[i + 1].type],
                        side: TYPE_GROUP.USED,
                      }
                    )
                  }
                  onSplit={() => setSplitItem(dataItemsOutSide[i + 1])}
                  onGive={() => setGiveItem(dataItemsOutSide[i + 1])}
                  key={i}
                />
              </ItemDnDCustom>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
