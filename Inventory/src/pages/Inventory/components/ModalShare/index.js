import React from "react";
import "./modalShare.scss";
import Modal from "../../../../components/Modal/index";
import { ReactComponent as CloseIcon } from "../../../../assets/icons/close.svg";
import { ReactComponent as GiftIcon } from "../../../../assets/icons/gift-icon.svg";
import { ReactComponent as SearchIcon } from "../../../../assets/icons/search-normal.svg";
import fakeAvatar from "../../../../assets/images/fake_avatar.png";

const fakeListPeople = Array.from({ length: 20 }, (_, i) => ({
  avatar: fakeAvatar,
  name: "Giana Aminoff",
  phoneNumber: "0898.482.456",
}));

const ModalShare = ({ item, handleCloseModal = () => {}, showModal }) => {
  const onShare = (people) => {
    console.log("select share for:", people);
  };

  const renderLevel = (level) => {
    switch (level) {
      case 1:
        return <div className={`level level_${level}`}>Vật phẩm đồng</div>;
      case 2:
        return <div className={`level level_${level}`}>Vật phẩm bạc</div>;
      case 3:
        return <div className={`level level_${level}`}>Vật phẩm vàng</div>;
      default:
        return <div className={`level level_${level}`}>Vật phẩm kim cương</div>;
    }
  };

  const onSearch = (e) => {
    console.log("search people: ", e.target.value);
  };

  return (
    <Modal
      handleClose={handleCloseModal}
      show={showModal}
      children={
        <div className="modal-share-container">
          <div className="title-modal">
            <span>Tặng quà</span>
            <CloseIcon onClick={handleCloseModal} />
          </div>
          <div className="wrapper-item">
            <img src={item.image} alt="thumbnail" />
            <div className="wrapper-info-item">
              <div className="name">{item.name}</div>
              <div className="level">{renderLevel(item.level)}</div>
            </div>
          </div>
          <div className="hr-bar">
            <div className="label">Gần bạn</div>
            <div className="hr-line"></div>
          </div>
          <div className="wrapper-input">
            <input
              type="text"
              placeholder="Tìm kiếm tên, số điện thoại"
              onInput={onSearch}
            />
            <SearchIcon />
          </div>
          <div className="wrapper-peoples">
            {fakeListPeople.map((people, idx) => (
              <div className="people-item" key={idx}>
                <img src={people.avatar} alt="avatar" />
                <div className="wrapper-info">
                  <div className="name">{people.name}</div>
                  <div className="id-phone">{people.phoneNumber}</div>
                </div>
                <button onClick={() => onShare(people)}>
                  <GiftIcon />
                  Tặng
                </button>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
};

export default ModalShare;
