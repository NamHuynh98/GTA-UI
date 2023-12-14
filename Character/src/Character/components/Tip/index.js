import { React } from "react";
import "./tip.scss";

const Tip = ({ content, className }) => {
  return (
    <div className={`tip-container ${className && className}`}>{content}</div>
  );
};

export default Tip;
