import React, { useEffect, useState } from "react";
import "./verifyCode.scss";

import { ReactComponent as ArrowLeft } from "../../../../assets/icons/arrow-left.svg";

export const TYPE_STEP = {
  SIGN_UP: "sign_up",
  INFO_VERIFY: "info_verify",
};

const VerifyCode = ({
  onSendVerifyCode,
  onResendCodeVerify,
  onBack,
  emailVerify,
  title,
  dataErrMsg = {}, // dataErrMsg includes property: {verifyCode}
}) => {
  const [timer, setTimer] = useState(20);
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const [timerIntervalId, setTimerIntervalId] = useState(null);

  const formatDisplayTime = (time) => (time < 10 ? `0${time}` : time);
  const secondsToTime = (seconds) => [Math.floor(seconds / 60), seconds % 60];
  const handleResetTimer = () => {
    if (timerIntervalId) clearInterval(timerIntervalId);
    setTimerIntervalId(null);
    setTimer(20);
  };

  const toggleCountDown = () => {
    const newIntervalId = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime === 0) return 0;
        const newTime = prevTime - 1;
        const time = secondsToTime(newTime);
        setTimerMinutes(time[0]);
        setTimerSeconds(time[1]);
        return newTime;
      });
    }, 1000);
    setTimerIntervalId(newIntervalId);
  };

  useEffect(() => {
    toggleCountDown();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clearInterval(timerIntervalId);
      setTimerIntervalId(null);
      return;
    }
    const time = secondsToTime(timer);
    setTimerMinutes(time[0]);
    setTimerSeconds(time[1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  useEffect(() => {
    const numberCodeForm = document.querySelector("[data-number-code-form]");
    const numberCodeInputs = [
      ...numberCodeForm.querySelectorAll("[data-number-code-input]"),
    ];
    const handleInput = ({ target }) => {
      if (!target.value.length) return (target.value = null);
      const inputLength = target.value.length;
      let currentIndex = Number(target.dataset.numberCodeInput);

      if (inputLength > 1) {
        const inputValues = target.value.split("");
        inputValues.forEach((value, valueIndex) => {
          const nextValueIndex = currentIndex + valueIndex;
          if (nextValueIndex >= numberCodeInputs.length) return;
          numberCodeInputs[nextValueIndex].value = value;
        });
        currentIndex += inputValues.length - 2;
      }

      const nextIndex = currentIndex + 1;
      if (nextIndex < numberCodeInputs.length)
        numberCodeInputs[nextIndex].focus();
      if (currentIndex === numberCodeInputs.length - 1)
        onSendVerifyCode(numberCodeInputs.map((n) => Number(n.value)).join(""));
    };

    const handleKeyDown = (e) => {
      const { code, target } = e;

      const currentIndex = Number(target.dataset.numberCodeInput);
      const previousIndex = currentIndex - 1;
      const nextIndex = currentIndex + 1;
      const hasPreviousIndex = previousIndex >= 0;
      const hasNextIndex = nextIndex <= numberCodeInputs.length - 1;

      switch (code) {
        case "ArrowLeft":
        case "ArrowUp":
          if (hasPreviousIndex) numberCodeInputs[previousIndex].focus();
          e.preventDefault();
          break;
        case "ArrowRight":
        case "ArrowDown":
          if (hasNextIndex) numberCodeInputs[nextIndex].focus();
          e.preventDefault();
          break;
        case "Backspace":
          if (!e.target.value.length && hasPreviousIndex) {
            numberCodeInputs[previousIndex].value = null;
            numberCodeInputs[previousIndex].focus();
          }
          break;
        default:
          break;
      }
    };
    numberCodeForm.addEventListener("input", handleInput);
    numberCodeForm.addEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrapper-verify">
      <div className="header">
        <ArrowLeft onClick={() => onBack()} />
        <span>{title}</span>
      </div>
      <div className="info">
        Vui lòng kiểm tra hòm thư của bạn, chúng tôi đã gửi một mã xác thực đến
        email: <span>{emailVerify}</span>
      </div>
      <fieldset name="number-code" data-number-code-form>
        {Array.from({ length: 6 }, (_, k) => (
          <input
            key={k}
            type="number"
            min="0"
            max="9"
            name={`number-code-${k}`}
            className={dataErrMsg.verifyCode ? "error" : ""}
            data-number-code-input={k}
            placeholder="_"
            required
          />
        ))}
      </fieldset>
      {dataErrMsg.verifyCode && (
        <div className="err-msg">{dataErrMsg.verifyCode}</div>
      )}
      <div className="count-down">
        {timer === 0 ? (
          <span
            className="link"
            onClick={() => {
              handleResetTimer();
              onResendCodeVerify();
            }}
          >
            Gửi lại mã
          </span>
        ) : (
          <>
            Gửi lại sau
            <span className="time">
              {formatDisplayTime(timerMinutes)}:
              {formatDisplayTime(timerSeconds)}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyCode;
