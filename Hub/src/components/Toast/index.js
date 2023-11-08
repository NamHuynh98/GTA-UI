import React from "react";
import { ReactComponent as Success } from "../../assets/icons/succes.svg";
import { ReactComponent as Error } from "../../assets/icons/error.svg";
import { ReactComponent as Warn } from "../../assets/icons/warn.svg";
import toast from "react-hot-toast";
import "./toast.scss";

export const useToast = () => {
  // {
  //     type: success/ error/ warn,
  //     msg: "this is message toast",
  //     title: 'title',
  // }

  const getStyle = (type) => {
    switch (type) {
      case "error":
        return { icon: <Error />, color: "#FF6F1E", title: "Error" };
      case "success":
        return { icon: <Success />, color: "#63FF2C", title: "Attention" };
      case "warn":
        return { icon: <Warn />, color: "#FF2C2C", title: "Information" };
      default:
        return;
    }
  };

  const showToast = (toastData) => {
    const { icon, color, title } = getStyle(toastData.type);
    toastData &&
      toast.custom((t) => (
        <div className={`toast-container`} onClick={() => toast.dismiss(t.id)}>
          {icon}
          <div className="wrapper-content">
            <div className="title">
              {toastData.title ? toastData.title : title}
            </div>
            <div className="desc">{toastData.msg}</div>
          </div>
          <div
            className={`line-color`}
            style={{ backgroundColor: color }}
          ></div>
        </div>
      ));
  };

  return showToast;
};
