import React, { useEffect } from "react";
import "./index.scss";
import { ReactComponent as HamburgerIcon } from "../../assets/images/hamburger.svg";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

function Navbar() {
  // useEffect(() => {
  //   console.log("Hamburger--", HamburgerIcon);
  // }, []);
  return (
    <header className="header">
      <div className="container nav-container">
        <nav className="nav">
          <span className="nav--logo__container">
            <Logo className="nav--logo" />
          </span>
          <ul className="nav--links">
            <li className="nav--link-item">
              <a className="current" href="#home">
                Home
              </a>
            </li>
            <li className="nav--link-item">
              <a href="#about">About</a>
            </li>
            <li className="nav--link-item">
              <a href="#works">Works</a>
            </li>
            <li className="nav--link-item">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
          <span className="nav--mobile-menu-toggle__container">
            <HamburgerIcon className="nav--mobile-menu-toggle" />
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
