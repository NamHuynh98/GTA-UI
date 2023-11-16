import React from "react";
import Modal from "../../../../components/Modal/index";
import "./modelGiveItem.scss";

const ModalGiveItem = ({
  handleCloseModal,
  showModal,
  dataItem,
  onGiveItem = () => {},
}) => {
  return dataItem ? (
    <Modal
      handleClose={handleCloseModal}
      show={showModal}
      children={
        <div className="modal-give-container">
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
          <button onClick={() => onGiveItem()}>Romario Richardson</button>
          <button onClick={() => onGiveItem()}>Romario Richardson</button>
          <button onClick={() => onGiveItem()}>Romario Richardson</button>
          <button onClick={() => onGiveItem()}>Romario Richardson</button>
        </div>
      }
    />
  ) : (
    ""
  );
};

export default ModalGiveItem;
