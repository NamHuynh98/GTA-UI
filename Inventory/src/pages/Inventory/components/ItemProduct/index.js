import React from "react";
import "./itemProduct.scss";

const ItemProduct = ({ dataProduct }) => {
  return (
    <div className="item-product-container">
      {dataProduct && (
        <>
          <div className="quantity">{dataProduct.quantity}</div>
          <div className="weight">{dataProduct.weight}</div>
          <img src={dataProduct.image} alt="thumbnail" />
          <div className="name">{dataProduct.name}</div>
          <div className={`level-${dataProduct.level}`}></div>
        </>
      )}
    </div>
  );
};

export default ItemProduct;
