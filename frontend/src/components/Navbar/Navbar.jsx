import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {


  const [menu,setMenu] = useState("home")





  return (
    <div className="navbar">
      {/* Navbar Logo Setting */}
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        {/* Navbar Menu Setting */}
        {/* when a menu is clicked and active, the menu shows its underline */}
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("mobile")} className={menu==="mobile"?"active":""}>Mobile</li>
        <li onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>Contact</li>
      </ul>
      {/* Navbar Right Setting */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
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
