import React, { useState, useEffect } from "react";
import "./inventory.scss";
import { ReactComponent as BagIcon } from "../../assets/icons/bag-icon.svg";
import { ReactComponent as DollarCircle } from "../../assets/icons/dollar-circle.svg";
import { ReactComponent as MoneyTransfer } from "../../assets/icons/money-transfer.svg";
// import person from "../../assets/images/Model 2.png";
import ItemEquipment from "./components/ItemEquipment/index";
import ItemOutSide from "./components/ItemOutSide/index";
import useToast, { TYPE_TOAST } from "../../components/Toast/index";
import {
  listItemUsed,
  ItemsOnBag,
  ItemsOutSide,
} from "../../constants/constants";
import ModalSplit from "./components/ModalSplit";
import ModalShare from "./components/ModalShare";
import ModalInputMoney from "./components/ModalInputMoney/index";
import ModalTransferMoney from "./components/ModalTransferMoney/index";
import { ItemDnDCustom } from "./components/ItemDndCustom/index";

import ConfirmModal, {
  TYPE_ACTION_BUTTON,
} from "../../components/ConfirmModal/index";

const TYPE_GROUP = {
  OUTSIDE: "outside",
  ON_BAG: "on-bag",
  WEAR_LEFT: "wear_left",
  WEAR_RIGHT: "wear_right",
};

const totalSpace = 50;
const usableSpace = 20;
const totalSpaceOutside = 10;

const characterEquipmentLeft = [
  "gun_1",
  "hat",
  "shirt",
  "pants",
  "glove_1",
  "shoe_1",
];
const characterEquipmentRight = [
  "gun_2",
  "gun_3",
  "bullet",
  "bag",
  "glove_2",
  "shoe_2",
];

