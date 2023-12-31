import React, { useEffect, useRef, useState } from "react";
import "./carClock.scss";
import CircularProgressBar from "../../../../components/CircularDashedProgress/index";
import { ReactComponent as Gas } from "../../../../assets/icons/gas.svg";
import { ReactComponent as Energy } from "../../../../assets/icons/energy.svg";
import { ReactComponent as Doors } from "../../../../assets/icons/doors.svg";
import { ReactComponent as Headlight } from "../../../../assets/icons/headlight.svg";
import { ReactComponent as SeatBelt } from "../../../../assets/icons/seat-belt.svg";
import { ReactComponent as Trunk } from "../../../../assets/icons/trunk.svg";
import { ReactComponent as ClockWarning } from "../../../../assets/icons/clock-warning.svg";

const maxPg = 83;

const CarClock = ({
  leftPercent = 30,
  centerPercent = 60,
  rightPercent = 70,
  enableDoor = false,
  enableEnergy = false,
  enableHeadlight = false,
  enableSeatBelt = false,
  enableTrunk = false,
  enableClockWarning = false,
  gasValue = 0,
  speed = 0,
  numberActive = 1,
}) => {
  const circle = useRef(null);
  const [circumference, setCircumference] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const radius = circle.current.r.baseVal.value;
      const circumferenceValue = radius * 2 * Math.PI;
      circle.current.style.strokeDasharray = `${circumferenceValue} ${circumferenceValue}`;
      circle.current.style.strokeDashoffset = `${circumferenceValue}`;
      setCircumference(circumferenceValue);
    });
  }, []);

  useEffect(() => {
    const offset =
      circumference - (centerPercent / 100) * (maxPg / 100) * circumference;
    circle.current.style.strokeDashoffset = offset;
  }, [centerPercent, circumference]);

  return (
    <div className="car-lock-container">
      <div className="gas">
        <Gas />
        {gasValue}L
      </div>
      <div className="energy">
        <Energy />
      </div>

      <div className="info-race">
        <div className="numbers">
          <span className={numberActive === 1 ? "active" : ""}>1</span>
          <span className={numberActive === 2 ? "active" : ""}>2</span>
          <span className={numberActive === 3 ? "active" : ""}>3</span>
        </div>
        <div className="km">{speed}</div>
        <div className="unit">K/M</div>
      </div>

      <div className="wrapper-func">
        <Doors className={`${enableDoor ? "active" : ""}`} />
        <Energy className={`${enableEnergy ? "active" : ""}`} />
        <Headlight className={`${enableHeadlight ? "active" : ""}`} />
        <SeatBelt className={`${enableSeatBelt ? "active" : ""}`} />
        <Trunk className={`${enableTrunk ? "active" : ""}`} />
        <ClockWarning className={`${enableClockWarning ? "active" : ""}`} />
      </div>

      <div className="car-lock-wrapper">
        <CircularProgressBar
          percent={leftPercent}
          className="left-pg"
          colorProgress="rgba(191, 255, 56, 1)"
        />
        <div className="line-bg"></div>
        <div className="wrapper-progress">
          <svg
            className="progress-ring rotateB"
            width="160"
            height="160"
            viewBox="-20 0 160 120"
          >
            <circle
              className="progress-ring__circle-bg"
              style={{
                strokeDashoffset:
                  70 * 2 * Math.PI - (maxPg / 100) * (70 * 2 * Math.PI),
                strokeDasharray: `${70 * 2 * Math.PI}, ${70 * 2 * Math.PI}`,
              }}
              strokeWidth="10"
              fill="transparent"
              r="70"
              cx="60"
              cy="60"
            />
          </svg>
          <svg
            className="progress-ring rotate"
            width="160"
            height="160"
            viewBox="0 -20 160 120"
          >
            <circle
              ref={circle}
              className="progress-ring__circle"
              strokeWidth="10"
              fill="transparent"
              r="70"
              cx="60"
              cy="60"
            />
          </svg>
        </div>

        <CircularProgressBar
          className="rotateY180 right-pg"
          colorProgress="rgba(255, 56, 56, 1)"
          percent={rightPercent}
        />
      </div>
    </div>
  );
};

export default CarClock;
