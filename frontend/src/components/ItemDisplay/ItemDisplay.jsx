import React, { useContext } from "react";
import "./ItemDisplay.css";
import { StoreContext } from "../../context/StoreContext";

const ItemDisplay = ({category}) => {
  const { item_list } = useContext(StoreContext);
  return (
    <div className="item-display" id="item-display">
      <h2>Best Products For You!</h2>
    </div>
  );
};

export default ItemDisplay;
