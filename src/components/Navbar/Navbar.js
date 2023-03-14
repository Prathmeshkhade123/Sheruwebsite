import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />

          <ul className="menu-items">
            <li>
              <a href="#">Sample</a>
            </li>
            <li>
              <a href="#feature">Feature</a>
            </li>
            <li>
              <a href="#layout">Layouts</a>
            </li>
            <li>
              <a href="#ourshop">Our Shop</a>
            </li>
            <li>
              <a href="#band">Buy Theme</a>
            </li>
            <li>
              <a href="#">&#128269;</a>
            </li>
          </ul>
          <h1 className="logo">&#8721;</h1>
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
