import React from "react";
import Modal from "../../../../components/Modal/index";
import { ReactComponent as Close } from "../../../../assets/icons/close-icon.svg";
import SwitchButton from "../../../../components/SwitchButton/index";
import "./modalSetting.scss";

const ModalSetting = ({
  onCloseModal,
  onChangeChatSetting,
  onChangePlayerSetting,
  onChangeDirectionBarSetting,
  onChangeSelfSetting,
  onChangeHotKeySetting,
  valueDefaultShowChat,
  valueDefaultShowSelf,
  valueDefaultShowPlayer,
  valueDefaultShowHotKey,
  valueDefaultDirectionBar,
}) => {
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
                  <div className="title">CHAT SETTINGS</div>
                  <div className="desc">Bật tắt khung chat</div>
                </div>
                <SwitchButton
                  onChange={onChangeChatSetting}
                  defaultValue={valueDefaultShowChat}
                />
              </div>
              <div className="item">
                <div className="wrapper-text">
                  <div className="title">PLAYER SETTINGS</div>
                  <div className="desc">Thông tin năng lượng nguời chơi</div>
                </div>
                <SwitchButton
                  onChange={onChangePlayerSetting}
                  defaultValue={valueDefaultShowPlayer}
                />
              </div>
              <div className="item">
                <div className="wrapper-text">
                  <div className="title">BAR DIRECTION SETTINGS</div>
                  <div className="desc">
                    Thông tin năng lượng được sắp xếp theo chiều ngang/dọc
                  </div>
                </div>
                <SwitchButton
                  onChange={onChangeDirectionBarSetting}
                  defaultValue={valueDefaultDirectionBar}
                />
              </div>
              <div className="item">
                <div className="wrapper-text">
                  <div className="title">SELF SETTINGS</div>
                  <div className="desc">
                    Thông tin vũ khí và tiền người chơi
                  </div>
                </div>
                <SwitchButton
                  onChange={onChangeSelfSetting}
                  defaultValue={valueDefaultShowSelf}
                />
              </div>
              <div className="item">
                <div className="wrapper-text">
                  <div className="title">HOT KEY SETTINGS</div>
                  <div className="desc">Bật tắt phím tắt</div>
                </div>
                <SwitchButton
                  onChange={onChangeHotKeySetting}
                  defaultValue={valueDefaultShowHotKey}
                />
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default ModalSetting;
