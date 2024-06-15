import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Navbar Logo Setting */}
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        {/* Navbar Menu Setting */}
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile</li>
        <li>Contact</li>
      </ul>
      {/* Navbar Right Setting */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        {/* Sign In Button */}
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
