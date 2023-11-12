import React from "react";

import "./confirmModal.scss";
import Modal from "../Modal/index";
import Button from "../Button";
import { ReactComponent as TickCircle } from "../../assets/icons/tick-circle.svg";
import { ReactComponent as ErrorCircle } from "../../assets/icons/error.svg";

export const TYPE_ACTION_BUTTON = {
  OK: "ok",
  CANCEL: "cancel",
};

const ConfirmModal = ({
  titleData,
  message,
  handleCloseModal,
  showModal,
  handleConfirm,
  listActions = [],
}) => {
  const onClickBtn = (type) => {
    type === TYPE_ACTION_BUTTON.CANCEL && handleCloseModal();
    type === TYPE_ACTION_BUTTON.OK && handleConfirm();
  };

  return (
    <Modal
      handleClose={handleCloseModal}
      show={showModal}
      children={
        <div className="confirm-modal-container">
          <div className={`wrapper-title ${titleData && titleData.type}`}>
            {titleData.type === "success" ? <TickCircle /> : ""}
            {titleData.type === "error" ? <ErrorCircle /> : ""}
            <div className="title">{titleData.title}</div>
            {message && <div className="msg">{message}</div>}
          </div>
          <div className="actions">
            {listActions.map((action, index) => (
              <Button
                key={index}
                type={(action || { type: "" }).type}
                text={action.text}
                onClick={() => onClickBtn(action.type)}
                className="w-260"
              />
            ))}
          </div>
        </div>
      }
    />
  );
};

export default ConfirmModal;
