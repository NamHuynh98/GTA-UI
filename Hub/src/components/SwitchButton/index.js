import React, { useEffect, useState } from "react";
import "./switchButton.scss";

const SwitchButton = ({ onChange, className, defaultValue = false }) => {
  const [id, setId] = useState("");
  useEffect(() => {
    setId(Math.random().toString(16).slice(2));
  }, []);
  return (
    <div className={`switch-button-container ${className}`}>
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        defaultChecked={defaultValue}
      />
      <label htmlFor={id}>Toggle</label>
    </div>
  );
};

export default SwitchButton;
