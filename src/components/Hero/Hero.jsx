import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Connect from "../Connect/Connect";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        Hello <span>I am Jagan,</span>
        <br />
        Welcome to my page
      </h1>
      <p>
        I'm a developer based in Minnesota, USA with 10 years of experience
        working in multiple companies like Anthem, BCBSMN, Anderson Windows and
        Winnebago.
      </p>
      <div className="hero-action">
        <Connect />
        <div className="hero-resume">Resume</div>
      </div>
    </div>
  );
};

export default Hero;
