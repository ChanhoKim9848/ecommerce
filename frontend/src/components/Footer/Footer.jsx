import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* Footer Logo here */}
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
            accusamus, omnis itaque nemo tempora optio, fuga beatae in, vitae
            quia obcaecati eaque repellat minus. Maiores placeat voluptatibus
            laboriosam perspiciatis nisi.
          </p>

          {/* Social Media icons */}
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          {/* Navigation Buttons */}
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Products</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* Footer Contact */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+44(0)74 0712 9187</li>
            <li>chanhokim9848@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      {/* CopyRight Section */}
      <p className="footer-copyright">
        2024 Copyright - CK &nbsp;&nbsp; | &nbsp; &nbsp; All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
