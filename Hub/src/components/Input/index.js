import React, { useState } from "react";
import { ReactComponent as Eye } from "../../assets/icons/eye.svg";
import { ReactComponent as EyeSlash } from "../../assets/icons/eye-slash.svg";
import "./input.scss";

const Input = ({
  placeholder,
  isValid = true,
  errRes = "",
  errorMgs,
  emitValue,
  type,
  icon = null,
}) => {
  const [value, setValue] = useState("");
  const [isShow, setIsShow] = useState(false);

  const handleValid = (e) => {
    const valueInput = e.target.value;
    setValue(valueInput);
    emitValue(valueInput);
  };

  const changeStatusVisiblePass = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="input-container">
      <div
        className={`input-wrapper ${
          (!isValid && value) || (errRes.length && !isValid)
            ? "input-error"
            : ""
        }`}
      >
        <input
          placeholder={placeholder}
          onInput={handleValid}
          type={type === "password" ? (isShow ? "text" : "password") : type}
        />
        {type === "password" ? (
          <button onClick={changeStatusVisiblePass}>
            {isShow ? <Eye /> : <EyeSlash />}
          </button>
        ) : (
          icon
        )}
      </div>
      {((errRes.length && !isValid) || (!isValid && value)) && (
        <div className="err-msg">{errorMgs}</div>
      )}
    </div>
  );
};

export default Input;
