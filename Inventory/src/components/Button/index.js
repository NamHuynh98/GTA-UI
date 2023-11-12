import React from "react";
import "./button.scss";

// type: cancel

const Button = ({ type, text, className, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`button-container ${type} ${className ? className : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
