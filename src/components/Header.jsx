import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, redirect } from "react-router-dom";
import logo from "../assets/logo.png";

const mainNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Project",
    path: "/project",
  },
  {
    display: "About Me",
    path: "/about",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleItemClick = (path) => {
    showNavbar();
    redirect(path);
  };

  return (
    <header>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Here is Logo" />
          </Link>
        </div>
        <nav ref={navRef}>
          {mainNav.map((item, index) => {
            return (
              <div
                key={index}
                className="header_menu_item"
                onClick={() => handleItemClick(item.path)}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            );
          })}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Header;
