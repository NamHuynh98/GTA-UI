import React, { useState } from "react";
import "./infoPlayer.scss";
import crown from "../../../../assets/images/crown.png";
import logo from "../../../../assets/images/logo.png";
import { ReactComponent as Mic } from "../../../../assets/icons/mic.svg";
import { ReactComponent as People } from "../../../../assets/icons/people.svg";
import { ReactComponent as Hashtag } from "../../../../assets/icons/hashtag.svg";
import { ReactComponent as Clock } from "../../../../assets/icons/clock.svg";

const InfoPlayer = () => {
  const [enableMic, setEnableMic] = useState(false);
  const [textTime, setTextTime] = useState("");
  const [dateText, setDateText] = useState("");

  const checkDecimal = (i) => {
    if (i < 10) i = "0" + i;
    return i;
  };

  const startTime = () => {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    h = checkDecimal(h);
    m = checkDecimal(m);
    dd = checkDecimal(dd);
    mm = checkDecimal(mm);
    setTextTime(h + ":" + m);
    setDateText(`${dd}.${mm}.${yyyy}`);
    setTimeout(startTime, 1000);
  };

  return (
    <div className="info-player-container" onLoad={() => startTime()}>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 vip-item">
          <div className="label">
            <img src={crown} alt="crown" />
          </div>
          <div className="text">
            <div className="title">VIP STATUS</div>
            <div className="content">GOLD</div>
          </div>
        </div>
        <div
          className={`mic ${enableMic ? "on" : "off"}`}
          onClick={() => setEnableMic((v) => !v)}
        >
          <Mic />
        </div>
        <div className="wrapper-item">
          <div className="label">
            <People />
          </div>
          <div className="text">
            <div className="title">Online</div>
            <div className="content">1257</div>
          </div>
        </div>
        <div className="wrapper-item">
          <div className="label">
            <Hashtag />
          </div>
          <div className="text">
            <div className="title">ID Static</div>
            <div className="content">#691</div>
          </div>
        </div>
        <div className="wrapper-item">
          <div className="label">
            <Clock />
          </div>
          <div className="text">
            <div className="title">{dateText}</div>
            <div className="content text-stretch">{textTime}</div>
          </div>
        </div>
      </div>
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
};

export default InfoPlayer;
