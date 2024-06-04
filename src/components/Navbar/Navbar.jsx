import React, { useState } from "react";
import "./Navbar.css";
import Jagan from "../../assets/Jagan.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Connect from "../Connect/Connect";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const onNavClick = (name) => () => {
    setMenu(name);
  };

  const menuItems = [
    { name: "home", label: "Home" },
    { name: "about", label: "About" },
    { name: "services", label: "Services" },
    { name: "work", label: "My Work" },
    { name: "contact", label: "Contact" },
  ];

  return (
    <div className="navbar">
      <img src={Jagan} alt="" />
      <ul className="nav-menu">
        {menuItems.map(({ name, label }) => {
          return (
            <li key={name}>
              <AnchorLink className="anchor-link" offset={20} href={`#${name}`}>
                <a onClick={onNavClick(name)}>{label}</a>
              </AnchorLink>
              {menu == name ? <img src={underline} alt="" /> : <></>}
            </li>
          );
        })}

        {/* <li><p onClick={onNavClick("home")}>Home</p>{menu=="home"?<img src={underline} alt=''/>:<></>}</li>
            <li><p onClick={OnNavClick("about")}>About Me</p>{menu=="about"?<img src={underline} alt=''/>:<></>}</li>
            <li><p onClick={()=>setMenu("services")}>Services</p>{menu=="services"?<img src={underline} alt=''/>:<></>}</li>
            <li><p onClick={()=>setMenu("work")}>Portfolio</p>{menu=="work"?<img src={underline} alt=''/>:<></>}</li>
            <li><p onClick={()=>setMenu("contact")}>Contact</p>{menu=="contact"?<img src={underline} alt=''/>:<></>}</li> */}
      </ul>
      <Connect />
    </div>
  );
};
export default Navbar;
