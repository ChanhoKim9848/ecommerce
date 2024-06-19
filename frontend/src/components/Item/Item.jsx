import React from "react";
import './Item.css'
const Item = ({ id, name, price, description, image }) => {
  return (
    <div className="product-item">
      <div className="item-img-container">
        <img className="item-image" src={image} alt="" />
      </div>
      <div className="item-info">
        <p>{name}</p>
      </div>
      <p className="item-desc">{description}</p>
      <p className="item-price">${price}</p>
    </div>
  );
};

export default Item