const Inventory = ({
  itemsUsed = listItemUsed,
  itemsOnBag = ItemsOnBag,
  itemsOutSide = ItemsOutSide,
}) => {
  const [listItemsUsed, setListItemsUsed] = useState([]);
  const [listItemsBag, setListItemsBag] = useState({});
  const [listItemsOutSide, setListItemsOutSide] = useState([]);
  const [itemDrag, setItemDrag] = useState(null);
  const [selectWear, setSelectWear] = useState(null);
  const [itemSplit, setItemSplit] = useState(null);
  const [itemShare, setItemShare] = useState(null);
  const [isOpenModalInputMoney, setIsOpenModalInputMoney] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [numberMoneyTransfer, setNumberMoneyTransfer] = useState(null);
  const [isOpenModalTransferMoney, setIsOpenModalTransferMoney] =
    useState(false);

  const [isMouseDown, setIsMouseDown] = useState(false);

  const [Toast, setShowToast] = useToast();

  useEffect(() => {
    setListItemsUsed(itemsUsed);
    setListItemsBag(itemsOnBag);
    setListItemsOutSide(itemsOutSide);
  }, [itemsOnBag, itemsOutSide, itemsUsed]);

  const onDropData = (dropIndex, side, containerEmpty = false) => {
    if (side === TYPE_GROUP.ON_BAG) {
      console.log("Item start Drag: ", itemDrag);
      console.log("Position Drag: ", {
        index: dropIndex,
        side,
        item: listItemsBag[dropIndex],
      });
    }
    if (side === TYPE_GROUP.WEAR_LEFT) {
      const keyFound = characterEquipmentLeft[dropIndex - 1];
      console.log("Item start Drag: ", itemDrag);
      console.log("Position Drag: ", {
        index: dropIndex,
        side,
        item: listItemUsed[keyFound],
      });
    }
    if (side === TYPE_GROUP.WEAR_RIGHT) {
      const keyFound = characterEquipmentRight[dropIndex - 1];
      console.log("Item start Drag: ", itemDrag);
      console.log("Position Drag: ", {
        index: dropIndex,
        side,
        item: listItemUsed[keyFound],
      });
    }
    if (side === TYPE_GROUP.OUTSIDE) {
      if (containerEmpty) {
        console.log("Item start Drag - Move to container empty: ", itemDrag);
      } else {
        console.log("Item start Drag: ", itemDrag);
        console.log("Position Drag: ", {
          index: dropIndex,
          side,
          item: listItemsOutSide[dropIndex - 1],
        });
      }
    }
    setSelectWear(null);
    setItemDrag(null);
  };

  const onSelectUsedOption = (item) => {
    console.log("on select used option", item);
    setShowToast({ type: TYPE_TOAST.SUCCESS, text: "Đang xử dụng vật phẩm" });
  };

  const onSelectSplitOption = (item) => {
    console.log("on select split option", item);
    setItemSplit(item);
  };

  const onSelectGiftOption = (item) => {
    console.log("on select gift option", item);
    setItemShare(item);
  };

  const onSplitItem = (splitValue) => {
    console.log(`on split item to ${splitValue} item`);
  };

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

  return (
    <div
      className="inventory-container"
      onMouseMove={onMouseMove}
      onMouseLeave={cleanDataMove}
    >
      {Toast}
      {itemSplit && (
        <ModalSplit
          handleCloseModal={() => setItemSplit(null)}
          showModal={true}
          item={itemSplit}
          onFinish={onSplitItem}
        />
      )}
      <ModalInputMoney
        key={numberMoneyTransfer}
        showModal={isOpenModalInputMoney}
        handleCloseModal={() => {
          setIsOpenModalInputMoney(false);
          setNumberMoneyTransfer(null);
        }}
        currentMoney={18000}
        onNext={(v) => {
          setNumberMoneyTransfer(v);
          setIsOpenModalTransferMoney(true);
        }}
      />
      <ModalTransferMoney
        showModal={isOpenModalTransferMoney}
        money={numberMoneyTransfer}
        handleCloseModal={() => setIsOpenModalTransferMoney(false)}
        onFinish={(peoples) => {
          console.log(peoples);
          setShowConfirm({
            title: "Chuyển tiền thành công",
            type: "success",
          });
          // setShowConfirm({
          //   title: "Chuyển tiền thất bại",
          //   type: "error",
          // });
        }}
      />
      {showConfirm && (
        <ConfirmModal
          titleData={showConfirm}
          listActions={[{ text: "Đóng", type: TYPE_ACTION_BUTTON.OK }]}
          handleConfirm={() => {
            setShowConfirm(null);
            setNumberMoneyTransfer(null);
          }}
          showModal={!!showConfirm}
        />
      )}

      {itemShare && (
        <ModalShare
          item={itemShare}
          showModal={true}
          handleCloseModal={() => setItemShare(null)}
        />
      )}
      <div className="money-container">
        <button onClick={() => setIsOpenModalInputMoney(true)}>
          <MoneyTransfer />
        </button>
        <div className="money">
          <DollarCircle />
          <span>$18.000</span>
        </div>
      </div>
      <div className="person">
        <div className="header">
          <div className="title">Nhân Vật</div>
        </div>
        <div className="content-person">
          <div className="wrapper-left">
            {characterEquipmentLeft.map((key, i) => (
              <ItemDnDCustom
                key={`${TYPE_GROUP.WEAR_LEFT}_${i}`}
                index={i + 1}
                setIsMouseDown={setIsMouseDown}
                isMouseDown={isMouseDown}
                allowDrop={
                  !!selectWear && listItemsUsed[key].type === selectWear.type
                }
                onDragItem={() => {
                  setItemDrag({
                    item: listItemsUsed[key],
                    index: i + 1,
                    side: TYPE_GROUP.WEAR_LEFT,
                  });
                }}
                onDropItem={(dropIndex) => {
                  onDropData(dropIndex, TYPE_GROUP.WEAR_LEFT);
                }}
                imgItem={listItemsUsed[key] ? listItemsUsed[key].image : null}
              >
                <ItemEquipment
                  isWear={true}
                  item={listItemsUsed[key]}
                  isDragging={isMouseDown}
                  isMatch={
                    !!selectWear && listItemsUsed[key].type === selectWear.type
                  }
                  onSelectUsed={() => onSelectUsedOption(listItemsUsed[key])}
                  onSelectSplit={() => onSelectSplitOption(listItemsUsed[key])}
                  onSelectGift={() => onSelectGiftOption(listItemsUsed[key])}
                />
              </ItemDnDCustom>
            ))}
          </div>
          {/* <img src={person} alt="person" /> */}
          <div className="wrapper-right">
            {characterEquipmentRight.map((key, i) => (
              <ItemDnDCustom
                key={`${TYPE_GROUP.WEAR_RIGHT}_${i}`}
                index={i + 1}
                setIsMouseDown={setIsMouseDown}
                isMouseDown={isMouseDown}
                onDragItem={() => {
                  setItemDrag({
                    item: listItemsUsed[key],
                    index: i + 1,
                    side: TYPE_GROUP.WEAR_RIGHT,
                  });
                }}
                onDropItem={(dropIndex) => {
                  onDropData(dropIndex, TYPE_GROUP.WEAR_RIGHT);
                }}
                allowDrop={
                  !!selectWear && listItemsUsed[key].type === selectWear.type
                }
                imgItem={listItemsUsed[key] ? listItemsUsed[key].image : null}
              >
                <ItemEquipment
                  isWear={true}
                  item={listItemsUsed[key]}
                  isMatch={
                    !!selectWear && listItemsUsed[key].type === selectWear.type
                  }
                  onSelectUsed={() => onSelectUsedOption(listItemsUsed[key])}
                  onSelectSplit={() => onSelectSplitOption(listItemsUsed[key])}
                  onSelectGift={() => onSelectGiftOption(listItemsUsed[key])}
                />
              </ItemDnDCustom>
            ))}
          </div>
        </div>
      </div>
      <div className="hr"></div>
      <div className="bag">
        <div className="header">
          <div className="title">Túi đồ</div>
          <div className="sub-title">
            <BagIcon />
            <span className="label">Cân nặng:</span>
            <span className="value">6/{usableSpace}</span>
          </div>
        </div>
        <div className={`content-bag`}>
          {Array.from({ length: usableSpace }, (_, i) => (
            <ItemDnDCustom
              allowDrag={!!listItemsBag[i + 1]}
              key={`${TYPE_GROUP.ON_BAG}_${i}`}
              index={i + 1}
              setIsMouseDown={setIsMouseDown}
              isMouseDown={isMouseDown}
              onDragItem={() => {
                setItemDrag({
                  item: listItemsBag[i + 1],
                  index: i + 1,
                  side: TYPE_GROUP.ON_BAG,
                });
                setSelectWear(listItemsBag[i + 1]);
              }}
              onDropItem={(dropIndex) => {
                onDropData(dropIndex, TYPE_GROUP.ON_BAG);
                setSelectWear(null);
              }}
              imgItem={listItemsBag[i + 1] ? listItemsBag[i + 1].image : null}
            >
              <ItemEquipment
                item={listItemsBag[i + 1]}
                onSelectUsed={() => onSelectUsedOption(listItemsBag[i + 1])}
                onSelectSplit={() => onSelectSplitOption(listItemsBag[i + 1])}
                onSelectGift={() => onSelectGiftOption(listItemsBag[i + 1])}
              />
            </ItemDnDCustom>
          ))}
          {Array.from({ length: totalSpace - usableSpace }, (_, i) => (
            <ItemEquipment key={i} isLock={true} />
          ))}
        </div>
      </div>
      <div className="items-outside">
        <div className="header">
          <div className="title">Vật phẩm ở ngoài</div>
          <div className="sub-title position-bottom-left">
            <BagIcon />
            <span className="label">Cân nặng:</span>
            <span className="value">6/{totalSpaceOutside}</span>
          </div>
        </div>
        <div className={`content-item-outside`}>
          {!listItemsOutSide.length && (
            <ItemDnDCustom
              index={-1}
              allowDrag={false}
              setIsMouseDown={setIsMouseDown}
              isMouseDown={isMouseDown}
              onDropItem={(dropIndex) =>
                onDropData(dropIndex, TYPE_GROUP.OUTSIDE, true)
              }
            >
              <div className="item-blank">kéo trả vật phẩm vào đây</div>
            </ItemDnDCustom>
          )}
          {listItemsOutSide.map((item, i) => (
            <ItemDnDCustom
              key={`${TYPE_GROUP.OUTSIDE}_${i}`}
              index={i + 1}
              setIsMouseDown={setIsMouseDown}
              isMouseDown={isMouseDown}
              onDragItem={() => {
                setItemDrag({
                  item: item,
                  index: i + 1,
                  side: TYPE_GROUP.OUTSIDE,
                });
                setSelectWear(item);
              }}
              onDropItem={(dropIndex) => {
                onDropData(dropIndex, TYPE_GROUP.OUTSIDE);
                setSelectWear(null);
              }}
              imgItem={item.image ? item.image : null}
            >
              <ItemOutSide
                item={item}
                onSelectUsed={() => onSelectUsedOption(item)}
                onSelectSplit={() => onSelectSplitOption(item)}
                onSelectGift={() => onSelectGiftOption(item)}
              />
            </ItemDnDCustom>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
