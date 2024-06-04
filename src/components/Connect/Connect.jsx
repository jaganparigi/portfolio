import React from "react";
import "./Connect.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Connect = () => {
  return (
    <div>
      <AnchorLink className="anchor_link" offset={50} href="#contact">
        <div className="connect">Connect</div>
      </AnchorLink>
    </div>
  );
};

export default Connect;
