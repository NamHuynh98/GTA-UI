import React, { useState } from "react";
import "./modalSplit.scss";
import Modal from "../../../../components/Modal/index";
import Button from "../../../../components/Button/index";
import SliderSplit from "../SliderSplit/index";

const ModalSplit = ({
  handleCloseModal = () => {},
  showModal,
  onFinish = () => {},
  item,
}) => {
  const [valueSplit, setValueSplit] = useState(0);

  return (
    <Modal
      handleClose={handleCloseModal}
      show={showModal}
      children={
        <div className="modal-split-container">
          <div className="wrapper-title">
            <img src={item.image} alt="thumbnail" />
            <div className="title">Chọn số lượng muốn tách ra</div>
            <SliderSplit
              labelMin="0"
              labelMax="100"
              value={valueSplit}
              onChange={setValueSplit}
            />
          </div>
          <div className="actions">
            <Button
              type="cancel"
              text="Thoát"
              onClick={handleCloseModal}
              className="w-260"
            />
            <Button
              text="Hoàn thành"
              onClick={() => {
                onFinish(valueSplit);
                handleCloseModal();
              }}
              className="w-260"
            />
          </div>
        </div>
      }
    />
  );
};

export default ModalSplit;
