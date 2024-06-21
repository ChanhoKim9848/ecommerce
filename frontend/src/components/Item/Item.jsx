import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Item.css";
const Item = ({ id, name, price, description, image }) => {

  const [itemCount,setItemCount] = useState(0);



  return (
    <div className="item">
      <div className="item-img-container">
        <img className="item-image" src={image} alt="" />
        {
          // + and - button to add cart
          !itemCount
          ?<img className="add" onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt=""/>
          :<div className="item-counter">
              <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
              <p>{itemCount}</p>
              <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" /> 
          </div>
        }
      </div>
      <div className="item-info">
        <div className="item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="item-desc">{description}</p>
        <p className="item-price">£{price}</p>
      </div>
    </div>
  );
};

export default Item;
