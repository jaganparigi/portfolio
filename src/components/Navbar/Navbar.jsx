import React, { useRef, useState } from "react";
import "./Navbar.css";
import Jagan from "../../assets/Jagan.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Connect from "../Connect/Connect";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const onNavClick = (name) => () => {
    setMenu(name);
  };

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
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
      <img className="jagan" src={Jagan} alt="" />
      <img src={menu_open} onClick={openMenu} className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        {menuItems.map(({ name, label }) => {
          return (
            <li key={name}>
              <AnchorLink className="anchor-link" offset={20} href={`#${name}`}>
                <div onClick={onNavClick(name)}>{label}</div>
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
      <div className="nav-con">
        <Connect />
      </div>
    </div>
  );
};
export default Navbar;
