import React from "react";

import "./modal.scss";

const Modal = ({
  handleClose,
  show,
  children,
  className,
  hasAction = false,
  isCloseByClickOutside = true,
}) => {
  return (
    <div
      className={`modal ${show ? "display-block" : "display-none"} ${
        className ? className : ""
      }`}
      onClick={() => isCloseByClickOutside && handleClose()}
    >
      <section
        className="modal-main"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
        {hasAction && <button onClick={handleClose}>close</button>}
      </section>
    </div>
  );
};

export default Modal;
