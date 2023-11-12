import React from "react";
import "./tooltipInventory.scss";
import { ReactComponent as GoldMedal } from "../../assets/icons/gold-medal.svg";
import { ReactComponent as DiamondMedal } from "../../assets/icons/diamond-medal.svg";
import { ReactComponent as BronzeMedal } from "../../assets/icons/bronze-medal.svg";
import { ReactComponent as SilverMedal } from "../../assets/icons/silver-medal.svg";

const TooltipInventory = ({ item, positionTooltip, show }) => {
  const getTypeValue = (level) => {
    switch (level) {
      case 4:
        return (
          <>
            <div className="info">
              <div className="title">{item.name}</div>
              <div className={`sub-title level_${level}`}>
                Vật phẩm kim cương
              </div>
            </div>
            <DiamondMedal />
          </>
        );
      case 3:
        return (
          <>
            <div className="info">
              <div className="title">{item.name}</div>
              <div className={`sub-title level_${level}`}>Vật phẩm vàng</div>
            </div>
            <GoldMedal />
          </>
        );
      case 2:
        return (
          <>
            <div className="info">
              <div className="title">{item.name}</div>
              <div className={`sub-title level_${level}`}>Vật phẩm bạc</div>
            </div>
            <SilverMedal />
          </>
        );
      default:
        return (
          <>
            <div className="info">
              <div className="title">{item.name}</div>
              <div className={`sub-title level_${level}`}>Vật phẩm đồng</div>
            </div>
            <BronzeMedal />
          </>
        );
    }
  };

  const getStatusReliability = (reliability = 100) => {
    if (reliability <= 100 && reliability >= 80) return "strong";
    if (reliability < 80 && reliability >= 40) return "normal";
    if (reliability < 40) return "weak";
  };

  return (
    <div
      className={`tooltip-menu ${show && "show"}`}
      id="tooltip-menu-container"
      style={{
        top: `${(positionTooltip || { y: 0 }).y}px`,
        left: `${(positionTooltip || { x: 0 }).x}px`,
      }}
    >
      <div className="header-tooltip">
        <img src={item.image} alt="thumbnail" className="thumbnail" />
        {getTypeValue(item.level)}
      </div>
      <div className="detail">
        <div className="label-menu">
          Chỉ số vật phẩm
          <div className="line-before"></div>
        </div>
        {item.reliability && (
          <div className="line">
            <span>Độ bền:</span>
            <span className={`${getStatusReliability(item.reliability)}`}>
              {item.reliability}
            </span>
          </div>
        )}
        {item.weight && (
          <div className="line">
            <span>Cân nặng:</span> <span>{item.weight} kg</span>
          </div>
        )}
        {item.famous && (
          <div className="line">
            <span>Nổi tiếng(%):</span> <span>{item.famous}%</span>
          </div>
        )}
        {item.lucky && (
          <div className="line">
            <span>May mắn (%):</span> <span>{item.lucky}%</span>
          </div>
        )}
        {item.accuracy && (
          <div className="line">
            <span>Độ chính xác (%):</span> <span>{item.accuracy}%</span>
          </div>
        )}
      </div>
      <div className="description">
        <div className="label-menu">
          Mô tả
          <div className="line-before"></div>
        </div>
        {item.description}
      </div>
    </div>
  );
};

export default TooltipInventory;
