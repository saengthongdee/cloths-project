import React, { useState } from "react";
import "./style.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="logo">My logo</div>

        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="" className="visit">Visit us</a></li>
        </ul>

        <GiHamburgerMenu className="icon" onClick={() => setMenuOpen(!menuOpen)} />

        <div className="menu-mobile" style={{ display: menuOpen ? "block" : "none" }}>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="" className="visit">Visit us</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
