import React, { useState } from "react";
import "./modalTransferMoney.scss";
import Modal from "../../../../components/Modal/index";
import { ReactComponent as GiftIcon } from "../../../../assets/icons/gift-icon.svg";
import fakeAvatar from "../../../../assets/images/fake_avatar.png";
import Button from "../../../../components/Button/index";
import { convertMoneyNumberToString } from "../../../../constants/utils";

const fakeListPeople = Array.from({ length: 20 }, (_, i) => ({
  avatar: fakeAvatar,
  name: `Giana Aminoff ${i}`,
  phoneNumber: "0898.482.456",
}));

const ModalTransferMoney = ({
  handleCloseModal = () => {},
  showModal,
  onFinish = () => {},
  money,
}) => {
  const [listPeople, setListPeople] = useState([]);

  const renderButton = (people) => {
    const peopleFound = !!listPeople.find((p) => p.name === people.name);

    return (
      <button
        className={`${peopleFound ? "selected" : "unselected"}`}
        onClick={() => {
          peopleFound
            ? setListPeople((state) =>
                state.filter((s) => s.name !== people.name)
              )
            : setListPeople((state) => [...state, people]);
        }}
      >
        {peopleFound ? (
          "Đã Chọn"
        ) : (
          <>
            <GiftIcon />
            Tặng
          </>
        )}
      </button>
    );
  };

  return (
    <Modal
      handleClose={handleCloseModal}
      show={showModal}
      children={
        <div className="modal-transfer-money-container">
          <div className="title-modal">
            <span>Tặng quà</span>
          </div>
          <div className="money-text">
            <span>{convertMoneyNumberToString(money)}</span> Chuyển đến
          </div>
          <div className="hr-bar">
            <div className="label">Gần bạn</div>
            <div className="hr-line"></div>
          </div>
          <div className="wrapper-peoples">
            {fakeListPeople.map((people, idx) => (
              <div className="people-item" key={idx}>
                <img src={people.avatar} alt="avatar" />
                <div className="wrapper-info">
                  <div className="name">{people.name}</div>
                  <div className="id-phone">{people.phoneNumber}</div>
                </div>
                {renderButton(people)}
              </div>
            ))}
          </div>
          <div className="actions">
            <Button
              type="cancel"
              text="Quay lại"
              onClick={handleCloseModal}
              className="w-260"
            />
            <Button
              text="Chuyển tiền"
              onClick={() => {
                handleCloseModal();
                onFinish(listPeople);
              }}
              className="w-260"
            />
          </div>
        </div>
      }
    />
  );
};

export default ModalTransferMoney;
