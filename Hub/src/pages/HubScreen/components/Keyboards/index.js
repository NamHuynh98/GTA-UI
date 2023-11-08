import React from "react";
import "./keyboards.scss";
import Key from "../Key";

const keys = [
  {
    text: "Cài đặt cá nhân",
    key: "F1",
  },
  {
    text: "Túi đồ",
    key: "TAB",
  },
  {
    text: "Điện thoại",
    key: "B",
  },
  {
    text: "Quản lý Crew",
    key: "F3",
  },
  {
    text: "Hoá đơn cá nhân",
    key: "F7",
  },
  {
    text: "Nạp tiền & Quà tặng",
    key: "F8",
  },
  {
    text: "Chat",
    key: "T",
  },
  {
    text: "Ẩn hướng dẫn",
    key: "L",
  },
  {
    text: "Ẩn HUD",
    key: "SHIRT + L",
  },
];

const Keyboards = ({ className }) => {
  return (
    <div className={`keyboards-container ${className}`}>
      {keys.map((k, i) => (
        <div className="line" key={i}>
          <div className="text">{k.text}</div> <Key keyValue={k.key} />
        </div>
      ))}
    </div>
  );
};

export default Keyboards;
