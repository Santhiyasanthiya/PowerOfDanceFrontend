import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="pd_head_header fixed-top">
      <nav className="pd_head_navbar container">
        {/* Logo */}
       {/* Logo */}
<div className="pd_head_logo">
  <Link to="/">
    <img
      src="https://res.cloudinary.com/dk50cmtps/image/upload/v1758199428/pd-logo-design_853558-129-removebg-preview_sdmpyy.png"
      alt="Logo"
      className="pd_head_logo_img"
    />
  </Link>
</div>


        {/* Hamburger Icon (visible only on mobile) */}
        <div className="pd_head_toggle d-md-none" onClick={toggleMenu}>
          <div className={`pd_head_bar ${isOpen ? "open" : ""}`}></div>
          <div className={`pd_head_bar ${isOpen ? "open" : ""}`}></div>
          <div className={`pd_head_bar ${isOpen ? "open" : ""}`}></div>
        </div>

        {/* Menu Links */}
        <ul
          className={`pd_head_menu d-md-flex align-items-center list-unstyled m-0 ${
            isOpen ? "pd_head_menu_open" : ""
          }`}
        >
          <li className="pd_head_item">
            <Link to="/about" className="pd_head_link">
              About
            </Link>
          </li>
          <li className="pd_head_item">
            <Link to="/event" className="pd_head_link">
              Event
            </Link>
          </li>
          <li className="pd_head_item">
            <Link to="/styles" className="pd_head_link">
              Styles
            </Link>
          </li>
          <li className="pd_head_item">
            <Link to="/contact" className="pd_head_link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
