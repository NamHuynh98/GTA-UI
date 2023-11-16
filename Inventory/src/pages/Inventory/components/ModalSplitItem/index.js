import React, { useEffect, useState } from "react";
import Modal from "../../../../components/Modal/index";
import Slider from "../../../../components/Slider/index";
import "./modelSplitItem.scss";

const ModalSplitItem = ({
  handleCloseModal,
  showModal,
  dataItem,
  onSplitItem = () => {},
}) => {
  const [splitQuantity, setSplitQuantity] = useState(1);
  useEffect(() => {
    setSplitQuantity(1);
  }, [dataItem]);
  return dataItem ? (
    <Modal
      handleClose={handleCloseModal}
      show={showModal}
      children={
        <div className="modal-split-container">
          <div className="wrapper-content">
            <div className="wrapper-img">
              <img src={dataItem.image} alt="thumbnail" />
            </div>
            <div className="wrapper-text">
              <div className="title-name">
                {dataItem.name} <span>{dataItem.quantity}</span>
              </div>
              <div className="weight">{dataItem.weight} KG</div>
              <div className="desc">{dataItem.description}</div>
            </div>
          </div>
          <div className="wrapper-slide">
            <Slider
              minValue={1}
              maxValue={dataItem.quantity}
              defaultValue={splitQuantity}
              onChange={(v) => setSplitQuantity(v)}
            />
            <span>{splitQuantity}</span>
          </div>
          <button
            disabled={dataItem.quantity < 2}
            onClick={() => {
              onSplitItem(splitQuantity);
              setSplitQuantity(1);
            }}
          >
            Split
          </button>
        </div>
      }
    />
  ) : (
    ""
  );
};

export default ModalSplitItem;
