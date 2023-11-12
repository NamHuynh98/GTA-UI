import React from "react";
import "./itemDnDCustom.scss";

export const ItemDnDCustom = ({
  index,
  allowDrag = true,
  allowDrop = true,
  imgItem = null,
  isMouseDown = false,
  onDropItem = () => {},
  onDragItem = () => {},
  setIsMouseDown = () => {},
  children,
}) => {
  const onMouseDown = (event) => {
    if (!isMouseDown && allowDrag) {
      setIsMouseDown(true);
      event.target.id = "item-drag-id";
      event.target.classList.add("hidden-item");
      const img = document.createElement("img");
      img.src = imgItem;
      img.id = "img-placeholder";
      img.style.position = "fixed";
      img.style.width = "70px";
      img.style.height = "70px";
      document.body.appendChild(img);
      onDragItem();
    }
  };

  const onMouseOver = (event) => {
    if (isMouseDown) {
      event.target.classList.add("hover-item");
    }
  };

  const onMouseLeave = (event) => {
    if (isMouseDown) {
      event.target.classList.remove("hover-item");
    }
  };

  const onMouseUp = (event) => {
    if (isMouseDown) {
      allowDrop && onDropItem(index);
      event.target.classList.remove("hover-item");
      const nodes = document.querySelectorAll("#item-drag-id");
      nodes.forEach((node) => node.classList.remove("hidden-item"));
    }
  };

  return (
    <div
      draggable={false}
      onMouseDown={onMouseDown}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
    >
      {children}
    </div>
  );
};
