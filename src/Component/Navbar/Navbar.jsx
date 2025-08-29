import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";
import logo from "../../assets/edusity_assets/logo.png";
import menu_icon from "../../assets/edusity_assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobilemenu, setmobilemenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const togglemenu = () => {
    setmobilemenu(!mobilemenu);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="Logo" />
      <ul className={mobilemenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/team">Team Members</Link>
        </li>
        <li>
          <Link to="/contact" className="btn">Contact Us</Link>
        </li>
      </ul>
      <img src={menu_icon} alt="Menu Icon" className="menu-icon" onClick={togglemenu} />
    </nav>
  );
};

export default Navbar;