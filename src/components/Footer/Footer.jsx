import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer.svg";
import user_icon from "../../assets/user_icon.svg";
import theme_pattern from "../../assets/theme_pattern.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            Frontend Dev <br />
            MN, USA.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              autoComplete="email"
            />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-botton-left">
          © 2024 Jagan P. <br />
          All Rights Reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services.</p>
          <p>Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
