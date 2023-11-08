import React from "react";
import Modal from "../../../../components/Modal/index";
import { ReactComponent as Close } from "../../../../assets/icons/close-icon.svg";
import SwitchButton from "../../../../components/SwitchButton/index";
import "./modalSetting.scss";

const ModalSetting = ({ onCloseModal }) => {
  return (
    <Modal
      show={true}
      children={
        <div>
          <div className="modal-setting-container">
            <div className="header-modal">
              <div className="title">HUD SETTINGS</div>
              <Close onClick={() => onCloseModal()} />
            </div>
            <div className="content-modal">
              <div className="item">
                <div className="wrapper-text">
                  <div className="title">HUD SETTINGS</div>
                  <div className="desc">Small description about setting</div>
                </div>
                <SwitchButton />
              </div>
              <div className="item">
                <div className="wrapper-text">
                  <div className="title">HUD SETTINGS</div>
                  <div className="desc">Small description about setting</div>
                </div>
                <SwitchButton />
              </div>
              <div className="item">
                <div className="wrapper-text">
                  <div className="title">HUD SETTINGS</div>
                  <div className="desc">Small description about setting</div>
                </div>
                <SwitchButton />
              </div>
              <div className="item">
                <div className="wrapper-text">
                  <div className="title">HUD SETTINGS</div>
                  <div className="desc">Small description about setting</div>
                </div>
                <SwitchButton />
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default ModalSetting;
