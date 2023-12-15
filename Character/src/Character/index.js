import React, { useState } from "react";

import "./character.scss";
import { ReactComponent as DNA } from "../assets/icons/dna.svg";
import { ReactComponent as EYE } from "../assets/icons/eye.svg";
import { ReactComponent as BEARD } from "../assets/icons/beard.svg";
import { ReactComponent as HAIR } from "../assets/icons/hair.svg";
import { ReactComponent as LOOK } from "../assets/icons/look.svg";
import Tip from "./components/Tip";
import Key from "./components/Key/index";
import DNATab from "./components/DNATab";
import BeardTab from "./components/BeardTab/index";
import EyeTab from "./components/EyeTab/index";
import HairTab from "./components/HairTab";
import LookTab from "./components/LookTab/index";

const TABS = {
  DNA: "dna",
  LOOK: "look",
  HAIR: "hair",
  EYES: "eyes",
  BEARD: "beard",
};

const Character = () => {
  const [tabActive, setTabActive] = useState(TABS.DNA);

  const renderTabContent = (tab) => {
    switch (tab) {
      case TABS.DNA:
        return <DNATab />;
      case TABS.BEARD:
        return <BeardTab />;
      case TABS.EYES:
        return <EyeTab />;
      case TABS.HAIR:
        return <HairTab />;
      case TABS.LOOK:
        return <LookTab />;
      default:
        return;
    }
  };

  return (
    <div className="character-container">
      <svg width="0" height="0">
        <defs>
          <clipPath id="hexagon-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0, 0.25z" />
          </clipPath>
        </defs>
      </svg>

      <div className="left-container">
        <div className="title">
          <div className="label">CHARACTER CREATOR</div>
          <div className="sub-title">
            Small description about inventory are there in few cutie words for
            everyone.
          </div>
        </div>
        <div className="side-bar">
          <div
            className={`tab ${tabActive === TABS.DNA && "active"}`}
            onClick={() => setTabActive(TABS.DNA)}
          >
            <div className="wrapper-logo">
              <div className="inner">
                <DNA />
                <div className="label">DNA</div>
              </div>
            </div>
          </div>
          <div
            className={`tab ${tabActive === TABS.LOOK && "active"}`}
            onClick={() => setTabActive(TABS.LOOK)}
          >
            <div className="wrapper-logo">
              <div className="inner">
                <LOOK />
                <div className="label">Look</div>
              </div>
            </div>
          </div>
          <div
            className={`tab ${tabActive === TABS.HAIR && "active"}`}
            onClick={() => setTabActive(TABS.HAIR)}
          >
            <div className="wrapper-logo">
              <div className="inner">
                <HAIR />
                <div className="label">Hair</div>
              </div>
            </div>
          </div>
          <div
            className={`tab ${tabActive === TABS.EYES && "active"}`}
            onClick={() => setTabActive(TABS.EYES)}
          >
            <div className="wrapper-logo">
              <div className="inner">
                <EYE />
                <div className="label">Eyes</div>
              </div>
            </div>
          </div>
          <div
            className={`tab ${tabActive === TABS.BEARD && "active"}`}
            onClick={() => setTabActive(TABS.BEARD)}
          >
            <div className="wrapper-logo">
              <div className="inner">
                <BEARD />
                <div className="label">Beard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="center-container">
        <Tip
          className="tip-custom"
          content={
            <>
              Bấm <Key keyValue="A" /> và <Key keyValue="D" /> để xoay nhân vật
            </>
          }
        />
        <div className="actions">
          <button className="btn-save">Save character</button>
          <button>Randomize character</button>
        </div>
      </div>
      <div className="right-container">{renderTabContent(tabActive)}</div>
    </div>
  );
};

export default Character;
