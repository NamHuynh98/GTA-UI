import React, { useState } from "react";
import "./hub.scss";
import Tips from "./component/Tips";
import Key from "./component/Key";
import Keyboards from "./component/Keyboards";
import { ReactComponent as Star } from "../../assets/icons/Star.svg";
import { ReactComponent as DollarCircle } from "../../assets/icons/dollar-circle.svg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import { ReactComponent as Microphone } from "../../assets/icons/microphone-2.svg";
import { ReactComponent as MicrophoneSlash } from "../../assets/icons/microphone-slash.svg";
import { ReactComponent as People } from "../../assets/icons/profile-2user.svg";
import { ReactComponent as Volume } from "../../assets/icons/volume-mute.svg";
import { ReactComponent as VolumeMute } from "../../assets/icons/volume-slash.svg";
import { ReactComponent as MsgText } from "../../assets/icons/message-text.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Shield } from "../../assets/icons/shield.svg";
import { ReactComponent as Run } from "../../assets/icons/run.svg";
import pistols from "../../assets/images/pistols.png";

import avatar from "../../assets/images/template_avatar.png";
import ProcessBar from "../../components/ProcessBar/index";
import Weapon from "./component/Weapon/index";

const Hub = () => {
  const [wanted, setWanted] = useState(3);
  const [isMute, setIsMute] = useState(true);
  const [noVoice, setNoVoice] = useState(true);
  const [people, setPeople] = useState(2);

  return (
    <div className="hub-container">
      <Tips
        title={
          <span>
            Lorem ipsum <Key keyValue="E" margin="0 10px" /> Lorem ipsum dolor
            sit
          </span>
        }
        description="Lorem ipsum dolor sit amet consectetur. A vitae et dolor gravida lectus. In."
      />
      <div className="wrapper-right-top">
        <div className="wanted">
          {Array.from({ length: 5 - wanted }, (_, k) => (
            <Star className="gray" key={k} />
          ))}
          {Array.from({ length: wanted }, (_, k) => (
            <Star className="yellow" key={k} />
          ))}
        </div>
        <div className="money">
          <DollarCircle />
          <span>$18.000</span>
        </div>
        <div className="money-deducted">
          <DollarCircle />
          <span>-$35</span>
        </div>
      </div>

      <div className="wrapper-right-bottom">
        <Keyboards />
        <div className="location">
          <Location />
          <span>Rancho</span>
        </div>
        <div className="micro">
          {noVoice ? (
            <MicrophoneSlash
              className="disable"
              onClick={() => setNoVoice(false)}
            />
          ) : (
            <Microphone onClick={() => setNoVoice(true)} />
          )}
          <div className="hr"></div>
          {isMute ? (
            <VolumeMute className="disable" onClick={() => setIsMute(false)} />
          ) : (
            <Volume onClick={() => setIsMute(true)} />
          )}
          <div className="hr"></div>
          <div className="people">
            <People />
            {people}
          </div>
        </div>
      </div>

      <div className="wrapper-left-bottom">
        <div className="wrapper-control">
          <div className="message">
            <div className="header">
              <img src={avatar} alt="avatar" />
              <span>Chance Geidt</span>
              <MsgText />
            </div>
            <div className="msg">
              Lorem ipsum dolor sit amet consectetur. Pretium et hendrerit
              faucibus odio vel hendrerit diam euismod iaculis.
            </div>
          </div>
          <div className="info-player">
            <div className="blood">
              <Plus />
              <ProcessBar color={"rgba(255, 69, 58, 1)"} percent={80} />
            </div>
            <div className="wrapper">
              <div className="shield">
                <Shield />
                <ProcessBar color={"rgba(10, 132, 255, 1)"} percent={70} />
              </div>
              <div className="strong">
                <Run />
                <ProcessBar color={"rgba(255, 213, 3, 1)"} percent={70} />
              </div>
            </div>
          </div>
          <div className="map">Bản đồ</div>
          <div className="exp">
            <div className="info-exp">
              <span>Level 1</span>
              <span>1245/6789 XP</span>
              <span>Level 2</span>
            </div>
            <ProcessBar percent={15} className="process-custom" />
          </div>
        </div>
        <Weapon className="weapon" weapon={pistols} bullet={15} />
      </div>
    </div>
  );
};

export default Hub;
