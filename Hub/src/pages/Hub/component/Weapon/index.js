import React from "react";
import "./weapon.scss";

const Weapon = ({ bullet, weapon, className }) => {
  return (
    <div className={`weapon-container ${className}`}>
      <img src={weapon} alt="weapon" />
      <div className="number">{bullet}</div>
    </div>
  );
};

export default Weapon;
