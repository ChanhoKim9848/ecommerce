import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {


  return (
    <div className="explore-menu" id="explore-menu">
      {/* ExploreMenu Big Text */}
      <h1>Explore our code store</h1>
      {/* ExploreMenu Description */}
      <p className="explore-menu-test">
        purchase and sale the best codes from the best programmers in the world!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return ( 

            // click category menu and get items functions
            // if prev state is same as the item.menu_name, in that case we will set this state "All"
            // if it is not same, we will set this state with our item.menu_name

            // when a category is clicked, we get all items in the category 
            // when the category is clicked, it is active and different design
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
