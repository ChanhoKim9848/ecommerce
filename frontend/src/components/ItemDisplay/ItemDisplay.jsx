import React, { useContext } from "react";
import "./ItemDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import Item from "../Item/Item";

// Item Display Function
const ItemDisplay = ({ category }) => {
  const { item_list } = useContext(StoreContext);
  return (
    <div className="item-display" id="item-display">
      <h2>Shopping! </h2>
      <div className="item-display-list">
        {item_list.map((item, index) => {

          // item sort by category function
          if(category==="All" || category===item.category){

          return (
            <Item
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}  
              image={item.image}
            />
          );
          }

        })}
      </div>
    </div>
  );
};

export default ItemDisplay;
