import React, { useEffect, useState } from "react";
import "./hubScreen.scss";
import ProgressItem from "./components/ProgressItem/index";
import run from "../../assets/icons/run.svg";
import brain from "../../assets/icons/brain.svg";
import water from "../../assets/icons/water.svg";
import food from "../../assets/icons/food.svg";
import heart from "../../assets/icons/heart.svg";
import shield from "../../assets/icons/shield.svg";
import lucky_grass from "../../assets/icons/lucky_grass.svg";
import weapon from "../../assets/images/weapon.png";
import ChatBox from "./components/ChatBox/index";
import InfoPlayer from "./components/InfoPlayer/index";
import Keyboards from "./components/Keyboards/index";
import { ReactComponent as ReduceIcon } from "../../assets/icons/arrow-down-red.svg";
import { ReactComponent as Increase } from "../../assets/icons/arrow-top-green.svg";
import { ReactComponent as Cash } from "../../assets/icons/cash.svg";
import { ReactComponent as Bank } from "../../assets/icons/bank.svg";
import { ReactComponent as ShieldBig } from "../../assets/icons/shield-big.svg";
import { ReactComponent as Bullet } from "../../assets/icons/bullet.svg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import { useToast } from "../../components/Toast/index";
import ModalSetting from "./components/ModalSetting/index";
import CarClock from "./components/CarClock/index";

const HubScreen = () => {
  const showToast = useToast();
  // this is demo toast
  const [demoToast, setDemoToast] = useState(false);

  const [showModalSetting, setShowModalSetting] = useState(true);
  const [showChatBox, setShowChatBox] = useState(true);
  const [showSelfBar, setShowSelfBar] = useState(true);
  const [showPlayerBar, setShowPlayerBar] = useState(true);
  const [showHotKeys, setShowHotKeys] = useState(true);

  // this is demo toast
  useEffect(() => {
    if (demoToast) {
      showToast({ type: "success", msg: "Thanh toán thành công" });
      showToast({ type: "warn", msg: "Thanh toán thành công" });
      showToast({
        type: "error",
        msg: "Small random text about this notify are there in few words Small random text about this notify are there in few wordsSmall random text about this notify are there in few words Small random text about this notify are there in few wordsSmall random text about this notify are there in few words Small random text about this notify are there in few wordsSmall random text about this notify are there in few words Small random text about this notify are there in few words",
        title: "title",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [demoToast]);

  return (
    <div className="hub-container">
      <div className="flex flex-col gap-2 left-content">
        {showChatBox && <ChatBox />}
        {showPlayerBar && (
          <div className="wrapper-progress-items flex flex-col">
            <ProgressItem icon={run} percent={58} color="#E8E8E8" />
            <ProgressItem icon={water} percent={58} color="#00FF19" />
            <ProgressItem icon={food} percent={58} color="#00F0FF" />
            <ProgressItem icon={shield} percent={58} color="#0066FF" />
            <ProgressItem icon={heart} percent={58} color="#FF0000" />
            <ProgressItem
              icon={lucky_grass}
              percent={15}
              customLabel={15}
              color="#5200FF"
            />
            <ProgressItem
              icon={brain}
              percent={15}
              customLabel={15}
              color="#FF00A8"
            />
          </div>
        )}
      </div>
      <div className="right-content flex flex-col items-end gap-5">
        <InfoPlayer />
        {showSelfBar && (
          <>
            <div className="flex flex-col items-end gap-3">
              <div className="line flex gap-4 items-center">
                <div className="label flex items-center gap-1 increase mt-auto">
                  <Increase />
                  $650.000
                </div>
                <div className="wrapper-title">
                  <div className="title">Cash</div>
                  <div className="money">$761.000.000</div>
                </div>
                <Cash />
              </div>
              <div className="line flex gap-4 items-center">
                <div className="label flex items-center gap-1 reduce mt-auto">
                  <ReduceIcon />
                  $650
                </div>
                <div className="wrapper-title">
                  <div className="title">In Bank</div>
                  <div className="money">$761</div>
                </div>
                <Bank />
              </div>
              <div className="line flex gap-4 items-center">
                <div className="wrapper-title">
                  <div className="title">Work</div>
                  <div className="text">Policeman</div>
                </div>
                <ShieldBig />
              </div>
            </div>
            <div className="weapon">
              <img src={weapon} alt="weapon" />
              <div className="num-bullet flex items-center justify-end gap-2">
                <div className="flex items-center">
                  <Bullet />
                  <Bullet />
                  <Bullet />
                </div>
                42/128
              </div>
            </div>
          </>
        )}
        {showHotKeys && <Keyboards className="mt-30" />}
        <div className="flex gap-5 items-end  mt-auto">
          <div className="location">
            <div className="label">
              <Location />
            </div>
            <div className="wrapper-text">
              <div className="title">Los Santos</div>
              <div className="location">Ocean Drive</div>
            </div>
          </div>
          <CarClock
            leftPercent={30}
            centerPercent={60}
            rightPercent={70}
            numberActive={2}
            speed={128}
            gasValue={45}
            enableDoor
          />
        </div>
      </div>
      {showModalSetting && (
        <ModalSetting
          onCloseModal={() => setShowModalSetting(false)}
          onChangeChatSetting={(e) => setShowChatBox(e.target.checked)}
          onChangeSelfSetting={(e) => setShowSelfBar(e.target.checked)}
          onChangePlayerSetting={(e) => setShowPlayerBar(e.target.checked)}
          onChangeHotKeySetting={(e) => setShowHotKeys(e.target.checked)}
          valueDefaultShowChat={showChatBox}
          valueDefaultShowSelf={showSelfBar}
          valueDefaultShowPlayer={showPlayerBar}
          valueDefaultShowHotKey={showHotKeys}
        />
      )}
    </div>
  );
};

export default HubScreen;
