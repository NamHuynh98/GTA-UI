import React, { useEffect, useState, useRef } from "react";
import { ReactComponent as Check } from "../../assets/icons/check.svg";
import "./toast.scss";
import { generalId } from "../../constants/utils";

export const TYPE_TOAST = {
  SUCCESS: "success",
  ERROR: "error",
};

const useToast = () => {
  const [showToast, setShowToast] = useState(null);
  const [done, setDone] = useState(false);
  const [keyRender, setKeyRender] = useState("");
  const timeoutDone = useRef(null);
  const timeoutEnd = useRef(null);

  useEffect(() => {
    clearTimeout(timeoutEnd.current);
    setDone(false);
    if (showToast) {
      setKeyRender(generalId());
      clearTimeout(timeoutDone.current);
      timeoutDone.current = setTimeout(() => {
        setDone(true);
      }, 2000);
    }
    timeoutEnd.current = setTimeout(() => {
      setShowToast(null);
      setDone(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutDone.current);
      clearTimeout(timeoutEnd.current);
    };
  }, [showToast]);

  const Toast = (
    <div className={`toast-container`} key={keyRender}>
      {showToast && showToast.type === TYPE_TOAST.SUCCESS && (
        <div className="toast-success">{done ? <Check /> : showToast.text}</div>
      )}
      {showToast && showToast.type === TYPE_TOAST.ERROR && (
        <div className="toast-error">{showToast.text}</div>
      )}
    </div>
  );

  return [showToast ? Toast : "", setShowToast];
};

export default useToast;
