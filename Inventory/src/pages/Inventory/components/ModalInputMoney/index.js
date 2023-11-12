import React, { useEffect, useState } from "react";
import "./modalInputMoney.scss";
import Modal from "../../../../components/Modal/index";
import Button from "../../../../components/Button/index";
import money from "../../../../assets/images/money.png";

const ModalInputMoney = ({
  handleCloseModal = () => {},
  showModal,
  onNext = () => {},
  currentMoney,
}) => {
  const [inputMoney, setInputMoney] = useState(null);
  const [msgInvalid, setMsgInvalid] = useState(null);

  useEffect(() => {
    if (inputMoney < 10000 && (inputMoney || { length: 0 }).length !== 0)
      setMsgInvalid("Tối thiểu 10000");
    else if (inputMoney > currentMoney) setMsgInvalid("Số dư không đủ");
    else setMsgInvalid(null);
  }, [currentMoney, inputMoney]);

  return (
    <Modal
      handleClose={handleCloseModal}
      show={showModal}
      children={
        <div className="modal-input-money-container">
          <div className="wrapper-title">
            <img src={money} alt="thumbnail" />
            <div className="title">Nhập số tiền</div>
            <input
              className={`${!!msgInvalid ? "error" : ""}`}
              type="number"
              placeholder="10000"
              onInput={(e) => setInputMoney(Number(e.target.value))}
            />
            {!!msgInvalid && <div className="err-msg">{msgInvalid}</div>}
          </div>
          <div className="actions">
            <Button
              type="cancel"
              text="Quay lại"
              onClick={() => {
                handleCloseModal();
              }}
              className="w-260"
            />
            <Button
              text="Tiếp tục"
              disabled={msgInvalid || !inputMoney}
              onClick={() => {
                handleCloseModal();
                onNext(inputMoney);
              }}
              className="w-260"
            />
          </div>
        </div>
      }
    />
  );
};

export default ModalInputMoney;
